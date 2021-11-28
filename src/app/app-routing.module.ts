import {Routes} from '@angular/router';
import {EditProfilComponent} from './edit-profil/edit-profil.component';
import {HomeComponent} from './home/home.component';
import {MemberDashboardSeatSelectionComponent} from './member-dashboard-seat-selection/member-dashboard-seat-selection.component';
import {MemberDashboardComponent} from './member-dashboard/member-dashboard.component';
import {MemberDashboardPromotionTestComponent} from './member-dashboard-promotion-test.component/member-dashboard-promotion-test.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ProjectComponent} from './project/project.component';
import {GalleryComponent} from './gallery/gallery.component';
import {MemberDashboardQRCodeComponent} from './member-dashboard-qrcode/member-dashboard-qrcode.component';
import {MemberDashboardPromotionTestCorrectionPageComponent} from './member-dashboard-promotion-test-correction-page/member-dashboard-promotion-test-correction-page.component';
import {AuthGuard} from 'src/shared/auth/auth.guard';
import {NotAuthorizedComponent} from './not-authorized/not-authorized.component';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
  },
  {
    path: 'dashboard',
    component: MemberDashboardComponent,
  },
  {
    path: 'dashboard/promotion-test',
    component: MemberDashboardPromotionTestComponent,
  },
  {
    path: 'dashboard/promotion-test/result',
    component: MemberDashboardPromotionTestCorrectionPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/edit-profil',
    component: EditProfilComponent,
  },

  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'dashboard/seat-selection',
    component: MemberDashboardSeatSelectionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/boarding-pass',
    component: MemberDashboardQRCodeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'not-authorized',
    component: NotAuthorizedComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

export {ROUTES};
