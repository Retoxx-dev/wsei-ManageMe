import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrentStaticDataService } from 'src/app/Services/CurrentStaticData/current-static-data.service';
import { FunctionalitiesService } from 'src/app/Services/Functionalities/functionalities.service';
import { TasksService } from 'src/app/Services/Tasks/tasks.service';

@Component({
  selector: 'app-functionality-modal',
  templateUrl: './functionality-modal.component.html',
  styleUrls: ['./functionality-modal.component.scss']
})
export class FunctionalityModalComponent {
  @Input () functionalityId;
  
  functionality;
  filteredTasks: any[] = [];
  currentProject;
  currentUser;
  statusOptions: string[] = ["todo", "doing", "done"];
  priorityOptions: string[] = ["low", "medium", "high"];
  
  @Output() closeFunctionalityModal = new EventEmitter<void>();
  @Output() saveFunctionality = new EventEmitter<any>();
  
  constructor(private taskService: TasksService, private funcService: FunctionalitiesService, private currentStaticDataService: CurrentStaticDataService) {}
  
  ngOnInit() {
    this.functionality = this.funcService.getFunctionalityById(this.functionalityId);
    this.filteredTasks = this.taskService.getRelatedTasks(this.functionalityId);
    this.currentProject = this.currentStaticDataService.getCurrentProject();
    this.currentUser = this.currentStaticDataService.getCurrentUser();
  }
  
  onCloseClick() {
    this.closeFunctionalityModal.emit();
  }
  
  onSaveClick() {
    this.saveFunctionality.emit(this.functionality);
    this.closeFunctionalityModal.emit();
  }
}
