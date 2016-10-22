import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  template: `
  <table>
    <tr>
      <th>{{ meal.name }} <br><br>
      <span class="details">Details: {{ meal.details }}</span></th>
      <th>Calories: {{ meal.calories }}</th>
    </tr>
  </table>
  `
})

export class MealComponent {
  // received input meal from output [meal]="currentMeal" from the singular variable from the foreach that cycled through the childMealList on  MealListComponent (formerly masterMealList on AppComponent)
  @Input() meal: Meal;

}
