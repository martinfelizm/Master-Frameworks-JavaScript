import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Formulario extends Component {

    nombreRef = React.createRef();
    apellidoRef = React.createRef();
    biografiaRef = React.createRef();
    generoHombreRef = React.createRef();
    generoFemeRef = React.createRef();
    generoOtroRef = React.createRef();

    state = {
        user: {}
    };

    recibirFormulario = (e) => {
        e.preventDefault();//bloquea refrescar la pantalla
        console.log(this.nombreRef);
        console.log(this.nombreRef.current.value);
        var genero = 'hombre';

        if (this.generoFemeRef.current.checked) {
            genero = this.generoFemeRef.current.value;
        } else if (this.generoOtroRef.current.checked) {
            genero = this.generoOtroRef.current.value;
        } else {
            genero = this.generoHombreRef.current.value;
        }

        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidoRef.current.value,
            bio: this.biografiaRef.current.value,
            genero: genero
        }

        this.setState({
            user: user
        });

        console.log(user);
        // alert("Formulario");
    }

    render() {
        //var buttonstring = "Ver más";

        return (
            <React.Fragment>
                <Slider
                    title="Formulario"
                    size="slider-s"
                >
                </Slider>
                <div id="formulario">
                    <div className="center">
                        <section id="content">

                            <h1 className="subheader">Bienvenido al Formulario</h1>

                            {/*Mostrar datos en el Formulario */}
                            {this.state.user.nombre &&
                                <div id="user-data">
                                    <p>Nombre: <strong>{this.state.user.nombre}</strong></p>
                                    <p>Apellidos: <strong>{this.state.user.apellidos}</strong></p>
                                    <p>Biografia: <strong>{this.state.user.bio}</strong></p>
                                    <p>Genero: <strong>{this.state.user.genero}</strong></p>
                                </div>
                            }

                            <form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input type="text" name="nombre" ref={this.nombreRef}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="apellidos">Apellidos</label>
                                    <input type="text" name="apellidos" ref={this.apellidoRef}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nombre">Biografia</label>
                                    <textarea name="biografia" ref={this.biografiaRef}></textarea>
                                </div>
                                <div className="form-group radiobtn">
                                    <input type="radio" value="F" name="genero" ref={this.generoFemeRef} /> Femenino
                                    <input type="radio" value="M" name="genero" ref={this.generoHombreRef} /> Masculina
                                    <input type="radio" value="O" name="genero" ref={this.generoOtroRef} /> Otros
                                </div>

                                <div className="clearfix"></div>
                                <input type="submit" value="enviar" className="btn btn-Guardar"></input>
                            </form>
                        </section>
                    </div>
                </div>
                {/*Listado de Articulos que vendran del Api*/}
                <div>
                    <Sidebar addArticle="true"></Sidebar>
                </div>
            </React.Fragment>
        );
    }
}

export default Formulario;



