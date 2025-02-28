import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosSService } from '../services/todos-s.service';
import { todoT } from './models/todo.type';
import { catchError } from 'rxjs';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
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
}
