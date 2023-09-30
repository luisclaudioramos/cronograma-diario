import { Component } from '@angular/core';

import {
  addDays,
  format,
  getISOWeeksInYear,
  getWeek,
  getWeekOfMonth,
} from 'date-fns'

import {CategoriesInterface} from "./models/categories.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public categories: CategoriesInterface[] = [
    { id: 1, name: 'Familia', color: '#ea4335' },
    { id: 2, name: 'Estudo', color: '#4285f4' },
    { id: 3, name: 'Trabalho', color: '#fbbc04' },
    { id: 4, name: 'Portfólio', color: '#666666' },
    { id: 5, name: 'Academia', color: '#34a853' },
    { id: 6, name: 'Alimentação', color: '#ff6d01' }
  ];



  public date = new Date();

  public week_current: number = getWeek(this.date);
  public weeks_in_current_month: number = getWeekOfMonth(this.date);
  public weeks_in_current_year: number = getISOWeeksInYear(this.date);

  constructor(
  ) {
    console.log(this.week_current);
    console.log(this.weeks_in_current_month);
    console.log(this.weeks_in_current_year);
    console.log(this.weeks_in_current_year - this.week_current);
  }

  public getDays(): string[] {
    const numberOfDays = 30;

    const daysArray = [];
    for (let i = 0; i < numberOfDays; i++) {
      const currentDate = addDays(this.date, i);
      const formattedDate = format(currentDate, 'dd/MM/yyyy');
      daysArray.push(formattedDate);
    }

    return daysArray;
  }

  public getTheLastWeeksOfTheYear(): number[] {
    return [];
  }


}
