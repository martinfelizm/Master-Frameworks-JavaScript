import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import imgDefault from '../assets/images/default3.png'
import Moment from 'react-moment';
import 'moment/locale/es';
import { Link } from 'react-router-dom';

class Articles extends Component {

    url = Global.url;
    state = {
        articles: {},
        status: null
    };

    componentWillMount() {
        var home = this.props.home; 
        var search = this.props.search; 
        if(home ==='true'){
            this.getLastArticles();
        }else if(search && search !== null && search !== undefined){
            this.getSearhArticles(search);
        }
        else{
            this.getArticles();
        }

     
    }

    getSearhArticles = (searched) => {
        axios.get(this.url + "/search/"+searched)
        .then(res => {
           /* if(res.data.articles)
            {*/
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
          /*  }else{
                this.setState({
                    status: ''
                });
            }*/
           
        })
        .catch(err =>{
            this.setState({
                articles: [],
                status: 'success'
            });
        });
    }
    
    getLastArticles = () => {
        axios.get(this.url + "articles/last")
        .then(res => {
            this.setState({
                articles: res.data.articles,
                status: 'success'
            });
        });
       
    }
    
    getArticles = () => {
        axios.get(this.url + "articles/")
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
            });
    }

    render() {

        if (this.state.articles.length >= 1) {
            var listaArticles = this.state.articles.map((article) => {
                return (
                    <div key={article._id}>
                        <article className="article-item" id="articleItem">
                            <div className="image-wrap">
                                {article.image != null &&
                                    <img src={this.url + 'get-IMG/' + article.image} alt={article.title} />
                                }
                                 {article.image === null &&
                                    <img src={imgDefault} alt={article.title} />
                                }

                            </div>
                            <h2>{article.title}</h2>
                            <span className="date">
                              <Moment locale="es" fromNow>{article.date}</Moment>  
                            </span>
                           <Link to={"/blog/articulo/" + article._id}  >Leer mas</Link>
                        </article>
                    </div>
                )

            });

            return (
                <div id="articles" className="center">
                    { listaArticles}
                </div>
            )

        } else if (this.state.articles.length === 0 && this.state.status === 'success') {
            return (
                <div id="articles">
                    <h1>No hay Articulos para mostrar??</h1>
                </div>
            )
        } else {
            return (
                <div id="articles">
                    <h1>Cargando....</h1>
                </div>
            )
        }


    }
}

export default Articles;
