import { Component, OnInit,Input ,Output,EventEmitter,ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddArticlesComponent } from '../add-articles/add-articles.component';
import {MatMenuTrigger} from '@angular/material/menu';
import { BodyFilterComponent } from '../body-filter/body-filter.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})

export class HeaderComponent implements OnInit {
// @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

@Output() valueEventFilter:EventEmitter<any> = new EventEmitter<any>();
@Output() outputArticles:EventEmitter<any> = new EventEmitter<any>();
@Output() valueEventPublishFilter:EventEmitter<any> = new EventEmitter<any>();
  public showAdd:any;
  public showFilter:any;
  public newStateShowFilterElem:boolean;
  newArt!: any;
 

  constructor(public dialog: MatDialog,public dialogtwo: MatDialog){
    this.newStateShowFilterElem = false;
  }

  ngOnInit(): void {}
  openDialog(): void {
    const dialogRef = this.dialog.open(AddArticlesComponent, {
      width: '500px',
      data: {head: "Add new article:"}
  });
  dialogRef.afterClosed().subscribe(result => {
      this.newArt = result;
      this.outputArticles.emit(this.newArt);
    });
  }
  
  showAddArtcl(){
    this.showAdd = !this.showAdd;
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
