import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleServices } from '../../services/article.services';
import { UrlApi } from '../../services/varglobal';
import swal from 'sweetalert';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleServices]
})

export class ArticleEditComponent implements OnInit {

  public ArticleNew: Article = new Article('', '', '', null, null);;
  public url: string;
  public isEdit: boolean = true;
  public windTitle: string;
  public btnSubmitTitle: string = "Editar imagen";

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
    attachPinText: this.btnSubmitTitle,
    replaceTexts: {
      selectFileBtn: 'Seleccione las imagenes',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: this.btnSubmitTitle,
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

  }

  ngOnInit(): void {
    console.log('here!!');
    if (this.isEdit) {
      this.windTitle = "Editar articulos";
      this.btnSubmitTitle = "Editar imagen";

      this.getArticle();
    }
  }

  ImgUpload(event) {
    this.ArticleNew.image = event.body.image;
  }

  onSubmit() {

    // this.ArticleNew.date = new Date();
    //console.log(this.ArticleNew);
    //return

    this._articleS.updateArticle(this.ArticleNew._id, this.ArticleNew).subscribe(
      response => {
        // var resp = '';        
        //console.log(resp.toUpperCase());
        if (response.status.toUpperCase() == 'OK') {

          swal('Articulo editado exitosamente!!!',
            'El Articulo fue editado',
            'success'
          );
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
