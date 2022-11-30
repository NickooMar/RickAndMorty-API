import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import CharacterDetail from "./components/CharacterDetail/CharacterDetail";
import CharacterList from "./components/CharacterList/CharacterList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/:id" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
