import { gql } from "@apollo/client";

export const GET_CHARACTER_QUERY = gql`
    query GetAllCharacters{
        characters {
            results {
                id
                name
                species
                status
                type
                image
                location {
                    name
                }
            }
        }
    }
`