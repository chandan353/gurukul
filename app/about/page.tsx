import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
	const teachers = [
		{
			name: "Gaurav Vishwakarma",
			position: "Principal",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
			subject: "Leadership",
		},
		{
			name: "Mr. David Chen",
			position: "Vice Principal",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
			subject: "Mathematics",
		},
		{
			name: "Ms. Emily Brown",
			position: "Senior Teacher",
			image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
			subject: "English",
		},
		// Add more teachers as needed
	];

	return (
		<div className="pt-16">
			{/* Mission Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div>
							<h1 className="text-4xl font-bold mb-6">
								Our Mission
							</h1>
							<p className="text-lg text-gray-600 mb-4">
								At Gurukul Academy, our mission is to provide a
								holistic education that nurtures intellectual
								curiosity, personal growth, and character
								development. We strive to create an environment
								where students can discover their potential and
								develop into responsible global citizens.
							</p>
							<p className="text-lg text-gray-600">
								We believe in combining traditional values with
								modern educational methods to prepare our
								students for the challenges of tomorrow.
							</p>
						</div>
						<div className="relative h-[400px]">
							<Image
								src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
								alt="School Mission"
								fill
								className="object-cover rounded-lg"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Director's Message */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-6">
							Director's Message
						</h2>
						<div className="relative w-32 h-32 mx-auto mb-6">
							<Image
								src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
								alt="Director"
								fill
								className="object-cover rounded-full"
							/>
						</div>
						<blockquote className="text-lg text-gray-600 max-w-3xl mx-auto">
							"Education is not just about academic excellence;
							it's about nurturing complete individuals who are
							ready to face the world with confidence and
							compassion. At Gurukul Academy, we are committed to
							providing an environment where every child can
							thrive and reach their full potential."
						</blockquote>
						<p className="mt-4 font-semibold">Shikha Mishra</p>
						<p className="text-gray-600">
							Director, Gurukul Academy
						</p>
					</div>
				</div>
			</section>

			{/* Principal's Message */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-6">
							Principal's Message
						</h2>
						<div className="relative w-32 h-32 mx-auto mb-6">
							<Image
								src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
								alt="Principal"
								fill
								className="object-cover rounded-full"
							/>
						</div>
						<blockquote className="text-lg text-gray-600 max-w-3xl mx-auto">
							"Our goal is to create a learning environment that
							inspires curiosity, creativity, and excellence. We
							believe in the potential of every student and work
							tirelessly to help them achieve their dreams."
						</blockquote>
						<p className="mt-4 font-semibold">Gaurav Vishwakarma</p>
						<p className="text-gray-600">
							Principal, Gurukul Academy
						</p>
					</div>
				</div>
			</section>

			{/* Teachers Section */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold mb-12 text-center">
						Our Teachers
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{teachers.map((teacher, index) => (
							<Card
								key={index}
								className="overflow-hidden hover:shadow-lg transition-shadow"
							>
								<div className="relative h-64">
									<Image
										src={teacher.image}
										alt={teacher.name}
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold mb-2">
										{teacher.name}
									</h3>
									<p className="text-gray-600 mb-2">
										{teacher.position}
									</p>
									<p className="text-gray-500">
										{teacher.subject}
									</p>
								</div>
							</Card>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
