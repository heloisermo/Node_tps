import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './lesson-detail-page.component.html',
  styleUrl: './lesson-detail-page.component.css'
})
export class LessonDetailPageComponent {
  id: number | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {
    // Récupérer l'ID depuis l'URL
    this.route.params.subscribe(params => {
      this.id = +params['id']; // Convertit en nombre
      console.log(`Current lesson ID: ${this.id}`);
    });
  }

  onClickGoNextPage(): void {
    const nextId = this.id ? this.id + 1 : 1;
    this.router.navigate(['/lesson', nextId]).then(() => {
      console.log(`Navigated to lesson ${nextId}`);
    });
  }
}
