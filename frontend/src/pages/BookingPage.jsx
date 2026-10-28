import SEO from '../components/SEO';

const BookingPage = () => {
  return (
    <div className="pt-20 min-h-screen">
      <SEO 
        title="Book Your Stay" 
        description="Reserve your room at Hotel Maria International today. Enjoy a seamless booking experience for your luxury stay in Kothamangalam."
      />
      <div className="bg-primary-900 text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Book Your Stay</h1>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Booking Form will go here */}
      </div>
    </div>
  );
};

export default BookingPage;
