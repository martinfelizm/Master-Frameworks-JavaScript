import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleServices } from '../../services/article.services';
import { UrlApi } from '../../services/varglobal';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers: [ArticleServices]
})
export class ItemsComponent implements OnInit {

  public articles: Article[];
  public url: string;

  constructor(
    private _articleServ: ArticleServices
  ) { 
    this.url = UrlApi.url;
  }

  ngOnInit(): void {
    this._articleServ.getArticles().subscribe(
      response => {
        if (response.articles) {
          this.articles = response.articles;
        }
      },
      error => {
        console.log('error');
      }
    )
  }

}
