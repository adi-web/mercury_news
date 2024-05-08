import React from 'react'
import './Body.css'

function Body() {
    return (
        /*
        <div className=" body-container">

            <div className="primary-container">
                <div className="  principal-article">

                    <div className="card mb-3 card-style">
                        <div className="row g-0 ">

                            <div className="col-md-6">
                                <div className="card-body ">
                                    <div className="title-subscribe">
                                        <p>SUBSCRIBE ONLY </p>
                                    </div>
                                    <div className="body-card-primary">
                                        <h5 className="card-title ">California's great exodus finally
                                            slows as population incerases after 3-year decline</h5>

                                        <p className="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
                                        <p className="card-text"><small className="text-muted">Related</small></p>

                                        <ul className="list-principal">
                                            <li className="list-item-principal"><p>Oracle has more workes in the Bay
                                                Area than Texas moving
                                                headquartes in 2021</p>
                                                <p className="card-text"><small className="text-muted">1 day ago</small>
                                                </p>

                                            </li>
                                            <li>
                                                <div className="title-subscribe">
                                                    <p>SUBSCRIBE ONLY </p>
                                                </div>
                                                <p>

                                                    Austin's exas glow is fading as home prices frop, office vacancies
                                                    rise
                                                </p>
                                                <p className="card-text"><small className="text-muted">5 day ago</small>
                                                </p>


                                            </li>
                                            <li>

                                                <p>
                                                    2 California cities make list of 50 best places to live in us
                                                </p>
                                                <p className="card-text"><small className="text-muted">5 day ago</small>
                                                </p>

                                            </li>

                                        </ul>


                                    </div>
                                </div>
                            </div>


                            <div className=" style-img col-md-6">
                                <img
                                    src="https://www.mercurynews.com/wp-content/uploads/2024/04/SJM-L-POPGROWTH-0501-5.jpg?w=535"
                                    className="img-fluid rounded-start"
                                    alt="..."/>
                            </div>
                        </div>
                    </div>


                    <div className="principal-card-article">

                        <div className="card-group">
                            <div className="card">
                                <img className="card-img-left"
                                     src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22297%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20297%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18f35207b0d%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A15pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18f35207b0d%22%3E%3Crect%20width%3D%22297%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22110.125%22%20y%3D%2296.71999988555908%22%3E297x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                     alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to
                                        additional content.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins
                                        ago</small></p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top"
                                     src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22297%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20297%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18f35207b0d%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A15pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18f35207b0d%22%3E%3Crect%20width%3D%22297%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22110.125%22%20y%3D%2296.71999988555908%22%3E297x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                     alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This card has even longer content than
                                        the first to show that equal height action.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins
                                        ago</small></p>
                                </div>
                            </div>
                        </div>


                        <div className="card-group">
                            <div className="card">
                                <img className="card-img-top"
                                     src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22297%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20297%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18f35207b0d%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A15pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18f35207b0d%22%3E%3Crect%20width%3D%22297%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22110.125%22%20y%3D%2296.71999988555908%22%3E297x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                     alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to
                                        additional content.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins
                                        ago</small></p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top"
                                     src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22297%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20297%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18f35207b0d%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A15pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18f35207b0d%22%3E%3Crect%20width%3D%22297%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22110.125%22%20y%3D%2296.71999988555908%22%3E297x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                     alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This card has even longer content than
                                        the first to show that equal height action.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins
                                        ago</small></p>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>

                <div className="list-left">
                    <ul className="list-group">
                        <li className="list-group-item">

                            Lorem ipsum dolor sit amet eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            <p className="card-text"><small className="text-muted">5 day ago</small>
                            </p>
                        </li>
                        <li className="list-group-item">
                            Lorem ipsum dolor sit amet eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            <p className="card-text"><small className="text-muted">5 day ago</small></p>
                        </li>
                        <li className="list-group-item">

                            Lorem ipsum dolor sit amet eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            <p className="card-text"><small className="text-muted">5 day ago</small></p>
                        </li>
                        <li className="list-group-item">
                            Lorem ipsum dolor sit amet eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            <p className="card-text"><small className="text-muted">5 day ago</small></p>
                        </li>
                        <li className="list-group-item">
                            Lorem ipsum dolor sit amet eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            <p className="card-text"><small className="text-muted">5 day ago</small></p>
                        </li>
                        <li className="list-group-item">
                            Lorem ipsum dolor sit amet eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            <p className="card-text"><small className="text-muted">5 day ago</small></p>
                        </li>
                        <li className="list-group-item">
                            Lorem ipsum dolor sit amet eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            <p className="card-text"><small className="text-muted">5 day ago</small></p>
                        </li>

                        <li className="list-group-item"><button className="btn  btn-style-hidden"> Log in Now</button></li>
                    </ul>
                </div>
            </div>




            <div className="container">
                <div className="row">
                    <div className="col-md-6">.
                        <ol className="list-group list-group-numbered">
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Subheading</div>
                                    Cras justo odio
                                </div>
                                <span className="badge bg-primary rounded-pill">14</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Subheading</div>
                                    Cras justo odio
                                </div>
                                <span className="badge bg-primary rounded-pill">14</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Subheading</div>
                                Cras justo odio
                            </div>
                            <span className="badge bg-primary rounded-pill">14</span>
                        </li>


                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold"> <span className="badge bg-primary rounded-pill">14</span> Subheading
                                    </div>
                                    Cras justo odio
                                </div>

                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Subheading</div>
                                    Cras justo odio
                                </div>
                                <span className="badge bg-primary rounded-pill">14</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Subheading</div>
                                    Cras justo odio
                                </div>
                                <span className="badge bg-primary rounded-pill">14</span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

        </div>*/


        <div className="body-container">

            <div className="first-container">

                <div className="col-md-8 article-left">

                    <div className="container-top">

                        <div className="container-info">
                            <h1 className="card-title"><a href="./" className=" text-dark text-decoration-none">Lorem
                                ipsum dolor sit amet tenetur aut deleniti
                                accusamus</a>
                            </h1>

                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur
                                adipiscing elit ultrices hendrerit magna.</p>

                            <div className="list-container-top">
                                <small className="text-muted">Related</small>
                                <ul className="list-group-top">
                                    <li className="list-item-top">Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod tempor. <small
                                            className="text-muted">3 day ago</small></li>
                                    <li className="list-item-top">Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod tempor. <small
                                            className="text-muted">3 day ago</small></li>
                                    <li className="list-item-top">Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod tempor. <small
                                            className="text-muted">3 day ago</small></li>

                                </ul>
                            </div>

                        </div>


                        <div className=" style-img-left">
                            <img className="img-style" src="./placeholder.png"
                            />
                        </div>
                    </div>


                    <div className="container-article-left">

                        <div className="block-article">

                            <div className="grid-child">
                                <div className="img-article-left">
                                    <img className="img-style" src="./placeholder.png"  />
                                </div>

                                <h5 className="card-title card-title-left">his is a wider card with supporting text
                                    below as a
                                    natural lead-in to additional content.</h5>

                            </div>


                            <div className="grid-child">
                                <div className="img-article-left">
                                    <img className="img-style" src="./placeholder.png"
                                    />
                                </div>

                                <p className="card-title card-title-left">This is a wider card with supporting text
                                    below.</p>


                            </div>

                        </div>


                        <div className="block-article">

                            <div className="grid-child">
                                <div className="img-article-left">
                                    <img className="img-style" src="./placeholder.png"
                                    />
                                </div>

                                <p className="card-title card-title-left">his is a wider card with supporting text below
                                    as a
                                    natural lead-in to additional content.</p>

                            </div>


                            <div className="grid-child">
                                <div className="img-article-left">
                                    <img className="img-style" src="./placeholder.png"
                                    />
                                </div>

                                <p className="card-title card-title-left">his is a wider card with supporting text below
                                    as a
                                    natural lead-in to additional content.</p>

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
                            <li className="item-headline">Sed ut perspiciatis unde omnis iste natus error .
                                <p className="card-text"><small className="text-muted">Related</small></p>
                            </li>
                            <li className="item-headline">Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium.
                                <p className="card-text"><small className="text-muted">Related</small></p></li>
                            <li className="item-headline">Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium.
                                <p className="card-text"><small className="text-muted">Related</small></p></li>
                            <li className="item-headline">Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium.
                                <p className="card-text"><small className="text-muted">Related</small></p></li>
                            <li className="item-headline">Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium.
                                <p className="card-text"><small className="text-muted">Related</small></p></li>
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
                        <li className="list-item-popular">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque
                            ab illo inventore
                        </li>
                        <li className="list-item-popular">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque
                            ab illo inventore
                        </li>
                        <li className="list-item-popular">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque
                            ab illo inventore
                        </li>
                        <li className="list-item-popular">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque
                            ab illo inventore
                        </li>
                        <li className="list-item-popular">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque
                            ab illo inventore
                        </li>

                    </ul>
                    <ul className="list-group-popular ">
                        <li className="list-item-popular">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque
                            ab illo inventore
                        </li>
                        <li className="list-item-popular">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque
                            ab illo inventore
                        </li>
                        <li className="list-item-popular">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque
                            ab illo inventore
                        </li>
                        <li className="list-item-popular">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque
                            ab illo inventore
                        </li>
                        <li className="list-item-popular">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque
                            ab illo inventore
                        </li>

                    </ul>
                </div>
            </div>


            <div className="cards">


                <div className="card style-card col-md-6 col-lg-6 col-xl-4">
                    <div className="title-card-container">

                        <a className="title-card" href="./"> CRIME AND PUBLIC SAFETY</a>
                        <i
                            className="fas fa-greater-than"></i>

                    </div>

                    <img src="./placeholder.png"
                         className="card-img-top" alt="..."/>
                    <div className="card-body card-body-style">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.</p>
                        <p className="fw-bold text-style-body"> his is a wider card with supporting text below as a
                            natural
                            lead-in to additional content.</p>
                        <p className="fw-bold text-style-body"> his is a wider card with supporting text below as a
                            natural
                            lead-in to additional content.</p>
                        <p className="fw-bold"> his is a wider card with supporting text below as a
                            natural
                            lead-in to additional content.</p>


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
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.</p>
                        <p className="fw-bold text-style-body"> his is a wider card with supporting text below as a
                            natural
                            lead-in to additional content.</p>
                        <p className="fw-bold text-style-body"> his is a wider card with supporting text below as a
                            natural
                            lead-in to additional content.</p>
                        <p className="fw-bold"> his is a wider card with supporting text below as a
                            natural
                            lead-in to additional content.</p>

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
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.</p>
                        <p className="fw-bold text-style-body"> his is a wider card with supporting text below as a
                            natural
                            lead-in to additional content.</p>
                        <p className="fw-bold text-style-body"> his is a wider card with supporting text below as a
                            natural
                            lead-in to additional content.</p>
                        <p className="fw-bold"> his is a wider card with supporting text below as a
                            natural
                            lead-in to additional content.</p>
                    </div>
                </div>


            </div>


            <div className="container-article">
                <div className="title-card-container">

                    <a className="title-card" href="./">PHOTOS</a>
                    <i className="fas fa-greater-than"></i>


                </div>

                <div className="col-sm-12 col-xxl-12 photos-container">

                    <div className="col-lg-12 col-xl-7">
                        <img src="./placeholder.png"
                             className="card-img-top" alt="..."/>
                        <div className="card-body card-body-style">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                            <p className="fw-bold text-style-body"> his is a wider card with supporting text below as a
                                natural
                                lead-in to additional content.</p>
                        </div>

                    </div>

                    <div className="col-md-12 col-lg-12 col-xl-5">
                        <div className="block-photos p-3 col-sm-6 col-md-6 col-lg-6 col-xl-12">
                            <div className="p-1 col-3">
                                <img src="./placeholder.png"
                                     className="card-img-top" alt="..."/>
                            </div>
                            <h5 className="col-8">his is a wider card with supporting text</h5>
                        </div>


                        <div className="block-photos p-3 col-sm-6 col-md-6 col-lg-6 col-xl-12">
                            <div className="p-1 col-3">
                                <img src="./placeholder.png"
                                     className="card-img-top" alt="..."/>
                            </div>
                            <h5 className="col-8">his is a wider card with supporting text</h5>
                        </div>

                        <div className="block-photos p-3 col-sm-6 col-md-6 col-lg-6 col-xl-12">
                            <div className="p-1 col-3">
                                <img src="./placeholder.png"
                                     className="card-img-top" alt="..."/>
                            </div>
                            <h5 className="col-8 col-sm-12 col-md-8">his is a wider card with supporting text</h5>
                        </div>

                    </div>
                </div>
            </div>


            <div className="container-article">
                <div className="title-card-container">

                    <a className="title-card" href="./">PHOTOS</a>
                    <i className="fas fa-greater-than"></i>


                </div>
            <div className="  col-sm-12  col-xxl-12 " style={{display: "inline-flex"}}>


                <div className="col-12 " style={{display: "inline-flex", flexWrap: "wrap"}}>

                    <div className=" col-sm-12 col-md-6 col-lg-6 col-xl-5">
                        <img src="./placeholder.png"
                             className="card-img-top" alt="..."/>
                    </div>


                    <div className="col-md-6 col-lg-6 col-xl-7" style={{display: "inline-flex", flexWrap: "wrap"}}>
                        <div className=" p-2 card-body col-xl-6 ">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                        </div>

                        <div className=" col-lg-12 col-xl-5">
                            <div className=" p-2  col-xl-12">

                                <h5 className="col-12">his is a wider card with supporting text</h5>
                            </div>


                            <div className=" p-2 col-xl-12">

                                <h5 className="col-12">his is a wider card with supporting text</h5>
                            </div>

                            <div className=" p-2  col-xl-12">

                                <h5 className="col-12">his is a wider card with supporting text</h5>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
            </div>


            <div className="container-article">
                <div className="title-card-container">

                    <a className="title-card" href="./">PHOTOS</a>
                    <i className="fas fa-greater-than"></i>


                </div>
                <div className=" col-sm-12  col-xxl-12 " style={{display: "inline-flex"}}>


                    <div className="col-12 " style={{display: "inline-flex", flexWrap: "wrap"}}>

                        <div className=" col-sm-12 col-md-6 col-lg-6 col-xl-5">
                            <img src="./placeholder.png"
                                 className="card-img-top" alt="..."/>
                        </div>


                        <div className="col-md-6 col-lg-6 col-xl-7" style={{display: "inline-flex", flexWrap: "wrap"}}>
                            <div className=" p-2 card-body col-xl-6 ">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                            </div>

                            <div className=" col-lg-12 col-xl-5">
                                <div className=" p-2  col-xl-12">

                                    <h5 className="col-12">his is a wider card with supporting text</h5>
                                </div>


                                <div className=" p-2 col-xl-12">

                                    <h5 className="col-12">his is a wider card with supporting text</h5>
                                </div>

                                <div className=" p-2  col-xl-12">

                                    <h5 className="col-12">his is a wider card with supporting text</h5>
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
                        <li className="list-item-popular">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque
                            ab illo inventore
                        </li>
                        <li className="list-item-popular">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque
                            ab illo inventore
                        </li>


                    </ul>
                    <ul className="list-group-popular ">
                        <li className="list-item-popular">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque
                            ab illo inventore
                        </li>
                        <li className="list-item-popular">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque
                            ab illo inventore
                        </li>
                        <li className="list-item-popular">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque
                            ab illo inventore
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Body
