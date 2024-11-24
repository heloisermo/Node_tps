import { Component } from '@angular/core';

@Component({
  selector: 'app-test-page1',
  standalone: true,
  imports: [],
  templateUrl: './test-page1.component.html',
  styleUrl: './test-page1.component.css'
})
export class TestPage1Component {
  numberValue=1;
  onClickIncrementValue() {
    this.numberValue++;
   }
   onInputChanged($event: Event) {
    const input = $event.target as HTMLInputElement;
    this.numberValue = +input.value;
  
    const textValue: string = input.value; // Extraire la valeur saisie
    console.log('input text value:', textValue);

    const numberValue: number = +textValue; // Convertir la chaîne en nombre
    this.numberValue = numberValue; // Mettre à jour la propriété
    console.log('input number value:', this.numberValue);}
    
   
}
