import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { ITask } from 'src/app/models/task.model';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() task? : ITask;
  panelOpenState = false;

  constructor(private todoListService: TodoListService, private router: Router) { 

  }

  ngOnInit(): void {
  }

  deleteTask(){

    
    if(this.task){

      this.todoListService.deleteTask(this.task)
    }

  }

  checkTask(event : any){


    if(this.task){

      const task = this.todoListService.getATask(this.task)

      task.realizada = event.checked

    }


  }


  updateTab(){

    console.log(this.task)
    if(this.task){
        this.router.navigate(['update'], {state: 
          {
            id:this.task.id,
            titulo: this.task.titulo, 
            detalhes: this.task.detalhes,
            importancia: this.task.importancia,
            realizada: this.task.realizada
          }})
    }

  }

}
