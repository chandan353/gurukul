import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function GalleryPage() {
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
      title: 'Annual Day Celebration',
      category: 'Cultural Events'
    },
    {
      src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754',
      title: 'Sports Competition',
      category: 'Sports'
    },
    {
      src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45',
      title: 'Science Exhibition',
      category: 'Academic'
    },
    {
      src: 'https://images.unsplash.com/photo-1511578314322-379afb476865',
      title: 'Dance Performance',
      category: 'Cultural Events'
    },
    {
      src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d',
      title: 'Independence Day',
      category: 'Celebrations'
    },
    {
      src: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f',
      title: 'Art Exhibition',
      category: 'Creative Arts'
    },
    {
      src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6',
      title: 'Library Activities',
      category: 'Academic'
    },
    {
      src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b',
      title: 'Yoga Day',
      category: 'Health & Wellness'
    },
    {
      src: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d',
      title: 'Music Competition',
      category: 'Cultural Events'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Capturing moments of learning, growth, and celebration at Gurukul Academy
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
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-up">
          <p className="text-lg text-gray-600 mb-8">
            Want to see more? Follow us on social media for regular updates!
          </p>
        </div>
      </div>
    </div>
  );
}