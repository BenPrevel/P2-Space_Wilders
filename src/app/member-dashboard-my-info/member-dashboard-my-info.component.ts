import {Component, OnInit} from '@angular/core';
import {StorageService} from 'src/shared/services/storage.service';

@Component({
  selector: 'app-member-dashboard-my-info',
  templateUrl: './member-dashboard-my-info.component.html',
  styleUrls: ['./member-dashboard-my-info.component.css'],
})
export class MemberDashboardMyInfoComponent implements OnInit {
  uInfos: any;
  //Permet de construire le service pour ce component
  constructor(private storageService: StorageService) {}
  //Permet l'initiation du localStorage au lancement de l'application

  ngOnInit(): void {
    this.uInfos = this.storageService.getUInfos();
  }
}
