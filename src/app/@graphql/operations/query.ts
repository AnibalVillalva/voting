import { gql } from 'apollo-angular';

export const GET_CHARACTER = gql`
query Query {

  characters{
    actor
    description
    id
    name
    photo
    total_episodes
    votes
    url

  }

  }`;

export const GET_CHARACTER_BY_ID = gql`
query GetCharacter($id: ID!) {
  character(id: $id){
    actor
    description
    id
    name
    photo
    total_episodes
    votes
    url
  }
}`;

