import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <h1>Meal List</h1>
    <div *ngFor="let meal of childMealList">
      <p>{{ meal.name }}</p>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];

}
