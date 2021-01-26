const Movie = ({data, clickMovie}) => {

    return (
        <div className="movie" onClick={() => clickMovie(data.id)}>
            <img src={`https://www.themoviedb.org/t/p/w300${data.backdrop_path}`} />
            <p className="movie-title">{data.title}</p> 
        </div>
    )
}

export default Movie
