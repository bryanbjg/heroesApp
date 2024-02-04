import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent implements OnInit{

  constructor(private heroService: HeroesService, private ActivatedRoute: ActivatedRoute, private router: Router){ }

  get currentHero(): Hero{
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  ngOnInit(): void {
      if(!this.router.url.includes('edit')) return;

      this.ActivatedRoute.params.pipe(
        switchMap(({id}) => this.heroService.getHeroeById(id)),
      ).subscribe(hero =>{
        if(!hero) return this.router.navigateByUrl('/')
        this.heroForm.reset()
      return;
      })
  }

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>(''),
    publisher: new FormControl<Publisher>(Publisher.MarvelComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });
  public publishers = [
    { id: 'DC Comics', value: 'DC - Comics' },
    { id: 'Marvel Comics', value: 'Marvel - Comics' }
  ];

  onSubmit(): void{
   if(this.heroForm.invalid) return
    if(this.currentHero.id){
      this,this.heroService.updateHero(this.currentHero).subscribe(hero =>{

      });
      return;
    }

    this.heroService.addHero(this.currentHero).subscribe(hero =>{

    });
  }
}
