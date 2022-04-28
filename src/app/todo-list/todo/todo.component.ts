import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { createTodo, TodoModel } from '../todo-model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input('item') item:TodoModel=createTodo('');
  @Output('deleted') deleted= new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  remove(){ 
    this.deleted.emit();
  }
  finalizar(){
    this.item.finalizada=true;
  }
}
