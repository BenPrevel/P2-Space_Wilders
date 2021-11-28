import {Component} from '@angular/core';
import {NasaService} from 'src/shared/services/nasa.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  datas: any;
  images: any[];

  constructor(private nasaService: NasaService) {
    this.images = [];

    // appel au service nasa avec recherche via mot clé ('MPF' pour Mars Pathfinder)
    this.nasaService.getImageByQuery('MPF').subscribe((data) => {
      this.datas = data;
      this.images = this.datas.collection.items;
      // afficher 3 photos sur la dernière ligne en desktop
      while (this.images.length % 3 !== 0) {
        this.images.pop();
        
        
        
      }
    });
  }
}
