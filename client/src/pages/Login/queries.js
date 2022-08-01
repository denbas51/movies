import { gql } from "@apollo/client"

export const MOVIES_QUERY = gql`
  query Auth {
    movies(api_key: $apiKey, expires_at: $expires, request_token: $token) {
      apiKey
      results {
        success
        expires
        token
      }
    }
  }
`
