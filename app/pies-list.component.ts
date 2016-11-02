import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'pies',
  template: `
  <h3>Initative Order</h3>
  <div *ngFor="let currentPie of favoritePies">
    <p>{{currentPie}}</p>
  </div>
  `
})

export class PiesListComponent {
  favoritePies: string[] = ["Apple", "Banana Cream", "Blackberry"];
}
