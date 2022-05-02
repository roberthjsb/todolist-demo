import { Component, EventEmitter, Input, Output } from '@angular/core';
import { createTodo, TodoModel } from '../todo-model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() item: TodoModel = createTodo('');
  @Output() deleted = new EventEmitter<void>();
  constructor() { }

  remove() {
    this.deleted.emit();
  }
  finalizar() {
    this.item.finalizada = true;
  }
}
