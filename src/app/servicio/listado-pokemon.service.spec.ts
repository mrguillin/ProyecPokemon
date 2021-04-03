import { TestBed } from '@angular/core/testing';

import { ListadoPokemonService } from './listado-pokemon.service';

describe('ListadoPokemonService', () => {
  let service: ListadoPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
