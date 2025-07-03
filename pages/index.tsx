import React from 'react';
import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { PropertyListing } from '../interfaces';
import { UI_TEXT } from '../constants';

// Sample data for demonstration
const sampleListings: PropertyListing[] = [
  {
    id: '1',
    title: 'Cozy Downtown Apartment',
    description: 'Beautiful apartment in the heart of the city with modern amenities and great views.',
    images: ['/assets/images/apartment1.jpg'],
    price: 120,
    location: 'New York, NY',
    rating: 4.8,
    reviews: 156,
    amenities: ['WiFi', 'Kitchen', 'Parking'],
    host: {
      name: 'John Doe',
      avatar: '/assets/images/host1.jpg',
      verified: true,
    },
    coordinates: {
      lat: 40.7128,
      lng: -74.0060,
    },
  },
  {
    id: '2',
    title: 'Luxury Beach House',
    description: 'Stunning oceanfront property with private beach access and premium amenities.',
    images: ['/assets/images/beach-house.jpg'],
    price: 350,
    location: 'Miami, FL',
    rating: 4.9,
    reviews: 89,
    amenities: ['WiFi', 'Pool', 'Hot tub', 'Pet friendly'],
    host: {
      name: 'Jane Smith',
      avatar: '/assets/images/host2.jpg',
      verified: true,
    },
    coordinates: {
      lat: 25.7617,
      lng: -80.1918,
    },
  },
  {
    id: '3',
    title: 'Mountain Cabin Retreat',
    description: 'Peaceful cabin nestled in the mountains, perfect for a relaxing getaway.',
    images: ['/assets/images/cabin.jpg'],
    price: 95,
    location: 'Aspen, CO',
    rating: 4.7,
    reviews: 203,
    amenities: ['WiFi', 'Kitchen', 'Washer', 'Dryer'],
    host: {
      name: 'Mike Johnson',
      avatar: '/assets/images/host3.jpg',
      verified: true,
    },
    coordinates: {
      lat: 39.1911,
      lng: -106.8175,
    },
  },
];

const Home: React.FC = () => {
  const handleCardClick = (id: string) => {
    console.log(`Clicked on listing: ${id}`);
    // Navigate to listing details page
  };

  const handleBookNow = () => {
    console.log('Book now clicked');
    // Handle booking logic
  };

  return (
    <>
      <Head>
        <title>ALX Listing App - Find Your Perfect Stay</title>
        <meta name="description" content="Discover amazing places to stay around the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-rose-600">
                  ALX Listing App
                </h1>
              </div>
              <nav className="flex space-x-4">
                <Button variant="outline" size="small">
                  Sign In
                </Button>
                <Button variant="primary" size="small">
                  Sign Up
                </Button>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-rose-500 to-pink-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Perfect Stay
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover amazing places to stay around the world
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder={UI_TEXT.SEARCH_PLACEHOLDER}
                    className="flex-1 px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                  <Button onClick={() => console.log('Search clicked')}>
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Listings Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Listings
              </h2>
              <p className="text-lg text-gray-600">
                Hand-picked places you'll love
              </p>
            </div>

            {/* Listings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleListings.map((listing) => (
                <Card
                  key={listing.id}
                  id={listing.id}
                  title={listing.title}
                  description={listing.description}
                  image={listing.images[0]}
                  price={listing.price}
                  location={listing.location}
                  rating={listing.rating}
                  onClick={() => handleCardClick(listing.id)}
                />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button
                onClick={() => console.log('Load more clicked')}
                variant="outline"
                size="large"
              >
                Load More Listings
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of travelers who trust ALX Listing App
            </p>
            <Button
              onClick={handleBookNow}
              variant="primary"
              size="large"
            >
              {UI_TEXT.BOOK_NOW}
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 ALX Listing App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
