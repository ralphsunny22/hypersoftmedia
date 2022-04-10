import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
//import "./App.css";

import testsrc from "./testsrc";
import $ from 'jquery';
window.jQuery = $;
window.jquery = $; 

function App() {
  useEffect(() => {
    console.log('lorem');
    //testsrc;
  }, []);
  return (
    <>
    {/* <button onClick={window['alertHello']}>alert</button>  */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
