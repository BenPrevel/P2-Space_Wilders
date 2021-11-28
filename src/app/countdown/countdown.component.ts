import {Component} from '@angular/core';
import {DateService} from 'src/shared/services/date.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
})
export class CountdownComponent {
  demo: any;
  days: number | undefined;
  hours: number | undefined;
  mins: number | undefined;
  secs: number | undefined;

  futurDate: number;
  date: any;
  constructor(private dateService: DateService) {
    this.date = this.dateService.getDate();
    this.futurDate = new Date(this.date).getTime();
    
  }
  /*date futur - getTime = méthode qui renvoie la valeur numérique */

  /*setInterval = méthode qui appel la fonction au moment de l'ouverture du site*/
  // eslint-disable-next-line angular/interval-service
  x = setInterval(() => {
    /*récupération de la date d'aujourd'hui*/
    const today = new Date().getTime();
    /* variable qui récupère tps de diff pour lke countdown*/
    if (this.futurDate !== null) {
      const distance = (this.futurDate as any) - (today as any);
      /*calcul de la variable distance en jour, heures, minutes et secondes*/
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance % (1000 * 60)) / 1000);

      /* variable demo affichant les differentes variables days/hours/mins/secs*/
      this.demo = days + 'd ' + hours + 'h ' + mins + 'm ' + secs + 's ';

      /* condition mettant un message TakeOf quand countdown à 0 - si (l'intervalle entre les 2 dates est inf a 0) alors on vide l'intervale de la fonction x et nous mettons une nouvelle valeur à demo*/
      if (distance < 0) {
        clearInterval(this.x);
        this.demo = 'Takeoff';
      }
    }
  }, 1000);
}
