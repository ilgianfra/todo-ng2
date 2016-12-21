import { Component, Input, OnInit, OnChanges } from '@angular/core';
// import { ListComponent } from '../list/list.component';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit, OnChanges {
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if(!changes.name.isFirstChange()) {
      console.log('Cambi: ', changes);
    }
  }

}
