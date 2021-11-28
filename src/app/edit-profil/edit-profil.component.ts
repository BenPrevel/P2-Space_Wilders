import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StorageService} from '../../shared/services/storage.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css'],
})
export class EditProfilComponent {
  userForm: any;
  selectControl: FormControl = new FormControl();
  avatarsURL: string[] = [
    '/assets/images/avatar1.png',
    '/assets/images/avatar2.png',
    '/assets/images/avatar3.png',
    '/assets/images/avatar4.png',
    '/assets/images/avatar5.png',
    '/assets/images/avatar6.png',
    '/assets/images/avatar7.png',
    '/assets/images/avatar8.jpg',
    '/assets/images/avatar9.png',
    '/assets/images/avatar10.png',
    '/assets/images/avatar11.jpg',
  ];
  //Constructor pour le formBuilder, le localStorage et le routerLink
  constructor(
    public fb: FormBuilder,
    private storageService: StorageService,
    private router: Router
  ) {
    //fonction de création du formGroup, ( si le localStorage contient des données alors le formulaire est construit selon ces données)
    const userInfos = this.storageService.getUInfos();
    if (userInfos !== null) {
      const storageUserInfo = this.storageService.getUInfos();
      // si l'info avatar est l'avatar par défaut
      if (storageUserInfo.uAvatar === '/assets/images/avatarchoose.png') {
        this.userForm = this.fb.group({
          uAvatar: [''],
          uName: [userInfos.uName, [Validators.required, Validators.minLength(3)]],
          uFirstName: [userInfos.uFirstName, Validators.required],
          uEmail: [userInfos.uEmail, [Validators.required, Validators.email]],
          uBirthday: [
            userInfos.uBirthday,
            [
              Validators.required,
              Validators.pattern('^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$'),
            ],
          ],
          uTel: [
            userInfos.uTel,
            [Validators.required, Validators.pattern('^((\\+)33|0)[1-9](\\d{2}){4}$')],
          ],
          uJob: [userInfos.uJob, Validators.required],
          uAbout: [userInfos.uAbout, Validators.maxLength(100)],
        });
      } else {
        this.userForm = this.fb.group({
          uAvatar: [userInfos.uAvatar],
          uName: [userInfos.uName, [Validators.required, Validators.minLength(3)]],
          uFirstName: [userInfos.uFirstName, Validators.required],
          uEmail: [userInfos.uEmail, [Validators.required, Validators.email]],
          uBirthday: [
            userInfos.uBirthday,
            [
              Validators.required,
              Validators.pattern('^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$'),
            ],
          ],
          uTel: [
            userInfos.uTel,
            [Validators.required, Validators.pattern('^((\\+)33|0)[1-9](\\d{2}){4}$')],
          ],
          uJob: [userInfos.uJob, Validators.required],
          uAbout: [userInfos.uAbout, Validators.maxLength(100)],
        });
      }
      //si le localStorage ne contient pas de données alors le formulaire est construit sans pré-données)
    } else {
      this.userForm = this.fb.group({
        uAvatar: [''],
        uName: ['', Validators.required],
        uFirstName: ['', Validators.required],
        uEmail: ['', [Validators.required, Validators.email]],
        uBirthday: [
          '',
          [
            Validators.required,
            Validators.pattern('^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$'),
          ],
        ],
        uTel: ['', [Validators.required, Validators.pattern('^((\\+)33|0)[1-9](\\d{2}){4}$')]],
        uJob: ['', Validators.required],
        uAbout: ['', Validators.maxLength(100)],
      });
    }
  }

  //l'evenement Click repond a la fonction suivante.
  onSubmit($event: Event) {
    $event.preventDefault();
    if (this.userForm.valid) {
      //si le formuaire remplis par l'utilisateur ne comporte pas d'erreur les données sont stocker dans le localStorage
      this.storageService.onSubmit(this.userForm.value);
      // on récupère les infos de l'utilisateur dans le local storage
      const storageUserInfo = this.storageService.getUInfos();
      // si l'info avatar est vide
      if (storageUserInfo.uAvatar === '') {
        // désigner un avatar par défaut
        storageUserInfo.uAvatar = '/assets/images/avatarchoose.png';
        // remettre les infos à jour avec le nouvel avatar par défaut dans le local storage
        this.storageService.setUInfos(storageUserInfo);
      }
      //Permet de retourner sur la page "dashboard", apres soumissin du formulaire
      this.router.navigate(['/dashboard']);
    }
  }
  // Fonction du bouton reset qui permet de remettre à zéro les données entrées dans les input
  clear() {
    this.userForm.controls.uName.setValue('');
    this.userForm.controls.uFirstName.setValue('');
    this.userForm.controls.uEmail.setValue('');
    this.userForm.controls.uBirthday.setValue('');
    this.userForm.controls.uTel.setValue('');
    this.userForm.controls.uJob.setValue('');
    this.userForm.controls.uAbout.setValue('');
  }
  //Fonction du bouton permet de retourner sur la page "Dashboard" (hors soumission du formulaire)
  redirected() {
    this.router.navigate(['/dashboard']);
  }
}
