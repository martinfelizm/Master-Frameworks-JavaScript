import React, { Component } from 'react';
import MiComponente from './MiComponente';
import Slider from '../components/Slider';

class Pruebas extends Component {
    contador = 0;
    /*
        constructor(props) {
            super(props);
    
            this.state = {
                contador: 0
            }
        }
        */
    state = {
        contador: 0
    };

    Datos(nombre, libras) {

        return 'Mi nombre es: ' + nombre + ' y tengo ' + libras + ' libras';
    };

    Sumar() { /* Metodo sin funciones de flecha */
        this.setState({
            contador: (this.state.contador + 1)
        });
    }

    Restar = () => { /* Metodo con funciones de flecha */
        this.setState({
            contador: (this.state.contador - 1)
        });
    }

    render() {
        var nombre = 'Martin Feliz';
        return (
            <React.Fragment>
                <Slider
                    title="Pruebas"
                    size="slider-s">
                </Slider>

                <div id="content">
                    <h2 className="subheader">Pagina de Pruebas</h2>
                    <hr />
                    <h2 className="subheader">Funciones</h2>
                    {this.Datos(nombre, 140)}
                    <hr />
                    <h2 className="subheader">Componentes</h2>
                    <MiComponente></MiComponente>
                    <h2 className="subheader">Estados</h2>
                    <h3>{'Contador : ' + this.state.contador}</h3>
                    <input value="Sumar" className="center" onClick={this.Sumar.bind(this)} type="button"></input>
                    <input value="Restar" className="center" onClick={this.Restar} type="button"></input>
                    <section id="content"></section>

                </div>

            </React.Fragment>
        );
    }
}

export default Pruebas;