import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    
  }

  setEmitTaskList(event: string){
    this.taskList.push ({task: event, checked: false});
  }

  deleteItemTaskList(event: number){
    this.taskList.splice(event, 1)
  }

  deleteAllTaskList(){
    const confirm = window.confirm("Você deseja realmente deletar tudo ?")
    if(confirm){
      this.taskList = [];
    }
  }

  validationInput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm("Task está vazia, Deseja deletar ?");


      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }

  setLocalStorate() {
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }
}
