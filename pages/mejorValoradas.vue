<template>
    <v-col cols="12" :v-if="movie" class="d-flex flex-wrap justify-center aling-center">
        <v-row class="d-flex justify-center">
            <singleCard v-for="(movie, idx) in movies" :key="idx" :movie="movie"></singleCard>
        </v-row>
        <v-row width="100%" class="d-flex justify-center ma-5 pa-5">
            <v-btn color="green darken-4" @click="pageLoad">Cargas mas películas</v-btn>
        </v-row>
    </v-col>

</template>
  
<script>
import SingleCard from '../components/SingleCard.vue'
import API from '../services/serviceMovie.js'

export default {
    name: 'MejorValoradasPage',
    components: {
        SingleCard,
    },
    data() {
        return {
            movies: null,
            page: 1,
        }
    },
    methods: {
        async pageLoad() {
            this.page = this.page + 1
            const moremovies = await API.getMejorValoradasMovie(this.page)
            for (let i = 0; i < moremovies.length; i++) {
                this.movies.push(moremovies[i])
            }
        }
    },
    async mounted() {
        this.movies = await API.getMejorValoradasMovie()
    }
}
</script>
