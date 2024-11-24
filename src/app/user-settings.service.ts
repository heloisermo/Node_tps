import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {
  lastLessonId: number | null = null; // Champ partagé entre les composants

  constructor() {
    console.log('UserSettingsService initialized');
  }
}
