<template>
    <div v-if="provider" :style="bgimg">
        <v-row id="wrapper" width="100%" justify="center" align="center" class="ma-5 ">
            <v-col width="100%" cols="12" sm="5" class="text-center d-flex justify-center">
                <v-card color="transparent" elevation="0" class="ma-4" height="500" width="300">
                    <v-row color="transparent" class=" fill-height" align="center" justify="center">
                        <img :src="urlposter" height="450" width="375" class="mb-0">
                        <v-btn v-if="provider.results.ES != undefined && provider.results.ES.flatrate" class="w-100"
                            width="100%">
                            {{provider.results.ES.flatrate[0].provider_name}}
                        </v-btn>
                        <v-btn v-else class="w-100" width="100%">
                            No hay links
                        </v-btn>
                    </v-row>
                </v-card>
            </v-col>
            <v-col width="100%">
                <v-row class=" d-flex align-baseline">
                    <h1>{{movie.title}} </h1>
                    <span class="ms-2">({{movie.release_date.substring(0,4)}})</span>
                </v-row>
                <v-row class="d-flex align-baseline">
                    <p> {{movie.release_date}}</p>
                    <p class="ms-3"> Genero: {{movie.genres[0].name}}</p>
                    <p class="ms-3"> Duración: {{Math.floor(movie.runtime/60)}}h {{movie.runtime%60}}m</p>
                </v-row>
                <v-row v-if="userMovies" class="d-flex  mb-5">
                    <v-col class="d-flex flex-column " cols="4" sm="3">
                        <v-progress-circular :rotate="360" :size="80" :width="15"
                            :value="(movie.vote_average*10).toFixed(1)" color="green">
                            {{ movie.vote_average.toFixed(1) }}
                        </v-progress-circular>
                        <h4>Puntuación</h4>
                    </v-col>
                    <v-col>
                        <v-btn class="ma-2" v-if="userMovies.user.lists.idMovies.includes(parseInt(idMovie)) != true"
                            elevation="2" color="green darken-4" @click="addMovieList" rounded>
                            <v-icon left>mdi-heart-plus-outline </v-icon>Guardar
                        </v-btn>
                        <v-btn class="ma-2" v-else elevation="2" color="red darken-4" @click="deleteMovie" rounded>
                            <v-icon left>mdi-heart-plus-outline </v-icon>Eliminar
                        </v-btn>
                        <v-btn v-if="trailer != urlBase" class="ma-2" elevation="2" color="green darken-4"
                            :href="trailer" rounded>
                            <v-icon left>mdi-play-circle-outline </v-icon>Ver trailer
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row v-if="movie.overview != ''" class="d-flex mt-4">
                    <h2>Sinopsis</h2>
                    <p>{{movie.overview}}</p>
                </v-row>
            </v-col>

        </v-row>

    </div>

</template>

<script>
import API from '../services/serviceMovie.js'
import APIuser from '../services/authService.js'

export default {
    name: 'SingleMovie',
    data() {
        return {
            imgBack: null,
            idMovie: this.$route.params.id,
            movie: null,
            urlposter: null,
            provider: null,
            trailer: null,
            userMovies: null,
            urlBase: 'https://www.youtube.com/watch?v='
        }
    },
    async mounted() {
        const id = await this.$route.params.id
        this.movie = await API.getFichaFilm(id)
        this.provider = await API.getProviders(id)
        this.urlposter = `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`
        const url = await API.getMovieTrailer(this.movie.id)
        this.trailer = `https://www.youtube.com/watch?v=${url}`
        this.userMovies = await APIuser.getUser()
        this.imgBack = `url('https://image.tmdb.org/t/p/w500${this.movie.backdrop_path}')`
    },
    computed: {
        bgimg() {
            return {
                "background": `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${this.urlposter}') no-repeat center center !important`,
                "background-size": "cover !important"
            }
        }
    },
    methods: {
        async addMovieList() {
            await APIuser.addMovie(this.idMovie)
            this.userMovies = await APIuser.getUser()
        },
        async deleteMovie() {
            await APIuser.deleteMovie(this.idMovie)
            this.userMovies = await APIuser.getUser()
        }
    }

}
</script>

<style scoped vars="{ imgBack:  }">
v-btn {
    margin-top: -2px;
}

img {
    border-radius: 10px 10px 0 0;
}

p {
    font-weight: 400;
}
</style>