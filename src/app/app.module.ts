import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {ProjectComponent} from './project/project.component';
import {HeaderComponent} from './header/header.component';
import {ImageOfTheDayComponent} from './image-of-the-day/image-of-the-day.component';
import {HttpClientModule} from '@angular/common/http';
import {LatestNewsComponent} from './latest-news/latest-news.component';
import {MemberDashboardComponent} from './member-dashboard/member-dashboard.component';
import {MemberDashboardMyInfoComponent} from './member-dashboard-my-info/member-dashboard-my-info.component';
import {MemberDashboardMyBookingComponent} from './member-dashboard-my-booking/member-dashboard-my-booking.component';
import {MemberDashboardPromotionTestComponent} from './member-dashboard-promotion-test.component/member-dashboard-promotion-test.component';
import {EditProfilComponent} from './edit-profil/edit-profil.component';
import {MemberDashboardSeatSelectionComponent} from './member-dashboard-seat-selection/member-dashboard-seat-selection.component';
import {MemberDashboardDesktopButtonsComponent} from './member-dashboard-desktop-buttons/member-dashboard-desktop-buttons.component';
import {MemberDashboardMyInfoUserHeaderComponent} from './member-dashboard-my-info-user-header/member-dashboard-my-info-user-header.component';
import {ReactiveFormsModule} from '@angular/forms';
import {GalleryComponent} from './gallery/gallery.component';
import {CountdownComponent} from './countdown/countdown.component';
import {SafePipe} from './safe.pipe';
import {ButtonToTopComponent} from './button-to-top/button-to-top.component';
import {MemberDashboardPromotionTestCorrectionPageComponent} from './member-dashboard-promotion-test-correction-page/member-dashboard-promotion-test-correction-page.component';
import {MessageTestComponent} from './message-test/message-test.component';
import {StorageService} from '../shared/services/storage.service';
import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';
import {MemberDashboardQRCodeComponent} from './member-dashboard-qrcode/member-dashboard-qrcode.component';
import {NotAuthorizedComponent} from './not-authorized/not-authorized.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    ImageOfTheDayComponent,
    LatestNewsComponent,
    MemberDashboardComponent,
    MemberDashboardMyInfoComponent,
    MemberDashboardMyBookingComponent,
    MemberDashboardPromotionTestComponent,
    EditProfilComponent,
    ProjectComponent,
    GalleryComponent,
    MemberDashboardSeatSelectionComponent,
    MemberDashboardDesktopButtonsComponent,
    MemberDashboardMyInfoUserHeaderComponent,
    CountdownComponent,
    SafePipe,
    ButtonToTopComponent,
    MemberDashboardPromotionTestCorrectionPageComponent,
    MessageTestComponent,
    MemberDashboardQRCodeComponent,
    NotAuthorizedComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {scrollPositionRestoration: 'top'}),
    HttpClientModule,
    ReactiveFormsModule,
    NgxQRCodeModule,
  ],
  providers: [StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
