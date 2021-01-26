import { useEffect, useState } from 'react'
import { FaPlus, FaChair, FaChevronUp } from 'react-icons/fa'
import axios from 'axios'

const Movie = ({details}) => {

    const [movieInfo, setMovieInfo] = useState({})
    const [sessions, setSessions] = useState([])

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${details.id}?api_key=109af8b9604416e4280edadf766cea48&language=pt-BR&&append_to_response=videos`).then(res=> { 
            setMovieInfo(res.data)
        })
    }, [])

    
    useEffect(()=>{
        calculateSessions()

    }, [movieInfo])

    const [showInfo, setShowInfo] = useState(false)
    const [showSeats, setShowSeats] = useState(false)

    const calculateSessions = () => {
        
        const start = 540;
        const duration = movieInfo.runtime + 20;
        const end = 1440;
        let movieSessions = [];
        for(let i = start; i < end; i+=duration  ) {
            movieSessions.push(i)
        }
        console.log(movieSessions)
        setSessions(movieSessions)
    }

    const handleExpand = () => {
        
        setShowSeats(false)
        setShowInfo(true)
    }

    const handleSeats = () => {
        
        setShowInfo(false)
        setShowSeats(true)
    }

    const handleHide = () => {
        setShowInfo(false)
        setShowSeats(false)

    }

    return (
        <div className="movie-box">
            <div className="movie-poster">
                <img className="poster" src={`https://www.themoviedb.org/t/p/w780${details.backdrop_path}`} />
            <FaPlus className="expand-icon" onClick={handleExpand} />
            <FaChair className="seat-icon" onClick={handleSeats} />
            </div>

            <div className={`movie-info ${showInfo? 'active': ''}`}>
                <h3>{details.title}</h3>
                <h3>{`${Math.floor(movieInfo.runtime / 60)}h ${(movieInfo.runtime % 60)}m`}</h3>
                <h3>Sinopsis:</h3>
                <p>{details.overview}</p>

                <FaChevronUp onClick={handleHide} className="hide-icon" />
            </div>

            <div className={`movie-sessions ${showSeats? 'active': ''}`}>
                {sessions.map(session => (
                    <a href="#" key={session}>
                        {`${Math.floor(session / 60)}:${(session % 60).toLocaleString('en-US', { minimumIntegerDigits: 2})}`}
                    </a>
                ))}
                <FaChevronUp onClick={handleHide} className="hide-icon" />
            </div>
        </div>
    )
}

export default Movie
