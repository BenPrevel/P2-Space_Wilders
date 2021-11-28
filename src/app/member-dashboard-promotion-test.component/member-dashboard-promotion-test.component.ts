import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Question} from 'src/shared/models/promotionTestQuestion';
import {PromotionTestService} from 'src/shared/services/promotion-test.service';

@Component({
  selector: 'app-member-dashboard-promotion-test',
  templateUrl: './member-dashboard-promotion-test.component.html',
  styleUrls: ['./member-dashboard-promotion-test.component.css'],
})
export class MemberDashboardPromotionTestComponent implements OnInit {
  // cet array va contenir la liste de questions
  public questionsArray: Question[];
  // service
  private service: PromotionTestService;
  // form
  questionForm: FormGroup;

  constructor(
    private param_service: PromotionTestService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.service = param_service;
    this.questionsArray = [];
    this.questionForm = this.formBuilder.group({
      questions: this.formBuilder.array([]),
    });
  }

  // transforme le array questions en FormArray
  get formArr() {
    return this.questionForm.get('questions') as FormArray;
  }

  ngOnInit(): void {
    // service pour obtenir les questions à partir du fichier json
    this.service.getListofQuestions().subscribe(
      (data: Question[]) => {
        this.questionsArray = data;
        this.initControl();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  initControl() {
    // Pour chaque question présent dans le tableau questionsArray
    this.questionsArray.forEach((val, index) => {
      const fg = this.formBuilder.group({});
      fg.addControl('reponse' + index, this.formBuilder.control('', Validators.required));
      this.formArr.push(fg);
    });
  }

  // calcul des points, du rang, d'un siège par défaut + redirection
  checkAnswers() {
    // obtient les valeurs du formulaire
    const promotionTestAnswers = this.questionForm.value.questions;
    // stocker ces valeurs dans le local storage
    this.service.setUserAnswers(promotionTestAnswers);
    // compteur de points
    let promotionTestPoints = 0;
    // on boucle dans les réponses de l'utilisateur
    for (let i = 0; i < promotionTestAnswers.length; i++) {
      for (const key in promotionTestAnswers[i]) {
        // si réponse juste, +1 point
        if (promotionTestAnswers[i][key] == this.questionsArray[i].idAnswer) {
          promotionTestPoints += 1;
        }
      }
    }
    // check dans le local storage si le test a été effectué
    const promotionTestTaken = this.service.getTest();
    // si le test a été effectué pour la première fois
    if (promotionTestTaken === null) {
      // ajoute les points obtenus par l'utilisateur dans le local storage
      this.service.setPoints(promotionTestPoints);
      // ajoute promotionTestTaken : taken dans le local storage
      this.service.setTest();
      // Si le nombre de points du test est égal au nombre de questions posées
      if (promotionTestPoints === this.questionsArray.length) {
        // La première classe sera attribuée au joueur par le biais de la méthode setRank du param_service
        this.param_service.setRank('First class');
      }
      // Si le nombre de points du test est supérieure au (tiers du nombre de questions posées) multipliée par deux
      else if (promotionTestPoints > Math.floor((this.questionsArray.length / 3) * 2)) {
        // La seconde classe sera attribuée au joueur par le biais de la méthode setRank du param_service
        this.param_service.setRank('Second class');
      }
      // Si le nombre de points du test est supérieur ou égal au tiers du nombre de questions posées
      else if (promotionTestPoints >= Math.floor(this.questionsArray.length / 3)) {
        // La troisième classe sera attribuée au joueur par le biais de la méthode setRank du param_service
        this.param_service.setRank('Third class');
      }
      // Si le nombre de points du test est inférieur ou égal au tiers du nombre de questions posées
      else if (promotionTestPoints < Math.floor(this.questionsArray.length / 3)) {
        // La quatrième classe sera attribuée au joueur par le biais de la méthode setRank du param_service
        this.param_service.setRank('Fourth class');
      }
      // désigne un siège par défaut si le test a été fait pour la première fois
      this.service.setSeat('{"seat":"F4"}');
    } else {
      // enregistrer le nouveau nombre de points sans changer le rang
      this.service.setPoints(promotionTestPoints);
    }
    // redirige vers la page de correction du test
    this.router.navigate(['/dashboard/promotion-test/result']);
  }
}
