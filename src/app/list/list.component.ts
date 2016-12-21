import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: number[];

  constructor(private todoService: TodoService) {
    this.items = [];
  }

  ngOnInit() {
    this.items = this.todoService.getTodo();
  }

  addItem() {
    let last = this.items.length;
    console.log(last);
    this.items.push(last)
  }

}
