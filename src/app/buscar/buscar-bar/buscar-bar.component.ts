import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buscar-bar',
  templateUrl: './buscar-bar.component.html',
  styleUrls: ['./buscar-bar.component.css']
})
export class BuscarBarComponent {
  @Output() searchText = new EventEmitter<string>();
  searchLocalText:string =""

  onSearch() {
    this.searchText.emit(this.searchLocalText)
  }
}
