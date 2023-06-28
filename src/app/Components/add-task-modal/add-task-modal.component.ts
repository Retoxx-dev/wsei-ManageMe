import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrentStaticDataService } from 'src/app/Services/CurrentStaticData/current-static-data.service';
import { FunctionalitiesService } from 'src/app/Services/Functionalities/functionalities.service';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss']
})
export class AddTaskModalComponent {
  
  @Input() functionalityList;
  @Output() addTask = new EventEmitter<any>();
  
  statusOptions: string[] = ["todo", "doing", "done"];
  priorityOptions: string[] = ["low", "medium", "high"];
  isModalOpen: boolean = false;
  currentUser;
  currentProject;
  
  generateId() {
    return new Date().getTime().toString();
  }
  
  newTask: any = {
    id: this.generateId(),
    title: '',
    description: '',
    priority: 'low',
    estimated_time: '',
    status: 'todo',
    functionality_id: '',
    created_at: new Date().toLocaleString(),
    start_date: '',
    end_date: '',
    assigned_to: ''
  };
  
  constructor(private funcService: FunctionalitiesService, private currentStaticDataService: CurrentStaticDataService) {}
  
  onCloseClick() {
    this.isModalOpen = false;
  }
  
  onSaveClick() {
    this.isModalOpen = false;
    this.addTask.emit(this.newTask);
    this.newTask = {
      id: '',
      title: '',
      description: '',
      priority: '',
      estimated_time: '',
      status: 'todo',
      functionality_id: '',
      created_at: new Date().toLocaleString(),
      start_date: '',
      end_date: '',
      assigned_to: ''
    };
  }
  
  openTaskModal() {
    this.isModalOpen = true;
  }
  
  ngOnInit() {
    this.functionalityList = this.funcService.getFunctionalities();
    this.currentUser = this.currentStaticDataService.getCurrentUser();
    this.currentProject = this.currentStaticDataService.getCurrentProject();
  }
  
  openTaskAddModal() {
    this.isModalOpen = true;
  }
}
