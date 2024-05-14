import React, {useState} from 'react'
import './Footer.css'

function Footer() {



    const [changegreater,setGreater]=useState(false);
    const [changegreater2,setGreater2]=useState(false);
    const [changegreater3,setGreater3]=useState(false);
    const [changegreater4,setGreater4]=useState(false);
    const [changegreater5,setGreater5]=useState(false);



    const handleGreater= ()=>{
        setGreater(!changegreater);

    }
    const handleGreater2= ()=>{
        setGreater2(!changegreater2);

    }
    const handleGreater3= ()=>{
        setGreater3(!changegreater3);

    }
    const handleGreater4= ()=>{
        setGreater4(!changegreater4);

    }
    const handleGreater5= ()=>{
        setGreater5(!changegreater5);

    }

    return (


        <div className="container-footer">
            <div className="container-title">
                <img src="https://www.mercurynews.com/wp-content/uploads/2020/09/mn-logo.svg"
                     alt="The Mercury News"/>
            </div>


            <div className="allblocks">
                <div className="block-container grid">

                    <ul className="list-group list-group-flush  top-list">
                        <li className="  list-item-style d-flex justify-content-between align-items-centeritem-block">
                            NEWS ALERTS
                        </li>
                        <li className="  font-item d-flex justify-content-between align-items-center item-block">
                            Today’s e-Edition
                        </li>
                        <li className=" font-item d-flex justify-content-between align-items-center item-block">
                            Mobile Apps
                        </li>
                        <li className=" font-item d-flex justify-content-between align-items-center item-block">
                            Site Map
                        </li>
                        <li className="font-item d-flex justify-content-between align-items-center item-block">
                            a fifth one
                        </li>
                    </ul>

                    <ul className="list-group list-group-flush  top-list">
                        <li className=" list-item-style d-flex justify-content-between align-items-centeritem-block">
                            MARKETPLACE
                        </li>
                        <li className="font-item d-flex justify-content-between align-items-center item-block">
                            Place a Real Estate Ad
                        </li>
                        <li className="font-item d-flex justify-content-between align-items-center item-block">
                            Lottery
                        </li>
                        <li className="font-item d-flex justify-content-between align-items-center item-block">
                            Place an Obituary
                        </li>

                    </ul>
                </div>

                <div className="second-block">
                    <div className="block-container">

                        <ul className="list-group list-group-flush top-list">
                            <li className="list-item-style d-flex justify-content-between align-items-center item-block">
                                CONTACT US
                            </li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">
                                Digital Access
                            </li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">
                                Join our Team
                            </li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">
                                Special Sections
                            </li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">
                                Sponsor a Group
                            </li>

                            <li className="font-item d-flex justify-content-between align-items-center item-block">
                                Privacy Policy
                            </li>

                        </ul>


                    </div>


                    <div className="block-container">

                        <ul className="list-group list-group-flush top-list">
                        <li className="list-item-style d-flex justify-content-between align-items-center item-block">
                            ADVERTISE WITH US
                            </li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">
                                Network Advertising
                            </li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">
                                Daily Ads
                            </li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">
                                Place a Legal Notic
                            </li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">
                                Public Notices
                            </li>
                        </ul>


                    </div>
                </div>
                <div className="third-block">

                    <div className="block-container grid">

                        <ul className="list-group list-group-flush  top-list">
                            <li className="list-item-style d-flex justify-content-between align-items-center item-block">
                                SUBSCRIBE
                            </li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">
                                Member Services
                            </li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">
                                Manage Subscriptions
                            </li>

                            <li className="font-item d-flex justify-content-between align-items-center item-block">
                                Archive Search
                            </li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">
                                Reprints
                            </li>
                        </ul>

                        <div className="top-list">

                            <button className=" btn btn-style btn-style-footer"> SUBSCRIBE NOW</button>


                        </div>
                    </div>

                </div>

            </div>
            <div className="container-dropdown">


                <div className="block-dropdown">

                    <a className="title-collapse"> NEW ALERTS </a>
                    <button className="btn-greater" type="button" onClick={handleGreater} data-bs-toggle="collapse"
                            data-bs-target="#first" aria-expanded="true" aria-controls="first">
                        <i className={changegreater ? "bi bi-chevron-up icon-greater" : "bi bi-chevron-down icon-greater"}></i>
                    </button>


                    <div className="collapse" id="first">

                        <ul className="list-group list-group-flush">
                            <li className="list-footer">Cras justo odio</li>
                            <li className="list-footer">Dapibus ac facilisis in</li>
                            <li className="list-footer">Morbi leo risus</li>

                        </ul>
                    </div>

                </div>
                <div className="block-dropdown">

                    <a className="title-collapse"> CONTACT </a>

                    <button className="btn-greater" type="button" onClick={handleGreater2} data-bs-toggle="collapse"
                            data-bs-target="#second" aria-expanded="true" aria-controls="second">
                        <i className={changegreater2 ? "bi bi-chevron-up icon-greater" : "bi bi-chevron-down icon-greater"}></i>
                    </button>

                    <div className="collapse" id="second">


                        <ul className="list-group list-group-flush">
                            <li className="list-footer">Cras justo odio</li>
                            <li className="list-footer">Dapibus ac facilisis in</li>
                            <li className="list-footer">Morbi leo risus</li>
                            <li className="list-footer">Porta ac consectetur ac</li>
                            <li className="list-footer">Vestibulum at eros</li>
                            <li className="list-footer">Porta ac consectetur ac</li>
                            <li className="list-footer">Vestibulum at eros</li>
                        </ul>
                    </div>

                </div>
                <div className="block-dropdown">
                    <a className="title-collapse" href="./"> ADVERTISE </a>
                    <button className="btn-greater" type="button" onClick={handleGreater3} data-bs-toggle="collapse"
                            data-bs-target="#third" aria-expanded="true" aria-controls="third">
                        <i className={changegreater3 ? "bi bi-chevron-up icon-greater" : "bi bi-chevron-down icon-greater "}></i>
                    </button>

                    <div className="collapse" id="third">

                        <ul className="list-group list-group-flush">
                            <li className="list-footer">Cras justo odio</li>
                            <li className="list-footer">Dapibus ac facilisis in</li>
                            <li className="list-footer">Morbi leo risus</li>
                            <li className="list-footer">Porta ac consectetur ac</li>
                            <li className="list-footer">Vestibulum at eros</li>
                        </ul>
                    </div>

                </div>
                <div className="block-dropdown">

                    <a className="title-collapse" href="./"> SUBSCRIBE </a>

                    <button className="btn-greater" type="button" onClick={handleGreater4} data-bs-toggle="collapse"
                            data-bs-target="#fourty" aria-expanded="true" aria-controls="fourty">
                        <i className={changegreater4 ? "bi bi-chevron-up  icon-greater" : "bi bi-chevron-down icon-greater "}></i>
                    </button>

                    <div className="collapse" id="fourty">

                        <ul className="list-group list-group-flush">
                            <li className="list-footer">Cras justo odio</li>
                            <li className="list-footer">Dapibus ac facilisis in</li>
                            <li className="list-footer">Morbi leo risus</li>
                            <li className="list-footer">Porta ac consectetur ac</li>
                            <li className="list-footer">Vestibulum at eros</li>
                        </ul>

                    </div>


                </div>


                <div className="block-dropdown">

                    <a className="title-collapse" href="./"> MARKERPLACE </a>

                    <button className="btn-greater" type="button" onClick={handleGreater5} data-bs-toggle="collapse"
                            data-bs-target="#fifty" aria-expanded="true" aria-controls="fifty">
                        <i className={changegreater5 ? "bi bi-chevron-up  icon-greater" : "bi bi-chevron-down icon-greater "}></i>
                    </button>

                    <div className="collapse" id="fifty">

                        <ul className="list-group list-group-flush">
                            <li className="list-footer">Cras justo odio</li>
                            <li className="list-footer">Dapibus ac facilisis in</li>
                            <li className="list-footer">Morbi leo risus</li>
                            <li className="list-footer">Porta ac consectetur ac</li>
                            <li className="list-footer">Vestibulum at eros</li>
                        </ul>

                    </div>


                </div>


                <div className="btn-1">
                <button className=" btn btn-style btn-style-footer"> SUBSCRIBE NOW</button>
                </div>

            </div>

            <div className="terms">
            <div className="container-xxl">
                <div className="row">
                    <div className="font-nav-footer col-md-4 col-lg-3 col-xl-2 col-xxl-2">
                        Terms of Use
                    </div>
                    <div className=" font-nav-footer col-md-4 col-lg-3 col-xl-2 col-xxl-2">
                        Cookie Policy
                    </div>
                    <div className=" font-nav-footer col-md-4 col-lg-3 col-xl-2 col-xxl-2">
                        California Notice at Collection
                    </div>
                    <div className=" font-nav-footer col-md-4 col-lg-3  col-xl-2 col-xxl-2">
                        Notice of Financial Incentive
                    </div>
                    <div className=" font-nav-footer col-md-4 col-lg-3 col-xl-2 col-xxl-2">
                        Do Not Sell/Share
                    </div>
                    <div className=" font-nav-footer col-md-4 col-lg-3  col-xl-2 col-xxl-2">
                        Notice of Financial Incentive
                    </div>
                    <div className=" font-nav-footer col-md-4 col-lg-3 col-xl-2 col-xxl-2">
                        California Notice at Collection
                    </div>
                    <div className="font-nav-footer  col-md-4 col-lg-3 col-xl-2 col-xxl-2">
                        Terms of Use
                    </div>

                </div>
            </div>

            </div>
        </div>


    )
}

export default Footer
