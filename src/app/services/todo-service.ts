import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
   todoItems: Array<Todo> = [
      {
      title: 'groceris',
      id: 0,
      userId: 1,
      completed: false
    },
    {
      title: 'car repair',
      id: 0,
      userId: 1,
      completed: false
    },
    {
      title: 'walk',
      id: 0,
      userId: 1,
      completed: false
    }
  
  ]
}
