import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleServices } from '../../services/article.services';
import { Article } from '../../models/article';
import { UrlApi } from '../../services/varglobal';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleServices]
})
export class SearchComponent implements OnInit {

  public articles: Article[];
  public url: string;
  public search: any;

  constructor(
    private _router: Router,
    private _actRoute: ActivatedRoute,
    private articleS: ArticleServices
  ) { }

  ngOnInit(): void {

    this._actRoute.params.subscribe(par => {
      let valorSend = par['search'];

      this.articleS.searchArticle(valorSend).subscribe(
        response => {
        //  console.log(response);
          if (response.articles) {
            this.articles = response.articles;
            this.url = UrlApi.url;
          }
        },
        error => {
          // this._router.navigate(['/home']);
          console.log('error');
          this.articles = [];
        }
      )
      // alert(valorSend);
    })
  }

  valueSearch() {
    if (this.search || this.search == '') {
      this._router.navigate(['/buscar/', this.search])
    }

  }

}
