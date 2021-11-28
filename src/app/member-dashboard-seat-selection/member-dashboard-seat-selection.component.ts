import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {GuideSeat} from 'src/shared/models/guideSeat.model';
import {PromotionTestService} from 'src/shared/services/promotion-test.service';

@Component({
  selector: 'app-member-dashboard-seat-selection',
  templateUrl: './member-dashboard-seat-selection.component.html',
  styleUrls: ['./member-dashboard-seat-selection.component.css'],
})
export class MemberDashboardSeatSelectionComponent implements OnInit {
  // Je crée la variable qui accueillera le tableau de guide seat
  guideSeat: GuideSeat[];
  // Je crée la variable qui aura pour but d'activer ou non la première classe
  disabledFirstClass: boolean;
  // Je crée la variable qui aura pour but d'activer ou non la seconde classe
  disabledSecondClass: boolean;
  // Je crée la variable qui aura pour but d'activer ou non la troisième classe
  disabledThirdClass: boolean;
  // Je crée la variable qui aura pour but d'activer ou non la quatrième classe
  disabledFourthClass: boolean;
  // Je crée un tableau qui accueillera les valeurs des classes à activer
  disabledClass: boolean[] = [];
  // Je crée le tableau des numéros de sièges 1 à 3
  numbersToThree: number[] = [1, 2, 3];
  // Je crée le tableau des numéros de sièges 4 à 6
  numbersToSix: number[] = [4, 5, 6];
  // Je crée le tableau des numéros de rangées
  letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  // Je crée le formulaire qui accueillera le choix du siège de l'utilisateur
  memberSeatForm = this.fb.group({seat: ['']});

  // J'appel le formBuilder, le service PromotiontestService et le routeur au moment de la construction du composant
  constructor(
    private fb: FormBuilder,
    private promotionTestService: PromotionTestService,
    private router: Router
  ) {
    // Le guide seat est un tableau vide à la construction
    this.guideSeat = [];
    // Par défaut la première classe est désactivée
    this.disabledFirstClass = true;
    // Par défaut la seconde classe est désactivée
    this.disabledSecondClass = true;
    // Par défaut la troisième classe est désactivée
    this.disabledThirdClass = true;
    // Par défaut la quatrième classe est activée
    this.disabledFourthClass = false;
  }
  ngOnInit() {
    // Je pousse dans le tableau guideSeat de nouvelles instances du guide seat
    this.guideSeat.push(
      new GuideSeat('guideA', '1st Class-only seat'),
      new GuideSeat('guideB', '2nd Class-only seat'),
      new GuideSeat('guideD', '3rd Class-only seat'),
      new GuideSeat('guideF', '4th Class-only seat'),
      new GuideSeat('guideA', 'Unavailable seat'),
      new GuideSeat('guideSelected', 'Selected seat')
    );
    // Je check son rang
    const rank: any = this.promotionTestService.getRank();
    // Si son rang n'est pas égal à null
    if (rank !== null) {
      // Et si son rang est première classe
      if (rank === 'First class') {
        // Alors toutes les classes sont actives (c'est l'attribut disabled qui est false dans l'html)
        this.disabledFirstClass = false;
        this.disabledSecondClass = false;
        this.disabledThirdClass = false;
        this.disabledFourthClass = false;
      }
      // Si son rang est seconde classe
      else if (rank === 'Second class') {
        // Alors la première classe est désactivée
        this.disabledFirstClass = true;
        this.disabledSecondClass = false;
        this.disabledThirdClass = false;
        this.disabledFourthClass = false;
      }
      // Si son rang est troisième classe
      else if (rank === 'Third class') {
        // Alors la première et la seconde classe sont désactivées
        this.disabledFirstClass = true;
        this.disabledSecondClass = true;
        this.disabledThirdClass = false;
        this.disabledFourthClass = false;
      }
      // Si son rang est quatrième classe
      else if (rank === 'Fourth class') {
        // Alors seule la quatrième classe est active
        this.disabledFirstClass = true;
        this.disabledSecondClass = true;
        this.disabledThirdClass = true;
        this.disabledFourthClass = false;
      }
    }
    // Je récupère son siège choisi ultérieurement
    let choosenSeat: any = this.promotionTestService.getSeat();
    // Si celui là existe
    if (choosenSeat !== null) {
      // Je parse la valeur récupérée afin qu'elle soit lisible
      choosenSeat = JSON.parse(choosenSeat);
      // Puis je demande à mon formulaire de choisir la place enregistrée
      this.memberSeatForm.setValue({'seat': choosenSeat.seat});
    }
    // Je lance enfin la fonction initClasses qui a pour but de mettre à jour le tableau des classes actives ou désactivées
    this.initClasses();
  }
  // À la soumission du formulaire
  onSubmit() {
    // Je stringify la valeur de son formulaire et je la place dans la variable seatValue
    const seatValue = JSON.stringify(this.memberSeatForm.value);
    // j'envoie cette variable au service afin qu'il la mette à jour dans le local storage
    this.promotionTestService.setSeat(seatValue);
    // J'alert l'utilisateur que son siège a été enregistré
    alert('Your seat has been selected !');
    // je renvoie l'utilisateur à son profil
    this.router.navigate(['/dashboard']);
  }

  // Fonction d'initialisation des classes actives ou désactivées
  initClasses() {
    this.disabledClass = [
      this.disabledFirstClass,
      this.disabledSecondClass,
      this.disabledSecondClass,
      this.disabledThirdClass,
      this.disabledThirdClass,
      this.disabledFourthClass,
      this.disabledFourthClass,
    ];
  }
}
