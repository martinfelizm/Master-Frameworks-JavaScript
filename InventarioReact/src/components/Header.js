import React, { Component } from 'react';
import Menu from './Menu';
import Logo from '../assets/images/imgReact.png'


class Header extends Component {

    render() {

        return (
            <div>
                <header id="headerPrin">
                    <div className="center">
                        {/*LOGO*/}
                        <div id="logo">
                            <img src={Logo} className="app-logo" alt="Logotipo" />
                            <span id="brand"> {/*marca*/}
                                <strong>Master</strong>React
                            </span>
                        </div>

                        { /*MENU*/}
                        <Menu></Menu>

                        { /*LIMPIAR FLOTADOS*/}
                        <div className="clearfix"></div>
                    </div>
                </header>
            </div>

        );
    }


}

export default Header;