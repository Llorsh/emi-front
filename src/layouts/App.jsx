import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";



/* este es el layout del sitio, el cual se llamada en los hijos para mostrar la información correspondiente */

const App = ({ children }) => {

    const [pageTitle, setPageTitle] = useState(`App Layout - ${process.env.REACT_APP_TITLE}`);

    useEffect(() => {
        setPageTitle(`${children._self.props.title} - ${process.env.REACT_APP_TITLE}`)

        document.title = pageTitle;
    }, [children._self.props.title, pageTitle]);

    /* title page */


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/DashboardPage">{process.env.REACT_APP_TITLE}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/DashboardPage">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            Navbar text with an inline element
                        </span>
                    </div>
                </div>
            </nav>
            <div className="container">
                {children}
            </div>
        </>
    )
}

export default App;