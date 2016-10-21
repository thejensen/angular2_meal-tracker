import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <meal-list
      [childMealList]="masterMealList"
      (clickSender)="showEditForm($event)"
    ></meal-list>
    <meal-edit
      [childSelectedMeal]="selectedMeal"   (doneClickedSender)="finishedEditing()"
    ></meal-edit>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Hemp, spinach, yogurt, fruit and peanut butter smoothie", "Man we really need to switch back to the old protein powder, ugh", 400),
    new Meal("Quinoa, asparagus, and mushroom bowl", "Filling, but could use something to brighten it up a bit.", 550),
    new Meal("Apple", "A good apple.", 150),
    new Meal("Spoonfuls of peanut butter", "It's easy to only have a few, but stress eating peanut butter's not the way to go. Have some carrots.", 200)
  ];
  // add a property to AppComponent that is instantiated as null called selectedMeal in order to make it available for the showEditForm function to change that property to a Meal object. That Meal object is saved as "selectedMeal", which can be sent to the EditMealComponent via <meal-edit [childSelectedMeal]="selectedMeal"></meal-edit>
  selectedMeal: Meal = null;
  showEditForm(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }


}
