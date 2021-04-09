import { Component, OnInit, Input, Output,EventEmitter,Inject } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { FormGroup,FormControl, FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HeaderComponent } from '../header/header.component';
import { BodyArticlesComponent } from '../body-articles/body-articles.component';

@Component({
  selector: 'app-add-articles',
  templateUrl: './add-articles.component.html',
  styleUrls: ['./add-articles.component.css']
})
export class AddArticlesComponent implements OnInit {
  categories!:any;
  articles!:any;
  articlesForm!: FormGroup;
    
  constructor(public ArticlesService: ArticlesService,public dialogRef: MatDialogRef<AddArticlesComponent,BodyArticlesComponent>,
      @Inject(MAT_DIALOG_DATA) public dataArt: BodyArticlesComponent){
  }
  onNoClick(): void {

    this.dialogRef.close();
  }
    ngOnInit(): void {
      this.ArticlesService.getCategories().subscribe(categories => {
        this.categories = categories;
      });
      this.ArticlesService.getArticles().subscribe(articles => {
        this.articles = articles;
      });
      this.articlesForm = new FormGroup({
        "title": new FormControl(this.dataArt.title),
        "description": new FormControl(this.dataArt.description) ,
        "categoryId": new FormControl(this.dataArt.categoryId) ,
        "published": new FormControl(this.dataArt.published) 
      });
    }
}
