import { not } from '@angular/compiler/src/output/output_ast';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InputTodoComponent } from './input-todo.component';

describe('InputTodoComponent', () => {
  let component: InputTodoComponent;
  let fixture: ComponentFixture<InputTodoComponent>;
  let button: HTMLButtonElement;
  let input: HTMLInputElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputTodoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTodoComponent);
    component = fixture.componentInstance;
    button = fixture.debugElement.query(By.css('button')).nativeElement;
    input = fixture.debugElement.query(By.css('input')).nativeElement;
    fixture.detectChanges();
  });

  it('Debe crearse', () => {
    expect(component).toBeTruthy();
  });
  it('Debe bloquear boton si esta vacio el campo', () => {
    const disabled = button.getAttribute('disabled')
    expect(input.value.length).toBe(0)
    expect(disabled).not.toBeNull()
  })

  it('Debe llamar al evento added cuando se haga click en el boton add', () => {
    spyOn(component.added, 'emit');
    input.value = 'prueba';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const disabled = button.getAttribute('disabled')
    expect(disabled).toBeNull();
    button.click();
    expect(component.added.emit).toHaveBeenCalledOnceWith('prueba');
  })
});
