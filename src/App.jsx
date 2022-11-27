import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from "./Pages/LandingPage";
import MainPage from './Pages/MainPage';
import FeedPage from './Pages/Feedpage';
import Diaper from './Pages/Diaper';
import { useState } from "react";

function App() {
  const [name, setBabyName] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage name={name} setBabyName={setBabyName}/>} />
        <Route path="/MainPage" element={<MainPage name={name}/>} />
        <Route path="/FeedPage" element={<FeedPage name={name}/>} />
        <Route path="/Diaper" element={<Diaper name={name}/>} />
      </Routes>
    </BrowserRouter>
  )
};
export default App;
