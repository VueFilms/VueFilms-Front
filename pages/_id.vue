<template>
    <div v-if="provider">
        <v-row width="100%" justify="center" align="center" class="ma-5 ">
            <v-col width="100%" cols="12" sm="5" class="text-center d-flex justify-center">
                <v-card color="transparent" class="ma-4" height="500" width="300">
                    <v-row class=" fill-height" align="center" justify="center">
                        <img :src="urlposter" height="450" width="375" class="mb-0">
                        <v-btn v-if="provider.results.ES != undefined" class="w-100" width="100%">
                            {{provider.results.ES.flatrate[0].provider_name}}
                        </v-btn>
                    </v-row>
                </v-card>
            </v-col>
            <v-col width="100%">
                <v-row class=" d-flex align-baseline justify-center">
                    <h1>{{movie.title}} </h1>
                    <span class="ms-3">({{movie.release_date.substring(0,4)}})</span>
                </v-row>
                <v-row class="d-flex align-baseline justify-center">
                    <p> {{movie.release_date}}</p>
                    <p class="ms-3"> Genero: {{movie.genres[0].name}}</p>
                    <p class="ms-3"> Duración: {{Math.floor(movie.runtime/60)}}h {{movie.runtime%60}}m</p>
                </v-row>
                <v-row class="d-flex align-baseline justify-center">
                    <v-col>
                        <v-progress-circular :rotate="360" :size="100" :width="15" :value="movie.vote_average*10"
                            color="green">
                            {{ movie.vote_average }}
                        </v-progress-circular>
                        <h3>Puntuación de pelicula</h3>
                    </v-col>
                    <v-btn elevation="2" color="green darken-4" rounded>
                        <v-icon left>mdi-heart-plus-outline </v-icon>Guardar
                    </v-btn>
                    <v-col>
                        <v-btn elevation="2" color="green darken-4" :href="trailer" rounded>
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
export default {
    name: 'SingleMovie',
    data() {
        return {
            idMovie: this.$route.params.id,
            movie: null,
            urlposter: null,
            provider: null,
            trailer: null,
        }
    },
    async mounted() {
        const id = await this.$route.params.id
        this.movie = await API.getFichaFilm(id)
        this.provider = await API.getProviders(id)
        this.urlposter = `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`
        const url = await API.getMovieTrailer(this.movie.id)
        this.trailer = `https://www.youtube.com/watch?v=${url}`
        // insertar una fucnion condicional que mire si provider existe o hay que poner un no provider
    }

}
</script>

<style scoped>
v-btn {
    margin-top: -2px;
}

img {
    border-radius: 10px 10px 0 0;
}
</style>