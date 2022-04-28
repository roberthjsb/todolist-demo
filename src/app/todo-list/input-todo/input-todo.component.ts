import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-todo',
  templateUrl: './input-todo.component.html',
  styleUrls: ['./input-todo.component.scss']
})
export class InputTodoComponent implements OnInit {
  @Output('added') added= new EventEmitter<string>();
  textValue:string='';
  constructor() { }

  ngOnInit(): void {
  }
  clickAdd(){
    console.log('clickAdd....')
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
