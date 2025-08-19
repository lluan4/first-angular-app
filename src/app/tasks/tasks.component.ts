import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../dummies/dummy-users';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS, Task } from '../dummies/dummy-tasks ';
import { AddTaskComponent } from './add-task/add-task.component';

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

  tasks: Task[] = DUMMY_TASKS;

  get getSelectedUser(): User | undefined {
    return this.selectedUser;
  }

  get getTasks(): Task[] {
    return this.tasks.filter((task) => task.userId === this.selectedUser?.id);
  }

  onCompleteTask(task: Task): void {
    console.log(`Task completed: ${task.title}`);
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
  }

  onCancelAddTask(): void {
    this.cancelAddTask.emit();
  }

  onAddTask(): void {
    this.addTask.emit();
  }

  onAdd(): void {}
}
