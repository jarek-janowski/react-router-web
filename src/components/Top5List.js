const Top5List = (props) => {
    // console.log(props.playlistData)
    // <audio controls src={data.preview}></audio>
    const preview = props.playlistData.map(data =>(
        <ul className="top5-list">
            <li className="top5-list-item" key={data.id}>
                <img className="top5-list-item__image" src={data.picture_medium} alt="playlist cover"/>
                <h2 className="top5-list-item__title">{data.title}</h2>
                <span className="top5-list-item__duration">{Math.round(data.duration/60)} min</span>
                <a className="top5-list-item__link" href={data.link}><i className="fa fa-play-circle" aria-hidden="true"></i></a>
            </li>
        </ul>))

    return ( 
            preview
     );
}
 
export default Top5List;