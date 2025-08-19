import { EventEmitter, Injectable } from '@angular/core';
import { DUMMY_TASKS, Task } from '../dummies/dummy-tasks ';
import { User } from '../dummies/dummy-users';
import { NewTaskData } from './add-task/add-task.component';
import { ITasksService } from './tasks.contract';

@Injectable({ providedIn: 'root' })
export class TasksService implements ITasksService {
  private tasks: Task[] = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem('tasks');

    this.tasks = tasks ? JSON.parse(tasks) : this.tasks;
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasks(selectedUser?: User): Task[] {
    return this.tasks.filter((task) => task.userId === selectedUser?.id);
  }

  onAdd(
    taskData: NewTaskData,
    selectedUser: User,
    closeModal: EventEmitter<void>
  ) {
    this.tasks.push({
      ...taskData,
      id: Math.random().toString(),
      userId: selectedUser.id,
    });

    closeModal.emit();

    this.saveTasks();
  }

  completeTask(task: Task): void {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);

    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
