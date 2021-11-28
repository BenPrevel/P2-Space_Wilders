/* eslint-disable @typescript-eslint/no-empty-function */
import {Component} from '@angular/core';
import {PromotionTestService} from 'src/shared/services/promotion-test.service';

@Component({
  selector: 'app-message-test',
  templateUrl: './message-test.component.html',
  styleUrls: ['./message-test.component.css'],
})
export class MessageTestComponent {
  messageStartTest: any;
  constructor(private promotionTestService: PromotionTestService) {
    this.messageStartTest = this.promotionTestService.getTest();
  }
}
