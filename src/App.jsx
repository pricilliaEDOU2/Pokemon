import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

//Pages
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Nomdupokemon from "./pages/Nomdupokemon";
import Type from "./pages/Type";
import Typepokemon from "./pages/Typepokemon";
//Components

import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/pokemon/:id" element={<Nomdupokemon />} />
          <Route path="/type" element={<Type />} />
          <Route path="/type/:id" element={<Typepokemon />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
