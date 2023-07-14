import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class HeroesService {
  constructor(private http: HttpClient) { }

  private baseUrl : string = environment.baseUrl;

getHeroes(): Observable<Hero[]>{

  return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
}

}
