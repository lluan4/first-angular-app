import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../dummies/dummy-tasks ';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task?: Task;
  @Output() complete = new EventEmitter<Task>();

  onCompleteTask() {
    this.complete.emit(this.task);
  }
}
