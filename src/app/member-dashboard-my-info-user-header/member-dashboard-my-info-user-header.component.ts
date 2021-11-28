import {Component, OnInit} from '@angular/core';
import {PromotionTestService} from 'src/shared/services/promotion-test.service';
import {StorageService} from 'src/shared/services/storage.service';

@Component({
  selector: 'app-member-dashboard-my-info-user-header',
  templateUrl: './member-dashboard-my-info-user-header.component.html',
  styleUrls: ['./member-dashboard-my-info-user-header.component.css'],
})
export class MemberDashboardMyInfoUserHeaderComponent implements OnInit {
  user: any;
  rank: any;
  constructor(
    private promotionTestService: PromotionTestService,
    private storageService: StorageService
  ) {
    if (this.promotionTestService.getRank() !== null) {
      this.rank = this.promotionTestService.getRank();
    } else this.rank = 'Fourth class';
  }
  //Permet l'initiation du localStorage au lancement de l'application
  ngOnInit() {
    this.user = this.storageService.getUInfos();
  }
}
