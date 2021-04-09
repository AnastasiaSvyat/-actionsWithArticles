import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule,Routes } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddArticlesComponent } from './components/add-articles/add-articles.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from "@angular/common/http";
import { BodyArticlesComponent } from './components/body-articles/body-articles.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FilterPipePipe } from './components/pipe/filter-pipe.pipe';
import { SecondPipePipe } from './components/pipe/second-pipe.pipe';
import {MatIconModule} from '@angular/material/icon';
import { BodyFilterComponent } from './components/body-filter/body-filter.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddArticlesComponent,
    BodyArticlesComponent,
    FilterPipePipe,
    SecondPipePipe,
    BodyFilterComponent,
  ],
  imports: [
    MatMenuModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    FormsModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
