import { Component, isStandalone } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,CounterOutputComponent, CounterControlsComponent ], //RouterOutlet for later use
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'explorer-project';
}
