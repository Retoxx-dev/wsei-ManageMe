import { Component } from '@angular/core';
import { CurrentStaticDataService } from 'src/app/Services/CurrentStaticData/current-static-data.service';
import { TasksService } from 'src/app/Services/Tasks/tasks.service';


@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})


export class TaskBoardComponent {
  constructor(private taskService: TasksService, private currentStaticDataService: CurrentStaticDataService) { }
  
  tasks;
  selectedTask;
  task;
  functionalityList: any[];
  currentUser;
  
  deleteTask(taskId: string) {
    this.taskService.deleteTask(taskId);
    this.tasks = this.taskService.getTasks();
  }
  
  onSaveTask(updatedTask: any) {
    this.taskService.updateTask(updatedTask);
    this.tasks = this.taskService.getTasks();
  }
  
  onAddTask(newTask: any) {
    this.taskService.addTask(newTask);
    this.tasks = this.taskService.getTasks();
  }
  
  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.currentUser = this.currentStaticDataService.getCurrentUser();
  }
  
  openTaskModal(task) {
    this.selectedTask = task;
  }
  
  closeTaskModal() {
    this.selectedTask = null;
  }
  
  checkUser(taskId: string) {
    let task = this.taskService.getTaskById(taskId);
    if (task.assigned_to == this.currentUser.id) {
      return this.currentUser.FirstName + " " + this.currentUser.LastName;
    } else {
      return "";
    }
  }
}
