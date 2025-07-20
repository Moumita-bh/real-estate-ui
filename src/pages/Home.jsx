import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import {
  collection,
  getDocs,
  
} from 'firebase/firestore';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import mockListings from "../data/mockListings";
import 'swiper/css/bundle';
import { FaMapMarkerAlt } from "react-icons/fa";

const Home = () => {
  const [slides, setSlides] = useState([]);
  const [offerListings, setOfferListings] = useState([]);
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'slides'));
        const images = querySnapshot.docs.map(doc => doc.data().imageUrl);
        setSlides(images);
      } catch (err) {
        console.error('Failed to fetch slides:', err);
      }
    };

    
    fetchSlides();
    const offers = mockListings
      .filter(listing => listing.offer === true)
      .sort((a, b) => b.price - a.price);
    setOfferListings(offers);
    
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Find your next <span className='text-slate-500'>perfect</span>
          <br />
          place with ease
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm'>
          Sahand Estate is the best place to find your next perfect place to live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link
          to={'/search'}
          className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
        >
          Let's get started...
        </Link>
      </div>

      {/* Swiper Slider */}
      <div className='w-full'>
        <Swiper
          navigation
          loop
          autoplay={{ delay: 4000 }}
          modules={[Navigation, Autoplay]}
          className='mySwiper'
        >
          {slides.map((url, index) => (
            <SwiperSlide key={index}>
              <img
                src={url}
                alt={`Slide ${index + 1}`}
                className='w-full h-[500px] object-cover'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Offer Listings Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-700">Recent Offers</h2>
        <Link to="/search?offer=true" className="text-sm text-blue-700 hover:underline">
          Show more offers
        </Link>
      </div>

     <div className="grid grid-cols-3 gap-6">
  {offerListings.map((listing, index) => (
    <>
      <div
        key={listing.id}
        className="bg-white rounded-lg shadow hover:shadow-lg transition duration-200 overflow-hidden"
      >
        <img
          src={listing.imageUrl}
          alt={listing.title}
          className="w-full h-48 object-cover"
        />

        <div className="p-4">
          <h3 className="text-lg font-semibold text-slate-800 truncate">
            {listing.title}
          </h3>

          <p className="flex items-center text-sm text-gray-500 mt-1 truncate">
            <FaMapMarkerAlt className="mr-1" />
            {listing.address}
          </p>

          <p className="text-sm text-gray-500 truncate">{listing.location}</p>

          <p className="mt-2 text-blue-600 font-semibold">
            ${listing.price.toLocaleString()}
            {listing.type === "rent" && " / month"}
          </p>

          <div className="flex justify-between text-sm text-slate-600 font-medium mt-2">
            <p>{listing.beds} Beds</p>
            <p>{listing.baths} Baths</p>
          </div>
        </div>
      </div>

      {/* Insert a full-width break after 3rd card (index = 2) */}
      {index === 2 && <div className="col-span-3"></div>}
    </>
  ))}
</div>

    </div>

    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
          <h1 className="text-4xl font-bold mb-4">Contact With Us</h1>
          <p className="text-gray-500 mb-8">Ready to Make a Move? Let's Build Your Future Together</p>
          <div className="w-full max-w-md">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <input type="text" placeholder="Your Name" className="flex-1 p-2 border rounded" />
              <input type="email" placeholder="Your Email" className="flex-1 p-2 border rounded" />
            </div>
            <textarea placeholder="Message" className="w-full p-2 border rounded mb-4 h-32"></textarea>
            <button className="w-full bg-blue-500 text-white p-2 rounded">Send Message</button>
          </div>
        </div>


        <footer className="bg-gray-900 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
        <div className="mb-4 md:mb-0">
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap ml-4'>
            <span className='text-slate-500'>Dablo</span>
            <span className='text-slate-700'>Estate</span>
          </h1>
          <div className="bg-gray-900 text-gray-400 p-4 max-w-md">
      <p className="text-sm leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
      </p>
    </div>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About us</a></li>
            <li><a href="#" className="hover:text-white">Contact us</a></li>
            <li><a href="#" className="hover:text-white">Privacy policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
          <p className="text-gray-400 mt-2">The latest news, articles, and resources, sent to your inbox weekly.</p>
          <div className="mt-2 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md bg-gray-800 text-white border-none focus:outline-none"
            />
            <button className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-5 ">
        Copyright 2024 © GreatStack. All Right Reserved.
      </div>
    </footer>
    </div>
  );
};

export default Home;

