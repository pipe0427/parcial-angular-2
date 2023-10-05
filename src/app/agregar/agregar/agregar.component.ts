import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Tarjeta } from '../tarjeta';
import { Router } from '@angular/router';
import { AgregarService } from '../agregar.service';
import { SwalUtils } from 'src/app/utils/swal-utils';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  tarjetaForm!: FormGroup
  tarjeta:Tarjeta = new Tarjeta()

  constructor(private fb: FormBuilder,
    private router:Router,
    private agregarService: AgregarService) {

  }

  ngOnInit() {
    this.tarjetaForm = this.iniciarFormulario()
  }

  iniciarFormulario(): FormGroup {
    return this.fb.group({
      titular: ['', [Validators.required]],
      numero: ['', [Validators.required,Validators.minLength(5)]],
      fecha: ['', Validators.required],
      cvv: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(3)]],
    })

  }

  onSubmit(){
    if (this.tarjetaForm.valid){
      this.extractData()
      this.agregarService.agregar(this.tarjeta).subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('dashboard')
        SwalUtils.customMessageOk('Agregado','Se agrego correctamente')
      }, (error) => {
        this.router.navigateByUrl('dashboard')
        SwalUtils.customMessageError('Ops! Hubo un error', 'No se agrego')        
        console.log(error);
      }
      )
    }
  }

  extractData(){
    this.tarjeta.titular = this.tarjetaForm.get("titular")?.value
    this.tarjeta.numero = this.tarjetaForm.get("numero")?.value
    this.tarjeta.fecha = this.tarjetaForm.get("fecha")?.value
    this.tarjeta.cvv = this.tarjetaForm.get("cvv")?.value

  }
}
