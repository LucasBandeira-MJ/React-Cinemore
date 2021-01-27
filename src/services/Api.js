import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/now_playing?api_key=109af8b9604416e4280edadf766cea48&language=pt-BR&page=1'
})

export default api