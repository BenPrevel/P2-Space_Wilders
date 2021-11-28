import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {PromotionTestService} from '../services/promotion-test.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private promotionTestService: PromotionTestService, private router: Router) {}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.promotionTestService.getTest() === 'taken') {
      return true;
    } else {
      this.router.navigate(['not-authorized']);
      return false;
    }
  }
}
