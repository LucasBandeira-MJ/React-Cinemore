import { useState } from 'react'
import { FaPlus, FaChair } from 'react-icons/fa'

const Movie = ({details}) => {
    const [showInfo, setShowInfo] = useState(false)
    const [showSeats, setShowSeats] = useState(false)

    const handleExpand = () => {
        
        setShowSeats(false)
        setShowInfo(true)
    }

    const handleSeats = () => {
        
        setShowInfo(false)
        setShowSeats(true)
    }

    return (
        <div className="movie-box">
            <div className="movie-poster">
                
            <FaPlus className="expand-icon" onClick={handleExpand} />
            <FaChair className="seat-icon" onClick={handleSeats} />
            </div>

            <div className={`movie-info ${showInfo? 'active': ''}`}>
                <h3>{details.title}</h3>
                <h3>{details.duration}</h3>
                <h3>Sinopsis:</h3>
                <p>{details.sinopsis}</p>
            </div>

            <div className={`movie-sessions ${showSeats? 'active': ''}`}>
                <a href="#">9:00</a>
            </div>
        </div>
    )
}

export default Movie
