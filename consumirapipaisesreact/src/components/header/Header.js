import React, { Component } from 'react';
import '../../assets/css/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    render(){
        return(
            <React.Fragment>
                <nav className="navbar navbar-dark">
                    <div className="container">
                        <a href="#" className="navbar-brand">INFORMACIÓN DE PAISES - CONSUMIENDO API Rest</a>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Header;