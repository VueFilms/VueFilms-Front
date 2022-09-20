import axios from 'axios';

const API = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})
const key1 = '061b44b74471c164f4baecc2c453eb91'
// const key1 = `b0ee4948bdeb056e153d94d957f86e59`

async function getTrendingToday() {
    const data = await API.get(`trending/movie/day?api_key=${key1}&language=es-ES`)
    return data.data.results
}
async function getPopularMovie() {
    const data = await API.get(`/movie/popular?api_key=${key1}&language=es-ES`)
    return data.data.results
}
async function getMovieTrailer(id) {
    const trailer = await API.get(`movie/${id}/videos?api_key=${key1}&language=es-ES`)
    if (trailer.data.results[0] === undefined) {
        return ''
    } else { return trailer.data.results[0].key }
}
async function getCarteleraMovie() {
    const data = await API.get(`/movie/now_playing?api_key=${key1}&language=es-ES`)
    return data.data.results
}
async function getProximamenteMovie() {
    const data = await API.get(`movie/upcoming?api_key=${key1}&language=es-ES`)
    return data.data.results
}
async function getMejorValoradasMovie() {
    const data = await API.get(`movie/top_rated?api_key=${key1}&language=es-ES`)
    return data.data.results
}

async function getFichaFilm(id) {
    const data = await API.get(`/movie/${id}?api_key=${key1}&language=es-ES`)
    return data.data
}

async function getProviders(id) {
    const data = await API.get(`/movie/${id}/watch/providers?api_key=${key1}&language=es-ES`)
    return data.data
}
export default {
    getTrendingToday,
    getPopularMovie,
    getMovieTrailer,
    getCarteleraMovie,
    getProximamenteMovie,
    getMejorValoradasMovie,
    getFichaFilm,
    getProviders,
}
