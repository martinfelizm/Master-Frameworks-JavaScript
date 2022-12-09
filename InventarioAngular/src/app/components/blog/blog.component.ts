import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleServices } from '../../services/article.services';
import { UrlApi } from '../../services/varglobal';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleServices]
})
export class BlogComponent implements OnInit {
  public articles: Article[];
  public url: string;

  constructor(
    private _articleServ: ArticleServices
  ) { 
    this.url = UrlApi.url;
  }

  ngOnInit(): void {
    this._articleServ.getArticles(true).subscribe(
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
