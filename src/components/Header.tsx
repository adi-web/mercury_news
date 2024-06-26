import React, {useState} from 'react'
import "./Header.css"

function Header() {

    const [navLeft,setClick]=useState(false)// qua ho creato un stato click e la funzione setClick che mi permette di
    const [navRight, setClickRight]=useState(false)
    const [searchIcon, setSearch]=useState(false)

    const [titleview, setTitle]=useState(false)
    const [headerSticky, setHeader]=useState(false)

    const [scrollPage, setScroll]=useState(false)


    const clickSearch=()=>{

                if(navLeft==true)
                {
                    setClick(!navLeft);
                    setSearch(!searchIcon);

                }
                else  if(navRight==true)
                {
                    setClickRight(!navRight);
                    setSearch(!searchIcon);

                }
                else if(scrollPage==true)
                {
                    setSearch(!searchIcon);

                }
                else
                {
                    setSearch(!searchIcon);
                    setTitle(!titleview);
                }

        if(navLeft==false&&navRight==false||searchIcon==true)
            disablePage();








    }

    const clickUser=()=>{

        if(navRight==false && navLeft==true){
            setClick(!navLeft)
            setClickRight(!navRight);

        }
        else if(navRight==false && searchIcon==true)
        {
            setSearch(!searchIcon);
            setClickRight(!navRight);
        }
        else {
            setClickRight(!navRight);
        }

        if(navLeft==false&&searchIcon==false||navRight==true)
            disablePage();



    }



    const disablePage = () => {
        const appRoot=document.getElementById('second-container');


        if (navLeft==true || navRight==true||searchIcon==true)
        {

            // @ts-ignore
            appRoot.style.pointerEvents="visible"
            document.body.style.overflow='scroll';

        }
        else
        {
            // @ts-ignore
            appRoot.style.pointerEvents="none"
            document.body.style.overflow='hidden'

        }

    };
    const handleClick= () =>{

        if(navRight==true && navLeft==false ){
        setClick(!navLeft)
        setClickRight(!navRight);


        }
        else if(searchIcon==true && navLeft==false)
        {
            setClick(!navLeft);
            setSearch(!searchIcon);
        }
        else if(scrollPage==true) {
            setClick(!navLeft)
            //setTitle(!titleview)
        }
        else
        {

            setClick(!navLeft)
            setTitle(!titleview)
        }

        if(navRight==false&&searchIcon==false||navLeft==true)
            disablePage();


        }




    // @ts-ignore
    const listenScrollEvent = () => {

        const second4=document.getElementById("second-container");

        if (window.scrollY > 50) {




            if(titleview==false) {

                setTitle(!titleview);
            }


            if(headerSticky==false)
            {
                setScroll(!scrollPage);
                setHeader(!headerSticky);
            }

            // @ts-ignore
            second4.style.display='none';




        } else {


            if(titleview==true){

                setTitle(!titleview);


            // @ts-ignore
            second4.style.display='block';
                if(headerSticky==true)
                {setScroll(!scrollPage);
                    setHeader(!headerSticky);
                }
            }


        }
    }



    window.addEventListener('scroll', listenScrollEvent)



    return (
        <header className={headerSticky ? 'headersticky':'header'} >




                <div className={navLeft || navRight ? 'first_nav border-first-nav ' : 'first_nav '}>
                    <div className="container container-inside-header">
                        <div className="row row-disable">
                            <div className="col ">
                                <div>
                                    <div className="icon_nav" onClick={handleClick}>
                                        <i className={navLeft ? 'fas fa-times' : 'fas fa-bars'} aria-hidden="true"></i>
                                    </div>

                                </div>
                            </div>
                            <div className="col-6 col-md-4">
                                <div className={titleview ? 'active-title' : 'title-page'}>
                                    <img src="https://www.mercurynews.com/wp-content/uploads/2020/09/mn-logo.svg"
                                         alt="The Mercury News"/>
                                </div>
                            </div>
                            <div className=" col">
                                <div className="container-button">
                                    <button type="button" className="btn  btn-style">Subscribe</button>
                                    <button type="button" className="btn  btn-style">Log in</button>
                                    <div className="icon-search" onClick={clickSearch}>
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </div>
                                </div>

                                <div className="container-icon-button">

                                    <div className="icon-user" onClick={clickUser}>
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                        <i className={navRight ? "bi bi-chevron-up icon-greater" : "bi bi-chevron-down icon-greater"}></i>

                                    </div>
                                    <div className="icon-search" onClick={clickSearch}>
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </div>


                                </div>
                            </div>
                        </div>


                <div id="left-nav-menu" className={navLeft ? 'nav-menu active-nav' : 'nav-menu'}>
                    <div className="container-btn-hidden">
                        <button className="btn  btn-style-hidden"> Subscribe Now</button>
                    </div>

                    <div className=" weather-inside">
                        <div className="icon-weather">
                            <i className="bi bi-moon-stars"></i>
                        </div>
                    </div>

                    <ul className="list-group ">
                        <li className="list-group-item list-item-style d-flex justify-content-between align-items-center">

                            <span className="bi bi-house-door-fill"> Home Page</span>

                        </li>
                        <li className="list-group-item list-item-style d-flex justify-content-between align-items-center">
                            News
                            <span className="bi bi-chevron-right"></span>
                        </li>
                        <li className="list-group-item list-item-style d-flex justify-content-between align-items-center">
                            Local
                            <span className="bi bi-chevron-right "></span>
                        </li>
                        <li className="list-group-item list-item-style d-flex justify-content-between align-items-center">
                            Obituaries
                            <span className="bi bi-chevron-right "></span>
                        </li>
                        <li className="list-group-item list-item-style d-flex justify-content-between align-items-center">
                            Opinion
                            <span className="bi bi-chevron-right"></span>
                        </li>
                        <li className="list-group-item list-item-style d-flex justify-content-between align-items-center">
                            Sports
                            <span className="bi bi-chevron-right"></span>
                        </li>
                        <li className="list-group-item list-item-style d-flex justify-content-between align-items-center">
                            Tings To Do
                            <span className="bi bi-chevron-right"></span>
                        </li>
                        <li className="list-group-item list-item-style d-flex justify-content-between align-items-center">
                            Business
                            <span className="bi bi-chevron-right"></span>
                        </li>
                        <li className="list-group-item list-item-style d-flex justify-content-between align-items-center">
                            Real Estate

                        </li>
                        <li className="list-group-item list-item-style d-flex justify-content-between align-items-center">
                            Markerplace

                        </li>
                        <li className="list-group-item list-item-style d-flex justify-content-between align-items-center">
                            Subscribe
                        </li>
                        <li className="list-group-item list-item-style d-flex justify-content-between align-items-center">
                            Advertise
                        </li>
                        <li className="list-group-item list-item-style d-flex justify-content-between align-items-center">
                            Log in
                        </li>
                    </ul>

                    <div className="container-bottom-hidden">
                        <p className="text-center text-wrap">Get Morning Report and other email
                            newsletters</p>
                        <div className="container-btn-hidden">
                            <button className="btn  btn-style-hidden"> Sign Up</button>
                        </div>

                    </div>
                </div>

                <div id="right-nav-menu"  className={navRight ? 'nav-menu-right active-nav ' : 'nav-menu-right'}>
                    <div className="container-btn-hidden">
                        <button className="btn  btn-style-hidden"> Subscribe Now</button>
                    </div>
                    <div className="container-btn-hidden">
                        <button className="btn  btn-style-hidden"> Log in Now</button>
                    </div>
                    <div className="container-empty">

                    </div>

                    <div className="container-bottom-hidden">
                        <p className="text-center text-wrap">Get Morning Report and other email
                            newsletters</p>
                        <div className="container-btn-hidden">
                            <button className="btn  btn-style-hidden"> Sign Up</button>
                        </div>

                    </div>

                </div>

                        <div className={searchIcon ? 'search active-search' : 'search'}>
                            <div className="input-group-form  ">

                                <i className="fa fa-search search-form" aria-hidden="true"></i>
                                <input className="form-style" type="text" placeholder="Type your search"
                                       aria-label="Type your search"/>

                                <button type="button" className="btn btn-search">search</button>
                            </div>

                        </div>
                        <div id="second-container">
                        <div className="middle-nav">
                                <div className="container-fluid">
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
                                             alt="The Mercury News"/>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div  className="bottom-nav">
                        <nav className="navbar navbar-expand-lg ">
                            <div className="container-fluid ">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="./">News</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="./">Local</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="./">Obituaries</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="./">Thing To Do</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="./">Business</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="./">Real Estate</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="./">Opinion</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="./">Marketplace</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="./">e-Edition</a>
                                    </li>

                                </ul>

                            </div>
                        </nav>


                    </div>

                    <div className=" container-xxl  container-nav-trending">

                        <p> TRENDING: </p>
                        <nav className="container ">
                            <ul className="row nav-trending">
                                <li className="nav-item col-lg-3 col-xl-3 col-xxl-2">
                                    <a className="nav-link " href="./">Yosemite's summer prep</a>
                                </li>
                                <li className="nav-item col-lg-3 col-xl-3 col-xxl-2">
                                    <a className="nav-link " href="./">King Charles'funeral</a>
                                </li>
                                <li className="nav-item col-lg-3 col-xl-3 col-xxl-2">
                                    <a className="nav-link " href="./">Rattlesnake season begins</a>
                                </li>
                                <li className="nav-item col-lg-3 col-xl-3 col-xxl-2">
                                    <a className="nav-link " href="./">NFL Draft winner & losers</a>
                                </li>
                                <li className="nav-item d-none d-xl-block col-xxl-2">
                                    <a className="nav-link " href="./">Backwoods Barbie mystery</a>
                                </li>

                            </ul>
                        </nav>


                    </div>


                </div>

            </div>
        </div>
        </header>
    )
}

export default Header
