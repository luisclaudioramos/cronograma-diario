import { Component } from '@angular/core';

import { addDays, format } from 'date-fns'

import {CategoriesInterface} from "./models/categories.interface";
import {TasksInterface} from "./models/tasks.interface";

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

  public tasks: TasksInterface[] = [
    { id: 1, category_id: 6, name: 'Café da manhã', start_date: '30/09/2023', end_date: '', status: 'Em andamento' },
    { id: 1, category_id: 3, name: 'Iniciar o trabalho', start_date: '30/09/2023', end_date: '', status: 'Em andamento' },
    { id: 1, category_id: 3, name: 'Iniciar o trabalho', start_date: '', end_date: '', status: 'Em andamento' },
    { id: 1, category_id: 3, name: 'Iniciar o trabalho', start_date: '', end_date: '', status: 'Em andamento' },
    { id: 1, category_id: 6, name: 'Almoçar', start_date: '', end_date: '', status: 'Em andamento' },
    { id: 1, category_id: 3, name: 'Iniciar o trabalho', start_date: '', end_date: '', status: 'Em andamento' },
    { id: 1, category_id: 3, name: 'Iniciar o trabalho', start_date: '', end_date: '', status: 'Em andamento' },
    { id: 1, category_id: 3, name: 'Iniciar o trabalho', start_date: '', end_date: '', status: 'Em andamento' },
    { id: 1, category_id: 3, name: 'Iniciar o trabalho', start_date: '', end_date: '', status: 'Em andamento' },
    { id: 1, category_id: 3, name: 'Iniciar o trabalho', start_date: '', end_date: '', status: 'Em andamento' },
    { id: 1, category_id: 1, name: 'Passar um tempo com ele todo dia.', start_date: '', end_date: '', status: 'Em andamento' },
    { id: 1, category_id: 1, name: 'Passar um tempo com ele todo dia.', start_date: '', end_date: '', status: 'Em andamento' },
    { id: 1, category_id: 5, name: 'Ir a academia', start_date: '', end_date: '', status: 'Em andamento' },
    { id: 1, category_id: 5, name: 'Ir a academia', start_date: '', end_date: '', status: 'Em andamento' },
    { id: 1, category_id: 6, name: 'Jantar', start_date: '', end_date: '', status: 'Em andamento' }
  ];

  public date = new Date();

  constructor(
  ) {
  }

  public getDays(): string[] {
    const numberOfDays = 10;

    const daysArray = [];
    for (let i = 0; i < numberOfDays; i++) {
      const currentDate = addDays(this.date, i);
      const formattedDate = format(currentDate, 'dd/MM/yyyy');
      daysArray.push(formattedDate);
    }

    return daysArray;
  }

  public isMatchDay(first: string, second: string): boolean {
    if (first && first === second) {
      return true;
    }
    return false
  }

}
