import {Component, OnInit} from '@angular/core';
import {Astronaute} from 'src/shared/models/astronaut.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  astronautes: Astronaute[];

  constructor() {
    this.astronautes = [];
  }
  ngOnInit() {
    this.astronautes.push(
      new Astronaute('Anthony', 'Commander', 'assets/images/avatarAnthony.jpg'),
      new Astronaute('Ario', 'Flight engineer', 'assets/images/avatarArio.jpg'),
      new Astronaute('Adrien', 'Co-pilot', 'assets/images/avatarAdrien.jpg'),
      new Astronaute('Benjamin', 'Flight engineer', 'assets/images/avatarBenjamin.jpg'),
      new Astronaute('Godeline', 'Astronaut Researcher', 'assets/images/avatarGodeline.jpg')
    );
  }
}
