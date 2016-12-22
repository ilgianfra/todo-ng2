import { Component, Input, OnInit, Output, OnChanges, EventEmitter } from '@angular/core';
import { Todo } from '../shared/models/todo.model';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit, OnChanges {
  @Input() todo: Todo;
  @Output() onDelete: EventEmitter<{}> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if(!changes.todo.isFirstChange()) {
      console.log('Cambi: ', changes);
    }
  }

  deleteTodo() {
    this.onDelete.emit(this.todo);
  }
}
