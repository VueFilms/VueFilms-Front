<template>

    <v-sheet color="transparent" class="mx-auto" max-width="auto">
        <h2 class="ms-4">Cartelera 📽️</h2>
        <v-slide-group v-model="model" class="pa-2" active-class="success" :show-arrows="show">
            <v-slide-item v-for="(movie, idx) in movies" :key="idx">
                <singleCard :movie="movie"></singleCard>
            </v-slide-item>
        </v-slide-group>
    </v-sheet>
</template>

<script>
import API from '../services/serviceMovie.js'
export default {
    data() {
        return {
            movies: [],
            model: null,
        }
    },
    async mounted() {
        this.movies = await API.getCarteleraMovie()
    },
    computed: {
        show() {
            if (this.$vuetify.breakpoint.name === 'xs') {
                return false
            } else {
                return true
            }
        }
    }

}
</script>
  
<style>
.nuxt-logo {
    height: 180px;
}
</style>