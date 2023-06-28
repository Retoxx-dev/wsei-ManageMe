import { Injectable } from '@angular/core';
import { Init } from '../../Inits/init-tasks';

@Injectable({
  providedIn: 'root'
})

export class TasksService extends Init{
  tasks;
  functionalities;

  constructor() { 
    super();
    this.load();
  }

  getTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    return tasks;
  }

  addTask(newTask) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  deleteTask(taskId: string) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for(let i = 0; i < tasks.length; i++) {
      if(tasks[i].id == taskId) {
        tasks.splice(i, 1);
      }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  updateTask(updatedTask) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id == updatedTask.id) {
        tasks[i] = updatedTask;
      }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  getTaskById(taskId: string) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    return tasks.find(task => task.id === taskId);
  }
  
  getRelatedTasks(functionalityId: string) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    return tasks.filter(task => task.functionality_id === functionalityId);
  }
}
