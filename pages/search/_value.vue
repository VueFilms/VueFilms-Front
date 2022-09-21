<template>
    <v-container fluid>
        <v-col cols="12" v-if="movies" class="d-flex flex-wrap justify-center">
            <singleCard v-for="(movie, idx) in movies" :key="idx" :movie="movie"></singleCard>
        </v-col>
        <v-col>
            <h1 v-if="movies.length === 0">Ups. 😱 El titulo buscado no existe..</h1>
            <v-text-field class="mt-5" label="Buscar Pelicula" v-model="value" filled rounded dense
                append-icon="mdi-movie-search" @keyup.enter.exact="search" @click:append="search">
            </v-text-field>
            <p>Por favor realize una nueva busqueda</p>
        </v-col>
    </v-container>
</template>
  
<script>
import SingleCard from '../../components/SingleCard.vue'
import API from '../../services/serviceMovie.js'

export default {
    name: 'BusquedasPage',
    components: {
        SingleCard
    },
    data() {
        return {
            movies: false,
            title: null,
            value: ''
        }
    },
    methods: {
        search() {
            this.$router.push(`/search/${this.value}`)
            this.value = ''
        }
    },
    async mounted() {
        this.title = await this.$route.params.value
        this.movies = await API.getMovieSearch(this.title)
    }
}
</script>