<template>
    <v-card class="ma-4" height="225" width="150">
        <v-row class="fill-height" align="center" justify="center">
            <img :src="urlposter" height="225" width="150">
        </v-row>
        <v-card-text>{{movie.title}}</v-card-text>
    </v-card>
</template>

<script>
export default {
    props: {
        movie: Object
    },
    data() {
        return {
            urlposter: 'https://image.tmdb.org/t/p/w500'
        }
    },
    mounted() {
        this.urlposter = this.urlposter + this.movie.poster_path
    }
}

</script>