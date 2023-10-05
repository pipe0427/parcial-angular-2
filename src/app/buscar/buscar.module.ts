import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarRoutingModule } from './buscar-routing.module';
import { BuscarComponent } from './buscar/buscar.component';
import { BuscarBarComponent } from './buscar-bar/buscar-bar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BuscarComponent,
    BuscarBarComponent
  ],
  imports: [
    CommonModule,
    BuscarRoutingModule,
    FormsModule
  ],exports:[
    BuscarBarComponent
  ]
})
export class BuscarModule { }
