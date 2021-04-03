import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { runInThisContext } from 'vm';
import {ListadoPokemonService} from '../servicio/listado-pokemon.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit {
  idPokemon:string;
  nombrePokemon:string;
  listado:any;

  constructor(private activateRoute: ActivatedRoute,
    private servicio: ListadoPokemonService) { }

  ionViewWillEnter(){
    this.idPokemon = this.activateRoute.snapshot.paramMap.get('id');
    this.nombrePokemon = this.activateRoute.snapshot.paramMap.get('nombre');

    const newLocal = 'https://pokeapi.co/api/v2/pokemon/';
    this.servicio.getData(newLocal + this.idPokemon + '/').subscribe
    (data => {
        console.log(data);
        this.listado=data;

      });

  }

  ngOnInit() {
  }

}
