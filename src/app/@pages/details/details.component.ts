import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../characters/characters.service';
import { ICharacters } from '../../@interfaces/characters';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  character : ICharacters = {
    id: '-1',
    name: '',
    votes: -1
  };

  constructor(private router: ActivatedRoute,
    private CharactersService: CharactersService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params)=>{
      const id = params['id'];
      this.CharactersService.get(id).subscribe((result) => {
        this.character = result;
      })
    })

  }

}
