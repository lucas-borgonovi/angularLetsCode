import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from 'src/app/models/task.model';
import { TodoListService } from 'src/app/services/todo-list.service';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  // taskList?: ITask[]
  taskList$? : Observable<ITask[]>;
  updateForm : FormGroup;


  constructor(private todoListService: TodoListService, private router: Router) { 


    this.updateForm =  new FormGroup({
      id: new FormControl(0),
      titulo: new FormControl(''),
      detalhes: new FormControl(''),
      importancia: new FormControl(''),
      realizada: new FormControl(false)
  
    })
  }

  panelOpenState = false;

  updateTask(){
    if(this.updateForm){
      console.log(this.updateForm.value)
        this.todoListService.updateTask(this.updateForm.value)
    }

  }
  
  
    ngOnInit(): void {

      this.updateForm.patchValue(history.state)
      // this.taskList$ = this.todoListService.getAllTasks();
      // this.taskList$.subscribe((taskList: ITask[])=>{
      // this.updateForm.setValue(taskList)
      // console.log(this.taskList)
    

    }
  
  


}

