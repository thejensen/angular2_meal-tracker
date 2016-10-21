import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { Meal } from './meal.model';
import { MealDetailsComponent } from './meal-details.component';
import { MealEditComponent } from './meal-edit.component';
import { MealListComponent } from './meal-list.component';
import { MealNewComponent } from './meal-new.component';
import { MealComponenet } from './meal.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    Meal,
    MealDetailsComponent,
    MealEditComponent,
    MealListComponent,
    MealNewComponent,
    MealComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
