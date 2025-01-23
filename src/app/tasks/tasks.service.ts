import {Injectable,signal} from '@angular/core'
import {Task}from './task.model';
@Injectable({
    providedIn : 'root'
})

export class TasksService {
    private tasks = signal<Task[]>([]);
    allTasks = this.tasks.asReadonly();
    constructor(){};

    addTask(tasData : {title:string,description:string}){
     const newTasks :Task = {
         ...tasData,
         id: Math.random().toString(),
         status: 'OPEN',
         title: ''
     }

    this.tasks.update((oldTask)=>[...oldTask, newTasks]);
}
};