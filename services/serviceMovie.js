import axios from 'axios';

const API = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})


async function getTrendingToday() {
    const data = await API.get('trending/movie/day?api_key=b0ee4948bdeb056e153d94d957f86e59')
    return data.data.results
}
async function getPopularMovie() {
    const data = await API.get('/movie/popular?api_key=061b44b74471c164f4baecc2c453eb91')
    return data.data.results
}
async function getMovieTrailer() {
    const data = await API.get('/movie/popular?api_key=061b44b74471c164f4baecc2c453eb91')
    const id = data.data.results[0].id
    const trailer = await API.get(`movie/${id}/videos?api_key=061b44b74471c164f4baecc2c453eb91`)
    console.log(trailer.data.results[0].key)
    return trailer.data.results[0].key
}

export default {
    getTrendingToday,
    getPopularMovie,
    getMovieTrailer,
}
