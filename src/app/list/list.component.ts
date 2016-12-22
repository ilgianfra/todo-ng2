import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/models/todo.service';
import { Todo } from '../shared/models/todo.model';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Todo[];

  constructor(private todoService: TodoService) {
    this.items = [];
  }

  ngOnInit() {
    this.items = this.todoService.getTodo();
  }


}
