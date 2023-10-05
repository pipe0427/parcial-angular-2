import { Component } from '@angular/core';
import { Tarjeta } from 'src/app/agregar/tarjeta';
import { BuscarService } from '../buscar-service.service';
import { ActivatedRoute } from '@angular/router';
import { SwalUtils } from 'src/app/utils/swal-utils';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  searchKeyword: string = ""

  tarjetas!: Tarjeta[]
  constructor(private activatedRoute:ActivatedRoute,private buscarService: BuscarService){

  }

  ngOnInit():void{
    this.activatedRoute.params.subscribe(params => {
      this.searchKeyword = params['keyword']
      this.buscar()
    })
  }

  buscar(){
    this.buscarService.getSearchTarjeta(this.searchKeyword).subscribe((res) => {
      this.tarjetas = res.tarjetas
      console.log(this.tarjetas);
    }, (error) => {
      SwalUtils.customMessageError('Error', "Error en la consulta")
    })
  }
}
