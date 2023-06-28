import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrentStaticDataService } from 'src/app/Services/CurrentStaticData/current-static-data.service';
import { FunctionalitiesService } from 'src/app/Services/Functionalities/functionalities.service';
import { TasksService } from 'src/app/Services/Tasks/tasks.service';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent {
  @Input() taskId;
  @Input() functionalityList;
  task;
  Date: Date;
  functionality;
  tasks;
  currentProject;
  currentUser;
  statusOptions: string[] = ["todo", "doing", "done"];
  priorityOptions: string[] = ["low", "medium", "high"];
  
  @Output() closeTaskModal = new EventEmitter<void>();
  @Output() saveTask = new EventEmitter<any>();
  
  constructor(private taskService: TasksService, private funcService: FunctionalitiesService, private currentStaticDataService: CurrentStaticDataService) {}
  
  ngOnInit() {
    this.Date = new Date();
    this.task = this.taskService.getTaskById(this.taskId);
    this.functionalityList = this.funcService.getFunctionalities();
    this.currentProject = this.currentStaticDataService.getCurrentProject();
    this.currentUser = this.currentStaticDataService.getCurrentUser();
  }
  
  onCloseClick() {
    this.closeTaskModal.emit();
  }
  
  onSaveClick() {
    this.saveTask.emit(this.task);
    if (this.task.status === 'doing') {
      this.funcService.updateFunctionalityStatus(this.task.functionality_id, 'doing');
    }
    this.checkIfAllTasksDone();
    this.closeTaskModal.emit();
  }
  
  onStatusChange() {
    if (this.task.status === 'doing') {
      this.task.started = this.Date.toLocaleString();
    }
    if (this.task.status === 'todo') {
      this.task.started = null;
      this.task.end_date = null;
    }
    if (this.task.status === 'done') {
      this.task.end_date = this.Date.toLocaleString();
    }
  }
  
  checkIfAllTasksDone() {
    const relatedTasks = this.taskService.getRelatedTasks(this.task.functionality_id);
    const tasksDone = relatedTasks.filter(task => task.status === 'done');
    if (tasksDone.length === relatedTasks.length) {
      this.funcService.updateFunctionalityStatus(this.task.functionality_id, 'done');
    }
  }
}
