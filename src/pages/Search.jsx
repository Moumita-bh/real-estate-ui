import { useState } from 'react';
   import Favorites from './Favourites';

   const Search = () => {
     const locations = [
       "Mumbai, Maharashtra", "Delhi, Delhi", "Bangalore, Karnataka", "Chennai, Tamil Nadu",
       "Kolkata, West Bengal", "Hyderabad, Telangana", "Pune, Maharashtra", "Ahmedabad, Gujarat",
       "Jaipur, Rajasthan", "Lucknow, Uttar Pradesh", "Surat, Gujarat", "Kanpur, Uttar Pradesh",
       "Nagpur, Maharashtra", "Visakhapatnam, Andhra Pradesh", "Patna, Bihar", "Indore, Madhya Pradesh",
       "Thane, Maharashtra", "Bhopal, Madhya Pradesh", "Vadodara, Gujarat", "Ludhiana, Punjab",
       "Agra, Uttar Pradesh", "Nashik, Maharashtra", "Faridabad, Haryana", "Meerut, Uttar Pradesh",
       "Rajkot, Gujarat", "Kalyan-Dombivli, Maharashtra", "Vasai-Virar, Maharashtra", "Varanasi, Uttar Pradesh",
       "Srinagar, Jammu & Kashmir", "Aurangabad, Maharashtra", "Dhanbad, Jharkhand", "Amritsar, Punjab",
       "Navi Mumbai, Maharashtra", "Allahabad, Uttar Pradesh", "Ranchi, Jharkhand", "Howrah, West Bengal",
       "Coimbatore, Tamil Nadu", "Jodhpur, Rajasthan", "Madurai, Tamil Nadu", "Raipur, Chhattisgarh",
       "Kota, Rajasthan", "Guwahati, Assam", "Chandigarh, Chandigarh", "Solapur, Maharashtra",
       "Hubli-Dharwad, Karnataka", "Bareilly, Uttar Pradesh", "Moradabad, Uttar Pradesh", "Gurgaon, Haryana",
       "Aligarh, Uttar Pradesh", "Bhubaneswar, Odisha"
     ];

     const propertyNames = [
       "Emerald Towers", "Sapphire Heights", "Golden Residency", "Pearl Apartments",
       "Ruby Mansion", "Opal Villas", "Diamond Court", "Topaz Enclave",
       "Amethyst Lodge", "Coral Gardens", "Jade Palace", "Onyx Suites",
       "Quartz Haven", "Turquoise Terrace", "Garnet House", "Aquamarine Towers",
       "Citrine Plaza", "Peridot Place", "Zircon Residences", "Beryl Heights",
       "Moonstone Manor", "Lapis Lazuli", "Malachite Meadows", "Amber Abode",
       "Chrysocolla Court", "Sunstone Sanctuary", "Iolite Inn", "Spinel Spires",
       "Hematite Homes", "Fluorite Flats", "Kyanite Kottage", "Labradorite Lodge",
       "Sodalite Sky", "Carnelian Corner", "Agate Apartments", "Jasper Junction",
       "Onyx Outlook", "Obsidian Oasis", "Chalcedony Chalet", "Tourmaline Terrace",
       "Alexandrite Annex", "Morganite Manor", "Spodumene Suites", "Kunzite Keep",
       "Tanzanite Towers", "Ametrine Acres", "Charoite Charm", "Sugilite Springs",
       "Zoisite Zenith"
     ];

     const propertyImages = [
       "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
     ];

     const listings = Array.from({ length: 50 }, (_, i) => ({
       id: i + 1,
       title: propertyNames[i % propertyNames.length],
       location: locations[i % locations.length],
       price: `$${Math.floor(Math.random() * 1000) + 200}/month`,
       beds: Math.floor(Math.random() * 3) + 1,
       baths: Math.floor(Math.random() * 2) + 1,
       type: i % 4 === 0 ? 'Offer' : i % 2 === 0 ? 'Rent' : 'Sale',
       image: propertyImages[i % propertyImages.length],
     }));  

     const [filter, setFilter] = useState('Rent & Sale');
     const [searchTerm, setSearchTerm] = useState('');
     const [favorites, setFavorites] = useState([]);
     const [showFavorites, setShowFavorites] = useState(false);

     const filteredListings = listings.filter(listing => {
       const matchesType = filter === 'Rent & Sale' || listing.type === filter;
       const matchesSearch = searchTerm === '' || 
                            listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            listing.location.toLowerCase().includes(searchTerm.toLowerCase());
       return matchesType && matchesSearch;
     });

     const toggleFavorite = (id) => {
       setFavorites(prevFavorites =>
         prevFavorites.includes(id)
           ? prevFavorites.filter(favId => favId !== id)
           : [...prevFavorites, id]
       );
     };

     return (
       <div className="container mx-auto p-4">
         <div className="flex justify-between mb-4">
           <h1 className="text-2xl font-bold">Real Estate Listings</h1>
           <button
             onClick={() => setShowFavorites(!showFavorites)}
             className="bg-blue-500 text-white p-2 rounded"
           >
             {showFavorites ? 'Back to Listings' : 'Go to Favorites'}
           </button>
         </div>
         <div className="flex flex-col md:flex-row gap-4">
           <div className="w-full md:w-1/4 bg-gray-100 p-4 rounded">
             <input
               type="text"
               placeholder="Search..."
               className="w-full p-2 mb-4 border rounded"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
             />
             <div className="mb-4">
               <label className="block mb-2">Type:</label>
               <label className="inline-flex items-center mr-4">
                 <input
                   type="radio"
                   name="type"
                   value="Rent & Sale"
                   checked={filter === 'Rent & Sale'}
                   onChange={() => setFilter('Rent & Sale')}
                   className="form-radio text-green-500"
                 />
                 <span className="ml-2 text-green-700">Rent & Sale</span>
               </label>
               <label className="inline-flex items-center mr-4">
                 <input
                   type="radio"
                   name="type"
                   value="Rent"
                   checked={filter === 'Rent'}
                   onChange={() => setFilter('Rent')}
                   className="form-radio"
                 />
                 <span className="ml-2">Rent</span>
               </label>
               <label className="inline-flex items-center mr-4">
                 <input
                   type="radio"
                   name="type"
                   value="Sale"
                   checked={filter === 'Sale'}
                   onChange={() => setFilter('Sale')}
                   className="form-radio"
                 />
                 <span className="ml-2">Sale</span>
               </label>
               <label className="inline-flex items-center">
                 <input
                   type="radio"
                   name="type"
                   value="Offer"
                   checked={filter === 'Offer'}
                   onChange={() => setFilter('Offer')}
                   className="form-radio"
                 />
                 <span className="ml-2">Offer</span>
               </label>
             </div>
             <div className="mb-4">
               <label className="block mb-2">Amenities:</label>
               <label className="inline-flex items-center mr-4">
                 <input type="checkbox" className="form-checkbox" />
                 <span className="ml-2">Parking</span>
               </label>
               <label className="inline-flex items-center">
                 <input type="checkbox" className="form-checkbox" />
                 <span className="ml-2">Furnished</span>
               </label>
             </div>
             <div className="mb-4">
               <label className="block mb-2">Sort:</label>
               <select className="w-full p-2 border rounded">
                 <option>Latest</option>
               </select>
             </div>
             <button className="w-full bg-gray-700 text-white p-2 rounded">SEARCH</button>
           </div>
           {showFavorites ? (
             <Favorites favorites={favorites} listings={listings} toggleFavorite={toggleFavorite} />
           ) : (
             <div className="w-full md:w-3/4">
               <h2 className="text-lg font-bold mb-4">Listing results:</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                 {filteredListings.map((listing) => (
                   <div key={listing.id} className="bg-gray-100 p-4 rounded shadow relative">
                     <img src={listing.image} alt={listing.title} className="w-full h-32 object-cover mb-2" />
                     <h3 className="text-md font-semibold">{listing.title}</h3>
                     <p className="text-green-700">{listing.location}</p>
                     <p className="text-gray-600">{listing.price}</p>
                     <p className="text-gray-600">{listing.beds} Bed {listing.baths} Bath</p>
                     <button
                       onClick={() => toggleFavorite(listing.id)}
                       className={`absolute top-2 right-2 p-2 rounded-full ${favorites.includes(listing.id) ? 'bg-red-500' : 'bg-gray-300'}`}
                     >
                       ♥
                     </button>
                   </div>
                 ))}
               </div>
             </div>
           )}
         </div>
       </div>
     );
   };

   export default Search;