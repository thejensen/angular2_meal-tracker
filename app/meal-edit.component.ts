import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-edit',
  template: `
    <div *ngIf="childSelectedMeal">
      <h3 class="flex-item">Edit Meal</h3>
      <div>
        <label>Enter Meal Name:</label>
        <!-- ngModel is an Angular import that allows for input and output to be received and sent simultaneously. -->
        <input [(ngModel)]="childSelectedMeal.name">
        <!-- this button allows the user to determine when they're done editing by sending an eventEmitter back to AppComponent. AppComponent function doneEditing will change the "selectedMeal" property back to null. When that property is null, the edit form no longer shows. -->
        <button (click)="doneClicked()">Done</button>
      </div>
      <div>
        <label>Enter Meal Details:</label>
        <input [(ngModel)]="childSelectedMeal.details">
      </div>
      <div>
        <label>Enter Meal Calories:</label>
        <input [(ngModel)]="childSelectedMeal.calories">
      </div>
    </div>
  `
})

export class MealEditComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked(){
    this.doneClickedSender.emit();
  }
}
