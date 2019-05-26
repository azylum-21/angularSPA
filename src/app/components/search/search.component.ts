import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

heroes:any[] = [];
termino:string;


constructor(private _heroesService:HeroesService, private activeRoute:ActivatedRoute) { }
	ngOnInit() {

		this.activeRoute.params.subscribe(params => {
			this.termino=params['termino'];
			this.heroes = this._heroesService.buscarHeroes(params['termino'])
		console.log(this.heroes)
		})
		
	}
}
