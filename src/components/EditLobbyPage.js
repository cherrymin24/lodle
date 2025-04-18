import { useState } from "react";

const champions = [
  {
    name: "Ahri",
    quotes: ["Don't you trust me?", "Playtime's over.", "Should I make your pulse rise?"],
    abilities: ["Q", "W", "E", "R"],
    emotes: ["Wink", "Laugh", "Dance", "Surprise", "Sad", "Cheer"],
    skins: ["Classic", "K/DA", "Star Guardian"]
  },
  {
    name: "Yasuo",
    quotes: ["Death is like the wind.", "No cure for fools.", "The sword’s poor company for a long road."],
    abilities: ["Q", "W", "E", "R"],
    emotes: ["Meditate", "Smirk", "Taunt", "Whirlwind", "Angry", "Bow"],
    skins: ["Classic", "Nightbringer", "PROJECT"]
  }
];

function EditLobbyPage() {
  const [selectedChampion, setSelectedChampion] = useState(champions[0]);
  const [selectedQuote, setSelectedQuote] = useState(champions[0].quotes[0]);
  const [selectedAbility, setSelectedAbility] = useState(champions[0].abilities[0]);
  const [selectedEmotes, setSelectedEmotes] = useState("");
  const [selectedSkin, setSelectedSkin] = useState(champions[0].skins[0]);

  const handleChampionChange = (e) => {
    const champ = champions.find((c) => c.name === e.target.value);
    setSelectedChampion(champ);
    setSelectedQuote("");
    setSelectedAbility("");
    setSelectedEmotes([]);
    setSelectedSkin("");
  };

  const toggleEmote = (emote) => {
    setSelectedEmotes((prev) =>
      prev.includes(emote)
        ? prev.filter((e) => e !== emote)
        : prev.length < 4
        ? [...prev, emote]
        : prev
    );
  };

  const handleSubmit = () => {
    const payload = {
      champion: selectedChampion.name,
      quote: selectedQuote,
      ability: selectedAbility,
      emotes: selectedEmotes,
      skin: selectedSkin
    };

    console.log("Lobby creat cu datele:", payload);
    alert("Lobby-ul a fost creat (simulat)!");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto space-y-6 bg-gray-800 p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-yellow-400">Creare Lobby Nou</h1>

        {/* Select Champion */}
        <div>
          <label className="block mb-1">Campion:</label>
          <select
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={selectedChampion.name}
            onChange={handleChampionChange}
          >
            {champions.map((champ) => (
              <option key={champ.name} value={champ.name}>
                {champ.name}
              </option>
            ))}
          </select>
        </div>

        {/* Quote */}
        <div>
          <label className="block mb-1">Quote:</label>
          <select
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={selectedQuote}
            onChange={(e) => setSelectedQuote(e.target.value)}
          >
            <option value="">Selectează o replică</option>
            {selectedChampion.quotes.map((q, i) => (
              <option key={i} value={q}>
                {q}
              </option>
            ))}
          </select>
        </div>

        {/* Ability */}
        <div>
          <label className="block mb-1">Abilitate:</label>
          <select
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={selectedAbility}
            onChange={(e) => setSelectedAbility(e.target.value)}
          >
            <option value="">Selectează abilitate</option>
            {selectedChampion.abilities.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        {/* Emotes */}
        <div>
          <label className="block mb-2">Emote-uri (maxim 4):</label>
          <div className="flex flex-wrap gap-2">
            {selectedChampion.emotes.map((emote) => (
              <button
                key={emote}
                onClick={() => toggleEmote(emote)}
                className={`px-3 py-1 rounded border ${
                  selectedEmotes.includes(emote)
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-700 text-white"
                }`}
              >
                {emote}
              </button>
            ))}
          </div>
        </div>

        {/* Skin */}
        <div>
          <label className="block mb-1">Skin:</label>
          <select
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={selectedSkin}
            onChange={(e) => setSelectedSkin(e.target.value)}
          >
            <option value="">Selectează skin</option>
            {selectedChampion.skins.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold"
          >
            Creează Lobby
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditLobbyPage;
