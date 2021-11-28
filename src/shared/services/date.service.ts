import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  public setDate() {
    localStorage.setItem('date', 'November 19, 2021 17:30:00');
  }
  public getDate() {
    return localStorage.getItem('date');
  }
}
