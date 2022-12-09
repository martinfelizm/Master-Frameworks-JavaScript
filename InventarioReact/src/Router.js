import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//Importar componentes
import Header from './components/Header';
import Footer from './components/Footer';
//import Pruebas from './components/Pruebas';
import Peliculas from './components/Peliculas';
import Pruebas from './components/Pruebas';
import Error from './components/Error';
import MiComponente from './components/MiComponente';
import MensajesEstatico from './components/MensajesEstatico';
import Home from './components/Home';
import Blog from './components/Blog';
import Formulario from './components/Formulario';
import Article from './components/Article';
import Search from './components/Search';
import AddArticle from './components/AddArticle';
import EditArticle from './components/EditArticle';

class Router extends Component {

    render() {

        // var nombre = "Martin";

        /*
        function HolaMundo(nombre, edad) {
            var presentacion = (
                <div>
                    <h2>Hola soy {nombre}</h2>
                    <h3>Tengo {edad} años </h3>
                </div>
            );

            return presentacion;
        }*/

        return (

            <BrowserRouter>
                <Header></Header>


                {/*Configurando las RUTAS y PAGINAS*/}
                <Switch>
                    <Route exact path="/" component={Home}></Route> {/*exact si quiero una ruta exacta */}
                    <Route exact path="/mi-prueba" component={Pruebas}></Route>
                    <Route exact path="/peliculas" component={Peliculas}></Route>
                    <Route exact path="/mensaje-estico" component={MensajesEstatico}></Route>
                    <Route exact path="/formulario" component={Formulario}></Route>
                    <Route exact path="/blog" component={Blog}></Route>
                    <Route exact path="/busqueda/:search" component={Search}></Route>
                    <Route exact path="/blog/articulo/:id" component={Article}></Route>
                    <Route exact path="/blog/add" component={AddArticle}></Route>
                    <Route exact path="/blog/edit/:id" component={EditArticle}></Route>
                    <Route exact path="/redirect/:search" render={(props) => {
                        var search = props.match.params.search;

                       return <Redirect to={"/busqueda/" + search}></Redirect>
                    }
                    }></Route>
                    
                    <Route path="/prueba2" render={() =>
                        (
                            <div className="center" id="content">
                                <h1>Hola desde la ruta: PAGINA 1</h1>
                                <MiComponente saludo='Hey Here!!!'></MiComponente>
                            </div>
                        )}>

                    </Route>
                    <Route exact path="/tester/:id?" render={(props) => {
                        var venviao = props.match.params.id;

                        return (
                            <React.Fragment>
                                <h1>Hola desde la ruta: PAGINA TESTER</h1>
                                {venviao &&
                                    <h2>Soy el ID enviado : {venviao}</h2>
                                }

                            </React.Fragment>
                        )
                    }
                    }>

                    </Route>

                    <Route component={Error}></Route>
                </Switch>


                <div className="clearfix"></div>
                <Footer></Footer>
            </BrowserRouter>
        );
    }
}

export default Router;