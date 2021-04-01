import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Articles } from '../services/articles.service';
import { Categories } from '../services/articles.service';



@Component({
  selector: 'app-body-articles',
  templateUrl: './body-articles.component.html',
  styleUrls: ['./body-articles.component.css'],
  providers: [ArticlesService]
})
export class BodyArticlesComponent implements OnInit {
  articles!:Articles[];
  categories!:Categories[];
  valueFilter!:any
  valuePublishFilter!:any
  published!:boolean;
  showEditAricle!:boolean;
  art!:any;
  neweStateShowEditAricle:boolean;
  constructor(public ArticlesService: ArticlesService) { 
    this.valueFilter = ''
    this.neweStateShowEditAricle = false;
  }
  ngOnInit(): void {
    this.getArticle()
      this.ArticlesService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  getArticle(){
    this.ArticlesService.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }
  addArticle(event:any){
    this.ArticlesService.newArticle(event as Articles)
    .subscribe(postData =>{
      this.articles.push(postData)
    })
  }
  editArticle(event:any){
    this.showEditAricle = !this.neweStateShowEditAricle;
  }
  addItem(valueFilter: any) {
    this.valueFilter = valueFilter
  }
  addPublishItem(valuePublishFilter: any){
    this.valuePublishFilter = valuePublishFilter
  }
  deleteArticle(article:Articles){  
    this.articles = this.articles.filter( a => a !== article)
    this.ArticlesService.deleteArticle(article).subscribe();
  }
  updateArticle(event:any){
    this.ArticlesService.updateArticle(event, this.art.id)
    .subscribe(
      success => console.log("Done"),
      error => console.log(error),
  );
  this.getArticle()
  }
  
 
}
