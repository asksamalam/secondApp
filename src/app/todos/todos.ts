import { Component , inject, OnInit, signal} from '@angular/core';
import { TodoService } from '../services/todo-service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos implements OnInit{

  todoService = inject(TodoService);
  todoItems = signal<Array<Todo>>([]);
  ngOnInit(): void {
    this.todoService
    .getTodoFromHttpClient()
    .pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    )
    .subscribe((todos) => {
      this.todoItems.set(todos);
    });
  }
  
}
