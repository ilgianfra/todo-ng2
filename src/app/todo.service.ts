import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  items: number[];

  constructor() {
    this.items = [1,2,3];
   }

  getTodo() {
    return this.items;
  }

  addTodo(item) {
    this.items.push(item);
  }

}
