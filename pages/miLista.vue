<template>
    <v-col v-if="movies" cols="12" :v-if="user" class="d-flex flex-wrap justify-center">
        <singleCard v-for="(movie, idx) in movies" :key="idx" :movie="movie"></singleCard>

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