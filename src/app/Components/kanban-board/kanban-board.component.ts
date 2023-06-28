import { Component, Input } from '@angular/core';
import { TasksService } from '../../Services/Tasks/tasks.service';
import { CurrentStaticDataService } from 'src/app/Services/CurrentStaticData/current-static-data.service';
import { FunctionalitiesService } from 'src/app/Services/Functionalities/functionalities.service';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent {
  @Input() status: string;
  
  constructor(private taskService: TasksService, private currentStaticDataService: CurrentStaticDataService, private funcService: FunctionalitiesService) { }
  
  tasks;
  currentUser;
  selectedTask;
  functionalityList: any[];
  
  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.currentUser = this.currentStaticDataService.getCurrentUser();
  }
  
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
