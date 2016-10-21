import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <h1>Meal List</h1>
    <!--> runs through a forloop of the input from masterMealList from the AppComponent, named childComponentList here.-->
    <div *ngFor="let currentMeal of childMealList">
      <!-- meal-display is an element from MealComponent, which recieves each meal through the output here, which is the singular variable provided in the foreach loop through the childMealList provided through input from AppComponent.-->
      <meal-display [meal]="currentMeal"></meal-display>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];

}
