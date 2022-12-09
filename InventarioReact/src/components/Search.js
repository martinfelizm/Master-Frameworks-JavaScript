import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
//import axios from 'axios';
import Articles from './Articles';

class Search extends Component {

    state = {
        articles: {},
        status: null
    }


    render() {

        var searched = this.props.match.params.search;
        return (
            <React.Fragment>
                <Slider
                    title={"Busqueda: "+searched}
                    size="slider-s"
                >
                </Slider>
                <h2 className="subheader">Ultimos articulos</h2>
                <div id="content">
                    <Articles search={searched}></Articles>

                </div>

                <div>
                    <Sidebar addArticle="true"></Sidebar>
                </div>
            </React.Fragment>
        );
    }
}

export default Search;

