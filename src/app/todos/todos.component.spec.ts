import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from './todos.component';
import { FiltersPipe } from '../pipes/filters.pipe';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosComponent, FormsModule],
      declarations: [FiltersPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display todo list items', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Todo list Iteams');
  });

  it('should have search input field', () => {
    const compiled = fixture.nativeElement;
    const input = compiled.querySelector('input[name="searchTerm"]');
    expect(input).toBeTruthy();
    expect(input.placeholder).toBe('Serch by name');
  });

  it('should toggle todo completion status', () => {
    fixture.detectChanges();
    
    const checkbox = fixture.nativeElement.querySelector('#todo-1');
    checkbox.click();
    expect(component.todoS()[0].completed).toBe(true); // Assuming 'completed' is the correct property
  });
});
