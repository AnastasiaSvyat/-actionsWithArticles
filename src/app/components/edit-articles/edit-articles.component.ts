import { Component, OnInit,Input ,Output, EventEmitter} from '@angular/core';
import { ArticlesService } from '../services/articles.service';




@Component({
  selector: 'app-edit-articles',
  templateUrl: './edit-articles.component.html',
  styleUrls: ['./edit-articles.component.css']
})
export class EditArticlesComponent implements OnInit {
  
  @Input() art!:any;
  @Input() showEditAricle!:any;
  @Output() changeStateShowEditAricle: EventEmitter<boolean> = new EventEmitter();
  
    constructor(public ArticlesService: ArticlesService) {}

  ngOnInit(): void {}
    
  editArt(postData:any){
      this.showEditAricle = !this.showEditAricle;
      this.changeStateShowEditAricle.emit();
      this.ArticlesService.updateArticle(postData, this.art.id)
        .subscribe(
          success => console.log("Done"),
          error => console.log(error),
      );
    }
  }



