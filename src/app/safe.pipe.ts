import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform {
  // J'appel de DomSanitizer au moment de la construction de mon pipe
  constructor(private sanitizer: DomSanitizer) {}
  // la fonction transform récupère l'url en lui faisant une confiance aveugle
  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
