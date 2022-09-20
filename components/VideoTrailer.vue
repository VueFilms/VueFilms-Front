<template>
    <div>
        <h2>Pelicula del dia 🎯</h2>
        <v-col v-if="trailer && movie">
            <videoPlayer :src="trailer"></videoPlayer>
            <v-row class="mt-3 d-flex align-baseline">
                <h3>{{movie[0].title}}</h3>
                <p class="ms-2">{{movie[0].vote_average}}</p>
                <v-rating :value="movie[0].vote_average/2" background-color="green lighten-3" color="green" small>
                </v-rating>
            </v-row>
        </v-col>
    </div>
</template>
<script>
import VideoPlayer from 'nuxt-video-player';
import API from '../services/serviceMovie.js'

require('nuxt-video-player/src/assets/css/main.css')

export default {
    name: 'VideoTrailer',
    components: {
        VideoPlayer
    },
    data() {
        return {
            movie: false,
            trailer: false,
        }
    },
    async mounted() {
        this.movie = await API.getPopularMovie()
        const url = await API.getMovieTrailer(this.movie[1].id)
        this.trailer = `https://www.youtube.com/watch?v=${url}`
    }
}

</script>
