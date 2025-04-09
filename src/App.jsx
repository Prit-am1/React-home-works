import { useState } from "react";
import "./App.css";
import Todolist from "./components/Todolist";
import Userdata from "./components/Userdata";
import Toggletheme from "./components/Toggletheme";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
 return (
  <>
    {/* <Todolist /> */}
    {/* <Userdata /> */}
    <ThemeProvider>
      <Toggletheme />
    </ThemeProvider>
  </>
 ); 
};

export default App;

// I am on my newBranch. This change has to be added in my main branch 😀