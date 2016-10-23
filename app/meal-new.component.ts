import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-new',
  template: `
    <h3 class="flex-item">Add a Meal</h3>
    <div>
      <label>Name Your Meal</label>
      <input #newName>
    </div>
    <div>
      <label>Details</label>
      <input #newDetails>
    </div>
    <div>
      <label>Total Calories</label>
      <input #newCalories>
      <button class="add-button" (click)="
        addClicked(newName.value, newDetails.value, newCalories.value);
        newName.value='';
        newDetails.value='';
        newCalories.value='';
      ">Add</button>
    </div>
  `
})

export class MealNewComponent{
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, details: string, calories: number){
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);  
  }
}
