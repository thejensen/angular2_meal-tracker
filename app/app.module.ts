import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MealListComponent } from './meal-list.component';
import { MealComponent } from './meal.component';
import { CaloriesPipe } from './calories.pipe'

@NgModule({
  imports: [BrowserModule],
  declarations: [
    // Do not include the model!
    AppComponent,
    MealListComponent,
    MealComponent,
    CaloriesPipe
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
