import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserSettingsService } from '../user-settings.service'; 
import {Routes} from '@angular/router';

@Component({
  selector: 'app-lesson-list-page',
  standalone: true,
  imports: [],
  templateUrl: './lesson-list-page.component.html',
  styleUrls: ['./lesson-list-page.component.css']
})

export class LessonListPageComponent {
  lastLessonId: number | null = null; 

  constructor(
    private router: Router,
    public userSettingsService: UserSettingsService 
  ) {
    this.lastLessonId = this.userSettingsService.lastLessonId;
    console.log('Retrieved lastLessonId:', this.lastLessonId);
  }

  onClickSubmit(): void {
    this.router.navigate(['/lesson-edit-form']).then(res => {
      console.log('Navigated to lesson edit form', res);
    });
  }
}
const routes: Routes = [
  { path: 'lesson-list-page', component: LessonListPageComponent }, 
];

