import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../dummies/dummy-users';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user?: User;
  @Input({ required: true }) selected?: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath(): string {
    return this.user ? `assets/users/${this.user.avatar}` : '';
  }

  onSelectUser() {
    this.select.emit(this.user?.id);
  }
}

// import { Component,  Input, output } from '@angular/core';

// @Component({
//   selector: 'app-user',
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css',
// })
// export class UserComponent {
//   @Input({ required: true }) id: string = '';
//   @Input({ required: true }) avatar: string = '';
//   @Input({ required: true }) name: string = '';

//   select = output<string>();

//   get imagePath(): string {
//     return `assets/users/${this.avatar}`;
//   }

//   onSelectUser() {
//     this.select.emit(this.id);
//   }
// }

// import { Component, EventEmitter, Input, Output } from '@angular/core';

// @Component({
//   selector: 'app-user',
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css',
// })
// export class UserComponent {
//   @Input({ required: true }) id: string = '';
//   @Input({ required: true }) avatar: string = '';
//   @Input({ required: true }) name: string = '';

//   @Output() select = new EventEmitter();

//   get imagePath(): string {
//     return `assets/users/${this.avatar}`;
//   }

//   onSelectUser() {
//     this.select.emit(this.id);
//   }
// }

// import { Component, computed, input, Input } from '@angular/core';

// @Component({
//   selector: 'app-user',
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css',
// })
// export class UserComponent {
//   avatar = input.required<string>();
//   name = input.required<string>();

//   imagePath = computed(() => {
//     return `assets/users/${this.avatar()}`;
//   });

//   onSelectUser(): void {}
// }

// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-user',
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css',
// })
// export class UserComponent {
//   @Input({ required: true }) avatar: string = '';
//   @Input({ required: true }) name: string = '';

//   get imagePath(): string {
//     return `assets/users/${this.avatar}`;
//   }

//   onSelectUser(): void {}
// }

// import { Component, computed, signal } from '@angular/core';
// import { DUMMY_USERS } from '../dummies/dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css',
// })
// export class UserComponent {
//   //selectedUser = DUMMY_USERS[randomIndex];
//   selectedUser = signal(DUMMY_USERS[randomIndex]);
//   imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

//   // get imagePath(): string {
//   //   return `assets/users/${this.selectedUser.avatar}`;
//   // }

//   onSelectUser(): void {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);
//     //this.selectedUser = DUMMY_USERS[randomIndex];
//   }
// }
