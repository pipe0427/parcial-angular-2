import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header/header.component';
import { BuscarModule } from '../buscar/buscar.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    BuscarModule
  ],exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
