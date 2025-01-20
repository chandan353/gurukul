import React from "react";

const ContactUs: React.FC = () => {
	return (
		<div className="bg-white p-6 rounded-lg shadow-md">
			<h3 className="font-semibold text-lg mb-4 text-gray-900">
				Contact Us
			</h3>
			<form className="space-y-4">
				<div>
					<label htmlFor="name" className="block text-gray-700">
						Name
					</label>
					<input
						type="text"
						id="name"
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
					/>
				</div>
				<div>
					<label htmlFor="email" className="block text-gray-700">
						Email
					</label>
					<input
						type="email"
						id="email"
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
					/>
				</div>
				<div>
					<label htmlFor="message" className="block text-gray-700">
						Message
					</label>
					<textarea
						id="message"
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
						rows={4}
					/>
				</div>
				<div>
					<button
						type="submit"
						className="w-full px-4 py-2 bg-primary text-white rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
					>
						Send Message
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactUs;
