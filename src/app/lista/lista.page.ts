import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ListadoPokemonService } from '../servicio/listado-pokemon.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  listado:any; 

  constructor(private servicio:ListadoPokemonService, 
    private navController: NavController,
    private router: Router) { 
      }

 OpenDetails(indice,name){
    this.router.navigateByUrl('/tabs/tab1/' + indice + '/' + name);
 }

  ngOnInit() {
    this.servicio.getData("https://pokeapi.co/api/v2/pokemon?offset=0&limit=964").subscribe(data => {
      console.log(data);
      this.listado=data;
    })
  }

  favorite(id){
    this.servicio.setFav(id);
  }

}
