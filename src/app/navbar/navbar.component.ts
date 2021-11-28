import {Component, OnInit} from '@angular/core';
import {Link} from 'src/shared/models/link.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // Je crée une variable links qui a pour modèle un tableau de liens
  links: Link[];

  constructor() {
    // La variable links sera un tableau vide au moment de la construction de mon composant
    this.links = [];
  }
  ngOnInit() {
    // Je pousse dans mon tableau de liens de nouvelles instances de l'objet lien
    this.links.push(
      new Link('Home', '/home'),
      new Link('Dashboard', '/dashboard'),
      new Link('Project', '/project'),
      new Link('Gallery', '/gallery')
    );
  }
}
