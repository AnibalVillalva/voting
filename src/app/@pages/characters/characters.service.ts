import { Injectable } from '@angular/core';
import { ApiService } from '../../@graphql/services/api.service';
import { Apollo } from 'apollo-angular';
import { GET_CHARACTER, GET_CHARACTER_BY_ID } from '../../@graphql/operations/query';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class CharactersService extends ApiService {

  constructor(apollo: Apollo) {
    super(apollo)
  }

  list() {
    return this.query(GET_CHARACTER).pipe(map(( result: any ) => {
      return result.characters;
    }))
  }
  get(id: string) {
    return this.query(GET_CHARACTER_BY_ID, {id}).pipe(map((result: any) => {
      return result.character;
    }))
  }
}
