import { Component, inject, OnInit, signal,input} from '@angular/core';
import { TodosSService } from '../services/todos-s.service';
import { todoT } from './models/todo.type';
import { catchError } from 'rxjs';
import { subscribe } from 'diagnostics_channel';
import { HighlighterDirective } from '../directives/highlighter.directive';
import { UpperCasePipe } from '@angular/common';
import{FormsModule} from '@angular/forms'
import { FiltersPipe } from '../pipes/filters.pipe';
import { CommonModule } from '@angular/common';
// import { standalone } from '@angular/core';

@Component({
  selector: 'app-todos',
  imports: [HighlighterDirective, UpperCasePipe,FormsModule,FiltersPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  page: number = 1;
  pageSize: number = 10;
  Math = Math;
  
  searchTerm = signal('');
  todoS = signal<Array<todoT>>([]);
  todoIteamS = inject(TodosSService);
  constructor(private todoItem: TodosSService) {}

  ngOnInit(): void {
    this.todoIteamS
      .getHttpData()
      .pipe(
        catchError((error) => {
          throw error;
        })
      )
      .subscribe((todo1: todoT[]) => this.todoS.set(todo1));
  }

  updateSearch(value: string) {
    this.searchTerm.set(value);
  }
}
