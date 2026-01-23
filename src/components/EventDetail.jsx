import { useState } from 'react';

export default function EventDetail({ event, onSubmit, onBack }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [seats, setSeats] = useState(1);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seatRows = [
    ['A1', 'A2', 'A3', 'A4', 'A5'],
    ['B1', 'B2', 'B3', 'B4', 'B5'],
    ['C1', 'C2', 'C3', 'C4', 'C5'],
    ['D1', 'D2', 'D3', 'D4', 'D5']
  ];

  const handleSeatSelect = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      if (selectedSeats.length < seats) {
        setSelectedSeats([...selectedSeats, seat]);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      event,
      date,
      time,
      seats: selectedSeats,
      totalPrice: event.price * selectedSeats.length
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-card p-6">
      <button 
        onClick={onBack}
        className="mb-4 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to events
      </button>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h2>
          <p className="text-gray-600 mb-4">{event.category} • From ${event.price.toFixed(2)}</p>
          <p className="text-gray-700">
            Experience this amazing event with premium seating and excellent views. 
            Book your tickets now to secure your spot!
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Book Tickets</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Date</label>
              <input 
                type="date" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Time</label>
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option value="">Select a time</option>
                <option value="18:00">6:00 PM</option>
                <option value="19:30">7:30 PM</option>
                <option value="21:00">9:00 PM</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Number of Seats</label>
              <input 
                type="number" 
                min="1" 
                max="10"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={seats}
                onChange={(e) => setSeats(parseInt(e.target.value))}
                required
              />
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-800 mb-3">Select Seats</h4>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="text-center mb-4 text-sm text-gray-600">Stage</div>
                {seatRows.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex justify-center mb-2">
                    {row.map((seat) => {
                      const isSelected = selectedSeats.includes(seat);
                      const isUnavailable = Math.random() < 0.3 && !isSelected; // Randomly mark some seats as unavailable
                      
                      return (
                        <button
                          key={seat}
                          type="button"
                          className={`w-10 h-10 mx-1 rounded-md flex items-center justify-center text-sm font-medium transition-colors ${isSelected 
                            ? 'bg-primary-500 text-white' 
                            : isUnavailable 
                              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                              : 'bg-white text-gray-700 hover:bg-gray-200'}`}
                          onClick={() => !isUnavailable && handleSeatSelect(seat)}
                          disabled={isUnavailable}
                        >
                          {seat}
                        </button>
                      );
                    })}
                  </div>
                ))}
                <div className="flex justify-center mt-4 space-x-6">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-primary-500 rounded-sm mr-2"></div>
                    <span className="text-sm text-gray-600">Selected</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-white rounded-sm mr-2 border border-gray-300"></div>
                    <span className="text-sm text-gray-600">Available</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-300 rounded-sm mr-2"></div>
                    <span className="text-sm text-gray-600">Unavailable</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Tickets ({selectedSeats.length})</span>
                <span className="font-medium">${(event.price * selectedSeats.length).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Service Fee</span>
                <span className="font-medium">$5.00</span>
              </div>
              <div className="border-t border-gray-200 my-2"></div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${(event.price * selectedSeats.length + 5).toFixed(2)}</span>
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full py-3 bg-primary-500 text-white font-medium rounded-md hover:bg-primary-600 transition-colors disabled:opacity-50"
              disabled={selectedSeats.length === 0}
            >
              Continue to Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}