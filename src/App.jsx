import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"
import CreatePlaylist from "./pages/CreatePlaylist/CreatePlaylist"
import Profile from "./pages/Profile/Profile"

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Dashboard /> } />
      <Route path="/create-pl" element={ <CreatePlaylist /> } />
      <Route path="/profile" element={ <Profile /> } />
    </Routes>
  )
}

export default App
