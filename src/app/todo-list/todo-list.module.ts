import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTodoComponent } from './input-todo/input-todo.component';
import { TodoListPageComponent } from './todo-list-page/todo-list-page.component';
import { TodoComponent as TodoComponent } from './todo/todo.component';



@NgModule({
  declarations: [
    InputTodoComponent,
    TodoListPageComponent,
    TodoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[TodoListPageComponent]
})
export class TodoListModule { }
