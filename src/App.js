import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import SingleBlog from "./pages/singleBlog";
//import "./App.css";

import { loadUser } from './actions/authActions';

import testsrc from "./testsrc";
import $ from 'jquery';
window.jQuery = $;
window.jquery = $; 

function App() {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser())
    
  }, [dispatch])

  return (
    <>
    {/* <button onClick={window['alertHello']}>alert</button>  */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/post/:slug" element={<SingleBlog />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
