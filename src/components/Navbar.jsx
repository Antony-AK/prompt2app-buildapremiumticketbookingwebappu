export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">TicketHub</h1>
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
              Events
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
              My Bookings
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}