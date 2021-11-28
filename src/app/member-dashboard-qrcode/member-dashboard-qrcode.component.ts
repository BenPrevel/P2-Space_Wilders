import {Component, OnInit} from '@angular/core';
import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from '@techiediaries/ngx-qrcode';
import {DateService} from 'src/shared/services/date.service';
import {PromotionTestService} from 'src/shared/services/promotion-test.service';

@Component({
  selector: 'app-member-dashboard-qrcode',
  templateUrl: './member-dashboard-qrcode.component.html',
  styleUrls: ['./member-dashboard-qrcode.component.css'],
})
export class MemberDashboardQRCodeComponent implements OnInit {
  // typage de l'élément à afficher : URL, IMG ou CANVAS
  elementType = NgxQrcodeElementTypes.URL;
  // je définis le niveau de correction du QR Code
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  // je renvoie le QR code vers un lien au scan (jeu spaceX amarrage ISS)
  value = 'https://iss-sim.spacex.com/';

  seat: any;
  date: any;

  constructor(
    private promotionTestService: PromotionTestService,
    private dateService: DateService
  ) {}
  ngOnInit(): void {
    // je récupère le contenu de getSeat()
    this.seat = this.promotionTestService.getSeat();
    // je convertis le contenu au format JSON
    this.seat = JSON.parse(this.seat);
    // je récupère le contenu de getDate()
    this.date = this.dateService.getDate();
  }
}
