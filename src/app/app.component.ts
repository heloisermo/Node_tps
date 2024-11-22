import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component';
import { LessonSearchPageComponent } from './lesson-search-page/lesson-search-page.component';
import { MenuNavBarComponent } from './menu-nav-bar/menu-nav-bar.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router'; // Assurez-vous que RouterModule est bien importé

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    LessonEditFormComponent,
    LessonSearchPageComponent,
    MenuNavBarComponent,
    RouterModule // Assurez-vous que RouterModule est inclus ici aussi
  ],
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

// Définition des routes ici
export const routes: Routes = [
  { path: 'lesson-edit-form', component: LessonEditFormComponent }
];

// Utilisation de RouterModule.forRoot() pour appliquer les routes
RouterModule.forRoot(routes);
