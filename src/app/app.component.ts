import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component'; // Import du composant

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LessonEditFormComponent], // Ajoutez LessonEditFormComponent ici
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
