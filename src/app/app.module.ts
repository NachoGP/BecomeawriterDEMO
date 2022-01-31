
/** Angular / core / libraries */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';

/** Traducción */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function translateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
/**  Servicios */
import { UserService } from './services/user.service';
import { HttpService } from './services/http.service';
import { RelatoservicesService } from './services/relatoservices.service';
import { TipsService } from './services/tips.service';

/** Módulos */
import { HttpClientModule } from '@angular/common/http';
import { Cfactory } from 'src/libs/cfactory/cfactory.module';
import { WebModule } from './web/web.module';
import { KidsModule } from './pages/kids/kids.module';
import { LoggerModule } from 'ngx-logger';
/** Material */
import { MaterialModule } from './material.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
/** Routing */
import {AppRoutingModule} from './app-routing.module';

/** Lodash */
import * as _ from 'lodash';

//** Notification Toastr */
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/** Módulos de vistas */
import { ModalcontactComponent } from './components/modalcontact/modalcontact.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminteacherModule } from './pages/admins/adminteacher/adminteacher.module';
import { MainModule } from './web/main/main.module';
import { LoginkidsModule } from './web/loginkids/loginkids.module';
import { NewprofilekidsModule } from './pages/kids/newprofilekids/newprofilekids.module';

/** errors */
import { Page404Component } from './pages/errors/page404/page404.component';
import { PageMaintenanceComponent } from './pages/errors/page-maintenance/page-maintenance.component';
import { RouterModule } from '@angular/router';
import { LoginModule } from './web/login/login.module';
import { PreloaderModule } from './pages/preloader/preloader.module';
import { GenericModalModule } from './components/generic-modal/generic-modal.module';
import { ComponentModule } from './components/component.module';
import { StartModalModule } from './components/start-modal/start-modal.module';
import { StartModalComponent } from './components/start-modal/start-modal.component';
import { ExitModalComponent } from './components/exit-modal/exit-modal.component';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalcontactComponent,
    PageMaintenanceComponent,
    Page404Component,
  ],
  imports: [
    PreloaderModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    WebModule,
    LoginkidsModule,
    LoginModule,
    NewprofilekidsModule,
    MainModule,
    AdminteacherModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentModule,
    StartModalModule,
     /** Material */
    MaterialModule,
    GenericModalModule,
    Cfactory,
    LoggerModule.forRoot({
      level: environment.LogLevel,
      colorScheme: ['purple', 'teal', 'gray', 'gray', 'red', 'red', 'red']
    }),
    // NgxPaginationModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (translateLoader),
        deps: [HttpClient]
      }
    }),
    //Toastr - Notifications
    ToastrModule.forRoot({
      timeOut: 44500,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    UserService, HttpService, RelatoservicesService, TipsService ],

  entryComponents: [
    ModalComponent, ModalcontactComponent, StartModalComponent, ExitModalComponent
  ],
  exports: [
    TranslateModule,
    RouterModule,
    ModalComponent,
    ModalcontactComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
