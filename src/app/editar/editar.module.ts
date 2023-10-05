import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarRoutingModule } from './editar-routing.module';
import { EditarComponent } from './editar/editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditarComponent
  ],
  imports: [
    CommonModule,
    EditarRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditarModule { }
