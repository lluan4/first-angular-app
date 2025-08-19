import { EventEmitter, InjectionToken } from '@angular/core';
import { User } from '../dummies/dummy-users';
import { Task } from '../dummies/dummy-tasks ';

export interface ITasksService {
  getTasks(selectedUser?: User): Task[];
  onAdd(
    taskData: { title: string; summary: string; dueDate: string },
    selectedUser: User,
    closeModal: EventEmitter<void>
  ): void;
  completeTask(task: Task): void;
  getAllTasks(): Task[];
}

export const TASKS_SERVICE = new InjectionToken<ITasksService>('TASKS_SERVICE');
