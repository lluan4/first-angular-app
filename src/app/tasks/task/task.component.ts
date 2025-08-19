import { DatePipe } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { Task } from '../../dummies/dummy-tasks ';
import { CardComponent } from '../../shared/card/card.component';
import { ITasksService, TASKS_SERVICE } from '../tasks.contract';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task?: Task;

  constructor(@Inject(TASKS_SERVICE) private _services: ITasksService) {}

  onCompleteTask() {
    this._services.completeTask(this.task!);
  }
}
