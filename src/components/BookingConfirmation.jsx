export default function BookingConfirmation({ details, onBack }) {
  return (
    <div className="bg-white rounded-lg shadow-card p-6 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
        <p className="text-gray-600">Your tickets have been successfully booked.</p>
      </div>
      
      <div className="border border-gray-200 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Booking Details</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-500">Event</p>
            <p className="font-medium">{details.event.title}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Date & Time</p>
            <p className="font-medium">{details.date} • {details.time}</p>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-gray-500">Seats</p>
          <p className="font-medium">{details.seats.join(', ')}</p>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-500">Total Paid</p>
          <p className="text-xl font-bold">${details.totalPrice.toFixed(2)}</p>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 mb-4">Your tickets will be emailed to you shortly.</p>
        <button 
          onClick={onBack}
          className="px-6 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
        >
          Back to Events
        </button>
      </div>
    </div>
  );
}