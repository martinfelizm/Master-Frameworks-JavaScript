import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';

class Sidebar extends Component {

    searchRef = React.createRef();

    state = {
        search: "",
        redirect: false
    }

    redirectToBusqueda = (e) => {
        e.preventDefault();

        this.setState({
            search: this.searchRef.current.value,
            redirect: true
        })
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to={'/redirect/' + this.state.search}></Redirect>
        }

        return (

            <aside id="sidebar">

                {this.props.addArticle === "true" &&
                    <div id="nav-blog" className="sidebar-item">
                        <h3>Puedes hacer esto</h3>
                        {/*<Link to={'/blog/add'} className="btn-AddItem">Crear árticulo</Link>*/}
                        <NavLink to={"/blog/add"} className="btn btn-AddItem">Crear árticulo</NavLink>
                    </div>
                }

                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <form onSubmit={this.redirectToBusqueda}  >
                        <input type="text" name="search" id="inpsearch" ref={this.searchRef} />
                        <input type="submit" name="submit" id="btnBuscar" className="btn btn-find" value="Buscar" />
                    </form>
                </div>
            </aside>
        );
    }
}

export default Sidebar;