import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/task.model';
import { TodoListService } from 'src/app/services/todo-list.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  // newTask: ITask

  updateForm = new FormGroup({

    titulo: new FormControl(''),
    detalhes: new FormControl(''),
    importancia: new FormControl('')


  })

  constructor(private todoListService: TodoListService) { 

    // this.newTask = {
    //   id: 0,
    //   titulo:'',
    //   detalhes:'',
    //   importancia:'',
    //   realizada:false
    // }


  }

  onSubmit(){

    // console.log(this.newTask)
    this.todoListService.createTask(this.updateForm.value)


  }

  ngOnInit(): void {


  }

}
