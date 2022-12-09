import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleServices } from '../../services/article.services';
import { UrlApi } from '../../services/varglobal';
import swal from 'sweetalert';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleServices]
})
export class ArticleNewComponent implements OnInit {

  public ArticleNew: Article = new Article('', '', '', null, null);
  public url: string;
  public isEdit: boolean;
  public windTitle: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .png, .jpeg, .gif",
    maxSize: "50",
    uploadAPI: {
      url: UrlApi.url + 'upload-img'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    attachPinText: 'Seleccione la imagen del Articulo',
    replaceTexts: {
      selectFileBtn: 'Seleccione las imagenes',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Seleccione la imagen del Articulo',
      afterUploadMsg_success: 'Imagen cargada !!!',
      afterUploadMsg_error: 'Error en imagen cargada !!!',
      sizeLimit: 'Size Limit'
    }
  };

  constructor(
    private _router: Router,
    private _activateR: ActivatedRoute,
    private _articleS: ArticleServices
  ) {

    this.ArticleNew = new Article('', '', '', null, null);
    this.url = UrlApi.url;

  }

  ngOnInit(): void {

  }
  onSubmit() {

    // this.ArticleNew.date = new Date();
    //console.log(this.ArticleNew);
    //return

    this._articleS.saveArticle(this.ArticleNew).subscribe(
      response => {
        console.log(response.status);
        if (response.status == 'OK') {

          //Alert
          swal('Articulo creado!!!',
            'El Articulo se ha creado exitosamente',
            'success'
          );

          this.ArticleNew = response.article;
          // console.log(this.ArticleNew);

          this._router.navigate(['/home']);

        }
        else {
          swal('Error en servidor??',
            'Intentelo nuevamente!!!',
            'error'
          );
        }
      },
      error => {
        swal('Error??',
          'Parametros enviados no son correcto, consultar con Tecnologia!!!',
          'error'
        );
      }
    );
  }

  ImgUpload(event) {
    this.ArticleNew.image = event.body.image;
  }

  getArticle() {
    this._activateR.params.subscribe(par => {
      let id = par['id'];
      console.log(id);
      this._articleS.getArticle(id).subscribe(
        response => {
          if (response.article) {

            this.ArticleNew = response.article;
            this.url = UrlApi.url;

          } else {
            this._router.navigate(['/home']);
          }

        },
        error => {

          this._router.navigate(['/home']);
        }
      )
    })
  }

}
