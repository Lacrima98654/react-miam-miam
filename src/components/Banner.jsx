import React  from "react";

const Banner = () =>(
    <React.Fragment>
        <div className="container mb-auto">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
                <a href="/" className="mb-3 mb-md-0 me-md-auto text-decoration-none">
                    <span className="logo" style={{color:"yellow"}}>Miam Miam</span>
                </a>
                <ul className="nav nav-masthead">
                    <li className="nav-item">
                        <a className="nav-link" href="#menu">Menu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#shop">Shop</a>
                    </li>
                </ul>
            </header>
        </div>

    </React.Fragment>
);

export default Banner;