import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Task } from '../dummies/dummy-tasks ';
import { User } from '../dummies/dummy-users';
import { AddTaskComponent, NewTaskData } from './add-task/add-task.component';
import { TaskComponent } from './task/task.component';
import { ITasksService, TASKS_SERVICE } from './tasks.contract';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) selectedUser?: User;
  @Input({ required: true }) isAddingTask = false;

  @Output() addTask = new EventEmitter<void>();
  @Output() cancelAddTask = new EventEmitter<void>();

  constructor(@Inject(TASKS_SERVICE) private _services: ITasksService) {}

  get getTasks(): Task[] {
    return this._services.getTasks(this.selectedUser);
  }

  onCancelAddTask(): void {
    this.cancelAddTask.emit();
  }

  onAddTask(): void {
    this.addTask.emit();
  }

  onAdd(taskData: NewTaskData) {
    this._services.getAllTasks().push({
      ...taskData,
      id: Math.random().toString(),
      userId: this.selectedUser?.id || '',
    });

    this.onCancelAddTask();
  }
}
