import { Component, Input, OnInit } from '@angular/core';
import { ICharacters } from '../../../@interfaces/characters';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() character: ICharacters = {
    id: '1',
    name: 'pepe',


  }
  constructor() { }

  ngOnInit(): void {
  }

}
