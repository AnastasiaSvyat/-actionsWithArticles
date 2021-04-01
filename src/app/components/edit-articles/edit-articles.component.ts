import { Component, OnInit,Input ,Output, EventEmitter} from '@angular/core';
import { Articles, ArticlesService } from '../services/articles.service';
import { FormGroup,FormControl, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-edit-articles',
  templateUrl: './edit-articles.component.html',
  styleUrls: ['./edit-articles.component.css']
})
export class EditArticlesComponent implements OnInit {
  
  @Input() art!:any;
  @Input() showEditAricle!:any;
  @Output() changeStateShowEditAricle: EventEmitter<boolean> = new EventEmitter();

  @Output() change: EventEmitter<any> = new EventEmitter();
  categories!:any;
  newTaskForm!: FormGroup;
      constructor(public ArticlesService: ArticlesService, fb:FormBuilder) {
    
      
     
    }

  ngOnInit(): void {        
    this.ArticlesService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
    this.newTaskForm = new FormGroup({
             
        "title": new FormControl(this.art.title),
        "description": new FormControl(this.art.description) ,
        "categoryId": new FormControl(this.art.categoryId) ,
        "published": new FormControl(this.art.published) 
  });
    
  }
    
  editArt(postData:any){
    console.log(postData);
    console.log(this.art);
    
      this.showEditAricle = !this.showEditAricle;
      this.changeStateShowEditAricle.emit();
      this.change.emit(postData);

     
      

    }
    closeArtcle(){
      this.showEditAricle = !this.showEditAricle;
      this.changeStateShowEditAricle.emit();
    }
  
  }



