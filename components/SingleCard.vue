<template>
    <v-card color="transparent" class="ma-4" height="275" width="150" @click="$router.push(`/${movie.id}`)">
        <v-row class="fill-height" align="center" justify="center">
            <img :src="urlposter" height="225" width="150">

            <v-row class="mt-3 ms-2 d-flex">
                <p class="col titlemovie">{{movie.title}} - {{movie.vote_average}}</p>
                <v-rating class="col pa-0" :value="movie.vote_average/2" background-color="green lighten-3"
                    color="green" small>
                </v-rating>
            </v-row>
        </v-row>

    </v-card>
</template>

<script>
export default {
    props: {
        movie: Object
    },
    data() {
        return {
            urlposter: ''
        }
    },
    mounted() {
        this.urlposter = `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`
    },
    methods: {

    }
}

</script>

<style scoped>
.titlemovie {
    font-size: 12px;
    font-weight: 400;
    margin: 0;
    padding-bottom: 0;
    padding-top: 0;
}

img {
    border-radius: 10px;
}

v-rating {
    margin: 0;
    padding: 0;
}
</style>