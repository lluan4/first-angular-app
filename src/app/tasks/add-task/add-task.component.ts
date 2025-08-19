import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TASKS_SERVICE } from '../tasks.contract';
import { User } from '../../dummies/dummy-users';

export interface NewTaskData {
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  private _services = inject(TASKS_SERVICE);

  @Input({ required: true }) selectedUser?: User;
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDueDate = signal('');

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    const taskData = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    };
    this._services.onAdd(taskData, this.selectedUser!, this.cancel);
  }
}
