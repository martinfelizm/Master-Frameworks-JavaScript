import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/*Componente estatico */
class BtnAtras extends Component{
  render(){
    return (
      <React.Fragment>
        <Link to={this.props.redirect} className="btn btn-Atras">Atras</Link>
      </React.Fragment>
    );
  }
}

/*const BtnAtras = () => {
  return (
    <React.Fragment>
      <Link to={this.props.redirect} className="btn btn-Atras">Atras</Link>
    </React.Fragment>
  );
}*/

export default BtnAtras;