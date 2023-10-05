import { Component, OnInit } from '@angular/core';
import { ListarService } from '../listar.service';
import { Tarjeta } from 'src/app/agregar/tarjeta';
import { SwalUtils } from 'src/app/utils/swal-utils';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  tarjetas!: Tarjeta[]
  constructor(private listarService: ListarService){

  }

  ngOnInit():void{
    this.listar()
  }

  listar(){
    this.listarService.listar().subscribe((res) => {
      console.log(res);
      if(res?.tarjetas){
        this.tarjetas = res.tarjetas;
        console.log(this.tarjetas);
      }else{
        SwalUtils.customMessageError("Error","No se encontraron datos")
      }
    }, (error:any) => {
      console.log(error);
      SwalUtils.customMessageError("Error","No al consultar datos")
    })
  }

  
}
