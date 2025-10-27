import { Routes, Route } from "react-router-dom";
import './App.css'
import AccueilPage from "./pages/AccueilPage.jsx";
import VideoPage from "./pages/VideoPage.jsx";
import RadioPage from "./pages/RadioPage.jsx";


function App() {

  return (
    <Routes>
      <Route path="/" element={<AccueilPage />} />
      <Route path="/video" element={<VideoPage />} />
      <Route path="/radio" element={<RadioPage />} />
    </Routes>
  )
}

export default App;
