import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  template: `
  <div>
    <h4>{{ meal.name }}</h4>
    <p><strong>Details:</strong> {{ meal.details }}</p>
    <p><strong>Calories:</strong> {{ meal.calories }}</p>
    <hr>
  </div>
  `
})

export class MealComponent {
  // received input meal from output [meal]="currentMeal" from the singular variable from the foreach that cycled through the childMealList on  MealListComponent (formerly masterMealList on AppComponent)
  @Input() meal: Meal;

}
