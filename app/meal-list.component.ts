import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <h1>My Meals</h1>
    <!-- adds selector to see all meals, high calorie meals (>500kCal) and low calorie meals (<500kCal). onChange function adds a a selectedCal property to the MealListComponent. The argument passed is the target value or the option value provided in each option element. We'll need a pipe to determine whether the cal content is high or low, which goes in the forloop of meal-list-->
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">All Meals</option>
      <option value="highCal">High Calorie Meals</option>
      <option value="lowCal" selected="selected">Low Calorie Meals</option>
    </select>
    <!--> runs through a forloop of the input from masterMealList from the AppComponent, named childComponentList here.-->
    <div *ngFor="let currentMeal of childMealList | calories:selectedCal">
      <!-- meal-display is an element from MealComponent, which recieves each meal through the output here, which is the singular variable provided in the foreach loop through the childMealList provided through input from AppComponent.-->
      <meal-display [meal]="currentMeal"></meal-display>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  // selectedCal is set to "All Meals" by default for the selector and for the pipe...
  public selectedCal: string = "All Meals";
  // onChange changes the selectedCal value for input for the calories pipe, to display the list of meals by how many calories are in it.
  onChange(optionFromMenu) {
    this.selectedCal = optionFromMenu;
  }

}
