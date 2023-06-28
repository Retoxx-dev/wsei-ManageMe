import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanBoardComponent } from './Components/kanban-board/kanban-board.component';
import { TaskBoardComponent } from './Components/task-board/task-board.component';
import { FunctionalitiesBoardComponent } from './Components/functionalities-board/functionalities-board.component';

const routes: Routes = [
  { path: 'kanban', component: KanbanBoardComponent },
  { path: '', redirectTo: '/kanban', pathMatch: 'full' },
  { path: 'tasks', component: TaskBoardComponent },
  { path: 'functionalities', component: FunctionalitiesBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
