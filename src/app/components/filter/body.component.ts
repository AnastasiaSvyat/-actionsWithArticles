import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-body-filter',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  valueFilter!:any;
  categoryId = '' as any
  published = '' as any
  @Input() showFilter!:boolean;
  @Output() valueEventFilter:EventEmitter<any> = new EventEmitter<any>();
  @Output() valueEventPublishFilter:EventEmitter<any> = new EventEmitter<any>();

  @Output() changeStateShowFilterElem: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }
  saveFilter(){
    this.showFilter = !this.showFilter;
    this.valueEventFilter.emit(this.categoryId);
    this.valueEventPublishFilter.emit(this.published);
    this.changeStateShowFilterElem.emit();
  }


}
