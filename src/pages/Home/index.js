import './styles.css'
import api from '../../services/Api'
import { useEffect, useState } from 'react'

import Movie from '../../components/Movie' 
import Featured from '../../components/Featured' 
import Slider from 'react-slick'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const [completeList, setCompleteList] = useState([])
    const [ moviesList, setMoviesList ] = useState([]);
    const [featuredFilm, setFeaturedFilm] = useState([]);
    
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
        setMoviesList(completeList.filter(item => item.id !== movieId))
        setFeaturedFilm(completeList.filter(item => item.id === movieId)[0])

    }

    const settings = {
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 440,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


    return (
        <main className="container">

            {featuredFilm.id ? (<Featured key={featuredFilm.id}  toFeature={featuredFilm} />) : 'Loading...'}

            <Slider {...settings} className="movieSlider">
                    {moviesList.map(movie => (
                        <Movie clickMovie={changeFeatured} key={movie.id} data={movie} />
                    ))}
            </Slider>

            
        </main>
    )
}

export default Home
