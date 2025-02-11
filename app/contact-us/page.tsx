// import React from "react";
// import { ContactForm } from "@/components/contact-form";

// const ContactUs: React.FC = () => {
// 	return (
// 		<section className="relative h-screen w-1/3 mx-auto pt-20">
// 			<h1 className="text-3xl font-bold mb-6">Contact Us</h1>
// 			<ContactForm />
// 		</section>
// 	);
// };

// export default ContactUs;

// import React from "react";
// import Image from "next/image";
// import { ContactForm } from "@/components/contact-form";
// import school from "../assets/image/school1.jpg";

// const ContactUs: React.FC = () => {
// 	return (
// 		<section className="relative min-h-screen mx-auto pt-20 w-11/12 lg:w-2/3">
// 			<div className="flex flex-col lg:flex-row gap-8">
// 				{/* Left Column: Contact Form */}
// 				<div className="flex-1 p-4">
// 					<h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
// 						Contact Us
// 					</h1>
// 					<ContactForm />
// 				</div>

// 				{/* Right Column: School Image & Introductory Text */}
// 				<div className="flex-1 p-4 flex flex-col items-center">
// 					<Image
// 						src={school}
// 						alt="Gurukul Academy"
// 						width={800}
// 						height={450}
// 						className="object-cover rounded-lg shadow-lg"
// 					/>
// 					<div className="text-center mt-6 px-4">
// 						<h1 className="text-3xl font-bold mb-4">
// 							Welcome to Gurukul Academy
// 						</h1>
// 						<p className="text-gray-700 mb-4">
// 							At Gurukul Academy, we provide a nurturing
// 							environment and a holistic educational experience
// 							designed to help every student achieve their fullest
// 							potential. Our experienced educators and
// 							state-of-the-art facilities ensure a balanced
// 							approach to academic excellence, extracurricular
// 							development, and personal growth.
// 						</p>
// 						<p className="text-gray-700">
// 							For any enquiries or to learn more about our
// 							programs, please fill out the form. We're here to
// 							answer all your queries and help you take the next
// 							step in your educational journey.
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

import React from "react";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import school from "../assets/image/school1.jpg";

const ContactUs: React.FC = () => {
	return (
		<section className="relative min-h-screen mx-auto pt-20 w-11/12 lg:w-4/5 pb-20">
			<div className="flex flex-col lg:flex-row gap-8">
				{/* Contact Form Container */}
				<div className="flex-1 p-4 order-1 lg:order-2 lg:max-w-lg mx-auto">
					<h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
						Contact Us
					</h1>
					<ContactForm />
				</div>

				{/* Image & Introductory Text Container */}
				<div className="flex-1 p-4 flex flex-col items-center order-2 lg:order-1">
					<Image
						src={school}
						alt="Gurukul Academy"
						width={800}
						height={450}
						className="object-cover rounded-lg shadow-lg"
					/>
					<div className="text-center mt-6 px-4">
						<h1 className="text-3xl font-bold mb-4">
							Welcome to Gurukul Academy
						</h1>
						<p className="text-gray-700 mb-4">
							At Gurukul Academy, we provide a nurturing
							environment and a holistic educational experience
							designed to help every student achieve their fullest
							potential. Our experienced educators and
							state-of-the-art facilities ensure a balanced
							approach to academic excellence, extracurricular
							development, and personal growth.
						</p>
						<p className="text-gray-700">
							For any enquiries or to learn more about our
							programs, please fill out the form. We're here to
							answer all your queries and help you take the next
							step in your educational journey.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
