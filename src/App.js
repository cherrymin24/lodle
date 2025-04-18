import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import GamePage from './components/GamePage';
import LobbySelectionPage from './components/LobbySelectionPage';
import CreateLobbyPage from './components/CreateLobbyPage';
import MainLayout from './components/MainLayout';
import EditLobbyPage from './components/EditLobbyPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login separat, fără layout */}
        <Route path="/" element={<LoginPage />} />

        {/* Restul, cu layout */}
        <Route
          path="/lobbies"
          element={
            <MainLayout>
              <LobbySelectionPage />
            </MainLayout>
          }
        />
        <Route
          path="/create-lobby"
          element={
            <MainLayout>
              <CreateLobbyPage />
            </MainLayout>
          }
        />
        <Route
          path="/game"
          element={
            <MainLayout>
              <GamePage />
            </MainLayout>
          }
        />
        <Route
          path="/admin/lobbies/:lobbyId"
          element={
            <MainLayout>
              <EditLobbyPage />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
