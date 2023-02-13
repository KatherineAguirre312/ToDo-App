import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';

  tasksList: string[] = [];


  eliminarTask(taskIndex: number) {
    this.tasksList.splice(taskIndex, 1);
  }


  newTaskText = '';


  addTask(taskPriority: string) {
    this.tasksList.push(`${taskPriority}: ${this.newTaskText}`);
    this.newTaskText = '';
  }


}


