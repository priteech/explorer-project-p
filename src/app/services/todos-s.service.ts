import { inject, Injectable } from '@angular/core';
import { todoT } from '../todos/models/todo.type';
import { title } from 'process';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosSService {
  https = inject(HttpClient);
  constructor(private http:HttpClient) { 
    const Httapdata = http;
  }

  getHttpData(){
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    return this.http.get<Array<todoT>>(url);
  }
}
