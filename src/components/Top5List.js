const Top5List = ({userPlaylistsData}) => {

    const playlists = userPlaylistsData.map(data => {
        if (data.nb_tracks === 5) { return(
        <ul key={data.id} className="top5-list">
            <li className="top5-list-item">
                <div className="overlay-fade">
                    <img className="top5-list-item__image" src={data.picture_medium} alt="playlist cover"/>
                    <div>
                    <a className="top5-list-item__link" target="_blank" rel="noopener noreferrer" href={data.link}><i className="fa fa-play-circle" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="top5-list-item__wrapper">
                    <h2 className="top5-list-item__title">{data.title}</h2>
                    <span className="top5-list-item__duration">({Math.round(data.duration/60)} min)</span>  
                </div>
            </li>
        </ul>
    )}
})

    return (
           playlists
    );
    
}
 
export default Top5List;