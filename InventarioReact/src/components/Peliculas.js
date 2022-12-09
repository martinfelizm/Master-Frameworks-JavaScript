import React, { Component } from 'react';
import Pelicula from './Pelicula';
import Slider from '../components/Slider';

class Peliculas extends Component {

    state = {
        peliculas: [
            { titulo: "Spiderman 4", year: 2020, image: 'https://enterateonline.files.wordpress.com/2015/01/spiderman-y-los-vengadores.jpg' },
            { titulo: "Guardianes de la Galaxia", year: 2018, image: 'https://mm3.vistoenpantalla.com/imagenes-productos/poster-luchando-guardianes-galaxia-large2.jpg' },
            { titulo: "Avengers Infinity War", year: 2019, image: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-04/26/13/asset/buzzfeed-prod-web-01/sub-buzz-2197-1524762686-7.jpg?downsize=600:*&output-format=auto&output-quality=auto' }
        ],
        favorita: {}


    }

    CambiarTitulo = () => {
        var { peliculas } = this.state;
        //var random = Math.floor(Math.random() * 3);

        peliculas[0].titulo = "Avengers ZZZ!!!";

        this.setState({
            peliculas: peliculas
        });

    }

    favorita = (pelicula, indice) => {
        console.log(pelicula, indice);
        this.setState({
            favorita: pelicula
        });
    }

    render() {

        var favoritaStyle = {
            background: '#5fb1c8',
            color: 'white',
            padding: '10px'
        };


        var vfavorita;
        if (this.state.favorita.titulo) {
            vfavorita = (<p className="favorita" style={{
                background: '#5fb1c8',
                color: 'white',
                padding: '10px',
                fontWeight: 'bold'
            }}>
                <strong> La pelicula favorita es :</strong>
                <span> {this.state.favorita.titulo} </span>
            </p>
            )
        } else {
            vfavorita = (
                <p><strong>NO HAY FAVORITAS</strong></p>
            )
        }

        return (
            <React.Fragment>

                <Slider
                    title="Peliculas"
                    size="slider-s"
                >
                </Slider>

                <div className="peliculas" id="content">
                    <h4 className="subheader" >Componente de Peliculas</h4>
                    <button onClick={this.CambiarTitulo}>Cambiar titulo</button>

                    {this.state.favorita.titulo &&  //Codiciones en JSX style 1

                        <p className="favorita" style={favoritaStyle}>
                            <strong> La pelicula favorita es :</strong>
                            <span> {this.state.favorita.titulo} </span>
                        </p>
                    }

                    {/* this.state.favorita.titulo &&  //Codiciones en JSX style 2 y Condicionales 1 (IF)

                    <p className="favorita" style={{
                        background: '#5fb1c8',
                        color: 'white',
                        padding: '10px',
                        fontWeight: 'bold'
                    }}>
                        <strong> La pelicula favorita es :</strong>
                        <span> {this.state.favorita.titulo} </span>
                    </p>
                    */

                        /*  this.state.favorita.titulo ? ( //Codiciones en JSX style 2 y Condicionales 2 (IF)
      
                              <p className="favorita" style={{
                                  background: '#5fb1c8',
                                  color: 'white',
                                  padding: '10px',
                                  fontWeight: 'bold'
                              }}>
                                  <strong> La pelicula favorita es :</strong>
                                  <span> {this.state.favorita.titulo} </span>
                              </p>
                          ) : (
                                  <p><strong>NO HAY FAVORITAS</strong></p>
                              )
                              */

                        vfavorita //Codiciones en JSX style 2 y Condicionales 3 (IF)
                    }

                    {/*Crear un componente de Peliculas */}
                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return (
                                <div key={i}>

                                    <Pelicula
                                        key={i}
                                        pelicula={pelicula}
                                        indice={i}
                                        marcarfavorita={this.favorita}></Pelicula>

                                    <div className="clearfix"></div>
                                </div>

                            );
                        })
                    }

                </div>


            </React.Fragment>
        );
    }
}

export default Peliculas;