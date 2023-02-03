import { Component, OnInit } from '@angular/core';
import { ICharacters } from 'src/app/@interfaces/characters';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characterList : Array<ICharacters> = [];

  constructor(private character: CharactersService) { }

  ngOnInit(): void {
    this.character.list().subscribe((result: any) => {
      console.log(result);
      this.characterList = result;
    });
  }

}
