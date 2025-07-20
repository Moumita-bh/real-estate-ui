// src/components/ListingItem.jsx
import React from 'react';

export default function ListingItem({ listing }) {
  return (
    <div className="border rounded-lg p-4 shadow-md w-64">
      <img src={listing.imageUrls[0]} alt={listing.name} className="h-40 w-full object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{listing.name}</h3>
      <p className="text-gray-600">{listing.address}</p>
      <p className="text-green-600 font-semibold mt-1">${listing.regularPrice}</p>
    </div>
  );
}
