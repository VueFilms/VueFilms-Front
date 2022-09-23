<template>

    <v-sheet color="transparent" class="mx-auto" max-width="auto">
        <h2>Tendencias del día 🚀</h2>
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
        this.movies = await API.getTrendingToday()
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

v-sheet::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right top, #05193799, #004d7a99, #00879399, #00bf7299, #a8eb1299);
    z-index: -1;
}
</style>