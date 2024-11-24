import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component'; 
import { LessonSearchPageComponent } from './lesson-search-page/lesson-search-page.component'; 
import { MenuNavBarComponent } from './menu-nav-bar/menu-nav-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LessonListPageComponent} from './lesson-list-page/lesson-list-page.component';

const routes: Routes = [
  // Define the path for the lesson edit form page
  { path: 'lesson-edit', component: LessonEditFormComponent },

  // Add other routes as needed
  { path: 'lesson-list-page',component:LessonListPageComponent},  // Default route
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, LessonEditFormComponent, LessonSearchPageComponent, MenuNavBarComponent, LessonListPageComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'frontend';

  constructor() {
    console.log('AppComponent.constructor()');
  }

  ngOnInit(): void {
    console.log('AppComponent.ngOnInit()');
  }
}
