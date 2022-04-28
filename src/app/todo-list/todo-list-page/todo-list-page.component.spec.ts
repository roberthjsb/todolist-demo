import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createTodo } from '../todo-model';

import { TodoListPageComponent } from './todo-list-page.component';

describe('TodoListPageComponent', () => {
  let component: TodoListPageComponent;
  let fixture: ComponentFixture<TodoListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListPageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe agregar 2 todo a la lista', async () => {
    component.addTodo('prueba 1');
    component.addTodo('prueba 2');
    fixture.detectChanges();
    const html = <HTMLElement>fixture.nativeElement;
    expect(html.querySelectorAll('app-todo').length).toBe(2);
  })

  it('debe remover 1 todo a la', async () => {
    component.todos = [];
    component.todos = [createTodo('prueba 1'), createTodo('prueba 2')];
    fixture.detectChanges();
    const html = <HTMLElement>fixture.nativeElement;
    expect(html.querySelectorAll('app-todo').length).toBe(2);
    component.remove(1);
    fixture.detectChanges();
    expect(html.querySelectorAll('app-todo').length).toBe(1);
  })

});
