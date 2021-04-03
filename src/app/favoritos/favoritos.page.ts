import { Component, OnInit } from '@angular/core';
import { ListadoPokemonService } from '../servicio/listado-pokemon.service';


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  arrayFav = [];

  constructor(private servicio: ListadoPokemonService) {}

  ngOnInit() {
  }

   ionViewWillEnter(){
     this.arrayFav = this.servicio.getFav();
     console.log(this.arrayFav);
   }

  

}
