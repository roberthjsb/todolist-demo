import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-todo',
  templateUrl: './input-todo.component.html',
  styleUrls: ['./input-todo.component.scss']
})
export class InputTodoComponent  {
  @Output() added= new EventEmitter<string>();
  textValue:string='';
  constructor() { }

  clickAdd(){
    this.added.emit(this.textValue);
  }
  isEmpty(){
    return this.textValue.length===0;
  }
  setValue($event:Event): void{
    const val = ($event.target as HTMLInputElement).value;
    this.textValue=val;
  }
  

}
