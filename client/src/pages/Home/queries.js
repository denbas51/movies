import { gql } from "@apollo/client"

export const MOVIES_QUERY = gql`
  query Movies($page: Int) {
    movies(page: $page) {
      page
      totalResults
      totalPages
      results {
        id
        title
        image: posterPath
        popularity
        releaseDate(format: "dd.MM.yyyy")
      }
    }
  }
`
