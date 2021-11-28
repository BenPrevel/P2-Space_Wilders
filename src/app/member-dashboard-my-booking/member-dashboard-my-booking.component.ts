import {Component} from '@angular/core';
import {DateService} from 'src/shared/services/date.service';

@Component({
  selector: 'app-member-dashboard-my-booking',
  templateUrl: './member-dashboard-my-booking.component.html',
  styleUrls: ['./member-dashboard-my-booking.component.css'],
})
export class MemberDashboardMyBookingComponent {
  mySeat;
  seat = false;
  departureDate;
  constructor(private dateServive: DateService) {
    if (localStorage.getItem('seat') !== null) {
      this.mySeat = JSON.parse(localStorage.getItem('seat') || '{}');
      this.seat = true;
    } else {
      this.mySeat = 'F4';
    }
    this.departureDate = this.dateServive.getDate();
  }
}
