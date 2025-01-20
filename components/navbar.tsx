"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About Us" },
		{ href: "/gallery", label: "Gallery" },
		// { href: '/academics', label: 'Academics' },
		// { href: '/admissions', label: 'Admissions' },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<nav
			className={`fixed w-full z-50 transition-all duration-300 ${
				isScrolled
					? "bg-white shadow-md"
					: "bg-white/90 backdrop-blur-sm"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<Link href="/" className="flex items-center space-x-2">
						<GraduationCap className="h-8 w-8 text-primary animate-bounce-in" />
						<span className="font-bold text-xl">
							Gurukul Academy
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-4">
						{navLinks.map((link, index) => (
							<Link
								key={link.href}
								href={link.href}
								className="text-gray-700 hover:text-primary transition-colors hover-scale"
								style={{ animationDelay: `${index * 100}ms` }}
							>
								{link.label}
							</Link>
						))}
						{/* <Button className="animate-bounce-in animation-delay-500">
							Apply Now
						</Button> */}
					</div>

					{/* Mobile Navigation Button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-gray-700 hover:text-primary"
						>
							{isOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation Menu */}
				{isOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg">
							{navLinks.map((link, index) => (
								<Link
									key={link.href}
									href={link.href}
									className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors animate-slide-right"
									style={{
										animationDelay: `${index * 50}ms`,
									}}
									onClick={() => setIsOpen(false)}
								>
									{link.label}
								</Link>
							))}
							<div className="px-3 py-2">
								<Button className="w-full animate-bounce-in">
									Apply Now
								</Button>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
