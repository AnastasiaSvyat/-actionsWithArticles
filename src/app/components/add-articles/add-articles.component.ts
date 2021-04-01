import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Articles } from '../services/articles.service';
import { FormGroup,FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-articles',
  templateUrl: './add-articles.component.html',
  styleUrls: ['./add-articles.component.css']
})
export class AddArticlesComponent implements OnInit {

  public published!:any
  public publish!:FormControl

  categories!:any;
  articles!:any;
  @Input() showAdd!:boolean;
  @Output() changeStateShowElem: EventEmitter<boolean> = new EventEmitter();
  @Output() outputArticles: EventEmitter<any> = new EventEmitter();
    constructor(public ArticlesService: ArticlesService) {
      this.publish = new FormControl()
    }
    ngOnInit(): void {
      this.ArticlesService.getCategories().subscribe(categories => {
      this.categories = categories;
      });
      this.ArticlesService.getArticles().subscribe(articles => {
      this.articles = articles;
      });
    }
    saveArtcle(title:string,description:string,categoryId:any,published:any):void{
      this.showAdd = !this.showAdd;
      this.changeStateShowElem.emit();
      this.outputArticles.emit({title,description,categoryId,published});
      }
    closeArtcle(){
      this.showAdd = !this.showAdd;
      this.changeStateShowElem.emit();
  }
}
