import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AllstorieskidsComponent } from './allstorieskids/allstorieskids.component';
import { EditstorieskidsComponent } from './editstorieskids/editstorieskids.component';
import { KidsRoutingModule } from './kids-routing.module';
import { LogroskidsComponent } from './logroskids/logroskids.component';
import { NewprofilekidsComponent } from './newprofilekids/newprofilekids.component';
import { ProposalkidsComponent } from './proposalkids/proposalkids.component';
import { ReadstorykidsComponent } from './readstorykids/readstorykids.component';
import { SelecttimekidsComponent } from './selecttimekids/selecttimekids.component';
import { TipskidsComponent } from './tipskids/tipskids.component';
import { RegisterkidsComponent } from '../../web/registerkids/registerkids.component';
import { TipReadkidsComponent } from './tip-readkids/tip-readkids.component';
import { WriteboardkidsComponent } from './writeboardkids/writeboardkids.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Traducción
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UserService } from 'src/app/services/user.service';
import { RelatoservicesService } from 'src/app/services/relatoservices.service';
import { NewprofilekidsModule } from './newprofilekids/newprofilekids.module';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    EditstorieskidsComponent,
    AllstorieskidsComponent,
    LogroskidsComponent,
    ProposalkidsComponent,
    ReadstorykidsComponent,
    SelecttimekidsComponent,
    TipskidsComponent,
    TipReadkidsComponent,
    WriteboardkidsComponent,

  ],
  imports: [
    CommonModule,
    KidsRoutingModule,
    FormsModule,

    // NewprofilekidsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ]
})
export class KidsModule { }
