import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiting
const rateLimits = new Map<string, { count: number; reset: number }>();

const RATE_LIMIT = {
	MAX_REQUESTS: 3,
	WINDOW_MS: 24 * 60 * 60 * 1000, // 24 hours
};

function isValidEmail(email: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function checkRateLimit(ip: string): { allowed: boolean; reset?: number } {
	const now = Date.now();
	const userLimit = rateLimits.get(ip);

	// Clean up expired entries
	if (userLimit && now > userLimit.reset) {
		rateLimits.delete(ip);
	}

	if (!userLimit) {
		rateLimits.set(ip, {
			count: 1,
			reset: now + RATE_LIMIT.WINDOW_MS,
		});
		return { allowed: true };
	}

	if (userLimit.count >= RATE_LIMIT.MAX_REQUESTS) {
		return { allowed: false, reset: userLimit.reset };
	}

	userLimit.count += 1;
	return { allowed: true };
}

// Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST, // e.g., "smtp.gmail.com"
	port: Number(process.env.SMTP_PORT), // e.g., 465 or 587
	secure: process.env.SMTP_SECURE === "true", // true for port 465, false for 587
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
});

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { name, email, phone, message } = body;

		// Basic validation
		if (!name || name.length < 2) {
			return NextResponse.json(
				{ error: "Name must be at least 2 characters" },
				{ status: 400 }
			);
		}

		if (!email || !isValidEmail(email)) {
			return NextResponse.json(
				{ error: "Invalid email address" },
				{ status: 400 }
			);
		}

		if (!phone || phone.length < 10) {
			return NextResponse.json(
				{ error: "Phone number must be at least 10 digits" },
				{ status: 400 }
			);
		}

		if (!message || message.length < 10) {
			return NextResponse.json(
				{ error: "Message must be at least 10 characters" },
				{ status: 400 }
			);
		}

		// Rate limit check
		const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";
		const rateLimit = checkRateLimit(ip);

		if (!rateLimit.allowed) {
			return NextResponse.json(
				{
					error: "Too many requests",
					reset: rateLimit.reset,
				},
				{ status: 429 }
			);
		}

		// Prepare email options using Nodemailer
		const mailOptions = {
			from: `"${name}" <${email}>`, // sender address
			to: process.env.EMAIL_RECEIVER, // recipient address (your email)
			subject: `New Contact Message from ${name}`, // Subject line
			text: `From: ${name} (${email}, ${phone})\n\n${message}`, // plain text body
			html: `<p>From: <strong>${name}</strong> (${email}, ${phone})</p><p>${message}</p>`, // html body
		};

		// Send email using Nodemailer
		const info = await transporter.sendMail(mailOptions);

		if (!info) {
			throw new Error("Failed to send email");
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Contact form error:", error);
		return NextResponse.json(
			{ error: "Failed to send message" },
			{ status: 500 }
		);
	}
}
