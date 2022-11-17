import React from 'react';

import App from '../layouts/App';


export default class DashboardPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        /* page title */
    }

    render(){

        return (
            <App>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <h1>DashboardPage</h1>
                        </div>
                    </div>
                </div>
            </App>

        )
    }
}