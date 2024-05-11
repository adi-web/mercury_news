import React from 'react'
import './Body.css'

function Body() {
    return (

        <div className="main-container">

            <div className="first-container">

                <div className="col-md-8 article-left">

                    <div className="container-top">

                        <div className="container-info">
                            <h1 className="card-title">
                                <a href="./" className="hoverText ">Lorem
                                    ipsum dolor sit amet tenetur deleniti
                                    </a>
                            </h1>


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

                        <div className="container-btn-headline">

                            <p className="fw-bold ">
                                Omnis iste natus error
                                sit voluptatem accusantium
                            </p>
                            <button className="btn btn-headline"> SIGN UP</button>

                        </div>

                    </div>
                </div>


            </div>

            <div className="container-article">

                <div className="title-card-container">

                    <a className="title-card" href="./">MOST POPULAR</a>


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

            <div className="cards">


                <div className="card style-card col-md-6 col-lg-6 col-xl-4">
                    <div className="title-card-container">

                        <a className="title-card " href="./"> CRIME AND PUBLIC SAFETY</a>
                        <i
                            className="fas fa-greater-than"></i>

                    </div>

                    <img src="./placeholder.png"
                         className="card-img-top" alt="..."/>
                    <div className="card-body card-body-style">
                        <h4 className="card-title"><a href="./" className="hoverText ">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.</a></h4>

                        <p className="card-text">Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit, ipsum dolor
                            sit amet, consectetur adipiscing elit.</p>

                        <p className="fw-bold text-style-body"><a href="./" className="hoverText ">Lorem ipsum dolor
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

                        <a className="title-card" href="./"> CRIME AND PUBLIC SAFETY</a>
                        <i
                            className="fas fa-greater-than"></i>

                    </div>
                    <img src="./placeholder.png"
                         className="card-img-top" alt="..."/>
                    <div className="card-body card-body-style">
                        <h4 className="card-title"><a href="./" className="hoverText ">Lorem ipsum dolor sit amet,
                            consectetur
                            adipiscing elit. Aliquam urna.</a></h4>
                        <p className="card-text">Lorem ipsum dolor
                            sit amet, consectetur adipiscing , ipsum dolor
                            sit amet, consectetur adipiscing elit.</p>


                        <p className="fw-bold text-style-body"><a href="./" className="hoverText ">Lorem ipsum dolor sit
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

                        <a className="title-card" href="./"> CRIME AND PUBLIC SAFETY
                        </a>
                        <i
                            className="fas fa-greater-than"></i>

                    </div>

                    <img src="./placeholder.png"
                         className="card-img-top" alt="..."/>
                    <div className="card-body card-body-style">
                        <h4 className="card-title"><a href="./" className="hoverText ">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.</a></h4>

                        <p className="card-text">Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit, ipsum dolor
                            sit amet, consectetur adipiscing elit.</p>


                        <p className="fw-bold text-style-body"><a href="./" className="hoverText "> Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit.</a></p>
                        <p className="fw-bold text-style-body"><a href="./" className="hoverText "> Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit, ipsum dolor
                            sit amet, consectetur adipiscing elit.</a></p>
                        <p className="fw-bold"><a href="./" className="hoverText ">Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit.</a></p>


                    </div>
                </div>


            </div>

            <div className="container-article">
                <div className="title-card-container">

                    <a className="title-card" href="./">REAL ESTATE</a>
                    <i className="fas fa-greater-than"></i>


                </div>

                <div className="col-sm-12 col-xxl-12 photos-container">

                    <div className="col-lg-12 col-xl-7">
                        <img src="./placeholder.png"
                             className="card-img-top" alt="..."/>
                        <div className="card-body card-body-style">
                            <h4 className="card-title"><a href="./" className="hoverText ">Lorem ipsum dolor sit amet,
                                elit,ipsum dolor amet,
                                consectetur eli.</a></h4>
                            <p className="card-text">Lorem ipsum dolor sit amet,
                                consectetur elit</p>

                        </div>

                    </div>

                    <div className="pt-md-2 pt-lg-0 ps-lg-0 ps-xl-4 col-md-12 col-lg-12 col-xl-5">
                        <div className="block-photos pb-md-2 pt-md-2 pb-lg-0 pt-lg-0  col-sm-6 col-md-6 col-lg-6 col-xl-12">
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


                        <div className="block-photos pb-2 pt-2 col-sm-6 col-md-6 col-lg-6 col-xl-12">
                            <div className="pe-2 col-4">
                                <img src="./placeholder.png"
                                     className="card-img-top" alt="..."/>
                            </div>
                            <h6 className="  col-8"><a href="./" className="hoverText ">Lorem ipsum dolor sit amet,
                                consectetur elit.</a></h6>
                        </div>

                        <div className="col-sm-6 pb-2 pt-2 col-md-6 col-lg-6 col-xl-12 block-photos">
                            <div className="pe-2 col-4">
                                <img src="./placeholder.png"
                                     className="card-img-top" alt="..."/>
                            </div>
                            <h6 className=" col-8 col-sm-12 col-md-8">
                                <div className="container-subscribe-only">

                                    <p className="btn-subribe-only">SUBSCRIBER ONLY</p>

                                </div>

                                <a href="./" className="hoverText ">
                                    Lorem ipsum dolor sit amet,
                                    consectetur elit.</a></h6>
                        </div>

                    </div>
                </div>
            </div>


            <div className="container-article">
                <div className="title-card-container">

                    <a className="title-card" href="./">REAL ESTATE</a>
                    <i className="fas fa-greater-than"></i>


                </div>
                <div className="  col-sm-12 col-md-12 col-lg col-xxl-12 " style={{display: "inline-flex"}}>


                    <div className="col-12 " style={{display: "inline-flex", flexWrap: "wrap"}}>

                        <div className=" col-sm-12 col-md-4 col-lg-5 col-xl-4">
                            <img src="./placeholder.png"
                                 className="card-img-top" alt="..."/>
                        </div>


                        <div className=" col-md-6 col-lg-6 col-xl-8" style={{display: "inline-flex", flexWrap: "wrap"}}>
                            <div className="  p-2 card-body col-md-6 col-xl-5 ">
                                <h4 className="card-title"><a href="./" className="hoverText ">Lorem ipsum dolor sit
                                    amet,
                                    consectetur adipiscing elit.</a></h4>
                                <p className="card-text">Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, ipsum dolor sit amet,
                                    consectetur adipiscing elit.</p>
                            </div>

                            <div className=" ps-xl-3 col-sm-12 col-lg-12 col-xl-6">
                                <div className=" title-article   col-xl-12">

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

                                <div className=" title-article   col-xl-12">

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

            <div className="container-article">
                <div className="title-card-container">

                    <a className="title-card" href="./">RESTAURANTS, FOOD AND DRINK</a>
                    <i className="fas fa-greater-than"></i>


                </div>
                <div className="  col-sm-12 col-md-12  col-xxl-12 " style={{display: "inline-flex"}}>


                    <div className="col-12 " style={{display: "inline-flex", flexWrap: "wrap"}}>

                        <div className=" col-sm-12 col-md-4 col-lg-5 col-xl-4">
                            <img src="./placeholder.png"
                                 className="card-img-top" alt="..."/>
                        </div>


                        <div className="  col-md-6 col-lg-6 col-xl-8" style={{display: "inline-flex", flexWrap: "wrap"}}>
                            <div className=" p-2  card-body col-md-6 col-xl-5 ">
                                <h4 className="card-title">

                                    <div className="container-subscribe-only">

                                        <p className="btn-subribe-only">SUBSCRIBER ONLY</p>

                                    </div>
                                    <a href="./" className="hoverText ">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit.</a></h4>
                                <p className="card-text">Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit amet,
                                    consectetur adipiscing elit.</p>
                            </div>

                            <div className=" ps-xl-3 col-sm-12 col-lg-12 col-xl-6">
                                <div className=" title-article p-2  col-xl-12">

                                    <h5 className="col-12"><a href="./" className="hoverText ">Lorem ipsum dolor sit
                                        amet,
                                        consectetur elit.</a></h5>
                                </div>


                                <div className=" title-article  col-xl-12">

                                    <h5 className="col-12"><a href="./" className="hoverText ">Lorem ipsum dolor sit
                                        amet,
                                        consectetur adipiscing elit.</a></h5>
                                </div>

                                <div className=" title-article   col-xl-12">

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


            <div className="container-article">
                <div className="title-card-container">

                    <a className="title-card" href="./">OPINION</a>
                    <i className="fas fa-greater-than"></i>


                </div>
                <div className="  col-sm-12 col-md-12  col-xxl-12 " style={{display: "inline-flex"}}>


                    <div className="col-12 " style={{display: "inline-flex", flexWrap: "wrap"}}>

                        <div className=" col-sm-12 col-md-4 col-lg-5 col-xl-4">
                            <img src="./placeholder.png"
                                 className="card-img-top" alt="..."/>
                        </div>


                        <div className="col-md-6 col-lg-6 col-xl-8" style={{display: "inline-flex", flexWrap: "wrap"}}>
                            <div className=" p-2  card-body col-md-6 col-xl-5 ">
                                <h4 className="card-title">

                                    <div className="container-subscribe-only">

                                        <p className="btn-subribe-only">SUBSCRIBER ONLY</p>

                                    </div>
                                    <a href="./" className="hoverText ">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit.</a></h4>
                                <p className="card-text">Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit amet,
                                    consectetur adipiscing elit.</p>
                            </div>

                            <div className=" ps-xl-3 col-sm-12 col-lg-12 col-xl-6">
                                <div className=" title-article p-2  col-xl-12">

                                    <h5 className="col-12"><a href="./" className="hoverText ">Lorem ipsum dolor sit
                                        amet,
                                        consectetur elit.</a></h5>
                                </div>


                                <div className=" title-article  col-xl-12">

                                    <h5 className="col-12"><a href="./" className="hoverText ">Lorem ipsum dolor sit
                                        amet,
                                        consectetur adipiscing elit.</a></h5>
                                </div>

                                <div className=" title-article   col-xl-12">

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

            <div className="container-article">
                <div className="title-card-container">

                    <a className="title-card" href="./">BUSINESS</a>
                    <i className="fas fa-greater-than"></i>


                </div>
                <div className="  col-sm-12 col-md-12  col-xxl-12 " style={{display: "inline-flex"}}>


                    <div className="col-12 " style={{display: "inline-flex", flexWrap: "wrap"}}>

                        <div className=" col-sm-12 col-md-4 col-lg-5 col-xl-4">
                            <img src="./placeholder.png"
                                 className="card-img-top" alt="..."/>
                        </div>


                        <div className="col-md-6 col-lg-6 col-xl-8" style={{display: "inline-flex", flexWrap: "wrap"}}>
                            <div className=" p-2  card-body col-md-6 col-xl-5 ">
                                <h4 className="card-title">

                                    <div className="container-subscribe-only">

                                        <p className="btn-subribe-only">SUBSCRIBER ONLY</p>

                                    </div>
                                    <a href="./" className="hoverText ">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit.</a></h4>
                                <p className="card-text">Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit amet,
                                    consectetur adipiscing elit.</p>
                            </div>

                            <div className=" ps-xl-3 col-sm-12 col-lg-12 col-xl-6">
                                <div className=" title-article p-2  col-xl-12">

                                    <h5 className="col-12"><a href="./" className="hoverText ">Lorem ipsum dolor sit
                                        amet,
                                        consectetur elit.</a></h5>
                                </div>


                                <div className=" title-article  col-xl-12">

                                    <h5 className="col-12"><a href="./" className="hoverText ">Lorem ipsum dolor sit
                                        amet,
                                        consectetur adipiscing elit.</a></h5>
                                </div>

                                <div className=" title-article   col-xl-12">

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


            <div className="trending-nationaly mt-4">
                <div className="title-card-container">

                    <a className="title-card" href="./">TRENDING NATIONALY</a>


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


        </div>
    )
}

export default Body
