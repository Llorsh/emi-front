import React from 'react';
import { Navigate } from "react-router-dom";

import AuthService from '../services/AuthService';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            remember: false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        /* title page */
        document.title = 'Login';
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { email, password, remember } = this.state;
        /* creamos el objecto con los datos a enviar */

        const data = {
            email,
            password,
            remember,
        };

        AuthService.loginParent(data)
            .then((response) => {
                window.location.href = '/DashboardPage';

                return <Navigate to="/DashboardPage" />;
                
            })
            .catch((error) => {
                console.log(error);
            });
    }



    render() {
        return (
            <div className={`container-fluid`} >
                <div className="row">
                    <div className="col-md-8">
                        <img className='img-fluid' src="https://ecosistemas.ovacen.com/wp-content/uploads/2018/01/bosque.jpg.webp" alt="" />
                    </div>
                    <div className={`col-md-4`}>
                        <div className="container">
                            <form onSubmit={this.handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" aria-describedby="emailHelp" name="email" value={this.state.email} onChange={this.handleInputChange} required />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleInputChange} required />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" value={this.state.remember} />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}