import { Component, input, signal } from '@angular/core';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent {
  counter = signal(0);

  message = input('Hellow');
  onIncreament(){
    this.counter.update((count)=>count+1)
  }
  onDncreament(){
    this.counter.update((count)=>count-1)
  }
  onRest(){
    this.counter.set(0);
  }

}
