import { Component, OnInit } from '@angular/core';
import { createTodo, TodoModel } from '../todo-model';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent {
  todos: TodoModel[] = []
  constructor() { }

  addTodo(todoText:string){
    this.todos=[...this.todos,createTodo(todoText)];
  }
  remove(todoindex:number){
    this.todos=this.todos.filter((_,index)=>index!==todoindex)
  }
}
