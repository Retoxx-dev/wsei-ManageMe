import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskCardComponent } from './Components/task-card/task-card.component';
import { KanbanBoardComponent } from './Components/kanban-board/kanban-board.component';
import { TasksService } from './Services/Tasks/tasks.service';
import { NavComponent } from './Components/nav/nav.component';
import { TaskBoardComponent } from './Components/task-board/task-board.component';
import { FunctionalitiesBoardComponent } from './Components/functionalities-board/functionalities-board.component';
import { TaskModalComponent } from './Components/task-modal/task-modal.component';
import { FunctionalityCardComponent } from './Components/functionality-card/functionality-card.component';
import { FunctionalityModalComponent } from './Components/functionality-modal/functionality-modal.component';
import { AddTaskModalComponent } from './Components/add-task-modal/add-task-modal.component';
import { AddFunctionalityModalComponent } from './Components/add-functionality-modal/add-functionality-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    KanbanBoardComponent,
    NavComponent,
    TaskBoardComponent,
    FunctionalitiesBoardComponent,
    TaskModalComponent,
    FunctionalityCardComponent,
    FunctionalityModalComponent,
    AddTaskModalComponent,
    AddFunctionalityModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TaskCardComponent
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
