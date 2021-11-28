import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  //Définit les fonctions qui stockent les données du formulaire et de l'avatar dans le localStorage
  public onSubmit(form: any) {
    //Stockage des donnéées du formulaire => sous forme de "string"
    localStorage.setItem('userForm', JSON.stringify(form));
  }
  //fonction de récupration des données du formulaire => retour au format initial
  public getUInfos() {
    const userInfos = localStorage.getItem('userForm');
    if (userInfos !== null) {
      return JSON.parse(userInfos);
    }
    return userInfos;
  }
  public setUInfos(argument: any) {
    localStorage.setItem('userForm', JSON.stringify(argument));
  }
}
