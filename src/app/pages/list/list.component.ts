import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from 'src/app/models/task.model';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // list : ITask[] = []
  taskList$? : Observable<ITask[]>;

  constructor( private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.taskList$ = this.todoListService.getAllTasks();
    this.taskList$.subscribe((taskList: ITask[])=>{
      // this.list = taskList
      // console.log(this.list)
    })
  }

}
