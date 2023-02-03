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

