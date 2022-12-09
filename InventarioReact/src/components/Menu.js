import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {

    render() {

        return (
            <div>
                <nav id="menuPrin">
                    <ul>
                        <li>
                            <NavLink exact to="/" activeClassName="activeRouter">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/blog" activeClassName="activeRouter">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/formulario" activeClassName="activeRouter">Formulario</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/mi-prueba" activeClassName="activeRouter">Pagina 1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/peliculas" activeClassName="activeRouter">Peliculas</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

        );
    }
}

export default Menu;