import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Child from "./components/Child";
import Home from "./components/Home";
import Contact from "./components/Contact";  
import Skills from "./components/Skills";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Hook from "./components/Hook";
import State from "./hooks/State";
import Effect from "./hooks/Effect";  
import Effect2 from "./hooks/Effect2"; 
import Login from "./components/Login";

const App = () => {
  const fruit = ["Apple", "Banana", "Cherry"];

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home items={fruit} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/hook" element={<Hook />} />
          <Route path="/state" element={<State />} />
          <Route path="/effect" element={<Effect />} />
          <Route path="/effect2" element={<Effect2 />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
