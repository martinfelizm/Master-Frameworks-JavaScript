import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { UrlApi } from '../../services/varglobal';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() articles: Article[];
  public url: string;
  constructor() { }

  ngOnInit(): void {
    this.url = UrlApi.url;
  }

}
