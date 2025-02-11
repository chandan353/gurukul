// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Card } from "@/components/ui/card";
// import { AlertCircle, CheckCircle2 } from "lucide-react";

// export function ContactForm() {
// 	const [formData, setFormData] = useState({
// 		name: "",
// 		email: "",
// 		phone: "",
// 		message: "",
// 	});
// 	const [errors, setErrors] = useState<Record<string, string>>({});
// 	const [isSubmitting, setIsSubmitting] = useState(false);
// 	const [submitStatus, setSubmitStatus] = useState<{
// 		type: "success" | "error";
// 		message: string;
// 	} | null>(null);

// 	const validateForm = () => {
// 		const newErrors: Record<string, string> = {};

// 		if (!formData.name || formData.name.length < 2) {
// 			newErrors.name = "Name must be at least 2 characters";
// 		}

// 		if (
// 			!formData.email ||
// 			!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
// 		) {
// 			newErrors.email = "Invalid email address";
// 		}

// 		if (!formData.phone || formData.phone.length < 10) {
// 			newErrors.phone = "Phone number must be at least 10 digits";
// 		}

// 		if (!formData.message || formData.message.length < 10) {
// 			newErrors.message = "Message must be at least 10 characters";
// 		}

// 		setErrors(newErrors);
// 		return Object.keys(newErrors).length === 0;
// 	};

// 	const handleSubmit = async (e: React.FormEvent) => {
// 		e.preventDefault();
// 		setSubmitStatus(null);

// 		if (!validateForm()) {
// 			return;
// 		}

// 		try {
// 			setIsSubmitting(true);
// 			const response = await fetch("/api/contact", {
// 				method: "POST",
// 				headers: { "Content-Type": "application/json" },
// 				body: JSON.stringify(formData),
// 			});

// 			const data = await response.json();

// 			if (!response.ok) {
// 				if (response.status === 429) {
// 					const resetTime = new Date(data.reset).toLocaleString();
// 					throw new Error(
// 						`Too many requests. Please try again after ${resetTime}`
// 					);
// 				}
// 				throw new Error(data.error || "Failed to send message");
// 			}

// 			setSubmitStatus({
// 				type: "success",
// 				message:
// 					data.message ||
// 					"Message sent successfully! We'll get back to you soon.",
// 			});
// 			setFormData({ name: "", email: "", phone: "", message: "" });
// 		} catch (error) {
// 			setSubmitStatus({
// 				type: "error",
// 				message:
// 					error instanceof Error
// 						? error.message
// 						: "Something went wrong",
// 			});
// 		} finally {
// 			setIsSubmitting(false);
// 		}
// 	};

// 	const handleChange = (
// 		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// 	) => {
// 		const { name, value } = e.target;
// 		setFormData((prev) => ({ ...prev, [name]: value }));
// 		if (errors[name]) {
// 			setErrors((prev) => ({ ...prev, [name]: "" }));
// 		}
// 	};

// 	return (
// 		<form
// 			onSubmit={handleSubmit}
// 			className="space-y-6 rounded-lg border border-yellow-500 p-6"
// 		>
// 			{submitStatus && (
// 				<Card
// 					className={`p-4 flex items-start gap-3 ${
// 						submitStatus.type === "success"
// 							? "bg-green-50 text-green-800 border-green-200"
// 							: "bg-red-50 text-red-800 border-red-200"
// 					}`}
// 				>
// 					{submitStatus.type === "success" ? (
// 						<CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
// 					) : (
// 						<AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
// 					)}
// 					<p className="text-sm">{submitStatus.message}</p>
// 				</Card>
// 			)}

// 			<div className="space-y-2">
// 				<Label htmlFor="name">Name</Label>
// 				<Input
// 					id="name"
// 					name="name"
// 					value={formData.name}
// 					onChange={handleChange}
// 					className={errors.name ? "border-red-500" : ""}
// 				/>
// 				{errors.name && (
// 					<p className="text-sm text-red-600">{errors.name}</p>
// 				)}
// 			</div>

// 			<div className="space-y-2">
// 				<Label htmlFor="email">Email</Label>
// 				<Input
// 					type="email"
// 					id="email"
// 					name="email"
// 					value={formData.email}
// 					onChange={handleChange}
// 					className={errors.email ? "border-red-500" : ""}
// 				/>
// 				{errors.email && (
// 					<p className="text-sm text-red-600">{errors.email}</p>
// 				)}
// 			</div>

// 			<div className="space-y-2">
// 				<Label htmlFor="phone">Phone</Label>
// 				<Input
// 					type="tel"
// 					id="phone"
// 					name="phone"
// 					value={formData.phone}
// 					onChange={handleChange}
// 					className={errors.phone ? "border-red-500" : ""}
// 				/>
// 				{errors.phone && (
// 					<p className="text-sm text-red-600">{errors.phone}</p>
// 				)}
// 			</div>

// 			<div className="space-y-2">
// 				<Label htmlFor="message">Message</Label>
// 				<Textarea
// 					id="message"
// 					name="message"
// 					value={formData.message}
// 					onChange={handleChange}
// 					rows={4}
// 					className={errors.message ? "border-red-500" : ""}
// 				/>
// 				{errors.message && (
// 					<p className="text-sm text-red-600">{errors.message}</p>
// 				)}
// 			</div>

// 			<Button type="submit" className="w-full" disabled={isSubmitting}>
// 				{isSubmitting ? "Sending..." : "Send Message"}
// 			</Button>
// 		</form>
// 	);
// }

import React from "react";

export function GoogleFormEmbed() {
	return (
		<div className="w-full h-screen">
			<iframe
				src="https://docs.google.com/forms/d/e/1FAIpQLSfRFfYUL0icZE13rnYVkl0lzLy4iWj5MeASBUjXKR_tWq2gxQ/viewform?embedded=true" // replace with your form's embed URL
				width="100%"
				height="100%"
				frameBorder="0"
				marginHeight={0}
				marginWidth={0}
			>
				Loading…
			</iframe>
		</div>
	);
}
