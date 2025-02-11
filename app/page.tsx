"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
	Trophy,
	Users,
	BookOpen,
	Laptop,
	Code,
	Brain,
	Play,
} from "lucide-react";
import { motion } from "framer-motion";
import school from "./assets/image/school1.jpg";
import lead_reel from "./assets/image/reel/lead_reel.jpg";
import annual_day from "./assets/image/gallery/annual_day.jpg";
import science_exhibition2 from "./assets/image/gallery/science_exhibiton2.jpg";
import annual_day2 from "./assets/image/gallery/annual_day2.jpg";
import sports_day2 from "./assets/image/gallery/sports_day2.jpg";
import student_conference from "./assets/image/gallery/student_conference2.jpg";
import science_city from "./assets/image/gallery/science_city.jpg";
import volcano_model from "./assets/image/reel/volcano_model.jpg";
import india_map from "./assets/image/reel/india_map.jpg";
import christmas from "./assets/image/reel/christmas.jpg";
import krishna_janamastmi from "./assets/image/reel/krishna_janamastmi.jpg";
import viral_students from "./assets/image/reel/viral_students.jpg";
import Slider from "react-slick";
import { GoogleFormEmbed } from "@/components/contact-form";

export default function Home() {
	const gallery = [
		{
			title: "Annual Day",
			image: annual_day,
		},
		{
			title: "Science Exhibition",
			image: science_exhibition2,
		},
		{
			title: "Annual Day",
			image: annual_day2,
		},
		{
			title: "Sports Day",
			image: sports_day2,
		},
		{
			title: "Student Led Conference",
			image: student_conference,
		},
		{
			title: "Science City Tour",
			image: science_city,
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
			title: "Learning in a funny way",
			description: "Students of UKG learning body parts",
			video: "https://www.instagram.com/leadschoolindia/reel/DCZGG60O1R5/",
			thumbnail: lead_reel,
		},
		{
			title: "Science Exhibition",
			description: "Young innovators presenting their volcano model",
			video: "https://www.instagram.com/gurukul_academy_by_lead/reel/DEfArZTyFnM/",
			thumbnail: volcano_model,
		},
		{
			title: "Republic Day Celebration",
			description: "Students making map of India",
			video: "https://www.instagram.com/gurukul_academy_by_lead/reel/DFSbSGzylgT/",
			thumbnail: india_map,
		},
		{
			title: "Viral Kids of Gurukul Academy",
			description: "Creative expressions by our talented students",
			video: "https://www.instagram.com/gurukul_academy_by_lead/reel/DCvbb09SpUd/",
			thumbnail: viral_students,
		},
		{
			title: "Christmas Celebration",
			description: "Christmas celebration in Gurukul Academy",
			video: "https://www.instagram.com/gurukul_academy_by_lead/reel/DFKVm10yXHV/",
			thumbnail: christmas,
		},
		{
			title: "Krishna Janamshatmi",
			description: "Students wearing traditional attire on Janamastmi",
			video: "https://www.instagram.com/gurukul_academy_by_lead/reel/DFKUh7LyHQd/",
			thumbnail: krishna_janamastmi,
		},
	];

	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2, // when width < 1024px, show 2 slides
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1, // when width < 768px, show 1 slide
				},
			},
		],
	};

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
					<Slider {...sliderSettings}>
						{reels.map((reel, index) => (
							<div key={index} className="px-2">
								<a
									href={reel.video}
									target="_blank"
									rel="noopener noreferrer"
									className="cursor-pointer group block"
								>
									<div className="cursor-pointer group">
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
									</div>
								</a>
							</div>
						))}
					</Slider>
				</div>
			</section>

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

			<section className="py-20 bg-secondary/50">
				<div className="px-4 md:px-6 lg:px-8 max-w-3xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12">
						Contact Us
					</h2>
					<Card className="p-6">
						<CardContent>
							<GoogleFormEmbed />
						</CardContent>
					</Card>
				</div>
			</section>
		</>
	);
}
