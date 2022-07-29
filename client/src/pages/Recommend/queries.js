import { gql } from "@apollo/client"

export const MOVIE_BY_IDS_QUERY = gql`
  query MovieByIds($ids: [Int]) {
    moviesByIds(ids: $ids) {
      id
      title
      image: posterPath
      releaseDate(format: "dd.MM.yyyy")
    }
  }
`
