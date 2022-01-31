import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Routing */
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/** Components & views */
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [ LoginComponent]
})
export class LoginModule { }
