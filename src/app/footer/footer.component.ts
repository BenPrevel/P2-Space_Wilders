import {Component, OnInit} from '@angular/core';
import {Developper} from 'src/shared/models/developper.model';
import {SocialLink} from 'src/shared/models/social-link.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  // Je crée une variable de type tableau de SocialLinks
  socialLinks: SocialLink[];
  // Je crée une variable de type tableau de développeur
  developpers: Developper[];
  constructor() {
    // SocialLinks sera un tableau
    this.socialLinks = [];
    // Developpers sera un tableau
    this.developpers = [];
  }
  ngOnInit() {
    // Je pousse dans le tableau socialLinks de nouvelles instances de l'objet social link
    this.socialLinks.push(
      new SocialLink('https://twitter.com/', 'assets/images/twitter.png', 'twitter icon'),
      new SocialLink('https://fr-fr.facebook.com/', 'assets/images/fb.png', 'facebook icon'),
      new SocialLink('https://www.linkedin.com/', 'assets/images/linkedin.png', 'linkedin icon')
    );
    // Je pousse dans le tableau socialLinks de nouvelles instances de l'objet developper
    this.developpers.push(
      new Developper('https://www.linkedin.com/in/ario-ngu/', 'Ario Ngu'),
      new Developper('https://www.linkedin.com/in/adrien-mervelay-2748a8223/', 'Adrien Mervelay'),
      new Developper('https://www.linkedin.com/in/godeline-boy-1a2a4145/', 'Godeline Boy'),
      new Developper('https://www.linkedin.com/in/benjamin-prevel-48125469/', 'Benjamin Prevel'),
      new Developper(
        'https://www.linkedin.com/in/anthony-charretier-95101878/',
        'Anthony Charretier'
      )
    );
  }
}
