// src/app/app-routes.ts
import { Routes } from '@angular/router';
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';

Component({
    selector: 'app-lesson-edit-form',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './lesson-edit-form.component.html',
    styleUrl: './lesson-edit-form.component.css'
    })

export const routes: Routes = [
  { path: 'lesson-edit-form', component: LessonEditFormComponent }
];
