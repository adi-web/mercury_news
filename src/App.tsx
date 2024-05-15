import React,{useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {useEffect} from "react";


function App() {

const [alert,setAlert]=useState(true);
const handleAlert=()=>{

    setAlert(!alert);
}



  return (

      <div className={alert ? 'center-alert ':''}>

          <div className={alert ? 'disable':'header-container'}>
              <Header/>
          </div>
            <div id="main-container" className={alert ? 'disable': 'container-xxl' }>
            <Main />
            </div>
          <div  className={alert ? 'disable': '' }>
          <Footer />
          </div>

          <div className={alert ? 'container-alert':'disable'}>
              <h3>
                  This is a replica of the Mercury News
              </h3>
                <button className="btn-alert" onClick={handleAlert}>Show the Site</button>

          </div>


      </div>
  );
}

export default App;
