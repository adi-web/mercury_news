import React from 'react'
import './Footer.css'

function Footer() {
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
                        <li className="list-item-style d-flex justify-content-between align-items-center item-block">An item</li>
                        <li className="font-item d-flex justify-content-between align-items-center item-block">A second item</li>
                        <li className="font-item d-flex justify-content-between align-items-center item-block">A third item</li>
                        <li className="font-item d-flex justify-content-between align-items-center item-block">A fourth item</li>
                        <li className="font-item d-flex justify-content-between align-items-center item-block">And a fifth one</li>
                    </ul>


                </div>


                <div className="block-container">

                    <ul className="list-group list-group-flush top-list">
                        <li className="list-item-style d-flex justify-content-between align-items-center item-block">An item</li>
                        <li className="font-item d-flex justify-content-between align-items-center item-block">A second item</li>
                        <li className="font-item d-flex justify-content-between align-items-center item-block">A third item</li>
                        <li className="font-item d-flex justify-content-between align-items-center item-block">A fourth item</li>
                        <li className="font-item d-flex justify-content-between align-items-center item-block">And a fifth one</li>
                    </ul>


                </div>
                </div>
                <div className="third-block">

                    <div className="block-container grid">

                        <ul className="list-group list-group-flush  top-list">
                            <li className="list-item-style d-flex justify-content-between align-items-center item-block">An item</li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">A second item</li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">A third item</li>
                            <li className="font-item d-flex justify-content-between align-items-centeritem-block">A fourth item</li>
                            <li className="font-item d-flex justify-content-between align-items-center item-block">And a fifth one</li>
                        </ul>

                        <div className="top-list" >

                            <button className=" btn btn-style btn-style-footer"> Subscribe</button>


                        </div>
                    </div>

                </div>

            </div>

            <div className="terms">
                <p> Terms of Use
                    Cookie Policy
                    California Notice at Collection
                    Notice of Financial Incentive
                    Do Not Sell/Share My Personal Information
                    Arbitration
                    Powered by WordPress.com VIP
                    Copyright © 2024 MediaNews Group</p>

            </div>
        </div>
    )
}

export default Footer
