import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-body-filter',
  templateUrl: './body-filter.component.html',
  styleUrls: ['./body-filter.component.css']
})
export class BodyFilterComponent implements OnInit {
  valueFilter!:any;
  categories!:any;
  categoryId = '' as any
  published = '' as any
  @Input() showFilter!:boolean;
  @Output() valueEventFilter:EventEmitter<any> = new EventEmitter<any>();
  @Output() valueEventPublishFilter:EventEmitter<any> = new EventEmitter<any>();
  @Output() changeStateShowFilterElem: EventEmitter<boolean> = new EventEmitter();
  constructor(public ArticlesService: ArticlesService) {}

  ngOnInit(): void {
    this.ArticlesService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  saveFilter(){
    this.showFilter = !this.showFilter;
    this.valueEventFilter.emit(this.categoryId);
    this.valueEventPublishFilter.emit(this.published);
    this.changeStateShowFilterElem.emit();
  }
}
