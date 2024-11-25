import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule} from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-test-page1',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
  templateUrl: './test-page1.component.html',
  styleUrls: ['./test-page1.component.css']
})
export class TestPage1Component {
  numberValue=1;
  onClickIncrementValue() {
    this.numberValue++;
   }
   onInputChanged($event: Event) {
    const input = $event.target as HTMLInputElement;
    this.numberValue = +input.value;
  
    const textValue: string = input.value; 
    console.log('input text value:', textValue);

    const numberValue: number = +textValue; 
    this.numberValue = numberValue; 
    console.log('input number value:', this.numberValue);}
    
   
}
