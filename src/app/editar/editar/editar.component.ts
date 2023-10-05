import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarjeta } from 'src/app/agregar/tarjeta';
import { EditarService } from '../editar.service';
import { SwalUtils } from 'src/app/utils/swal-utils';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  tarjetaForm!: FormGroup
  tarjeta:Tarjeta = new Tarjeta()

  constructor(private fb: FormBuilder,
    private router:Router,
    private editarService: EditarService) {

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
      this.editarService.agregar(this.tarjeta).subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('dashboard/listar')
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
