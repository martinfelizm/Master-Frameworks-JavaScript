import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';
import BtnAtras from './BtnAtras';
import imgDefault from '../assets/images/default3.png';
//1. Tenemos que recoger el Id del articulo a editar de la url
//2. Crear un metodo para sacar ese objeto del api
//3. Tenemos que rellena el formulario con esos datos
//4. Actualizar el objeto usando el api

class EditArticle extends Component {
    articleID = null;
    titleRef = React.createRef();
    contentRef = React.createRef();
    url = Global.url;
    state = {
        article: {},
        status: null,
        selectedFile: null
    }

    componentWillMount() {
        this.articleID = this.props.match.params.id;

        this.getArticle(this.articleID);
        this.validator = new SimpleReactValidator({
            messages: {
                default: 'Este campo es requerido!'  // will override all messages
            },
        });
    }

    getArticle = (id) => {
        axios.get(this.url + 'article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article,
                    status: 'waiting'
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value,
                image: this.state.article.image
            }
        });
        this.validator.showMessages();
        this.forceUpdate();

    }

    saveArticle = (e) => {
        e.preventDefault();

        //Rellenar state con el formulario
        this.changeState();

        //Validacion de campos del formulario
        if (this.validator.allValid()) {
            //Hacer una peticion httpost para guardar el articulo
            axios.put(this.url + 'article/' + this.articleID, this.state.article)
                .then(res => {
                    console.log(res.data.article);
                    console.log(this.articleID);
                    console.log(this.state.article);
                    
                    if (res.data.article) {

                        this.setState({
                            article: res.data.article,
                            status: 'success'
                        })

                        swal(
                            'Articulo creado',
                            'El articulo ha sido creado exitosamente!!!',
                            'success'
                        )

                        //Subir imagen
                        if (this.state.selectedFile !== null) {
                            //Sacar el id del archivo guardado
                            var articleID = this.state.article._id;

                            //Crear form data y añadir fichero
                            const formData = new FormData();

                            formData.append(
                                'file0',
                                this.state.selectedFile,
                                this.state.selectedFile.name
                            );

                            //Peticion AJAX
                            axios.post(this.url + 'upload-IMG/' + articleID, formData)
                                .then(res => {
                                    if (res.data.article) {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'success'
                                        })
                                    } 

                                })
                                .catch(err => {
                                    console.log(err);
                                })

                        }

                    } else {

                        this.setState({
                            status: 'failed'
                        })

                    }

                })
                .catch(err => {
                    alert(err);
                });
        } else {
            this.setState({
                status: 'success'
            })

            this.validator.showMessages();
            this.forceUpdate();
        }


    }

    fileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        })
        console.log(this.state.selectedFile);
        // console.log(event);
    }

    render() {

        if (this.state.status === 'success') {
            return <Redirect to={'/blog'}></Redirect>
        }

        var article = this.state.article;
        return (

            <div className="center">
                <section id="content">
                    <h1 className="subheader">Editar Articulos</h1>
                    {article.title &&
                        <form className="mid-form" onSubmit={this.saveArticle} onChange={this.changeState} >
                            <div className="form-group">
                                <label htmlFor="title">Titulo</label>
                                <input type="text" name="title" defaultValue={article.title} ref={this.titleRef}></input>

                                {/*Validacion de mensaje de error*/}
                                {this.validator.message('title', article.title, 'required|alpha_space')}
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Contenido</label>
                                <textarea name="content" ref={this.contentRef} defaultValue={article.content} />
                                {this.validator.message('content', article.content, 'required')}
                            </div>
                            <div className="form-group">
                                <div className="image-wrap">
                                    {article.image !== null && article.image !== undefined &&
                                        <img src={this.url + 'get-IMG/' + article.image} style={{ width: "25%", float: "left" }} alt={article.title} />
                                    }
                                    {article.image === null &&
                                        <img src={imgDefault} style={{ width: "25%" }} alt={article.title} />
                                    }

                                </div>
                                <div className="clearfix"></div>
                                <label htmlFor="file0">Cambiar imagen</label>
                                <input type="file" name="file0" onChange={this.fileChange} />
                            </div>

                            <input className="btn btn-Guardar" type="submit" value="Guardar"></input>
                            <BtnAtras redirect={"/blog/articulo/" + article._id}></BtnAtras>
                        </form>

                    }
                    {!article.title &&
                        <h2 className="subheader">Cargando...</h2>
                    }
                </section>

                <Sidebar></Sidebar>
            </div>
        )
    }
}

export default EditArticle;

