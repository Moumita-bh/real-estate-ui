function Favorites({ favorites, listings = [], toggleFavorite }) {
       const favoriteListings = (listings || []).filter(listing => favorites.includes(listing.id));

       return (
         <div className="w-full md:w-3/4">
           <h2 className="text-lg font-bold mb-4">Favorite Listings:</h2>
           {favoriteListings.length === 0 ? (
             <p>No favorite listings yet.</p>
           ) : (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
               {favoriteListings.map((listing) => (
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
           )}
         </div>
       );
     }

     export default Favorites;