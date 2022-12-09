import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Home extends Component {

    render() {
        var buttonstring = "Ver más";
        
        return (
            <React.Fragment>
                <Slider
                    title="Bienvenido al cursor master de Javascript con REACT" btn={buttonstring}
                    size="slider-l">
                </Slider>
              
                <div className="center" id="content">
                <h2 className="subheader">Ultimos articulos</h2>
                      <Articles home="true"></Articles>
                </div>
                   
                <div>
                    <Sidebar></Sidebar>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;