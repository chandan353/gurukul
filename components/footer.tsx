import Link from "next/link";
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
	return (
		<footer className="bg-secondary">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<Link href="/" className="flex items-center space-x-2">
							<GraduationCap className="h-8 w-8 text-primary" />
							<span className="font-bold text-xl text-gray-900">
								Gurukul Academy
							</span>
						</Link>
						<p className="mt-4 text-gray-600">
							Nurturing minds, shaping futures since 2021
						</p>
					</div>

					<div>
						<h3 className="font-semibold text-lg mb-4 text-gray-900">
							Quick Links
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/about"
									className="text-gray-600 hover:text-primary transition-colors"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-gray-600 hover:text-primary transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold text-lg mb-4 text-gray-900">
							Contact Info
						</h3>
						<ul className="space-y-2">
							<li className="flex items-center space-x-2 text-gray-600">
								<Phone className="h-4 w-4" />
								<span>+91 9918394505</span>
							</li>
							<li className="flex items-center space-x-2 text-gray-600">
								<Mail className="h-4 w-4" />
								<span>info@gurukulacademy.edu</span>
							</li>

							<li className="flex items-center space-x-2 text-gray-600">
								<MapPin className="h-4 w-4" />
								<Link
									href="https://maps.app.goo.gl/jzm7kjAcW5nmrcxBA"
									target="_blank"
								>
									Gurukul Academy Balrampur
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold text-lg mb-4 text-gray-900">
							School Hours
						</h3>
						<ul className="space-y-2 text-gray-600">
							<li>Monday - Friday</li>
							<li>8:00 AM - 3:00 PM</li>
							<li>Saturday</li>
							<li>8:00 AM - 12:00 PM</li>
						</ul>
					</div>
				</div>

				<div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
					<p>
						&copy; {new Date().getFullYear()} Gurukul Academy. All
						rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
