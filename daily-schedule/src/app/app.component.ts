import {Component} from '@angular/core';

import {addDays, format} from 'date-fns'

import {CategoriesInterface} from "./models/categories.interface";
import {TasksInterface} from "./models/tasks.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public categories: CategoriesInterface[] = [
    {id: 1, name: 'Familia', color: '#ea4335'},
    {id: 2, name: 'Estudo', color: '#4285f4'},
    {id: 3, name: 'Trabalho', color: '#fbbc04'},
    {id: 4, name: 'Portfólio', color: '#666666'},
    {id: 5, name: 'Academia', color: '#34a853'},
    {id: 6, name: 'Alimentação', color: '#ff6d01'}
  ];

  public tasks: TasksInterface[] = [
    {id: 1, category_id: 6, name: 'Café da manhã', date_of_completion: '01/10/2023', hour_of_completion: '08:00:00', start_date: '30/09/2023', end_date: '', status: 'Em andamento'},
    {id: 1, category_id: 3, name: 'Iniciar o trabalho', date_of_completion: '01/10/2023', hour_of_completion: '09:00:00', start_date: '30/09/2023', end_date: '', status: 'Em andamento'},
    {id: 1, category_id: 3, name: 'Iniciar o trabalho', date_of_completion: '01/10/2023', hour_of_completion: '10:00:00', start_date: '', end_date: '', status: 'Em andamento'},
    {id: 1, category_id: 3, name: 'Iniciar o trabalho', date_of_completion: '01/10/2023', hour_of_completion: '11:00:00', start_date: '', end_date: '', status: 'Em andamento'},
    {id: 1, category_id: 6, name: 'Almoçar', date_of_completion: '01/10/2023', hour_of_completion: '12:00:00', start_date: '', end_date: '', status: 'Em andamento'},
    {id: 1, category_id: 3, name: 'Iniciar o trabalho', date_of_completion: '01/10/2023', hour_of_completion: '13:00:00', start_date: '', end_date: '', status: 'Em andamento'},
    {id: 1, category_id: 3, name: 'Iniciar o trabalho', date_of_completion: '01/10/2023', hour_of_completion: '14:00:00', start_date: '', end_date: '', status: 'Em andamento'},
    {id: 1, category_id: 3, name: 'Iniciar o trabalho', date_of_completion: '01/10/2023', hour_of_completion: '15:00:00', start_date: '', end_date: '', status: 'Em andamento'},
    {id: 1, category_id: 3, name: 'Iniciar o trabalho', date_of_completion: '01/10/2023', hour_of_completion: '16:00:00', start_date: '', end_date: '', status: 'Em andamento'},
    {id: 1, category_id: 3, name: 'Iniciar o trabalho', date_of_completion: '01/10/2023', hour_of_completion: '17:00:00', start_date: '', end_date: '', status: 'Em andamento'},
    {id: 1, category_id: 1, name: 'Passar um tempo com ele todo dia.', date_of_completion: '01/10/2023', hour_of_completion: '18:00:00', start_date: '', end_date: '', status: 'Em andamento' },
    {id: 1, category_id: 1, name: 'Passar um tempo com ele todo dia.', date_of_completion: '01/10/2023', hour_of_completion: '19:00:00', start_date: '', end_date: '', status: 'Em andamento' },
    {id: 1, category_id: 5, name: 'Ir a academia', date_of_completion: '01/10/2023', hour_of_completion: '20:00:00', start_date: '', end_date: '', status: 'Em andamento'},
    {id: 1, category_id: 5, name: 'Ir a academia', date_of_completion: '01/10/2023', hour_of_completion: '21:00:00', start_date: '', end_date: '', status: 'Em andamento'},
    {id: 1, category_id: 6, name: 'Jantar', date_of_completion: '01/10/2023', hour_of_completion: '22:00:00', start_date: '', end_date: '', status: 'Em andamento'},
    {id: 1, category_id: 6, name: 'Jantar', date_of_completion: '02/10/2023', hour_of_completion: '22:00:00', start_date: '', end_date: '', status: 'Em andamento'}
  ];

  public date: Date = new Date();
  public days: number = 10;
  public hours: number = 24;

  constructor() {
  }

  public getDays(): string[] {
    const numberOfDays = this.days;

    const daysArray = [];
    for (let i = 0; i < numberOfDays; i++) {
      const currentDate = addDays(this.date, i);
      const formattedDate = format(currentDate, 'dd/MM/yyyy');
      daysArray.push(formattedDate);
    }

    return daysArray;
  }

  public getDayHours(): string[] {
    const total_hours = this.hours;
    const hours: string[] = [];

    for (let i = 0; i < total_hours + 1; i++) {
      hours.push(i < 10 ? '0' + i + ':00:00' : i + ':00:00')
    }
    return hours;
  }

  public getData() {

  }

  public getTaskMatchWithHour(hour: string): TasksInterface {
    return this.tasks.filter(i => i.hour_of_completion === hour)[0];
  }

  public isMatchDayAndHour(task: TasksInterface, day: string, hour: string): boolean {
    if (task && task.date_of_completion === day && task.hour_of_completion === hour) {
      return true;
    }
    return false
  }

}
