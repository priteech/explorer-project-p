import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '.././components/counter/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  // imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  homeMessage = signal('yyyyyyyyyyyyyyyyyyyyyyyyy');
  xyz = '';

  keyUpHandller(event: KeyboardEvent) {
    console.log(`user press ${event.key} key`);
    this.xyz = `user press ${event.key} key`;
  }
}
