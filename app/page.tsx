import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	Calendar as CalendarIcon,
	Trophy,
	Users,
	BookOpen,
} from "lucide-react";
import school from "./assets/image/school.jpg";

export default function Home() {
	const events = [
		{
			title: "Annual Sports Day",
			date: "March 15, 2024",
			image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
		},
		{
			title: "Science Exhibition",
			date: "April 5, 2024",
			image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d",
		},
		{
			title: "Cultural Festival",
			date: "May 20, 2024",
			image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
		},
	];

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

			{/* Events Section */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold mb-8 text-center">
						Upcoming Events
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{events.map((event, index) => (
							<Card
								key={index}
								className="overflow-hidden hover:shadow-lg transition-shadow"
							>
								<div className="relative h-48">
									<Image
										src={event.image}
										alt={event.title}
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-4">
									<h3 className="text-xl font-semibold mb-2">
										{event.title}
									</h3>
									<p className="text-gray-600 flex items-center">
										<CalendarIcon className="h-4 w-4 mr-2" />
										{event.date}
									</p>
								</div>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Calendar Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold mb-8 text-center">
						Academic Calendar
					</h2>
					<div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
						<Calendar mode="single" className="rounded-md border" />
					</div>
				</div>
			</section>
		</>
	);
}
