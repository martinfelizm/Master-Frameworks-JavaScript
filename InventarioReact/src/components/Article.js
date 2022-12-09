import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import imgDefault from '../assets/images/default3.png';
import Moment from 'react-moment';
import BtnAtras from './BtnAtras';
import swal from 'sweetalert';

class Article extends Component {

    url = Global.url;

    state = {
        article: {},
        status: null
    }

    componentWillMount() {
        this.getArticle();
    }

    getArticle = () => {
        var id = this.props.match.params.id;

        axios.get(this.url + 'article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article,
                    status: 'success'
                })
            })
            .catch(err => {
                this.setState({
                    article: [],
                    status: 'success'
                })
            })
    }

    deleteArticle(id) {
        swal({
            title: "¿Estas seguro de borrar el articulo?",
            text: "Despues de borrado el articulo no estara en el listado!!!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(this.url + 'article/' + id)
                        .then(res => {
                            this.setState({
                                article: res.data.article,
                                status: 'deleted'
                            })
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
            });

    }

    editarArticle(id) {
        alert(id);
    }

    render() {

        if (this.state.status === 'deleted') {
            swal(
                'Articulo eliminado',
                'El articulo fue eliminado exitosamente!!!',
                'info'
            )
            return <Redirect to='/blog'></Redirect>
        }
        var article = this.state.article;
        return (
            <React.Fragment>
                <div className="center">
                    <section id="content">
                        {article.title &&
                            <div id="articles">
                                <article className="article-item article-details">
                                    <div className="image-wrap">
                                        {article.image !== null && article.image !== undefined &&
                                            <img src={this.url + 'get-IMG/' + article.image} alt={article.title} style={{ width: "20%" }} />
                                        }
                                        {article.image === null &&
                                            <img src={imgDefault} alt={article.title} style={{ width: "20%" }} />
                                        }

                                    </div>
                                    <h1 className="subheader">{article.title}</h1>
                                    <span className="date">
                                        <Moment locale="es" fromNow>{article.date}</Moment>
                                    </span>
                                    <p>
                                        {article.content}
                                    </p>


                                </article>

                                <a className="btn btn-Eliminar" onClick={
                                    () => {
                                        this.deleteArticle(article._id);
                                    }
                                } value="Eliminar">Eliminar</a>
                                <NavLink to={"/blog/edit/" + article._id} className="btn btn-Editar">Editar</NavLink>

                                <BtnAtras redirect={"/blog"}></BtnAtras>
                            </div>
                        }
                        {!article.title && this.state.status === 'success' &&
                            <div id="article">
                                <h className="subheader"> No existe el Articulo??</h>
                            </div>
                        }
                        {!this.state.status === null &&
                            <div id="article">
                                <h className="subheader"> Cargando...</h>
                            </div>
                        }

                        <div className="clearfix"></div>
                    </section>
                </div>
            </React.Fragment>

        )
    }
}

export default Article;