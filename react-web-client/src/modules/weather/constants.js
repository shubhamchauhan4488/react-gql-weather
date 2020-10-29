import { gql } from "@apollo/client";

export const GET_WEATHER_QUERY = gql`
      query($name : String!) {
        getCityByName(name: $name) {
          id
          name
          country
          coord {
            lon
            lat
          }
          weather {
            summary {
              description
            }
            temperature {
              actual
              feelsLike
              min
              max
            }
            wind {
              speed
            }
            clouds {
              visibility
              humidity
            }
          }
        }
      }
    `;

