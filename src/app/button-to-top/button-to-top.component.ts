import {DOCUMENT} from '@angular/common';
import {Component, HostListener, Inject} from '@angular/core';

@Component({
  selector: 'app-button-to-top',
  templateUrl: './button-to-top.component.html',
  styleUrls: ['./button-to-top.component.css'],
})
export class ButtonToTopComponent {
  // Par défaut isShowed est instancié à false. Cette variable est ensuite injectée dans l'html afin de chacher la class show sur le bouton to top
  isShowed = false;
  // J'injecte DOCUMENT dans le constructor
  constructor(@Inject(DOCUMENT) private document: Document) {}
  // J'écoute le scroll dans la window
  @HostListener('window:scroll', ['$event '])
  onWindowScroll() {
    // Si le scroll par rapport au top du document est supérieur à 200px, alors la variable isShowed passe à true, ce qui affichera la classe côté HTML
    if (this.document.documentElement.scrollTop > 200) {
      this.isShowed = true;
    } else {
      // Sinon elle passe à false.
      this.isShowed = false;
    }
  }
  // Lorsque la fonction toTop est lancée, le scrolltop 0 permet à l'utilisateur de revenir au sommet du document
  toTop() {
    this.document.documentElement.scrollTop = 0;
  }
}
