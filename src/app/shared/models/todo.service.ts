import { Injectable } from '@angular/core';
import { TODOS } from '../../mocks/todo.mock';
// import { Todo } from './todo.model';

class Todo {
 id: number;
 title: string;
 description: string;
}


@Injectable()
export class TodoService {
  items: Todo[];

  constructor() {
    this.items = TODOS;
    // this.items = [];
   }

  getLastId(): number {
    // let max = Math.max.apply(Math, this.items.map(function(o){return o.id;}));
    // let max = Math.max.apply(Math, this.items.map((o) => o.id));
    let max = Math.max( ...this.items.map((o) => o.id));
    console.log('MAX', max);
    return max;

  }

  getTodo(): Todo[] {
    return this.items;
  }

  addTodo(item) {
    // console.log(instanceof Todo);
    item.id = this.getLastId() + 1;
    this.items.push(item);
    console.log(this.items);
  }

}
