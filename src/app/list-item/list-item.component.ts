import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Todo } from '../shared/models/todo.model';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit, OnChanges {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    // if(!changes.isFirstChange()) {
    //   console.log('Cambi: ', changes);
    // }
  }

}
