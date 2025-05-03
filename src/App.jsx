import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import {useSelector, useDispatch} from 'react-redux';

function App() {

  const count = useSelector((state) => state.count); // get count from store
  const dispatch = useDispatch(); // create dispatch function
  return (
    // <Router>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<SignUp />} />
    //     <Route path="/signin" element={<SignIn />} />
    //     <Route path="/blogs" element={<BlogList />} />
    //     <Route path="/blogs/:id" element={<BlogDetail />} />
    //   </Routes>
    // </Router>

    

    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );

  
}

export default App;

