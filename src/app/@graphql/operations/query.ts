import { gql } from 'apollo-angular';

export const GET_CHARACTER = gql`
query Query {
    booksList {
      item {
        ... on Book {
          id
          title
          isbn
          pageCount
          publishedDate
          thumbnailUrl
          shortDescription
          longDescription
          status
          authors
        }
      }
    }
  }`;

