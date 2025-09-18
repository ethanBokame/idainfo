import { Routes, Route } from "react-router-dom";
import './App.css'
import AccueilPage from "./pages/AccueilPage.jsx";


function App() {

  return (
    <Routes>
      <Route path="/" element={<AccueilPage />} />
    </Routes>
  )
}

export default App;
