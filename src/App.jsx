import { useState } from 'react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import BookingConfirmation from './components/BookingConfirmation';

export default function App() {
  const [view, setView] = useState('list');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    setView('detail');
  };

  const handleBookingSubmit = (details) => {
    setBookingDetails(details);
    setView('confirmation');
  };

  const handleBackToList = () => {
    setView('list');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {view === 'list' && <EventList onEventSelect={handleEventSelect} />}
        {view === 'detail' && (
          <EventDetail 
            event={selectedEvent} 
            onSubmit={handleBookingSubmit} 
            onBack={handleBackToList} 
          />
        )}
        {view === 'confirmation' && (
          <BookingConfirmation 
            details={bookingDetails} 
            onBack={handleBackToList} 
          />
        )}
      </main>
    </div>
  );
}