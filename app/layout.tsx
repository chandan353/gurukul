import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Gurukul Academy Balrampur",
	description: "Nurturing minds, shaping futures - Gurukul Academy Balrampur",
	openGraph: {
		title: "Gurukul Academy Balrampur",
		description:
			"Nurturing minds, shaping futures - Gurukul Academy  Balrampur",
		url: "https://gurukulacademybalrampur.in",
		siteName: "Gurukul Academy",
		images: [
			{
				url: "https://gurukulacademybalrampur.in/_next/static/media/school1.3f9fc10a.jpg",
				width: 800,
				height: 600,
				alt: "Gurukul Academy",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={inter.className}>
				<Navbar />
				<main className="min-h-screen">{children}</main>
				<Footer />
				<Toaster />
			</body>
		</html>
	);
}
