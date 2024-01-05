import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Building a TODO List</h1>
    @for (todo of todos; track todo.id) {
      <label
        [ngStyle]="{
          'text-decoration': todo.completed ? 'line-through' : 'none'
        }"
      >
        <input
          type="checkbox"
          [checked]="todo.completed"
          (change)="updateTodo(todo)"
        />
        {{ todo.title }}
      </label>
    }
  `,
  styles: 'label { display: block }',
})
export class AppComponent {
  todos: Array<Todo> = [
    {
      id: 1,
      title: 'Learn Angular',
      completed: false,
    },
    {
      id: 2,
      title: 'Learn TypeScript',
      completed: false,
    },
    {
      id: 3,
      title: 'Learn RxJS',
      completed: false,
    },
  ];

  todoSignal = signal<Array<Todo>>(this.todos);

  updateTodo(todo: Todo) {
    this.todoSignal.update((todoList) => {
      todoList.map((t) => {
        if (t.id === todo.id) t.completed = !t.completed;
      });
      return todoList;
    });
  }
}
