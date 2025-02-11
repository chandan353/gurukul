import Image from "next/image";
import { Card } from "@/components/ui/card";
import group_tour from "../assets/image/about/tour_group.jpg";
import shikhamishra from "../assets/image/faces/shikhamishra.jpg";
import umeshmishra from "../assets/image/faces/umeshmishra.jpg";
import gauravvishwakarma from "../assets/image/faces/gaurav_vishwakarma.jpg";
import deepakojha from "../assets/image/faces/deepak.jpg";
import nuruz from "../assets/image/faces/nuruz.jpg";
import surbhi from "../assets/image/faces/surbhi_tripathi.jpg";

export default function AboutPage() {
	const teachers = [
		{
			name: "Deepak Ojha",
			position: "Co-ordinator",
			image: deepakojha,
			subject: "Leadership",
		},
		{
			name: "Mr. Nuruzzaman Khan",
			position: "Creative Head",
			image: nuruz,
			subject: "Mathematics",
		},
		{
			name: "Ms. Surbhi Tripathi",
			position: "Senior Teacher",
			image: surbhi,
			subject: "English",
		},
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
								src={group_tour}
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
								src={umeshmishra}
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
						<p className="mt-4 font-semibold">Umesh Mishra</p>
						<p className="text-gray-600">
							Director, Gurukul Academy
						</p>
					</div>
				</div>
			</section>

			{/* Manager's Message */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-6">
							Manager's Message
						</h2>
						<div className="relative w-32 h-32 mx-auto mb-6">
							<Image
								src={shikhamishra}
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
						<p className="mt-4 font-semibold">Shikha Mishra</p>
						<p className="text-gray-600">
							Manager, Gurukul Academy
						</p>
					</div>
				</div>
			</section>

			{/* Principal's Message */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-6">
							Principal's Message
						</h2>
						<div className="relative w-32 h-32 mx-auto mb-6">
							<Image
								src={gauravvishwakarma}
								alt="Principal"
								fill
								className="object-cover rounded-full"
							/>
						</div>
						<blockquote className="text-lg text-gray-600 max-w-3xl mx-auto">
							"At Gurukul Academy, we believe that education goes
							beyond books—it’s about character, values, and
							lifelong learning. We are committed to shaping
							future leaders who embrace knowledge with passion
							and integrity."
						</blockquote>
						<p className="mt-4 font-semibold">Gaurav Vishwakarma</p>
						<p className="text-gray-600">
							Principal, Gurukul Academy
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
