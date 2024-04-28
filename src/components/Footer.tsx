import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="container-footer">
            <div className="container-title">
                <img src="https://www.mercurynews.com/wp-content/uploads/2020/09/mn-logo.svg"
                     alt="The Mercury News"/>
            </div>
            <div className="footer-colom">
                <div className="colom">
                    <div className="block-footer">
                        <ul className="list-group">
                            <li className=" title-block">An item</li>
                            <li className="">A second item</li>
                            <li className="">A third item</li>
                            <li className="">A fourth item</li>
                            <li className="">And a fifth one</li>
                        </ul>
                    </div>
                    <div className="block-footer">
                        <ul className="list-group">
                            <li className=" title-block">An item</li>
                            <li className="">A second item</li>
                            <li className="">A third item</li>
                            <li className="">A fourth item</li>
                        </ul>
                    </div>
                </div>
                <div className="colom">
                    <div className="block-footer">
                        <ul className="list-group list-group-flush">
                            <li className=" title-block">An item</li>
                            <li className="">A second item</li>
                            <li className="">A third item</li>
                            <li className="">A fourth item</li>
                            <li className="">And a fifth one</li>
                            <li className="">A third item</li>
                            <li className="">A fourth item</li>
                            <li className="">And a fifth one</li>
                        </ul>
                    </div>
                </div>
                <div className="colom">
                    <div className="block-footer">
                    <ul className="list-group list-group-flush">
                        <li className=" title-block">An item</li>
                    <li className="">A second item</li>
                    <li className="">A third item</li>
                    <li className="">A fourth item</li>
                    <li className="">And a fifth one</li>
                </ul>
                    </div>
            </div>
            <div className="colom">
                <div className="block-footer">
                <ul className="list-group list-group-flush">
                    <li className=" title-block">An item</li>
                    <li className="">A second item</li>
                    <li className="">A third item</li>
                    <li className="">A fourth item</li>
                    <li className="">And a fifth one</li>
                </ul>
                </div>

                <div className="block-footer">
                    <button className="btn  btn-style-hidden"> Subscribe Now</button>
                </div>
            </div>
            </div>


        </div>
    )
}

export default Footer
