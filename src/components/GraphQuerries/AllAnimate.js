import { gql } from '@apollo/client'

export const ALL_ANIME = gql `
query AllAnime($page:Int, $perpage:Int){
    Page(page:$page, perPage: $perpage){
      media(type: ANIME, sort: TRENDING_DESC){
        id
        title{
          romaji
        }
        coverImage{
          large
        }
        bannerImage
        episodes
        duration
        chapters
        genres
        popularity
      }
    }
  }
`