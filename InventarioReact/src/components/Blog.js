import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
//import axios from 'axios';
import Articles from './Articles';

class Blog extends Component {

    state = {
        articles: {},
        status: null
    }


    render() {
        //var buttonstring = "Ver más";
        /*
                axios.get("http://localhost:3900/api/articles/")
                    .then(res => {
                        this.setState({
                            articles: res.data.articles,
                            status: 'success'
                        });
        
                        console.log(res.data);
                    });
        */
        return (
            <React.Fragment>
                <Slider
                    title="Bienvenido al Blog"
                    size="slider-s"
                >
                </Slider>
                <h2 className="subheader">Ultimos articulos</h2>
                <div id="content">
                    <Articles></Articles>
                    {/*Listado de Articulos que vendran del Api*/}
                    {/*this.state.status != null &&
                        <div>
                            {
                                this.state.articles.map((article) => {
                                    return (<h2 key={article._id}>{article.title}</h2>)
                                })
                            }
                        </div>
                        */}

                </div>

                <div>
                    <Sidebar addArticle="true"></Sidebar>
                </div>
            </React.Fragment>
        );
    }
}

export default Blog;