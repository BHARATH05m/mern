import React from "react";
import { Routes, Route } from "react-router-dom";

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
import Ref from "./hooks/Ref";
import Reducer from "./hooks/Reducer";
import About from "./components/About";
import { UserContext } from "./hooks/Context";
import Context from "./hooks/Context";
import Todo from "./components/Todo";
const App = () => {
  const fruits = ["Apple", "Banana", "Cherry"];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home items={fruits} />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/hook" element={<Hook />} />
        <Route path="/state" element={<State />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/effect2" element={<Effect2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ref" element={<Ref />} />
        <Route path="/reducer" element={<Reducer />} />
        <Route path="/about" element={<About items={fruits} />} />
        <Route path="/context" element={
          <UserContext>
            <Context />
          </UserContext>
        } />  
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
};

export default App;
