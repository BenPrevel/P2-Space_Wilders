import {Component} from '@angular/core';
import {DateService} from 'src/shared/services/date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mars2939';

  constructor(private dateService: DateService) {
    this.dateService.setDate();
  }
}
