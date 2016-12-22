import { Injectable } from '@angular/core';
import { TODOS } from '../../mocks/todo.mock';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  items: Todo[];

  constructor() {
    this.items = TODOS;
   }

  getTodo(): Todo[] {
    return TODOS;
  }

  addTodo(item) {
    console.log(item);
    this.items.push(item);
  }

}
