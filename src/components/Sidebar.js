// src/components/Sidebar.jsx
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4 space-y-4 fixed">
      <h2 className="text-2xl font-bold mb-4">Navigare(doar pentru testare)</h2>
      <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded">Login</Link>
      <Link to="/lobbies" className="hover:bg-gray-700 px-3 py-2 rounded">Selectează Lobby</Link>
      <Link to="/create-lobby" className="hover:bg-gray-700 px-3 py-2 rounded">Crează Lobby</Link>
      <Link to="/game" className="hover:bg-gray-700 px-3 py-2 rounded">Joc</Link>
      <Link to="/admin/lobbies/1" className="block py-2 px-4 hover:bg-blue-100 rounded">Gestionare camera</Link>
    </div>
  );
}

export default Sidebar;
