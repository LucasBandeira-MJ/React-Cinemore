import './styles.css'
import api from '../../services/Api'
import { useEffect, useState } from 'react'

import Movie from '../../components/Movie'

// const moviesList = [
//     {
//         id: 1,
//         title: 'When even demons cry',
//         duration: '1h47m',
//         sinopsis: 'when a teenager manages to summon a demon, she discovers there is more to them that meets the eye, now, years later he returns, and still remembers her, what kinds of feelings should she be feeling?',
//         category: ['Suspense', 'Romance']
//     },
//     {
//         id:2,
//         title: 'Finding Courage',
//         duration: '2h15m',
//         sinopsis: 'When a child looses his best friend, he needs to go on an adventure that might change him forever',
//         category: ['Adventure', 'Comedy']
//     },
//     {
//         id:3,
//         title: 'Samba in the rain',
//         duration: '6h',
//         sinopsis: 'Sambista Carlo José finds himself in a dilema, will he choose to abandon his love for music? or cast aside society and follow his dreams?',
//         category: ['Moving', 'Musical']
//     }
// ]

const Movies = () => {
    const [ moviesList, setMoviesList ] = useState([]);
    
// GET all recent movies in theaters right now
    useEffect(()=>{
        api.get().then(res=> { 
            console.log(res.data.results)
            setMoviesList(res.data.results)
        })
    }, [])

    return (
        <div className="container">
            <h1>Newest Movies</h1>

            {moviesList.map(movie => (
                <Movie key={movie.id} details={movie} />
            ))}
        </div>
    )
}

export default Movies
