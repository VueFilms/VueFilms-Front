<template>
    <v-col cols="12" :v-if="movie" class="d-flex flex-wrap justify-center">
        <singleCard v-for="(movie, idx) in movies" :key="idx" :movie="movie"></singleCard>
    </v-col>

</template>
  
<script>
import SingleCard from '../components/SingleCard.vue'
import API from '../services/serviceMovie.js'

export default {
    name: 'CarteleraPage',
    components: {
        SingleCard,
    },
    data() {
        return {
            movies: null,
        }
    },
    async mounted() {
        this.movies = await API.getCarteleraMovie()
    }
}
</script>

