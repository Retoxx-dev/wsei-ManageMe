import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FunctionalitiesService } from 'src/app/Services/Functionalities/functionalities.service';


@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
  standalone: true
})

export class TaskCardComponent {
  @Input() id: string;
  @Input() title: string;
  @Input() status: string;
  @Input() backgroundColor;
  @Input() functionality_id: string;
  @Input() functionalityTitle: string;
  @Input() assignedTo: string;
  
  constructor(private funcService: FunctionalitiesService) { }
  
  getFunctionalityTitle() {
    return this.funcService.getFunctionalityTitle(this.functionality_id);
  }
  
  ngOnInit() {
    this.functionalityTitle = this.funcService.getFunctionalityTitle(this.id);
  }
  
  @Output() deleteTask = new EventEmitter<string>();
  onDeleteClick() {
    this.deleteTask.emit(this.id);
  }
}
