import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { FormGroup,FormControl, FormBuilder } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-body-filter',
  templateUrl: './body-filter.component.html',
  styleUrls: ['./body-filter.component.css']
})
export class BodyFilterComponent implements OnInit {
  valueFilter!:any;
  categories!:any;
  categoryId!:FormControl
  published!:FormControl
  @Input() showFilter!:boolean;
  @Output() valueEventFilter:EventEmitter<any> = new EventEmitter<any>();
  @Output() valueEventPublishFilter:EventEmitter<any> = new EventEmitter<any>();
  @Output() changeStateShowFilterElem: EventEmitter<boolean> = new EventEmitter();
  
  
  constructor(public ArticlesService: ArticlesService){
    this.categoryId = new FormControl("")
    this.published = new FormControl("")
  }

  ngOnInit(): void {
    this.ArticlesService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  saveFilter(){
    this.showFilter = !this.showFilter;
    this.valueEventFilter.emit(this.categoryId.value);
    this.valueEventPublishFilter.emit(this.published.value);
    this.changeStateShowFilterElem.emit();
  }
}
