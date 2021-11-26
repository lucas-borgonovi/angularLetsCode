import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ITask } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private listOfTasks = [
    {
      id: 1,
      titulo: 'tarefa 1',
      detalhes: 'ofiadfodsfnsod',
      importancia: 'Alta',
      realizada: false,
    },
    {
      id: 2,
      titulo: 'tarefa 2',
      detalhes: 'ofiadfodsfnsod',
      importancia: 'Baixa',
      realizada: false,
    },
    {
      id: 3,
      titulo: 'tarefa 3',
      detalhes: 'ofiadfodsfnsod',
      importancia: 'Média',
      realizada: false,
    }

  ];

  constructor() { }

  getAllTasks(){

    let list = of(this.listOfTasks)

    return list.pipe(delay(2000))
  }

  getATask(task: ITask){

      const index = this.listOfTasks.indexOf(task)

      return this.listOfTasks[index]


  }


  createTask(newTask: ITask){

    const length = this.listOfTasks.length

    newTask.id = length + 1;

    this.listOfTasks.push(newTask);
    
  }

  deleteTask(task: ITask){

    const index = this.listOfTasks.indexOf(task)

    if(index > -1){

      this.listOfTasks.splice(index,1)

    }

  }

  updateTask(task : ITask){
    console.log(task)
    let index = 0;
    this.listOfTasks.forEach((item)=>{
      if(item.id === task.id -1){
        index = item.id
      }

    })

    console.log(index)

    if(index !== 0){

      this.listOfTasks[index] = task

    }
    
  }

}


