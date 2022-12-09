import React from 'react'
import './assets/css/App.css';
import Router from './Router';

function HolaMundo(nombre,edad){
  var presentacion = (
    <div>
        <h2>Hola, soy {nombre}</h2>
        <h3>Tengo {edad} años</h3>
    </div>
  );
  return presentacion;
}



function App() {
  return (
    <div className="App">    

    
        <Router></Router>
       
     
      {/* 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     <p>
          Inventario React
        </p>
        <a>
          {HolaMundo(nombre, 36)}
        </a>

        <section className="App-link">
          <MiComponente></MiComponente>
        </section>

        <section className="peliculas">
          <Peliculas></Peliculas>
        </section>
      </header>

*/ }
    </div>

  );
}

export default App;



