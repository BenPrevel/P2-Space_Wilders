import {Component, OnInit} from '@angular/core';
import {Question} from 'src/shared/models/promotionTestQuestion';
import {PromotionTestService} from 'src/shared/services/promotion-test.service';

@Component({
  selector: 'app-member-dashboard-promotion-test-correction-page',
  templateUrl: './member-dashboard-promotion-test-correction-page.component.html',
  styleUrls: ['./member-dashboard-promotion-test-correction-page.component.css'],
})
export class MemberDashboardPromotionTestCorrectionPageComponent implements OnInit {
  // nombre de points obtenus lors du test
  promotionTestPoints = 0;
  // rang de l'utilisateur
  userRank;
  // réponse donnée par l'utilisateur au format JSON
  answersOfUser = [];
  // array contenant seulement les id des réponses de l'utilisateur
  idAnswersOfUser = [];
  // cet array va contenir la liste de questions
  public questionsArray: Question[];
  // service du promotion test
  private service: PromotionTestService;

  constructor(param_service: PromotionTestService) {
    this.service = param_service;
    this.questionsArray = [];
    this.promotionTestPoints = 0;
    this.userRank = '';
  }

  ngOnInit(): void {
    // service : obtenir les questions du fichier json
    this.service.getListofQuestions().subscribe(
      (data: Question[]) => {
        this.questionsArray = data;
      },
      (error) => {
        console.log(error);
      }
    );
    // obtenir les points obtenus par l'utilisateur
    const points = this.service.getPoints();
    if (points != null) {
      this.promotionTestPoints = parseInt(points, 10);
    }
    this.initAnswersOfUser();
    this.initIdAnswersOfUser();
    this.initUserRank();
  }

  // obtenir les réponses données par l'utilisateur au format json
  initAnswersOfUser(): void {
    const parsePromotionTestAnswers = this.service.getUserAnswers();
    if (parsePromotionTestAnswers != null) {
      this.answersOfUser = JSON.parse(parsePromotionTestAnswers);
    }
  }

  // obtenir seulement les id des réponses données par l'utilisateur
  initIdAnswersOfUser(): void {
    for (let i = 0; i < this.answersOfUser.length; i++) {
      for (const key in this.answersOfUser[i]) {
        this.idAnswersOfUser.push(this.answersOfUser[i][key]);
      }
    }
  }

  // obtenir le rang de l'utilisateur au format json
  initUserRank(): void {
    const storageUserRank = this.service.getRank();
    if (storageUserRank != null) {
      this.userRank = storageUserRank;
    }
  }
}
