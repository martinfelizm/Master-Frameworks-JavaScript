import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';
import BtnAtras from './BtnAtras';

class AddArticle extends Component {
    titleRef = React.createRef();
    contentRef = React.createRef();
    url = Global.url;
    state = {
        article: {},
        status: null,
        selectedFile: null
    }

    componentWillMount() {
        this.validator = new SimpleReactValidator({
            messages: {
                default: 'Este campo es requerido!'  // will override all messages
            },
        });
    }

    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value
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
            axios.post(this.url + 'save', this.state.article)
                .then(res => {
                    if (res.data.article) {

                        this.setState({
                            article: res.data.article,
                            status: 'waiting'
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
                                    } else {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'failed'
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
                status: 'failed'
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

        return (

            <div className="center">
                <section id="content">
                    <h1 className="subheader">Crear Articulos</h1>

                    <form className="mid-form" onSubmit={this.saveArticle} onChange={this.changeState} >
                        <div className="form-group">
                            <label htmlFor="title">Titulo</label>
                            <input type="text" name="title" ref={this.titleRef}></input>

                            {/*Validacion de mensaje de error*/}
                            {this.validator.message('title', this.state.article.title, 'required|alpha_space')}
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea name="content" ref={this.contentRef} />
                            {this.validator.message('content', this.state.article.content, 'required')}
                        </div>
                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                            <input type="file" name="file0" onChange={this.fileChange} />
                        </div>

                        <input className="btn btn-Guardar" type="submit" value="Guardar"></input>
                        <BtnAtras redirect="/blog"></BtnAtras>
                    </form>
                </section>

                <Sidebar></Sidebar>
            </div>
        )
    }
}

export default AddArticle;