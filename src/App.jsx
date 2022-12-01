import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from "./Pages/LandingPage";
import MainPage from './Pages/MainPage';
import FeedPage from './Pages/Feedpage';
import Diaper from './Pages/Diaper';
import Nap from './Pages/Nap';
import RecipeSearch from './Pages/RecipeSearch';
import { useState } from "react";

function App() {
  const [name, setBabyName] = useState("");
  const [age, setBabyAge] = useState("");
  const [choice, setChoice] = useState([]);
  const [pic, setPic] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage name={name} setBabyName={setBabyName} age={age} setBabyAge={setBabyAge} choice={choice} setChoice={setChoice} pic={pic} setPic={setPic}/>}/>
        <Route path="/MainPage" element={<MainPage name={name} age={age} choice={choice} pic={pic}/>} />
        <Route path="/FeedPage" element={<FeedPage name={name}/>} />
        <Route path="/Nap" element={<Nap name={name}/>} />
        <Route path="/Diaper" element={<Diaper name={name}/>} />
        <Route path="/RecipeSearch" element={<RecipeSearch name={name} choice={choice} />} />
      </Routes>
    </BrowserRouter>
  )
};
export default App;
