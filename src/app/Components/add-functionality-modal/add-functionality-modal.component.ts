import { Component, Output, EventEmitter } from '@angular/core';
import { CurrentStaticDataService } from 'src/app/Services/CurrentStaticData/current-static-data.service';

@Component({
  selector: 'app-add-functionality-modal',
  templateUrl: './add-functionality-modal.component.html',
  styleUrls: ['./add-functionality-modal.component.scss']
})
export class AddFunctionalityModalComponent {
  
  @Output() addFunctionality = new EventEmitter<any>();
  
  statusOptions: string[] = ["todo"];
  priorityOptions: string[] = ["low", "medium", "high"];
  isModalOpen: boolean = false;
  currentProject;
  currentUser;
  
  constructor(private currentStaticDataService: CurrentStaticDataService) {}
  
  generateId() {
    return new Date().getTime().toString();
  }
  
  ngOnInit() {
    this.currentProject = this.currentStaticDataService.getCurrentProject();
    this.currentUser = this.currentStaticDataService.getCurrentUser();
  }
  
  newFunctionality: any = {
    id: this.generateId(),
    title: '',
    description: '',
    priority: '',
    status: 'todo',
    project_id: '',
    assigned_to: ''
  };
  
  onCloseClick() {
    this.isModalOpen = false;
  }
  
  onSaveClick() {
    this.isModalOpen = false;
    this.addFunctionality.emit(this.newFunctionality);
    this.newFunctionality = {
      id: '',
      title: '',
      description: '',
      priority: '',
      status: 'todo',
      project_id: '',
      assigned_to: ''
    };
  }
  
  openAddFunctionalityModal() {
    this.isModalOpen = true;
  }
}
