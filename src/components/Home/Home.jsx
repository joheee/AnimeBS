import { useQuery } from '@apollo/client'
import { useContext, useState } from 'react'
import { Card, CardDetail, CardImage } from '../Card/Card'
import { ALL_ANIME } from '../GraphQuerries/AllAnimate'
import { ThemeContext } from '../GraphQuerries/Theme'
import { Link } from 'react-router-dom'
import { DataContext } from '../../App'
import BS221 from './BS221'

const Home = () => {

    const theme = useContext(ThemeContext)
    const retrieveData = useContext(DataContext)

    const {loading, error, data} = useQuery(ALL_ANIME, {
        variables: {
            page: 1,
            perpage: 200
        }
    })
    
    const [fav, setFav] = useState([])
    const handleFav = (animeID) => {
        let newArr = [...fav]
        let found = fav.indexOf(animeID)
        if (found === -1){
            newArr.push(animeID)
            localStorage.setItem('favourites', JSON.stringify(newArr))
        } else {
            newArr.splice(found, 1)
            localStorage.setItem('favourites', JSON.stringify(newArr))
        }
        setFav(newArr)
        console.log(newArr)
    }
    
    if (loading) return <BS221/>
    if (error) return <h1>error</h1>
    
    if (!loading) {
        retrieveData[1](data.Page.media)
        return (
            <div style={{
                backgroundColor:theme.background,
            }} className='card-container'>
            {
                data.Page.media.map((anime, i) => {
                    let isFav = fav.indexOf(anime.id) === -1
                    return (
                        <div key={anime.id}  className="card-item-container">
                            <Link to={`/detail/${anime.id}`} style={{textDecoration:'none'}}>
                                <Card>
                                    <CardImage src={anime.coverImage.large} className="card-item-image"/>
                                    <CardDetail 
                                    style={{
                                        color: theme.backdrop
                                    }}
                                    className='card-item-detail'>
                                        {anime.title.romaji}
                                    </CardDetail>
                                </Card>
                            </Link>
                            <button className='card-item-button-favourite'
                            style={
                                isFav ? {backgroundColor:theme.background} :
                                {
                                    backgroundColor: '#a83f39'
                                }
                            }
                            onClick={e => handleFav(anime.id)}>&#10084;</button>
                        </div>
                    )
                })
            }
            </div>
        )
    }
    
}
 
export default Home;