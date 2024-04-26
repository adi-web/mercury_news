import React, {useState} from 'react'
import "./Header.css"

function Header() {

    const [adi,setClick]=useState(false)// qua ho creato un stato click e la funzione setClick che mi permette di
    const [navRight, setClickRight]=useState(false)

    const clickUser=()=>{setClickRight(!navRight)}
    const handleClick= () =>{
        const appRoot=document.getElementById('bho');
        // @ts-ignore
        appRoot.style.opacity=0.5;

        setClick(!adi)}


    return (
        <header className="header">

        <div className="nav_wrapper_primary">
            <div className="nav_wrapper_secondary">
                <div className="first_nav">
                    <div className="container">
                        <div className="row">
                            <div className="col ">
                                <div>
                                <div className="icon_nav" onClick={handleClick}>
                                    <i className={adi ? 'fas fa-times' : 'fas fa-bars'} aria-hidden="true"></i>
                                </div>

                                   <div className={adi ? 'nav-menu active root': 'nav-menu'} >
                                    <ul className="nav">
                                        <li>
                                            cisdi
                                        </li>
                                    </ul>

                                   </div>
                                </div>

                            </div>
                            <div className="col-6">
                                <div className={adi ? 'active-title': 'title-page'}>
                                    <h2 className="title"> The Mercury News</h2>
                                </div>
                            </div>
                            <div className=" col">
                                <div className="container-button">
                                    <button type="button" className="btn  btn-style">Subscribe</button>
                                    <button type="button" className="btn  btn-style">Log in</button>
                                    <div className="icon-search">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </div>
                                </div>

                                <div className="container-icon-button">

                                    <div className="icon-user" onClick={clickUser}>
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                    </div>
                                    <div className="icon-search">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </div>


                                    <div className={navRight ? 'nav-menu-right active ' : 'nav-menu-right'}>
                                        <ul className="nav">
                                            <li>
                                                cisdi
                                            </li>
                                        </ul>

                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>

                </div>

                <div className="middle-nav">


                </div>

            </div>
        </div>
        </header>
    )
}

export default Header
