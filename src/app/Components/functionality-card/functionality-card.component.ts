import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-functionality-card',
  templateUrl: './functionality-card.component.html',
  styleUrls: ['./functionality-card.component.scss']
})
export class FunctionalityCardComponent {
  @Input() id: string;
  @Input() title: string;
  @Input() status: string;
  @Input() backgroundColor;
  @Input() assignedTo: string;

  @Output() deleteFunctionality = new EventEmitter<string>();
  onDeleteClick() {
    this.deleteFunctionality.emit(this.id);
  }
}
