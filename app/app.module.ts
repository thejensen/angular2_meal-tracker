import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MealListComponent } from './meal-list.component';
import { MealComponent } from './meal.component';
import { CaloriesPipe } from './calories.pipe'
import { MealEditComponent } from './meal-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    // Do not include the model!
    AppComponent,
    MealListComponent,
    MealComponent,
    CaloriesPipe,
    MealEditComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
