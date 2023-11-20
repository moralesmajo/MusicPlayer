import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"
import CreatePlaylist from "./pages/CreatePlaylist/CreatePlaylist"
import Profile from "./pages/Profile/Profile"
import MyPlaylists from "./pages/MyPlaylists/MyPlaylists"
import PlaylistDetails from "./pages/PlaylistDetails/PlaylistDetails"

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Dashboard /> } />
      <Route path="/create-pl" element={ <CreatePlaylist /> } />
      <Route path="/profile" element={ <Profile /> } />
      <Route path="/my-pl" element={ <MyPlaylists /> } />
      <Route path="/pl-details" element={ <PlaylistDetails /> } />
    </Routes>
  )
}

export default App
