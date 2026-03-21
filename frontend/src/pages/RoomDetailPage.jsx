import React from 'react';
import { useParams } from 'react-router-dom';

const RoomDetailPage = () => {
  const { id } = useParams();
  
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-serif mb-8">Room Details {id}</h1>
      </div>
    </div>
  );
};

export default RoomDetailPage;
