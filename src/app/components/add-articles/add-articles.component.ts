import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Articles } from '../services/articles.service';

@Component({
  selector: 'app-add-articles',
  templateUrl: './add-articles.component.html',
  styleUrls: ['./add-articles.component.css']
})
export class AddArticlesComponent implements OnInit {
  public published!:any
  @Input() showAdd!:boolean;
  @Input() articles!:any;
  @Output() changeStateShowElem: EventEmitter<boolean> = new EventEmitter();
  @Output() outputArticles: EventEmitter<boolean> = new EventEmitter();
    constructor(public ArticlesService: ArticlesService) {
      this.articles = []
    }
    ngOnInit(): void {}
    saveArtcle(title:string,description:string,categoryId:any,published:any):void{
      this.showAdd = !this.showAdd;
      this.changeStateShowElem.emit();
      this.outputArticles.emit();
      this.ArticlesService.newArticle({title,description,categoryId,published} as Articles)
        .subscribe(postData =>{
          this.articles.push(postData)
    })
  }
}
