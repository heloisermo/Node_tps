import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserSettingsService } from '../user-settings.service'; // Importer le service

@Component({
  selector: 'app-lesson-list-page',
  standalone: true,
  imports: [],
  templateUrl: './lesson-list-page.component.html',
  styleUrls: ['./lesson-list-page.component.css']
})
export class LessonListPageComponent {
  lastLessonId: number | null = null; // Champ pour afficher l'ID récupéré

  constructor(
    private router: Router,
    public userSettingsService: UserSettingsService // Injection du service
  ) {
    // Récupérer la valeur de lastLessonId depuis le service
    this.lastLessonId = this.userSettingsService.lastLessonId;
    console.log('Retrieved lastLessonId:', this.lastLessonId);
  }

  onClickSubmit(): void {
    this.router.navigate(['/lesson-edit-form']).then(res => {
      console.log('Navigated to lesson edit form', res);
    });
  }
}

