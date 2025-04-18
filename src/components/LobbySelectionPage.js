// components/LobbySelectionPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LobbySelectionPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const lobbies = [
    { id: 1, name: "Challenger's Arena", creator: "ProPlayer123" },
    { id: 2, name: "Casual Fun", creator: "CasualGamer98" },
    { id: 3, name: "Competitive Clash", creator: "ProGamerX" },
    { id: 4, name: "Mystery Mode", creator: "MysteriousGamer" },
    { id: 5, name: "All About Fun", creator: "FunMaster69" },
  ];

  const filteredLobbies = lobbies.filter(
    (lobby) =>
      lobby.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lobby.creator.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLobbySelect = (lobbyId) => {
    navigate("/game"); // când dai click pe un lobby
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-yellow-500 text-center mb-6">
          Selectează un Lobby
        </h1>

        <div className="mb-6 text-center">
          <input
            type="text"
            placeholder="Caută după nume sau creator..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-3 rounded-lg text-black"
          />
        </div>

        <div className="space-y-4">
          {filteredLobbies.length === 0 ? (
            <p className="text-center text-gray-400">Niciun lobby găsit.</p>
          ) : (
            filteredLobbies.map((lobby) => (
              <div
                key={lobby.id}
                onClick={() => handleLobbySelect(lobby.id)}
                className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 cursor-pointer flex justify-between"
              >
                <div>
                  <h2 className="text-xl font-semibold">{lobby.name}</h2>
                  <p className="text-sm text-gray-400">Creat de: {lobby.creator}</p>
                </div>
                <span className="text-yellow-400 text-2xl">→</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default LobbySelectionPage;
