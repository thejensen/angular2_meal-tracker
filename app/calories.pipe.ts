import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  // transform function takes the list of meals and the selectedCal property, as determined by the selector as input.
  transform(input: Meal[], selectedCal) {
    var output: Meal[] = [];
    // here we put high calorie meals to the output to return to the page.
    if(selectedCal === "highCal"){
      for(var i=0; i<input.length; i++){
        if (input[i].calories >= 500){
          output.push(input[i]);
        }
      }
      return output;
    // here we put low calorie meals to the output to return to the page.
    } else if (selectedCal === "lowCal"){
      for(var i=0; i<input.length; i++){
        if(input[i].calories < 500){
          output.push(input[i]);
        }
      }
      return output;
    // if selectedCal is All Meals, then the entire content of the input to the pipe is returned to the page, e.g the full list of meals.  
    } else {
      return input;
    }
  }
}
