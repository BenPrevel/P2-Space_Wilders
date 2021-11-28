import {Component, OnInit} from '@angular/core';
import {NasaService} from 'src/shared/services/nasa.service';

@Component({
  selector: 'app-image-of-the-day',
  templateUrl: './image-of-the-day.component.html',
  styleUrls: ['./image-of-the-day.component.css'],
})
export class ImageOfTheDayComponent implements OnInit {
  // Je déclare la variable qui aura pour objectif d'accueillir l'image du jour
  imageOfTheDay$: any;
  // Je fais appel au service nasaService qui contient les méthodes pour faire appel aux bonnes url
  constructor(private nasaService: NasaService) {}

  ngOnInit() {
    // Je lance la fonction getImageOfTheDay présente dans le nasaService et j'y souscris afin de récupérer les data qui'il me renvoie et je les injecte dans imageOfTheDay$. En cas d'erreur, cette fonction me log un message en console.
    this.nasaService.getImageOfTheDay().subscribe(
      (data) => {
        this.imageOfTheDay$ = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
