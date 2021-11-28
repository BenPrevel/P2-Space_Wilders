import {Component, OnInit} from '@angular/core';
import {News} from 'src/shared/models/news';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css'],
})
export class LatestNewsComponent implements OnInit {
  // Je crée ma variable de type tableau de News
  news: News[];
  constructor() {
    // News sera un tableau, vide au moment de la construction du composant
    this.news = [];
  }
  ngOnInit(): void {
    // Je pousse dans mon tableau de news de nouvelles instances de l'objet news.
    this.news.push(
      new News(
        'Are you ready to leave the earth ?',
        'oct 22, 21',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo, condimentum nunc a, aliquet fringilla non scelerisque odio molestie. Tincidunt orci hac lorem magna sed vel. Non odio egestas tincidunt nunc lacinia lacinia.',
        'assets/images/launch-pad.jpg'
      ),
      new News(
        'Some news from our Mars rover',
        'oct 20, 21',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo, condimentum nunc a, aliquet fringilla non scelerisque odio molestie. Tincidunt orci hac lorem magna sed vel. Non odio egestas tincidunt nunc lacinia lacinia.',
        'assets/images/rover.jpg'
      ),
      new News(
        'A last regard on our native planet',
        'oct 22, 21',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo, condimentum nunc a, aliquet fringilla non scelerisque odio molestie. Tincidunt orci hac lorem magna sed vel. Non odio egestas tincidunt nunc lacinia lacinia.',
        'assets/images/earth.jpg'
      )
    );
  }
}
