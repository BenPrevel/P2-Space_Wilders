import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ImageOfTheDay} from '../models/imageOfTheDay';
import {PicturesGallery} from '../models/picturesGallery';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  // Je fais appel au module httpClien au moment de la construction de ce service
  constructor(private http: HttpClient) {}
  // query1 représente un mot clé pour afficher une collection de l'API
  public getImageByQuery(query1: string): Observable<PicturesGallery> {
    return this.http.get<PicturesGallery>('https://images-api.nasa.gov/search?keywords=' + query1);
  }

  // Fonction qui retourne l'image du jour
  public getImageOfTheDay(): Observable<ImageOfTheDay> {
    return this.http.get<ImageOfTheDay>(
      'https://api.nasa.gov/planetary/apod?api_key=bPkWmMHAaNhhD97mqprHyelDSLkZcq2FFWju7S7I'
    );
  }
}
