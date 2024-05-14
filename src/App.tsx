import React,{useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {useEffect} from "react";


function App() {


  return (

      <>

          <div className="header-container">
              <Header/>
          </div>
            <div id="main-container" className="container-xxl  ">
            <Main />
            </div>
          <Footer/>


      </>
  );
}

export default App;
