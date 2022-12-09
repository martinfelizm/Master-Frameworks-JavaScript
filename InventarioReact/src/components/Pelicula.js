import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pelicula extends Component {

    Pfavorita = () => {
        this.props.marcarfavorita(this.props.pelicula, this.props.indice);
    }

    render() {
        // const pelicula = this.props.pelicula;
        const { titulo, image, key } = this.props.pelicula;


        return (
            <React.Fragment>              
                <div id="articles" className="center">
                    <article className="article-item" id="articleItem" key={key}>
                        <div className="image-wrap">
                            <img src={image} alt="Paisaje1" />
                        </div>
                        <h2>{titulo}</h2>
                        <span className="date">
                            hace 5 minutos
                         </span>

                        <Link to={'/blog'}>Leer mas</Link>

                        <button onClick={this.Pfavorita}>
                            Marcar como favorita
                    </button>
                    </article>
                </div>

            </React.Fragment>
        );
    }
}

export default Pelicula;