import './styles.css'
import api from '../../services/Api'
import { useEffect, useState } from 'react'

import Movie from '../../components/Movie' 
import Featured from '../../components/Featured' 

const Home = () => {
    const [completeList, setCompleteList] = useState([])
    const [ moviesList, setMoviesList ] = useState([]);
    const [featuredFilm, setFeaturedFilm] = useState({});
    
// GET all recent movies in theaters right now
    useEffect(()=>{
        api.get().then(res=> {
            const results = res.data.results;

            setCompleteList(results)
            setFeaturedFilm(results[0])
            setMoviesList(results.filter(item => item.id !== results[0].id))
        })
    }, [])

    const changeFeatured = (movieId) => {
        // console.log(movieId) 
        setMoviesList(completeList.filter(item => item.id !== movieId))
        setFeaturedFilm(completeList.filter(item => item.id === movieId))

    }


    return (
        <main className="container">

            <Featured  toFeature={featuredFilm} />

        <div className="movieSlider">
            {moviesList.map(movie => (
                <Movie clickMovie={changeFeatured} key={movie.id} data={movie} />
            ))}
        </div>

        </main>
    )
}

export default Home
