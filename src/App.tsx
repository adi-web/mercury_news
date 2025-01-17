import React,{useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {useEffect} from "react";


function App() {

    const [alert, setAlert] = useState(true);
    const handleAlert = () => {

        setAlert(!alert);
    }


    return (

<>
    {/* header  */}
        <div className={alert ? 'disabled' : 'header-container'}>
            <Header/>
        </div>


    {/* main page */}
    <div id="main-container" className={alert ? 'disable' : 'container-xxl'}>
        <Main/>
    </div>


    {/* Footer  */}
    <div className={alert ? 'disable' : 'footer'}>
        <Footer/>
    </div>



    {/* alert of replica mercury news */}

    <div className={alert ? 'center-alert ' : 'alert-disable '}>
        <div className={alert ? 'contaner-alert' : 'disable'}>
            <h3>
                This is a replica of the Mercury News
            </h3>
            <button className="btn-alert" onClick={handleAlert}>Show the Site</button>

        </div>


    </div>
</>
)
    ;
}

export default App;
