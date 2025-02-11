import Image from "next/image";
import annual_day from "../assets/image/gallery/annual_day.jpg";
import science_exhibition2 from "../assets/image/gallery/science_exhibiton2.jpg";
import annual_day2 from "../assets/image/gallery/annual_day2.jpg";
import sports_day2 from "../assets/image/gallery/sports_day2.jpg";
import student_conference from "../assets/image/gallery/student_conference2.jpg";
import science_city from "../assets/image/gallery/science_city.jpg";
import waste_model from "../assets/image/gallery/waste_model.jpg";
import heart_model from "../assets/image/gallery/heart_model.jpg";
import poster_making from "../assets/image/gallery/poster_making.jpg";
import diwali_board from "../assets/image/gallery/diwali_board.jpg";
import annual_day3 from "../assets/image/gallery/annual_day3.jpg";
import science_city1 from "../assets/image/gallery/science_city1.jpg";

export default function GalleryPage() {
	const galleryImages = [
		{
			title: "Poster Making",
			src: poster_making,
		},
		{
			title: "Waste Model",
			src: waste_model,
		},
		{
			title: "Annual Day",
			src: annual_day,
		},
		{
			title: "Science Exhibition",
			src: science_exhibition2,
		},
		{
			title: "Science City Tour",
			src: science_city1,
		},
		{
			title: "Annual Day",
			src: annual_day2,
		},
		{
			title: "Sports Day",
			src: sports_day2,
		},
		{
			title: "Heart Model",
			src: heart_model,
		},
		{
			title: "Diwali Notice Board",
			src: diwali_board,
		},
		{
			title: "Student Led Conference",
			src: student_conference,
		},
		{
			title: "Science City Tour",
			src: science_city,
		},
		{
			title: "Annual Day",
			src: annual_day3,
		},
	];

	return (
		<div className="pt-24 pb-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 animate-fade-up">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						Our Gallery
					</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Capturing moments of learning, growth, and celebration
						at Gurukul Academy
					</p>
				</div>

				<div className="image-grid">
					{galleryImages.map((image, index) => (
						<div
							key={index}
							className={`image-grid-item animate-zoom hover-scale`}
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<Image
								src={image.src}
								alt={image.title}
								fill
								className="object-cover"
							/>
							<div className="image-overlay">
								<div className="text-center text-white p-4">
									<h3 className="text-xl font-semibold mb-2">
										{image.title}
									</h3>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="mt-16 text-center animate-fade-up">
					<p className="text-lg text-gray-600 mb-8">
						Want to see more? Follow us on social media for regular
						updates!
					</p>
				</div>
			</div>
		</div>
	);
}
