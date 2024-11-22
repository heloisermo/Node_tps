import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-lesson-edit-form',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './lesson-edit-form.component.html',
  styleUrl: './lesson-edit-form.component.css'
})
export class LessonEditFormComponent {
  title: string = 'Lesson Edit Form';
}
