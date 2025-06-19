import React from "react";
import Child from "./components/Child";
import Home from "./components/Home";
import Contact from "./components/Contact";  
import Skills from "./components/Skills";
import Counter from "./components/Counter";

const App = () => {
  var fruit = ["Apple", "Banana", "Cherry"];

  return (
    <div>
      <Child name="Bharath" phno="1234567890" dept="IT" />
      <Home items={fruit} />
      <Counter />
      <Contact />
      <Skills />
    </div>
  );
};

export default App;
