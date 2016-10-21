import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div class="header">
      <h1>Eat Like You Mean It</h1>
      <p>If you're not quite sure where all your calories go, use this simple meal tracker to figure it out once and for all. It's not psychic, at least not yet, so make sure to enter your meals as they go down. <br> This app is about intake awareness, that's it! Please feel free to eat. Eating is for life.</p>
      <hr>
    </div>
    <!-- adds selector to see all meals, high calorie meals (>500kCal) and low calorie meals (<500kCal). onChange function adds a a selectedCal property to the MealListComponent. The argument passed is the target value or the option value provided in each option element. We'll need a pipe to determine whether the cal content is high or low, which goes in the forloop of meal-list-->
    <p>View all your meals, high calorie (more than 500kCal) and low calorie (less than 500 kCal) meals to drill down your habits.</p>
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">All Meals</option>
      <option value="highCal">High Calorie Meals</option>
      <option value="lowCal" selected="selected">Low Calorie Meals</option>
    </select>
    <!--> runs through a forloop of the input from masterMealList from the AppComponent, named childComponentList here.-->
    <div *ngFor="let currentMeal of childMealList | calories:selectedCal">
      <!-- meal-display is an element from MealComponent, which recieves each meal through the output here, which is the singular variable provided in the foreach loop through the childMealList provided through input from AppComponent.-->
      <meal-display [meal]="currentMeal"></meal-display>
      <!-- Clicking this button emits the currentMeal that's available through the forloop via the editButtonHasBeenClicked function -->
      <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
      <hr>
    </div>
  `
})

export class MealListComponent {
  // received input from AppComponent through <meal-list>[childMealList]="masterMealList"</meal-list>
  @Input() childMealList: Meal[];
  // An EventEmitter is an Angular class that sends data via the chained .emit(exampleData) function, which is used in the editButtonHasBeenClicked function. Actions have to be sent to their parent component, so that's how the child component EditMealComponent will receive the data from an action from this particular child Component. Because data flows from parent to child, we use the action here to send up to AppC and the data available there will be accessible to EditMealComponent.
  @Output() clickSender = new EventEmitter();
  // selectedCal is set to "All Meals" by default for the selector and for the pipe...
  public selectedCal: string = "All Meals";
  // onChange changes the selectedCal value for input for the calories pipe, to display the list of meals by how many calories are in it.
  onChange(optionFromMenu) {
    this.selectedCal = optionFromMenu;
  }
  // the current meal (this) sent via the click event on the button triggers the editButtonHasBeenClicked function. This corresponds to the clickSender that will be sent through @Output as a new EventEmitter. Meal will go to AppComponent under the <meal-list>.
   editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

}
