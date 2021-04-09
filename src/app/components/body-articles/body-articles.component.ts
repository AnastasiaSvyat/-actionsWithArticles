import { Component, OnInit, Input } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Articles } from '../services/articles.service';
import { Categories } from '../services/articles.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddArticlesComponent } from '../add-articles/add-articles.component';


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
  title!:string;
  art!:any;
  head!:string
  updateArt!:any
  description!:any
  categoryId!:any

  

  constructor(public ArticlesService: ArticlesService,public dialog: MatDialog) { 
    this.valueFilter = ''
  }
ngOnInit(): void {
    this.getArticle()
      this.ArticlesService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  openDialog(event:any): void {
    console.log(event);
    const dialogRef = this.dialog.open(AddArticlesComponent, {
      width: '500px',
      data: {head: "Edit article:",title:event.title,categoryId:event.categoryId,
        description:event.description,published:event.published}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.updateArt = result;
      console.log(this.updateArt);
      this.getArticle()
        this.ArticlesService.updateArticle(this.updateArt, event.id)
          .subscribe(
            success => console.log("Done"),
            error => console.log(error));
        this.getArticle()
      })
    }
    
  getArticle(){
    this.ArticlesService.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }
  
  addArticle(event:any){
    this.ArticlesService.newArticle(event as Articles)
    .subscribe(postData =>{
      console.log(postData);
    this.articles.push(postData)
    })
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
}
