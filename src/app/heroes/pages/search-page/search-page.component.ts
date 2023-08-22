import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {

  public searchInput =  new FormControl('');
  public heroes: Hero[] = [];
  public selectdHero?: Hero;

  constructor(private heroService: HeroesService){

  }
  searchHero(){
    const value: string = this.searchInput.value || '';

    this.heroService.getSuggetions(value)
    .subscribe(heroes => this.heroes = heroes);
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent) : void {
    if(!event.option.value){
      this.selectdHero = undefined
      return;
    }

    const hero : Hero = event.option.value;
    this.searchInput.setValue(hero.superhero);

    this.selectdHero = hero;
  }
}
