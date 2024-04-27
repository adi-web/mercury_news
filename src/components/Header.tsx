import React, {useState} from 'react'
import "./Header.css"

function Header() {

    const [adi,setClick]=useState(false)// qua ho creato un stato click e la funzione setClick che mi permette di
    const [navRight, setClickRight]=useState(false)

    const clickUser=()=>{setClickRight(!navRight)}
    const handleClick= () =>{
        //const appRoot=document.getElementById('second-container');
        // @ts-ignore
        //appRoot.style.opacity=0.5;

        setClick(!adi)}


    return (
        <header className="header" >

        <div className="nav_wrapper_primary">
            <div className="nav_wrapper_secondary">
                <div className={adi ? 'first_nav border-first-nav':'first_nav'}>
                    <div className="container">
                        <div className="row">
                            <div className="col ">
                                <div>
                                <div className="icon_nav" onClick={handleClick}>
                                    <i className={adi ? 'fas fa-times' : 'fas fa-bars'} aria-hidden="true"></i>
                                </div>

                                   <div className={adi ? 'nav-menu active': 'nav-menu'} >
                                       <ul className="nav ">
                                           <li>
                                               cisdi
                                           </li>
                                           <li>
                                               cisdi
                                           </li>
                                           <li>
                                               cisdi
                                           </li>
                                           <li>
                                               cisdi
                                           </li>
                                           <li>
                                               cisdi
                                           </li>
                                           <li>
                                               cisdi
                                           </li>
                                           <li>
                                               cisdi
                                           </li>
                                           <li>
                                               cisdi
                                           </li>
                                           <li>
                                               cisdi
                                           </li>
                                           <li>
                                               cisdi
                                           </li>
                                           <li>
                                               cisdi
                                           </li>


                                       </ul>

                                   </div>
                                </div>

                            </div>
                            <div className="col-6 col-md-4">
                                <div className={adi ? 'active-title': 'title-page'}>
                                    <img src="https://www.mercurynews.com/wp-content/uploads/2020/09/mn-logo.svg"
                                         alt="The Mercury News"/>
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
                                            <li>
                                                cisdi
                                            </li>
                                            <li>
                                                cisdi
                                            </li>
                                            <li>
                                                cisdi
                                            </li>
                                            <li>
                                                cisdi
                                            </li>
                                            <li>
                                                cisdi
                                            </li>
                                            <li>
                                                cisdi
                                            </li>
                                            <li>
                                                cisdi
                                            </li>
                                            <li>
                                                cisdi
                                            </li>
                                            <li>
                                                cisdi
                                            </li>
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
                <div id="second-container">
                <div className="middle-nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-md-4">
                            <div className="container-weather">
                                <div className="icon-weather">
                                    <i className="bi bi-moon-stars"></i>
                                </div>
                            </div>
                            </div>
                            <div className="col-6 col-md-4">
                                <div className="active-title disable-title ">
                                    <img src="https://www.mercurynews.com/wp-content/uploads/2020/09/mn-logo.svg"
                                         alt="The Mercury News" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                    <div className="bottom-nav">
                        <nav className="navbar navbar-expand-lg ">
                            <div className="container-fluid ">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">News</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Local</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Obituaries</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Thing To Do</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Business</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Real Estate</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Opinion</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Marketplace</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">e-Edition</a>
                                        </li>

                                    </ul>

                            </div>
                        </nav>


                    </div>

                </div>

            </div>
        </div>
        </header>
    )
}

export default Header
