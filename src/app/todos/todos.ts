import { Component , inject, OnInit, signal} from '@angular/core';
import { TodoService } from '../services/todo-service';
import { Todo } from '../model/todo.type';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos implements OnInit{

  todoService = inject(TodoService);
  todoItems = signal<Todo[]>([]);
  ngOnInit(): void {
    console.log(this.todoService.todoItems);
    this.todoItems.set(this.todoService.todoItems);
  }
  
}
