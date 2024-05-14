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
                        <li className="  list-item-style d-flex justify-content-between align-items-centeritem-block">An
                            item
                        </li>
                        <li className="  font-item d-flex justify-content-between align-items-center item-block">A
                            second item
                        </li>
                        <li className=" font-item d-flex justify-content-between align-items-center item-block">A
                            third item
                        </li>
                        <li className=" font-item d-flex justify-content-between align-items-center item-block">A
                            fourth item
                        </li>
                        <li className="font-item d-flex justify-content-between align-items-center item-block">And
                            a fifth one
                        </li>
                    </ul>

                    <ul className="list-group list-group-flush  top-list">
                        <li className=" list-item-style d-flex justify-content-between align-items-centeritem-block">An
                            item
                        </li>
                        <li className="font-item d-flex justify-content-between align-items-center item-block">A
                            second item
                        </li>
                        <li className="font-item d-flex justify-content-between align-items-center item-block">A
                            third item
                        </li>
                        <li className="font-item d-flex justify-content-between align-items-center item-block">A
                            fourth item
                        </li>
                        <li className="font-item d-flex justify-content-between align-items-center item-block">And
                            a fifth one
                        </li>
                    </ul>
                </div>

                <div className="second-block">
                    <div className="block-container">

                        <ul className="list-group list-group-flush top-list">
                            <li className="list-item-style d-flex justify-content-between align-items-center item-block">An
                                item
                            </li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">A
                                second item
                            </li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">A
                                third item
                            </li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">A
                                fourth item
                            </li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">And a
                                fifth one
                            </li>
                        </ul>


                    </div>


                    <div className="block-container">

                        <ul className="list-group list-group-flush top-list">
                            <li className="list-item-style d-flex justify-content-between align-items-center item-block">An
                                item
                            </li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">A
                                second item
                            </li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">A
                                third item
                            </li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">A
                                fourth item
                            </li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">And a
                                fifth one
                            </li>
                        </ul>


                    </div>
                </div>
                <div className="third-block">

                    <div className="block-container grid">

                        <ul className="list-group list-group-flush  top-list">
                            <li className="list-item-style d-flex justify-content-between align-items-center item-block">An
                                item
                            </li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">A
                                second item
                            </li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">A
                                third item
                            </li>
                            <li className="font-item d-flex justify-content-between align-items-centeritem-block">A
                                fourth item
                            </li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">And a
                                fifth one
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
                    <div className="col-md-4 col-lg-3 col-xl-2 col-xxl-2">
                        Terms of Use
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-2 col-xxl-2">
                        Cookie Policy
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-2 col-xxl-2">
                        California Notice at Collection
                    </div>
                    <div className="    col-xl-2 col-xxl-2">
                        Notice of Financial Incentive
                    </div>
                    <div className=" col-md-6 col-xl-2">
                        Do Not Sell/Share My Personal Information
                    </div>

                </div>
            </div>

            </div>
        </div>


    )
}

export default Footer
