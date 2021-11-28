import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Question} from '../models/promotionTestQuestion';

@Injectable({
  providedIn: 'root',
})
export class PromotionTestService {
  constructor(private http: HttpClient) {}

  public getListofQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>('/assets/json/questions.json');
  }

  public setPoints(points: number) {
    localStorage.setItem('promotionTestPoints', JSON.stringify(points));
  }

  public getPoints() {
    return localStorage.getItem('promotionTestPoints');
  }

  public setSeat(seatValue: string) {
    localStorage.setItem('seat', seatValue);
  }

  public getSeat() {
    return localStorage.getItem('seat');
  }

  public setUserAnswers(userAnwers: any) {
    localStorage.setItem('promotionTestAnswers', JSON.stringify(userAnwers));
  }

  public getUserAnswers() {
    return localStorage.getItem('promotionTestAnswers');
  }

  public setRank(rank: string) {
    localStorage.setItem('rank', rank);
  }

  public getRank() {
    return localStorage.getItem('rank');
  }

  public setTest() {
    localStorage.setItem('promotionTestTaken', 'taken');
  }

  public getTest() {
    return localStorage.getItem('promotionTestTaken');
  }
}
