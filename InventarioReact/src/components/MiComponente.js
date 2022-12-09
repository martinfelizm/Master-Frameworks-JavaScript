import React, { Component } from 'react';
//{Component} --Estructuring
class MiComponente extends Component {

    render() {
        let receta = {
            nombre: 'Arroz ILE',
            ingredientes: ['Arroz', 'Puerro', 'Platanos Maduros', 'Tocineta'],
            calorias: '500'
        };

        return (
            <div id="content">
                <hr></hr>
                <h1> {'Receta: ' + receta.nombre} </h1>
                <h1> {'Calorias: ' + receta.calorias} </h1>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            return (
                                <li key={i}>
                                    { ingrediente}
                                </li>
                            );
                        })
                    }
                </ol>
                <hr></hr>

                {
                    this.props.saludo &&
                    <React.Fragment>
                        <h1>Desde una PROP: </h1> <h3> { this.props.saludo }</h3>
                    </React.Fragment>
                }
            </div>

        );


    }

}

export default MiComponente;