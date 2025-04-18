// src/components/GamePage.js - Actualizat cu taburi interactive și conținut pentru tab-ul "Quote"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function GamePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("quote"); // Setăm tab-ul "quote" ca activ implicit
  const [championName, setChampionName] = useState("");
  const [guesses, setGuesses] = useState({
    quote: [],
    classic: [],
    ability: [],
    emote: [],
    splash: []
  });
  const [zoomLevel, setZoomLevel] = useState(5); // Zoom level inițial

  
  const [message, setMessage] = useState("");
  
  // Tab content & data
  const tabs = [
    { id: "classic", emoji: "❓", title: "Classic" },
    { id: "quote", emoji: "👀", title: "Quote" },
    { id: "ability", emoji: "🔥", title: "Ability" },
    { id: "emote", emoji: "😀", title: "Emote" },
    { id: "splash", emoji: "📚", title: "Splash" }
  ];
  
  const quoteData = {
    quote: "Much like a fine gem, I'm multifaceted.",
  };

  const abilityData = {
    ability: "https://game-guide.fr/wp-content/uploads/2015/04/LoL-Ashe-Ic%C3%B4ne-Sort-A-Concentration-du-Ranger.png"
  }

  const emojiData = {
    champion: "blitzcrank",
    emojis: ["🥊", "〰️", "〰️", "🤖"]
  };

  const [unlockedEmojis, setUnlockedEmojis] = useState(1);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!championName.trim()) return;
  
    let newGuess;
    let isCorrect = false;
  
    if (activeTab === "quote") {
      isCorrect = championName.toLowerCase() === quoteData.champion?.toLowerCase();
      newGuess = {
        name: championName,
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Ahri_0.jpg",
        isCorrect
      };
      setMessage(isCorrect ? `Corect! "${championName}" este răspunsul corect.` : `Ai ghicit "${championName}". Încearcă din nou!`);
    } else if (activeTab === "emote") {
      isCorrect = championName.toLowerCase() === emojiData.champion.toLowerCase();
      newGuess = {
        name: championName,
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Ahri_0.jpg",
        isCorrect
      };
      setMessage(isCorrect ? `Corect! "${championName}" este răspunsul corect.` : `"${championName}" nu este corect. Încearcă din nou!`);
      if (!isCorrect && unlockedEmojis < emojiData.emojis.length) {
        setUnlockedEmojis(unlockedEmojis + 1);
      }
    }else if (activeTab === "ability") {
        isCorrect = championName.toLowerCase() === quoteData.champion?.toLowerCase();
        newGuess = {
          name: championName,
          image: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Ahri_0.jpg",
          isCorrect
        };
        setMessage(isCorrect ? `Corect! "${championName}" este răspunsul corect.` : `Ai ghicit "${championName}". Încearcă din nou!`);
    } else if (activeTab === "splash") {
        newGuess = { name: championName };
        setMessage(`Ai ghicit "${championName}" pentru tab-ul ${activeTab}.`);
        newGuess = {
            name: championName,
            image: "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Ahri_0.jpg",
            isCorrect
          };
        
        if (!isCorrect && zoomLevel > 0.5) {
          setZoomLevel(zoomLevel - 0.4);  // Mărește zoom-ul (scade valoarea)
        }
    } else {
      newGuess = { name: championName };
      setMessage(`Ai ghicit "${championName}" pentru tab-ul ${activeTab}.`);
    }
  
    // Update specific tab's guesses
    setGuesses((prev) => ({
      ...prev,
      [activeTab]: [newGuess, ...prev[activeTab]]
    }));
  
    setChampionName("");
  };
  
  
  const changeTab = (tabId) => {
    setActiveTab(tabId);
    setMessage("");
  };
  
  
  const renderTabContent = () => {
    switch (activeTab) {
      case "quote":
        return (
          <div className="bg-gray-800 bg-opacity-80 rounded-lg p-6 mb-6 text-center max-w-2xl mx-auto">
            <h2 className="text-xl mb-4">Which champion says</h2>
            <div className="text-2xl font-serif italic mb-6">
              <span className="text-4xl">"</span>
              {quoteData.quote}
              <span className="text-4xl">"</span>
            </div>
            <div className="flex justify-center mb-4">
              <button className="rounded-full bg-gray-700 p-4 w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 013.464-2.043" />
                </svg>
              </button>
            </div>
            <div className="text-sm text-gray-400">
              Audio Clue<br />in 5 tries
            </div>
          </div>
        );
      case "classic":
        return (
          <div className="bg-gray-800 bg-opacity-80 rounded-lg p-6 mb-6 text-center max-w-2xl mx-auto">
            <h2 className="text-xl mb-2">Guess the League of Legends champion!</h2>
          </div>
        );
      case "ability":
        return (
          <div className="bg-gray-800 bg-opacity-80 rounded-lg p-6 mb-6 text-center max-w-2xl mx-auto">
            <h2 className="text-xl mb-4">Whose ability is this</h2>
            <div align="center">
                <img src="https://game-guide.fr/wp-content/uploads/2015/04/LoL-Ashe-Ic%C3%B4ne-Sort-A-Concentration-du-Ranger.png">
                </img>
            </div>
            <div className="flex justify-center mb-4">
              <button className="rounded-full bg-gray-700 p-4 w-16 h-16 flex items-center justify-center">
              </button>
            </div>
            <div className="text-sm text-gray-400">
              Challenge Mode<br />
            </div>
          </div>
        );
      case "emote":
        return (
            <div className="bg-gray-800 bg-opacity-80 rounded-lg p-6 mb-6 text-center max-w-2xl mx-auto">
            <h2 className="text-xl mb-4">Which champion do these emojis describe?</h2>
            <div className="text-4xl space-x-4 mb-6">
                {emojiData.emojis.map((emoji, index) => (
                <span key={index}>{index < unlockedEmojis ? emoji : "❓"}</span>
                ))}
            </div>
            <p className="text-sm text-gray-400">Each try unlocks an emoji.</p>
            </div>
        );
      case "splash":
        return (
            <div className="flex flex-col items-center space-y-4 bg-gray-800 bg-opacity-80 rounded-lg p-6 mb-6 text-center max-w-2xl mx-auto">
              <h2 className="text-xl font-bold text-white text-center">
                Which champion has the whole splash art?
              </h2>
              <div className="w-[300px] h-[300px] border-4 border-yellow-500 rounded-lg overflow-hidden">
                <img
                    src="https://win.gg/wp-content/uploads/2021/10/Jinx-Arcane-skin-LoL.jpg"
                    alt="Splash Art Zoom"
                    className="object-cover object-left-bottom"
                    style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.3s ease-in-out' }} // aplică zoom
                />
                </div>

              <p className="text-sm text-gray-300 italic">Each try zooms out a bit.</p>
            </div>
          );
      default:
        return (
          <div className="bg-gray-800 bg-opacity-80 rounded-lg p-6 mb-6 text-center max-w-2xl mx-auto">
            <h2 className="text-xl mb-2">Tab "{activeTab}" content goes here</h2>
          </div>
        );
    }
  };
  
  const renderResults = () => {
    const currentGuesses = guesses[activeTab] || [];
  
    if (activeTab === "quote" && currentGuesses.length > 0) {
      return (
        <div className="max-w-md mx-auto">
          {currentGuesses.map((guess, index) => (
            <div 
              key={index} 
              className={`flex items-center bg-red-500 p-3 rounded-lg mb-2 ${guess.isCorrect ? 'bg-green-600' : 'bg-red-500'}`}
            >
              <img src={guess.image} alt={guess.name} className="w-12 h-12 rounded mr-4" />
              <span className="text-white font-semibold">{guess.name}</span>
              <span className="ml-auto text-white">4487</span>
            </div>
          ))}
        </div>
      );
    } else if (activeTab === "emote" && currentGuesses.length > 0) {
        return (
          <div className="max-w-md mx-auto">
            {currentGuesses.map((guess, index) => (
              <div 
                key={index} 
                className={`flex items-center bg-red-500 p-3 rounded-lg mb-2 ${guess.isCorrect ? 'bg-green-600' : 'bg-red-500'}`}
              >
                <img src={guess.image} alt={guess.name} className="w-12 h-12 rounded mr-4" />
                <span className="text-white font-semibold">{guess.name}</span>
                <span className="ml-auto text-white">4487</span>
              </div>
            ))}
          </div>
        );
      } else if (activeTab === "ability" && currentGuesses.length > 0) {
        return (
          <div className="max-w-md mx-auto">
            {currentGuesses.map((guess, index) => (
              <div 
                key={index} 
                className={`flex items-center bg-red-500 p-3 rounded-lg mb-2 ${guess.isCorrect ? 'bg-green-600' : 'bg-red-500'}`}
              >
                <img src={guess.image} alt={guess.name} className="w-12 h-12 rounded mr-4" />
                <span className="text-white font-semibold">{guess.name}</span>
                <span className="ml-auto text-white">4487</span>
              </div>
            ))}
          </div>
        );
      } else if (activeTab === "splash" && currentGuesses.length > 0) {
        return (
          <div className="max-w-md mx-auto">
            {currentGuesses.map((guess, index) => (
              <div 
                key={index} 
                className={`flex items-center bg-red-500 p-3 rounded-lg mb-2 ${guess.isCorrect ? 'bg-green-600' : 'bg-red-500'}`}
              >
                <img src={guess.image} alt={guess.name} className="w-12 h-12 rounded mr-4" />
                <span className="text-white font-semibold">{guess.name}</span>
                <span className="ml-auto text-white">4487</span>
              </div>
            ))}
          </div>
        );
      } else if (activeTab === "classic" && currentGuesses.length > 0) {
      return (
        <div className="max-w-6xl mx-auto mb-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-center border-b border-gray-700">
                <th className="p-2">Champion</th>
                <th className="p-2">Gender</th>
                <th className="p-2">Position(s)</th>
                <th className="p-2">Species</th>
                <th className="p-2">Resource</th>
                <th className="p-2">Range type</th>
                <th className="p-2">Region(s)</th>
                <th className="p-2">Release year</th>
              </tr>
            </thead>
            <tbody>
              {currentGuesses.map((guess, index) => (
                <tr key={index} className="text-center">
                  <td className="p-2 bg-red-900">
                    <div className="flex justify-center">
                      <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg" alt="Champion" className="w-16 h-16 object-cover rounded" />
                    </div>
                  </td>
                  <td className="p-2 bg-green-700">Male</td>
                  <td className="p-2 bg-green-700">Top</td>
                  <td className="p-2 bg-red-900">Darkin</td>
                  <td className="p-2 bg-red-900">Manaless</td>
                  <td className="p-2 bg-yellow-700">Melee</td>
                  <td className="p-2 bg-red-900">Runeterra, Shurima</td>
                  <td className="p-2 bg-red-900">2013</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  
    return null;
  };
  
  
  
  return (
    <div className="min-h-screen bg-gray-900 text-white py-8" style={{ backgroundImage: "url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "overlay" }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="w-8">
            <svg className="w-8 h-8 text-gray-400 cursor-pointer hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-yellow-500 text-center">LoLdle</h1>
          <div className="w-8">
            <span className="inline-block bg-blue-700 text-white px-2 py-1 rounded">🇺🇸</span>
          </div>
        </div>
        
        {/* Navigation Icons */}
        <div className="flex justify-center space-x-2 mb-6">
          {tabs.map(tab => (
            <div 
              key={tab.id}
              className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 border-2 ${
                activeTab === tab.id 
                  ? 'bg-yellow-600 border-yellow-400' 
                  : 'bg-gray-700 border-gray-600 hover:bg-gray-600'
              }`}
              onClick={() => changeTab(tab.id)}
            >
              <span className="text-2xl">{tab.emoji}</span>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 flex items-center space-x-8">
            <div className="text-center">
              <span className="text-2xl cursor-pointer hover:text-gray-300">📊</span>
            </div>
            <div className="text-center">
              <span className="text-2xl cursor-pointer hover:text-gray-300">⭕</span>
            </div>
            <div className="text-center relative">
              <span className="text-2xl cursor-pointer hover:text-gray-300">📝</span>
              <span className="absolute -top-1 -right-1 bg-yellow-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
            </div>
            <div className="text-center">
              <span className="text-2xl cursor-pointer hover:text-gray-300">❓</span>
            </div>
          </div>
        </div>
        
        {/* Dynamic Tab Content */}
        {renderTabContent()}
        
        {/* Champion Input */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-6">
          <div className="relative">
            <input
              type="text"
              value={championName}
              onChange={(e) => setChampionName(e.target.value)}
              className="w-full bg-gray-800 bg-opacity-80 rounded-lg p-3 pr-12 text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type champion name..."
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600"
            >
              <span className="text-xl">➤</span>
            </button>
          </div>
        </form>
        
        {/* People Counter */}
        <div className="text-center text-yellow-400 mb-8">
          <p>{activeTab === "quote" ? quoteData.peopleFound : 54650} people already found out!</p>
        </div>
        
        {message && (
          <div className="text-center text-green-400 mb-4">
            <p>{message}</p>
          </div>
        )}
        
        {/* Results Display */}
        {renderResults()}
      </div>
    </div>
  );
}

export default GamePage;