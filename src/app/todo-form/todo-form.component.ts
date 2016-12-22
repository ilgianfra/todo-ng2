import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../shared/models/todo.service';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @ViewChild('todoForm') todoForm;
  @ViewChild('name') name;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this);
    this.todoService.addTodo(this.name.nativeElement.value);
  }

}
