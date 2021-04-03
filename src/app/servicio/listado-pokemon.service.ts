import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListadoPokemonService {
  fav = [];

  constructor(private http:HttpClient) { }

  getData(url){
    return this.http.get(`${url}`);
  }

  setFav(fav){
    this.fav.push(fav);
  }
  getFav(){
    return this.fav;
  }
}
