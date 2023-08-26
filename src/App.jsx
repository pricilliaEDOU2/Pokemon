import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

//Pages
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Nomdupokemon from "./pages/Nomdupokemon";
import Types from "./pages/Types";
//Components

import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route>
            <Route path="/pokemon" element={<Pokemon />} />
            <Route path="/pokemon/:id" element={<Nomdupokemon />} />
          </Route>
          <Route path="/types" element={<Types />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
