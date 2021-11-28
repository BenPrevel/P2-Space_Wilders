import {Component} from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent {
  audio;
  speaker: string;
  playing: boolean;
  constructor() {
    this.audio = new Audio();
    this.playing = false;
    this.audio.src = 'assets/audio/404.mp3';
    this.speaker = 'assets/images/speaker.png';
  }
  onClick() {
    if (this.playing === false) {
      this.playing = true;
      this.audio.play();
      this.speaker = 'assets/images/muted-speaker.png';
    } else {
      this.playing = false;
      this.audio.pause();
      this.audio.currentTime = 0;
      this.speaker = 'assets/images/speaker.png';
    }
  }
}
