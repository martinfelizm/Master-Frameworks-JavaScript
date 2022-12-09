import { Component, OnInit } from '@angular/core';
import { ArticleServices } from '../../services/article.services';
import { Article } from '../../models/article';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UrlApi } from '../../services/varglobal';
import swal from 'sweetalert';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
  providers: [ArticleServices]
})
export class ArticleDetailsComponent implements OnInit {

  public article: Article;
  public url: string;

  constructor(
    private artServ: ArticleServices,
    private _router: Router,
    private _actRoute: ActivatedRoute
  ) { 
    this.article = new Article('','','','','');
    
    
  }

  ngOnInit(): void {
    //console.log('Here!!');

    this.cargandoData();
    //this.artServ.getArticle()
  }

  cargandoData(){
    this._actRoute.params.subscribe(par => {
      let id = par['id'];
      console.log(id);
      this.artServ.getArticle(id).subscribe(
        response => {
          if (response.article) {

            this.article = response.article;
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

  deleteArticle(){

    swal({
      title: "¿Estas seguro?",
      text: "Si la respuesta se 'Sí', el articulo sera eliminado del sistema!",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this._actRoute.params.subscribe(par => {
          let id = par['id'];
          console.log(id);
          this.artServ.deleteArticle(id).subscribe(
            response => {
              if (response.article) {
    
                this._router.navigate(['/home']);
    
              } else {
                this._router.navigate(['/home']);
              }
    
            },
            error => {
    
              this._router.navigate(['/home']);
            }
          )
        })
        swal("El Articulo a sido borrado!", {
          icon: "success",
        });
      } 
      /*else {
        swal("Your imaginary file is safe!");
      }*/
    });

  

  }

}
