import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { UrlApi } from '../services/varglobal';

@Injectable()

export class ArticleServices {

    public url: string;
    constructor(
        private _httpC: HttpClient
    ) {
        this.url = UrlApi.url;
    }


    pruebas() {
        return 'Hola desde ArticleServices';
    }

    getArticles(last: any = null): Observable<any> {
        var arti = 'articles';
        if(last != null){
            arti = 'articles/true'
        }

        return this._httpC.get(this.url + arti);
    }

    getArticle(id): Observable<any> {

        return this._httpC.get(this.url + 'article/' + id);
    }

    searchArticle(searchstring): Observable<any>{
        //console.log(this.url +'search/'+ searchstring);
        return this._httpC.get(this.url +'search/'+ searchstring);
    }

    saveArticle(article): Observable<any>{
       // console.log(article);
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._httpC.post(this.url +'save/', params, { headers: headers });
    }

    updateArticle(id, article): Observable<any>{
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._httpC.put(this.url+ 'article/'+id, params, {headers: headers});
    }

    deleteArticle(id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._httpC.delete(this.url+ 'article/'+id, {headers: headers});
    }


}