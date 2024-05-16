import React from 'react'
import Slider from "react-slick"
import './Body.css'








function Main() {




    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const data=[
        {
            name:"Lorem ipsum dolor",
            img:'./placeholder.png',
            review:'Lorem ipsum dolor sit amet. '
        },
        {
            name:"Lorem ipsum dolor",
            img:'./placeholder.png',
            review:'Lorem ipsum dolor sit amet. '
        },
        {
            name:"Lorem ipsum dolor",
            img:'./placeholder.png',
            review:'Lorem ipsum dolor sit amet. '
        },
        {
            name:"Lorem ipsum dolor",
            img:'./placeholder.png',
            review:'Lorem ipsum dolor sit amet. '
        },
        {
            name:"Lorem ipsum dolor",
            img:'./placeholder.png',
            review:'Lorem ipsum dolor sit amet. '
        },
        {
            name:"Lorem ipsum dolor",
            img:'./placeholder.png',
            review:'Lorem ipsum dolor sit amet. '
        },
        {
            name:"Lorem ipsum dolor",
            img:'./placeholder.png',
            review:'Lorem ipsum dolor sit amet. '
        },{
            name:"Lorem ipsum dolor",
            img:'./placeholder.png',
            review:'Lorem ipsum dolor sit amet. '
        },{
            name:"Lorem ipsum dolor",
            img:'./placeholder.png',
            review:'Lorem ipsum dolor sit amet. '
        }
    ]




    return <div className="main-container">

        <div className="first-container">

            <div className="col-md-8 article-left">

                <div className="container-top">

                    <div className="container-info">
                        <h3 className="card-title">
                            <a href="./" className="hoverTextPrincipal ">Lorem
                                ipsum dolor sit amet tenetur deleniti
                            </a>
                        </h3>


                        <p className="card-text">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Pellentesque tortor orci, suscipit at lobortis ut,
                            luctus.</p>

                        <small className="text-muted">Related</small>
                        <div className="list-container-top">

                            <ul className="list-group-top">
                                <li className="list-item-top">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. <small
                                        className="text-muted">3 day ago</small></li>
                                <li className="list-item-top">Lorem ipsum dolor sit , consectetur adipiscing
                                    elit, do eiusmod tempor. <small
                                        className="text-muted">3 day ago</small></li>

                            </ul>
                        </div>

                    </div>


                    <div className=" style-img-left">
                        <img className="img-style" src="./placeholder.png"
                        />
                    </div>
                </div>


                <div className=" pt-3 container-article-left">

                    <div className="block-article">

                        <div className="grid-child">
                            <div className="img-article-left">
                                <img className="img-style" src="./placeholder.png"/>
                            </div>

                            <p className="card-title card-title-left"><a className="hoverText" href="./">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel consequat erat.</a>
                            </p>

                        </div>


                        <div className="grid-child">
                            <div className="img-article-left">
                                <img className="img-style" src="./placeholder.png"
                                />
                            </div>

                            <p className="card-title card-title-left"><a className="hoverText" href="./">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Vivamus leo nulla, sollicitudin sit amet suscipit. </a></p>


                        </div>

                    </div>


                    <div className="block-article">

                        <div className="grid-child">
                            <div className="img-article-left">
                                <img className="img-style" src="./placeholder.png"
                                />
                            </div>

                            <p className="card-title card-title-left"><a className="hoverText" href="./"> Lorem
                                ipsum dolor sit amet, consectetur
                                adipiscing elit. Ut vel consequat erat. </a></p>

                        </div>


                        <div className="grid-child">
                            <div className="img-article-left">
                                <img className="img-style" src="./placeholder.png"
                                />
                            </div>

                            <p className="card-title card-title-left"><a className="hoverText" href="./">Lorem ipsum
                                dolor sit amet, consectetur
                                adipiscing elit.</a></p>

                        </div>

                    </div>


                </div>


            </div>

            <div className=" col-4 headline-right">

                <div className="title-headline">
                    <h5> LATEST HEADLINES</h5>
                </div>

                <div className="list-headline">

                    <ul className="list-group-headline">
                        <li className="item-headline">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Etiam.
                            <p className="card-text"><small className="text-muted">2 day ago</small></p>
                        </li>
                        <li className="item-headline">Lorem ipsum dolor sit amet. Donec lorem metus.

                            <p className="card-text"><small className="text-muted">24 minutes ago</small></p></li>
                        <li className="item-headline">Lorem ipsum dolor consectetur adipiscing elit. Donec lorem
                            metus.

                            <p className="card-text"><small className="text-muted">1 day ago</small></p></li>
                        <li className="item-headline">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Donec lorem metus.
                            <p className="card-text"><small className="text-muted">3 day ago</small></p></li>
                        <li className="item-headline">
                            <div className="container-subscribe-only">

                                <p className="btn-subribe-only">SUBSCRIBER ONLY</p>

                            </div>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam.
                                <small className="text-muted"> 1 day ago</small></p></li>
                    </ul>

                    <div className="container-btn-headline border-0">

                        <p className="fw-bold ">
                            Omnis iste natus error
                            sit voluptatem accusantium
                        </p>
                        <button className="btn btn-headline"> SIGN UP</button>

                    </div>

                </div>
            </div>


        </div>

        <div className="container-article mt-5">

            <div className="title-card-container">

                <a className="title-color">MOST POPULAR</a>


            </div>
            <div className="block-popular">
                <ul className="list-group-popular ">

                    <li className="list-item-popular">
                        <span className="counter-list"> </span>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Nunc vitae metus vitae tellus.</p>
                    </li>
                    <li className="list-item-popular">
                        <span className="counter-list"> </span>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Nunc vitae metus vitae tellus.</p>
                    </li>
                    <li className="list-item-popular">
                        <span className="counter-list"> </span>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Nunc vitae vitae tellus.</p>
                    </li>
                    <li className="list-item-popular">
                        <span className="counter-list"> </span>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Nunc vitae metus vitae tellus.</p>
                    </li>
                    <li className="list-item-popular">
                        <span className="counter-list"> </span>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Nunc vitae metus vitae tellus,
                            metus vitae tellus.</p>
                    </li>

                </ul>
                <ul className="list-group-popular ">
                    <li className="list-item-popular">
                        <span className="counter-list"> </span>
                        <p>Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Nunc vitae metus vitae tellus.</p>
                    </li>
                    <li className="list-item-popular">
                        <span className="counter-list"> </span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae metus vitae
                            tellus.</p>
                    </li>
                    <li className="list-item-popular">
                        <span className="counter-list"> </span>
                        <p>Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Nunc vitae metus vitae tellus.</p>
                    </li>
                    <li className="list-item-popular">
                        <span className="counter-list"> </span>
                        <p>Lorem ipsum dolor
                            ,consectetur adipiscing elit. Nunc vitae metus vitae tellus.
                            sit amet, consectetur adipiscing elit. Nunc vitae metus vitae tellus.</p>
                    </li>
                    <li className="list-item-popular">
                        <span className="counter-list"> </span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae metus vitae
                            tellus.</p>
                    </li>

                </ul>
            </div>
        </div>

        <div className="cards mt-4">


            <div className="card style-card col-md-6 col-lg-6 col-xl-4">
                <div className="title-card-container">

                    <a className="title-card " href="./"> CRIME AND PUBLIC SAFETY</a>
                    <i className="fas fa-chevron-right mx-2"></i>

                </div>

                <img src="./placeholder.png"
                     className="card-img-top" alt="..."/>
                <div className="card-body card-body-style">
                    <h4 className="card-title"><a href="./" className="hoverTextPrincipal ">Lorem ipsum dolor sit
                        amet,
                        consectetur adipiscing elit.</a></h4>

                    <p className="card-text">Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit, ipsum dolor
                        sit amet, consectetur adipiscing elit.</p>

                    <p className="fw-bold text-style-body border-t"><a href="./" className="hoverText ">Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit.</a></p>
                    <p className="fw-bold text-style-body"><a href="./" className="hoverText ">Lorem ipsum dolor sit
                        amet,
                        consectetur adipiscing elit.Dolor sit amet, consectetur adipiscing elit.</a></p>
                    <p className="fw-bold"><a href="./" className="hoverText ">Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit.</a></p>


                </div>
            </div>

            <div className="card  style-card col-md-6 col-lg-6 col-xl-4">

                <div className="title-card-container">

                    <a className="title-card" href="./"> SPORTS</a>
                    <i className="fas fa-chevron-right mx-2"></i>

                </div>
                <img src="./placeholder.png"
                     className="card-img-top" alt="..."/>
                <div className="card-body card-body-style">
                    <h4 className="card-title"><a href="./" className="hoverTextPrincipal ">Lorem ipsum dolor sit
                        amet,
                        consectetur
                        adipiscing elit. Aliquam urna.</a></h4>
                    <p className="card-text">Lorem ipsum dolor
                        sit amet, consectetur adipiscing , ipsum dolor
                        sit amet, consectetur adipiscing elit.</p>


                    <p className="fw-bold text-style-body border-t "><a href="./" className="hoverText ">Lorem ipsum dolor sit
                        amet,
                        consectetur dolor elit, adipiscing elit.</a></p>
                    <p className="fw-bold text-style-body">

                        <div className="container-subscribe-only">

                            <p className="btn-subribe-only">SUBSCRIBER ONLY</p>

                        </div>

                        <a href="./" className="hoverText "> Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit.</a></p>
                    <p className="fw-bold"><a href="./" className="hoverText ">Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit dolor
                        sit amet</a></p>


                </div>
            </div>


            <div className="card style-card  col-md-6 col-lg-6 col-xl-4">
                <div className="title-card-container">

                    <a className="title-card" href="./"> THINGS TO DO
                    </a>
                    <i className="fas fa-chevron-right mx-2"></i>

                </div>

                <img src="./placeholder.png"
                     className="card-img-top" alt="..."/>
                <div className="ps-sm-0 mt-sm-2 mt-md-0 ps-md-2 ps-lg-2 ps-xl-2 card-body card-body-style">
                    <h4 className="card-title"><a href="./" className="hoverTextPrincipal">Lorem ipsum dolor sit
                        amet,
                        consectetur adipiscing elit.</a></h4>

                    <p className="card-text">Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit, ipsum dolor
                        sit amet, consectetur adipiscing elit.</p>


                    <p className="fw-bold text-style-body border-t"><a href="./" className="hoverText "> Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit.</a></p>
                    <p className="fw-bold text-style-body"><a href="./" className="hoverText "> Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit, ipsum dolor
                        sit amet, consectetur adipiscing elit.</a></p>
                    <p className="fw-bold"><a href="./" className="hoverText ">Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit.</a></p>


                </div>
            </div>


        </div>

        <div className="container-article  mt-5">
            <div className="title-card-container">

                <a className="title-card" href="./">PHOTOS</a>
                <i className="fas fa-chevron-right mx-2"></i>


            </div>

            <div className="col-sm-12 col-xxl-12 photos-container">

                <div className="col-lg-12 col-xl-7">
                    <img src="./placeholder.png"
                         className="card-img-top" alt="..."/>
                    <div className=" mt-md-0ps-xl-0 pb-2 card-body card-body-style">
                        <h4 className=" card-title"><a href="./" className="hoverTextPrincipal ">Lorem ipsum dolor
                            sit amet,
                            elit,ipsum dolor amet,
                            consectetur eli.</a></h4>
                        <p className="card-text">Lorem ipsum dolor sit amet,
                            consectetur elit</p>

                    </div>

                </div>

                <div className=" pt-md-2 pt-sm-3 pt-lg-0 ps-lg-0 ps-xl-4 col-md-12 col-lg-12 col-xl-5">
                    <div
                        className="block-photos pt-3 pb-3 pt-md-3 pb-sm-3 pb-md-3 pt-md-2 pt-lg-0  col-sm-5 col-md-5 col-lg-5 col-xl-12">
                        <div className=" pe-2 col-4">
                            <img src="./placeholder.png"
                                 className="card-img-top" alt="..."/>
                        </div>

                        <h6 className="col-8">
                            <div className="container-subscribe-only">

                                <p className="btn-subribe-only">SUBSCRIBER ONLY</p>

                            </div>

                            <a href="./" className="hoverText ">Lorem ipsum dolor sit amet,
                                consectetur elit.</a></h6>
                    </div>


                    <div
                        className="block-photos pt-3 pb-3 pt-sm-3  pt-md-3 pb-sm-3 pb-md-3 pt-md-2 pt-lg-2 ms-sm-2 ms-md-2 ms-lg-2 ms-xl-0  col-sm-5 col-md-5 col-lg-5 col-xl-12">
                        <div className="pe-2 col-4">
                            <img src="./placeholder.png"
                                 className="card-img-top" alt="..."/>
                        </div>
                        <h6 className="  col-8"><a href="./" className="hoverText ">Lorem ipsum dolor sit amet,
                            elit,ipsum dolor amet,
                            consectetur eli.</a></h6>
                    </div>

                    <div
                        className="block-photos border-b-photos pt-3 pb-3 pt-sm-3 pb-sm-3 pt-md-3 pb-md-3 pt-md-2 pt-lg-0  col-sm-5 col-md-5 col-lg-5 col-xl-12">
                        <div className=" pe-2 col-4">
                            <img src="./placeholder.png"
                                 className="card-img-top" alt="..."/>
                        </div>

                        <h6 className="col-8">
                            <div className="container-subscribe-only">

                                <p className="btn-subribe-only">SUBSCRIBER ONLY</p>

                            </div>

                            <a href="./" className="hoverText ">Lorem ipsum dolor sit amet,
                                consectetur elit.</a></h6>
                    </div>

                </div>
            </div>

            <div className="container-show-more">
                <button
                    className="btn-show-more row m-0 mt-1 w-100 fw-bold border-0 text-center text-uppercase d-flex justify-content-center align-content-center">Show
                    more photos
                </button>

            </div>
        </div>


        <div className="container-article mt-5">
            <div className="title-card-container">

                <a className="title-card" href="./">REAL ESTATE</a>
                <i className="fas fa-chevron-right mx-2"></i>


            </div>
            <div className="  col-sm-12 col-md-12 col-lg col-xxl-12 " style={{display: "inline-flex"}}>


                <div className="col-12  " style={{display: "inline-flex", flexWrap: "wrap"}}>

                    <div className=" col-sm-12 col-md-4 col-lg-5 col-xl-3">
                        <img src="./placeholder.png"
                             className="card-img-top" alt="..."/>
                    </div>


                    <div className="pt-4 pt-sm-2 pt-md-0 col-md-6 col-lg-6 col-xl-9"
                         style={{display: "inline-flex", flexWrap: "wrap"}}>
                        <div
                            className=" ps-sm-0 mt-sm-2 mt-md-0 ps-md-2 ps-lg-2 ps-xl-2 card-body col-md-6 col-xl-6 ">
                            <h4 className="card-title"><a href="./" className="hoverTextPrincipal ">Lorem ipsum
                                dolor sit
                                amet,
                                consectetur adipiscing elit.</a></h4>
                            <p className=" pt-md-1 pt-sm-2 card-text">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, ipsum dolor sit amet,
                                consectetur adipiscing elit.</p>
                        </div>

                        <div className="pt-sm-4 pt-md-0  ps-md-2 col-sm-12 col-lg-12 col-xl-5">
                            <div className=" title-article border-t   col-xl-12">

                                <h5 className="col-12"><a href="./" className="hoverText ">
                                    <div className="container-subscribe-only">

                                        <p className="btn-subribe-only">SUBSCRIBER ONLY</p>

                                    </div>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.</a></h5>
                            </div>


                            <div className=" title-article  col-xl-12">

                                <h5 className="col-12"><a href="./" className="hoverText ">Lorem ipsum dolor sit
                                    amet,
                                    consectetur elit.</a></h5>
                            </div>

                            <div className=" title-article border-b  col-xl-12">

                                <h5 className="col-12">
                                    <div className="container-subscribe-only">

                                        <p className="btn-subribe-only">SUBSCRIBER ONLY</p>

                                    </div>

                                    <a href="./" className="hoverText ">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit onsectetur elit.</a></h5>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>

        <div className="container-article mt-5">
            <div className="title-card-container">

                <a className="title-card" href="./">RESTAURANTS, FOOD AND DRINK</a>
                <i className="fas fa-chevron-right mx-1"></i>


            </div>
            <div className="  col-sm-12 col-md-12  col-xxl-12 " style={{display: "inline-flex"}}>


                <div className="col-12 " style={{display: "inline-flex", flexWrap: "wrap"}}>

                    <div className=" col-sm-12 col-md-4 col-lg-5 col-xl-3">
                        <img src="./placeholder.png"
                             className="card-img-top" alt="..."/>
                    </div>


                    <div className=" pt-4 pt-sm-4 pt-md-0  col-md-6 col-lg-6 col-xl-9"
                         style={{display: "inline-flex", flexWrap: "wrap"}}>
                        <div
                            className=" ps-sm-0 mt-sm-2 mt-md-0 ps-md-2 ps-lg-2 ps-xl-2  card-body col-md-6 col-xl-6 ">
                            <h4 className="card-title">

                                <div className="container-subscribe-only">

                                    <p className="btn-subribe-only">SUBSCRIBER ONLY</p>

                                </div>
                                <a href="./" className="hoverTextPrincipal ">Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.</a></h4>
                            <p className="card-text pt-sm-2 pt-md-2">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit amet,
                                consectetur adipiscing elit.</p>
                        </div>

                        <div className=" pt-sm-4 pt-md-0 ps-md-2 col-sm-12 col-lg-12 col-xl-5">
                            <div className=" title-article  border-t col-xl-12">

                                <h5 className="col-12"><a href="./" className="hoverText ">Lorem ipsum dolor sit
                                    amet,
                                    consectetur elit.</a></h5>
                            </div>


                            <div className=" title-article   col-xl-12">

                                <h5 className="col-12"><a href="./" className="hoverText ">Lorem ipsum dolor sit
                                    amet,
                                    consectetur adipiscing elit.</a></h5>
                            </div>

                            <div className=" title-article border-b   col-xl-12">

                                <h5 className="col-12">
                                    <div className="container-subscribe-only">

                                        <p className="btn-subribe-only">SUBSCRIBER ONLY</p>

                                    </div>

                                    <a href="./" className="hoverText ">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit,
                                        ipsum amet elit.</a></h5>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>


        <div className="container-article mt-5">
            <div className="title-card-container">

                <a className="title-card" href="./">OPINION</a>
                <i className="fas fa-chevron-right mx-2"></i>


            </div>
            <div className="  col-sm-12 col-md-12  col-xxl-12 " style={{display: "inline-flex"}}>


                <div className="col-12 " style={{display: "inline-flex", flexWrap: "wrap"}}>

                    <div className=" col-sm-12 col-md-4 col-lg-5 col-xl-3">
                        <img src="./placeholder.png"
                             className="card-img-top" alt="..."/>
                    </div>


                    <div className="pt-4 pt-sm-3 pt-md-0 col-md-6 col-lg-6 col-xl-9"
                         style={{display: "inline-flex", flexWrap: "wrap"}}>
                        <div
                            className=" ps-sm-0 mt-sm-2 mt-md-0 ps-md-2 ps-lg-2 ps-xl-2  card-body col-md-6 col-xl-7 ">
                            <h4 className="card-title">

                                <div className="container-subscribe-only">

                                    <p className="btn-subribe-only">SUBSCRIBER ONLY</p>

                                </div>
                                <a href="./" className="hoverTextPrincipal ">Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.</a></h4>
                            <p className="card-text pt-sm-2 pt-md-2">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit amet,
                                consectetur adipiscing elit.</p>
                        </div>

                        <div className="pt-sm-4 pt-md-0 ps-md-2 col-sm-12 col-lg-12 col-xl-5">
                            <div className=" title-article border-t col-xl-12">

                                <h5 className="col-12"><a href="./" className="hoverText ">Lorem ipsum dolor sit
                                    amet,
                                    consectetur elit.</a></h5>
                            </div>


                            <div className=" title-article  col-xl-12">

                                <h5 className="col-12"><a href="./" className="hoverText ">Lorem ipsum dolor sit
                                    amet,
                                    consectetur adipiscing elit.</a></h5>
                            </div>

                            <div className=" title-article border-b  col-xl-12">

                                <h5 className="col-12">
                                    <div className="container-subscribe-only">

                                        <p className="btn-subribe-only">SUBSCRIBER ONLY</p>

                                    </div>

                                    <a href="./" className="hoverText ">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit,
                                        ipsum amet elit.</a></h5>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>


        <div className="container-article mt-5">
            <div className="title-card-container">

                <a className="title-card" href="./">BUSINESS</a>
                <i className="fas fa-chevron-right mx-2"></i>


            </div>
            <div className="  col-sm-12 col-md-12  col-xxl-12 " style={{display: "inline-flex"}}>


                <div className="col-12 " style={{display: "inline-flex", flexWrap: "wrap"}}>

                    <div className=" col-sm-12 col-md-4 col-lg-5 col-xl-3">
                        <img src="./placeholder.png"
                             className="card-img-top" alt="..."/>
                    </div>


                    <div className="pt-4 pt-sm-4 pt-md-0 col-md-6 col-lg-6 col-xl-9"
                         style={{display: "inline-flex", flexWrap: "wrap"}}>
                        <div
                            className=" ps-sm-0 mt-sm-2 mt-md-0 ps-md-2 ps-lg-2 ps-xl-2  card-body col-md-6 col-xl-7 ">
                            <h4 className="card-title">

                                <div className="container-subscribe-only">

                                    <p className="btn-subribe-only">SUBSCRIBER ONLY</p>

                                </div>
                                <a href="./" className="hoverTextPrincipal ">Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.</a></h4>
                            <p className="card-text pt-sm-2 pt-md-2">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit amet,
                                consectetur adipiscing elit.</p>
                        </div>

                        <div className="pt-sm-4 pt-md-0 ps-md-2 col-sm-12 col-lg-12 col-xl-5">
                            <div className=" title-article border-t col-xl-12">

                                <h5 className="col-12"><a href="./" className="hoverText ">Lorem ipsum dolor sit
                                    amet,
                                    consectetur elit.</a></h5>
                            </div>


                            <div className=" title-article  col-xl-12">

                                <h5 className="col-12"><a href="./" className="hoverText ">Lorem ipsum dolor sit
                                    amet,
                                    consectetur adipiscing elit.</a></h5>
                            </div>

                            <div className=" title-article border-b col-xl-12">

                                <h5 className="col-12">
                                    <div className="container-subscribe-only">

                                        <p className="btn-subribe-only">SUBSCRIBER ONLY</p>

                                    </div>

                                    <a href="./" className="hoverText ">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit,
                                        ipsum amet elit.</a></h5>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>


        <div className="trending-nationaly mt-5">
            <div className="title-card-container">

                <a className="title-color">TRENDING NATIONALY</a>


            </div>

            <div className="block-popular">
                <ul className="list-group-popular ">
                    <li className="list-item-popular">
                        <span className="counter-list"> </span>
                        <p>Lorem ipsum ut perspiciatis unde omnis iste natus error
                            sit voluptatem
                            accusantium doloremque
                            ab illo inventore</p>
                    </li>
                    <li className="list-item-popular">
                        <span className="counter-list"> </span>
                        <p>Lorem ipsum ut perspiciatis unde omnis iste natus error
                            sit voluptatem
                            accusantium doloremque
                            ab illo inventore</p>
                    </li>


                </ul>
                <ul className="list-group-popular ">
                    <li className="list-item-popular">
                        <span className="counter-list"> </span>
                        <p>Lorem ipsum ut perspiciatis unde omnis iste natus error
                            sit voluptatem
                            accusantium doloremque
                            ab illo inventore</p>
                    </li>
                    <li className="list-item-popular">
                        <span className="counter-list"> </span>
                        <p>Lorem ipsum ut perspiciatis unde omnis iste natus error
                            sit voluptatem
                            accusantium doloremque
                            ab illo inventore</p>
                    </li>
                    <li className="list-item-popular">
                        <span className="counter-list"> </span>
                        <p>Lorem ipsum ut perspiciatis unde omnis iste natus error
                            sit voluptatem
                            accusantium doloremque
                            ab illo inventore</p>
                    </li>


                </ul>
            </div>
        </div>


        <div className="  ms-4 mb-5 mt-5 pt-4">

            <div className="container-top-events">

                    <div className=" col-8 col-sm-4 col-md-3 col-lg-4  col-xxl-7">
                       Upcoming Events
                    </div>
                <div className="all-events col-2 col-sm-4 col-md-6 col-sm-4 col-lg-6 col-xxl-3">
                    <i className="bi bi-calendar"></i>
                </div>
                <div className=" add-events col-2 col-sm-4 col-md-3 col-lg-2 col-xxl-2">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </div>

            </div>


            <div className="mt-20 container-slider ">
                <Slider {...settings}>


                    {data.map((d) => (

                        <div className="container-card-slider">
                            <div className="ms-2">
                                <img src={d.img} className="img-style" alt=""/>
                            </div>
                            <div className="ms-2">
                                <p className="title-card">{d.name}</p>
                                <p className="">{d.review}</p>
                            </div>
                        </div>

                    ))
                    }
                </Slider>


            </div>
            <div className="ms-2" style={{width:"85%"}}>
                <div className="row">
                    <div className=" icon-calendar col-xl-1"><i className="bi bi-calendar"></i>
                    </div>
                    <div className="style-item-calendar col-xl-1">WED</div>
                    <div className="style-item-calendar col-xl-1">THU</div>
                    <div className="style-item-calendar col-xl-1">FRI</div>
                    <div className="style-item-calendar col-xl-1">SAT</div>
                    <div className="d-none d-sm-block style-item-calendar col-xl-1">SUN</div>
                    <div className=" d-none d-sm-block style-item-calendar col-xl-1">MON</div>
                    <div className="d-none d-sm-block style-item-calendar col-xl-1">THU</div>
                    <div className=" d-none d-md-block style-item-calendar col-xl-1">WED</div>
                    <div className="d-none d-md-block style-item-calendar col-xl-1">THU</div>
                    <div className="d-none d-md-block style-item-calendar col-xl-1">FRI</div>
                    <div className="d-none d-lg-block style-item-calendar col-xl-1">SAT</div>
                    <div className="d-none d-lg-block style-item-calendar col-xl-1">SUN</div>
                    <div className=" d-none d-lg-block style-item-calendar col-xl-1">MON</div>
                    <div className="  d-none d-xl-block style-item-calendar col-xl-1">THU</div>
                    <div className=" d-none d-xl-block style-item-calendar col-xl-1">WED</div>
                    <div className="  d-none d-xl-block style-item-calendar col-xl-1">THU</div>
                    <div className=" d-none d-xl-blockstyle-item-calendar col-xl-1">FRI</div>
                    <div className=" d-none d-xxl-block style-item-calendar col-xl-1">SAT</div>



                </div>
            </div>

        </div>


    </div>
}

export default Main
