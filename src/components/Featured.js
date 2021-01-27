import { useState, useEffect } from 'react'
import { FaTicketAlt } from 'react-icons/fa'
import axios from 'axios'

import SessionsBox from "./SessionsBox";

const Featured = ({toFeature}) => {
    const [fondue, setFondue] =  useState(toFeature)
    const [featured, setFeatured] = useState({})
    const [openSession, setOpenSession] =useState(false)

    useEffect(() => {
        if(!toFeature[0]) { setFondue(toFeature) }
        else { setFondue(toFeature[0]) }

        getFeaturedInfo()
    }, [toFeature])

    const getFeaturedInfo = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${fondue.id}?api_key=109af8b9604416e4280edadf766cea48&language=pt-BR&page=1&append_to_response=videos`)
        .then(res => {
            setFeatured(res.data)
            console.log(res.data)
        })
    }

    const openSessions = () => {
        setOpenSession(!openSession)
        console.log(!openSession)
    }

    return (
        <div className="featured-movie">
            
            <div className="featured-container">
                <img src={`https://www.themoviedb.org/t/p/w1280${featured.backdrop_path}`} />

                <div className="featured-description">
                    <p className="featured-title">{featured.title}</p>
                    <p className="featured-overview">{featured.overview}</p>

                <FaTicketAlt onClick={openSessions} className="tickets" />       
                </div>  
            </div>
            <SessionsBox duration={featured.runtime} open={openSession} />
        </div>
    )
}



export default Featured
