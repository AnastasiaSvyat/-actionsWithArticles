import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})

export class HeaderComponent implements OnInit {
@Input() articles!:any;
@Output() valueEventFilter:EventEmitter<any> = new EventEmitter<any>();
@Output() valueEventPublishFilter:EventEmitter<any> = new EventEmitter<any>();
  
  public showAdd:any;
  public newStateShowElem:boolean;
  public showFilter:any;
  public newStateShowFilterElem:boolean;

  constructor(){
    this.newStateShowElem = false;
    this.newStateShowFilterElem = false;
  }
  ngOnInit(): void {}
  showAddArtcl(){
    this.showAdd = !this.newStateShowElem;
  }
  showFilterFunc(){
    this.showFilter = !this.newStateShowFilterElem;
  }
  addItem(valueFilter: any) {
    this.valueEventFilter.emit(valueFilter);
  }
  addFilterPublish(valuePublishFilter: any){
    this.valueEventPublishFilter.emit(valuePublishFilter)
  }
}
