
const CardDetail = ({theme, data}) => {
    console.log(data)

    return (
        <div 
            style={{
                backgroundColor: theme.foreground
            }}
            className="card-detail-sub-item-container">
            <div className="">
                {
                    data.bannerImage === null ? 
                    <img className="card-detail-image-container" src={'https://s4.anilist.co/file/anilistcdn/media/anime/banner/133844-uIaUmh5aJX3M.jpg'}/>
                    :
                    <img className="card-detail-image-container" src={data.bannerImage}/>
                }
            </div>
            <div style={{color:theme.backdrop}} className="card-detail-info">
                
                <div className="card-detail-title">{data.title.romaji}</div>
                
                {
                    data.episodes !== null ?
                    <div className="">episodes : {data.episodes}</div> : null
                }
                
                {
                    data.duration !== null ?
                    <div className="">duration : {data.duration} minutes</div> : null
                }
                
                {
                    data.chapters !== null ? 
                    <div className="">chapters : {data.chapters}</div> : null
                }
                
                {
                    data.genres !== null ? 
                    <div className="">genres : {data.genres.map(item => item + ', ')}</div> : null
                }
                
                {
                    data.popularity !== null?
                    <div className="">popularity : {data.popularity}</div> : null
                }
                
            </div>
        </div>
    )
}

export default CardDetail