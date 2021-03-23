import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { BodyComponent } from './components/filter/body.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from "@angular/common/http";
import { BodyArticlesComponent } from './components/body-articles/body-articles.component';
import { FormsModule }   from '@angular/forms';
import { EditArticlesComponent } from './components/edit-articles/edit-articles.component';
import { FilterPipePipe } from './components/pipe/filter-pipe.pipe';
import { SecondPipePipe } from './components/pipe/second-pipe.pipe';


const appRoutes:Routes = [
  {path:'', component:HeaderComponent},
  {path:'addArticles', component: AddArticlesComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddArticlesComponent,
    BodyComponent,
    BodyArticlesComponent,
    EditArticlesComponent,
    FilterPipePipe,
    SecondPipePipe,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
