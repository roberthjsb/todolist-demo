import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { createTodo } from '../todo-model';

import { TodoComponent } from './todo.component';

describe('TodoListItemComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    component.item = createTodo('prueba');
    fixture.detectChanges();
  });

  it('debe ser creado con el titulo asignado', () => {
    const text = (<HTMLElement>fixture.debugElement.query(By.css('span')).nativeElement).innerText;
    expect(component).toBeTruthy();
    expect(text).toBe('prueba');
  });
  it('Debe modificar el estilo del texto y deshabilitar boton finalizar', () => {
    const buttonFinalizar = <HTMLButtonElement>fixture
      .debugElement.query(By.css('button.primary')).nativeElement;
    buttonFinalizar.click();
    fixture.detectChanges();
    const textStyle = (<HTMLElement>fixture.debugElement.query(By.css('span')).nativeElement).style;
    expect(textStyle.textDecoration).not.toBe('');
    expect(buttonFinalizar.getAttribute('disabled')).not.toBeNull();
  });
  it('Debe notificar que el todo se va a eliminar',()=>{
    spyOn(component.deleted,'emit');
    const btnEliminar = (<HTMLElement>fixture.debugElement.queryAll(By.css('button'))[0].nativeElement);
    btnEliminar.click()
    expect(component.deleted.emit).toHaveBeenCalled();
  })
});
