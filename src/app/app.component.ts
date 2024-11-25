import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component'; 
import { LessonSearchPageComponent } from './lesson-search-page/lesson-search-page.component'; 
import { MenuNavBarComponent } from './menu-nav-bar/menu-nav-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LessonListPageComponent} from './lesson-list-page/lesson-list-page.component';
import {ActivatedRoute} from "@angular/router";

const routes: Routes = [
  // Define the path for the lesson edit form page
  { path: 'lesson-edit', component: LessonEditFormComponent },

  // Add other routes as needed
  { path: 'lesson-list-page',component:LessonListPageComponent},  // Default route
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, LessonEditFormComponent, LessonSearchPageComponent, MenuNavBarComponent, LessonListPageComponent, RouterModule], 
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

export class LessonDetailPageComponent {
  readonly initialId: number;
  id: number | undefined;
  constructor(activatedRoute: ActivatedRoute) {
  this.initialId = +activatedRoute.snapshot.params['id'];
  console.log('initialId:', this.initialId);
  activatedRoute.params.subscribe(currParams => {
  this.id = +currParams['id'];
  console.log('id:', this.id);
  });
  }
}
