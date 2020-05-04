import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import {A11yModule} from '@angular/cdk/a11y';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';



import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegComponent } from './reg/reg.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {CheckFormService} from './check-form.service'
import {AuthService} from './auth.service'
import {CompanyService} from './company.service'
import {AboutService} from './about.service'
import {FlashMessagesModule} from 'angular2-flash-messages'
import {HttpModule} from '@angular/http'
import { from } from 'rxjs';

import {IsLoggedIn} from "./isLogged.guard";
import { AboutCompanyComponent } from './about-company/about-company.component'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyCompanyComponent } from './my-company/my-company.component';
import { MyBonusComponent } from './my-bonus/my-bonus.component';
import { NewsCompanyComponent } from './news-company/news-company.component';
import { NewBonusComponent } from './new-bonus/new-bonus.component';
import { RedactNewsComponent } from './redact-news/redact-news.component';
import { AddDonateComponent } from './add-donate/add-donate.component';
import {DonateResolverService} from './donate-resolver.service'
import { StripeModule } from "stripe-angular";
import { RedactBonusComponent } from './redact-bonus/redact-bonus.component';
import { CompanyRedactComponent } from './company-redact/company-redact.component';
import { NewsReadComponent } from './news-read/news-read.component'



const appRoute: Routes = [
  {path: '', component: HomeComponent},
  {path: 'reg', component: RegComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'about', component: AboutCompanyComponent},
  {path: 'newNews', component: NewsCompanyComponent, canActivate:[IsLoggedIn]},
  {path: 'newBonus', component: NewBonusComponent, canActivate:[IsLoggedIn]},
  {path: 'addDonate', component: AddDonateComponent,resolve:{donate:DonateResolverService} ,canActivate:[IsLoggedIn]},
  {path: 'redactNews', component: RedactNewsComponent, canActivate:[IsLoggedIn]},
  {path: 'redactBonus', component: RedactBonusComponent, canActivate:[IsLoggedIn]},
  {path: 'redactCompany', component: CompanyRedactComponent, canActivate:[IsLoggedIn]},
  {path: 'dashboard', component: DashboardComponent, canActivate:[IsLoggedIn]},
  {path: 'newsRead', component: NewsReadComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RegComponent,
    AuthComponent,
    HomeComponent,
    DashboardComponent,
    FooterComponent,
    AboutCompanyComponent,
    MyCompanyComponent,
    MyBonusComponent,
    NewsCompanyComponent,
    NewBonusComponent,
    RedactNewsComponent,
    AddDonateComponent,
    RedactBonusComponent,
    CompanyRedactComponent,
    NewsReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpModule,
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule,

    [ StripeModule.forRoot("pk_test_xan1jtUaqYSADmvGM9R0DZZq006qvIqbty") ],

    MatTableModule,
    CdkTableModule,
    MatSortModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,

    A11yModule,
        MatNativeDateModule,
    ReactiveFormsModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,

    MatMenuModule,
    MatNativeDateModule,
    
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
  ],
  providers: [  CheckFormService, AuthService, CompanyService, AboutService, IsLoggedIn],
  bootstrap: [AppComponent]
})
export class AppModule { }

