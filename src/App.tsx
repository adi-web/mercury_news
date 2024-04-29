import React,{useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {useEffect} from "react";


function App() {


  return (

      <>

        <div className="al">
          <div id="adi" className="l">
              <Header/>
          </div>

          <Footer/>

        </div>
      </>
  );
}

export default App;
