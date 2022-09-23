<template>
    <v-col cols="12" class="d-flex flex-wrap justify-center aling-center">
        <v-col cols="12" sm="10" :v-if="movie" class="d-flex flex-wrap justify-center aling-center">
            <v-row class="d-flex justify-center mb-5">
                <h2>Peliculas pendientes de ver🍿</h2>
            </v-row>
            <v-row class="d-flex justify-center">

                <singleCard v-for="(movie, idx) in movies" :key="idx" :movie="movie"></singleCard>
            </v-row>
            <v-row width="100%" class="d-flex justify-center ma-5 pa-5">
                <v-btn color="green darken-4" @click="pageLoad">Cargas mas películas</v-btn>
            </v-row>
        </v-col>
    </v-col>


</template>
  
<script>
import API from '../services/authService.js'
import APImovie from '../services/serviceMovie.js'
export default {
    name: 'MejorValoradasPage',
    components: {
    },
    data() {
        return {
            user: null,
            movies: null,
        }
    },
    async mounted() {
        this.user = await API.getUser()
        this.movies = await this.allMovies()
    },
    methods: {
        async allMovies() {
            const result = []
            for (let i = 0; i < this.user.user.lists.idMovies.length; i++) {
                const movie = await APImovie.getFichaFilm(this.user.user.lists.idMovies[i])
                result.push(movie)
            }
            return result
        }
    }
}
</script>