import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-add-items',
  templateUrl: './input-add-items.component.html',
  styleUrls: ['./input-add-items.component.scss']
})
export class InputAddItemsComponent implements OnInit {

  @Output() emitItemTaskList = new EventEmitter();

  addItemTasklist: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  submitItemTaskList(){
    this.addItemTasklist = this.addItemTasklist.trim();
    if(this.addItemTasklist){ 
      this.emitItemTaskList.emit(this.addItemTasklist);
      this.addItemTasklist = "";
    }
  }
}
