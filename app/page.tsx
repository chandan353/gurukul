"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	Trophy,
	Users,
	BookOpen,
	Laptop,
	Code,
	Brain,
	ChevronRight,
	ChevronLeft,
	Play,
	X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import school from "./assets/image/school.jpg";
import { useState, useEffect, useCallback } from "react";
import { it } from "node:test";

export default function Home() {
	const gallery = [
		{
			title: "Art & Craft",
			image: "https://images.unsplash.com/photo-1602145461313-26c587cc0ca9?auto=format&fit=crop&q=80&w=800",
		},
		{
			title: "Yoga Classes",
			image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=800",
		},
		{
			title: "Music Room",
			image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=800",
		},
		{
			title: "Computer Lab",
			image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=800",
		},
		{
			title: "Library",
			image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800",
		},
		{
			title: "Sports Ground",
			image: "https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?auto=format&fit=crop&q=80&w=800",
		},
	];

	const features = [
		{
			icon: <BookOpen className="h-6 w-6" />,
			title: "Smart NEP-2020 Curriculum",
			description: "Aligned with National Education Policy 2020 and NCF",
		},
		{
			icon: <Laptop className="h-6 w-6" />,
			title: "Smart Classrooms",
			description: "Only school in the region with all smart classes",
		},
		{
			icon: <Code className="h-6 w-6" />,
			title: "Coding Classes",
			description: "Coding education from class 3rd onwards",
		},
		{
			icon: <Brain className="h-6 w-6" />,
			title: "AI-Enhanced Learning",
			description: "Intelligent use of AI in teaching-learning process",
		},
		{
			icon: <Users className="h-6 w-6" />,
			title: "One-to-One Mentorship",
			description: "Personalized attention for every student",
		},
		{
			icon: <BookOpen className="h-6 w-6" />,
			title: "Curriculum by Lead School India",
			description:
				"Lead School is a platform which provides school resources for better understanding",
		},
	];

	const reels = [
		{
			title: "Annual Day Celebration",
			description:
				"Students showcasing their talents through dance and music",
			video: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200",
			thumbnail:
				"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800",
		},
		{
			title: "Science Exhibition",
			description: "Young innovators presenting their projects",
			video: "https://images.unsplash.com/photo-1530538987395-032d1800fdd0?auto=format&fit=crop&q=80&w=1200",
			thumbnail:
				"https://images.unsplash.com/photo-1530538987395-032d1800fdd0?auto=format&fit=crop&q=80&w=800",
		},
		{
			title: "Sports Meet",
			description: "Students competing in various athletic events",
			video: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=1200",
			thumbnail:
				"https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=800",
		},
		{
			title: "Art Exhibition",
			description: "Creative expressions by our talented students",
			video: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=1200",
			thumbnail:
				"https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800",
		},
		{
			title: "Music Concert",
			description: "Annual musical performance by students",
			video: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=1200",
			thumbnail:
				"https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=800",
		},
		{
			title: "Yoga Day",
			description: "Students practicing yoga for mind and body wellness",
			video: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=1200",
			thumbnail:
				"https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=800",
		},
	];

	const [selectedReel, setSelectedReel] = useState<number | null>(null);
	const [currentSlide, setCurrentSlide] = useState(0);

	const [itemsPerPage, setItemsPerPage] = useState(4);

	useEffect(() => {
		function computeItemsPerPage() {
			if (window.innerWidth < 768) return 1;
			if (window.innerWidth < 1024) return 2;
			return 4;
		}

		function handleResize() {
			setItemsPerPage(computeItemsPerPage());
		}
		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	console.log(itemsPerPage, "item");

	const totalSlides = reels.length - itemsPerPage + 1;

	// Move forward 1 item
	const nextSlide = useCallback(() => {
		setCurrentSlide((prev) => (prev + 1) % totalSlides);
	}, [totalSlides]);

	// Move backward 1 item
	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
	};
	// Each item’s width in %
	const itemWidthPercent = 100 / itemsPerPage;
	// Overall container width in %
	const containerWidthPercent = reels.length * itemWidthPercent;

	useEffect(() => {
		const timer = setInterval(nextSlide, 5000);
		return () => clearInterval(timer);
	}, [nextSlide]);

	return (
		<>
			{/* Hero Section */}
			<section className="relative h-screen">
				<Image
					src={school}
					alt="Hero"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/50" />
				<div className="relative h-full flex items-center justify-center text-center text-white px-4">
					<div className="max-w-3xl mx-auto">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
							Welcome to Gurukul Academy
						</h1>
						<p className="text-xl md:text-2xl mb-8 animate-fade-up animation-delay-200">
							Nurturing minds, shaping futures through excellence
							in education
						</p>
						<Button
							size="lg"
							className="animate-fade-up animation-delay-300"
						>
							Learn More <ArrowRight className="ml-2" />
						</Button>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<Card className="p-6 text-center hover:shadow-lg transition-shadow">
							<Trophy className="h-12 w-12 mx-auto mb-4 text-primary" />
							<h3 className="text-2xl font-bold mb-2">
								3+ Years
							</h3>
							<p className="text-gray-600">of Excellence</p>
						</Card>
						<Card className="p-6 text-center hover:shadow-lg transition-shadow">
							<Users className="h-12 w-12 mx-auto mb-4 text-primary" />
							<h3 className="text-2xl font-bold mb-2">500+</h3>
							<p className="text-gray-600">Students</p>
						</Card>
						<Card className="p-6 text-center hover:shadow-lg transition-shadow">
							<BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
							<h3 className="text-2xl font-bold mb-2">50+</h3>
							<p className="text-gray-600">Expert Teachers</p>
						</Card>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">
					Our Features
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							<Card className="h-full border-primary/20 hover:border-primary/50 transition-colors">
								<CardContent className="p-6 space-y-4">
									<div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
										{feature.icon}
									</div>
									<h3 className="text-xl font-semibold">
										{feature.title}
									</h3>
									<p className="text-muted-foreground">
										{feature.description}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</section>

			{/* Reels Section */}
			<section className="py-20 bg-secondary">
				<div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12">
						School Life
					</h2>
					<div className="relative">
						<div className="overflow-hidden">
							<motion.div
								className="flex transition-transform duration-500 ease-out"
								style={{
									// transform: `translateX(-${
									// 	currentSlide * (100 / itemsPerPage)
									// }%)`,
									transform: `translateX(-${
										currentSlide * (100 / itemsPerPage)
									}%)`,
									width: `${
										(reels.length / itemsPerPage) * 100
									}%`,
								}}
							>
								{reels.map((reel, index) => (
									<div
										key={index}
										className="w-full sm:w-1/2 lg:w-1/4 px-2"
									>
										<motion.div
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.5 }}
											viewport={{ once: true }}
											onClick={() =>
												setSelectedReel(index)
											}
											className="cursor-pointer group"
										>
											<Card className="overflow-hidden border-primary/20 hover:border-primary/50 transition-colors">
												<div className="relative aspect-[9/16]">
													<Image
														src={reel.thumbnail}
														alt={reel.title}
														fill
														className="object-cover"
													/>
													<div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
													<div className="absolute inset-0 flex items-center justify-center">
														<div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
															<Play className="h-8 w-8 text-white" />
														</div>
													</div>
												</div>
												<CardContent className="p-4">
													<h3 className="font-semibold text-lg">
														{reel.title}
													</h3>
													<p className="text-muted-foreground text-sm">
														{reel.description}
													</p>
												</CardContent>
											</Card>
										</motion.div>
									</div>
								))}
							</motion.div>
						</div>

						{/* Navigation Arrows */}
						<button
							onClick={prevSlide}
							className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 bg-primary/90 text-white p-2 rounded-full hover:bg-primary transition-colors"
							aria-label="Previous slide"
						>
							<ChevronLeft className="h-6 w-6" />
						</button>
						<button
							onClick={nextSlide}
							className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 bg-primary/90 text-white p-2 rounded-full hover:bg-primary transition-colors"
							aria-label="Next slide"
						>
							<ChevronRight className="h-6 w-6" />
						</button>

						{/* Navigation Dots */}
						<div className="flex justify-center mt-6 space-x-2">
							{Array.from({ length: totalSlides }).map(
								(_, index) => (
									<button
										key={index}
										onClick={() => setCurrentSlide(index)}
										className={`h-2 rounded-full transition-all ${
											currentSlide === index
												? "w-6 bg-primary"
												: "w-2 bg-primary/30"
										}`}
										aria-label={`Go to slide ${index + 1}`}
									/>
								)
							)}
						</div>
					</div>
				</div>
			</section>

			{/* Full Screen Reel */}
			<AnimatePresence>
				{selectedReel !== null && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black z-50 flex items-center justify-center"
					>
						<button
							onClick={() => setSelectedReel(null)}
							className="absolute top-4 right-4 text-white hover:text-white/80 z-10"
						>
							<X className="h-8 w-8" />
						</button>
						<div className="relative w-[360px] h-[640px]">
							<Image
								src={reels[selectedReel].video}
								alt={reels[selectedReel].title}
								fill
								className="object-cover rounded-lg"
							/>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Gallery Section */}
			<section className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">
					School Gallery
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{gallery.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="group relative aspect-square rounded-xl overflow-hidden"
						>
							<Image
								src={item.image}
								alt={item.title}
								fill
								className="object-cover transition-transform group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
								<h3 className="font-semibold text-lg">
									{item.title}
								</h3>
							</div>
						</motion.div>
					))}
				</div>
			</section>
		</>
	);
}
