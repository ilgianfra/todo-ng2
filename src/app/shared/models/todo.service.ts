import { Injectable } from '@angular/core';
import { TODOS } from '../../mocks/todo.mock';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {

  constructor() {
    // this.items = [1,2,3];
   }

  getTodo(): Todo[] {
    return TODOS;
  }

  addTodo(item) {
    // this.items.push(item);
  }

}
