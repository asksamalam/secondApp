import { inject, Injectable, signal } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http = inject(HttpClient);

  getTodoFromHttpClient(){
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Array<Todo>>(url);
  }
  //  todoItems: Array<Todo> = [
  //     {
  //     title: 'groceris',
  //     id: 0,
  //     userId: 1,
  //     completed: false
  //   },
  //   {
  //     title: 'car repair',
  //     id: 0,
  //     userId: 1,
  //     completed: false
  //   },
  //   {
  //     title: 'walk',
  //     id: 0,
  //     userId: 1,
  //     completed: false
  //   }
  
  // ];


}
