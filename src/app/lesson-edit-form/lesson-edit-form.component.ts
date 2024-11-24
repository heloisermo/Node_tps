import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSettingsService } from '../user-settings.service'; // Importer le service
import{RouterLink} from '@angular/router';

@Component({
  selector: 'app-lesson-edit-form',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lesson-edit-form.component.html',
  styleUrls: ['./lesson-edit-form.component.css'],
})
export class LessonEditFormComponent implements OnInit, OnDestroy {
  title: string = 'Lesson Edit Form';

  constructor(
    private router: Router,
    private userSettingsService: UserSettingsService // Injection du service
  ) {}

  onClickSubmit(): void {
    // Stocker l'ID de la dernière leçon avant de rediriger
    this.userSettingsService.lastLessonId = 1234;
    console.log('Last lesson ID set to:', this.userSettingsService.lastLessonId);

    this.router.navigate(['/lesson-list']).then(() => {
      console.log('Navigated to lesson-list');
    });
  }

  ngOnInit(): void {
    console.log('LessonEditFormComponent.ngOnInit()');
  }

  ngOnDestroy(): void {
    console.log('LessonEditFormComponent.ngOnDestroy()');
  }
}
