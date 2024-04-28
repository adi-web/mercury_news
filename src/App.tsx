import React,{useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {useEffect} from "react";


function App() {


  return (
    <div id="page" className="root-page">
        <div id="adi" className="l">
        <Header />
        </div>
        <div className="container-body">
      <Body />
        </div>
        <div className="footer-container">
      <Footer />
        </div>

    </div>
  );
}

export default App;
