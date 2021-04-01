import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Articles{
  title:string,
  published:boolean,
  categoryId:any,
  description:string,
  id:number
}
export interface Categories{
  name:string,
  _id:string,
}
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private articlesUrl = 'http://localhost:8080/api/articles';
  
  constructor(private http: HttpClient) {
   }

  getArticles(): Observable<Articles[]> {
    return this.http.get<Articles[]>(this.articlesUrl)
  }
  getCategories(): Observable<Categories[]>{
    return this.http.get<Categories[]> ('http://localhost:8080/api/categories')
  }
  updateArticle(postData:Articles,id: string): Observable<Articles> {
    return this.http.put<Articles>(`${this.articlesUrl}/${id}`,postData,this.httpOptions)
  }
  newArticle(articl:Articles): Observable<Articles> {
     return this.http.post<Articles>(this.articlesUrl, articl,this.httpOptions); 
  }
  deleteArticle(article:Articles): Observable<Articles>{
    const id = typeof article === "number" ? article : article.id
    const url = `${this.articlesUrl}/${id}`
      return this.http.delete<Articles>(`${this.articlesUrl}/${id}`,this.httpOptions)
  }
}
 