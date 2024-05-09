import React,{useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {useEffect} from "react";


function App() {


  return (

      <>

          <div className="header-container">
              <Header/>
          </div>
            <div id="main-container" className="container-xxl  ">
            <Body />
            </div>
          <Footer/>


      </>
  );
}

export default App;
