import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ClarityModule } from '@clr/angular';

import { NgxsModule } from '@ngxs/store';
// import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

import { AppState, ModalState } from './shared/state';

import { environment } from '../environments/environment';
import { RequestConsultationComponent } from './modals/request-consultation/request-consultation.component';
import { TermsOfServiceComponent } from './modals/terms-of-service/terms-of-service.component';
import { CookiesComponent } from './modals/cookies/cookies.component';
import { PrivacyComponent } from './modals/privacy/privacy.component';

import { RVAService } from './shared/services';
import { AppInfoComponent } from './alerts/app-info/app-info.component';
import { AppErrorComponent } from './alerts/app-error/app-error.component';
import { AppWarnComponent } from './alerts/app-warn/app-warn.component';
import { ServiceComponent } from './components/service/service.component';


export const states = [
  AppState,
  ModalState
];

export const storageKeys = [
  'app',
  'modals'
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    RequestConsultationComponent,
    TermsOfServiceComponent,
    PrivacyComponent,
    CookiesComponent,
    AppInfoComponent,
    AppErrorComponent,
    AppWarnComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
//    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxsModule.forRoot(states, { developmentMode: !environment.production }),
//    NgxsStoragePluginModule.forRoot({ key: storageKeys}),
    NgxsReduxDevtoolsPluginModule.forRoot({ name: 'RVA'}),
    NgxsLoggerPluginModule.forRoot({ collapsed: false }),

  ],
  providers: [ RVAService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
