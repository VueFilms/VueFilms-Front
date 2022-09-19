<template>
    <h1>hello</h1>
    <v-col>
        <videoPlayer :src="trailer"></videoPlayer>
    </v-col>
</template>
<script>
import VideoPlayer from 'nuxt-video-player';
import API from '../services/serviceMovie.js'

export default {
    components: {
        VideoPlayer
    },
    data() {
        return {
            trailer: 'https://www.youtube.com/watch?v='
        }
    },
    async mounted() {
        const url = await API.getMovieTrailer()
        this.trailer = this.trailer + url
    }
}

</script>
