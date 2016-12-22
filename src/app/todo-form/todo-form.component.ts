import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../shared/models/todo.service';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @ViewChild('todoForm') todoForm;
  @ViewChild('title') title;
  @ViewChild('description') description;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onSubmit() {
    let title: string = this.title.nativeElement.value;
    let description: string = this.description.nativeElement.value;
    this.todoService.addTodo({title, description});
  }

}
