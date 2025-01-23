import { Component, signal,inject } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
private TasksService = inject(TasksService);
tasks= this.TasksService.allTasks;

  selectedFilter = signal<string>('all');
  

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
