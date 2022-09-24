<template>
    <v-card color="transparent" elevation="0" class="ma-4" height="250" width="150"
        @click="$router.push(`/${movie.id}`)">
        <v-row class="fill-height" align="center" justify="center">
            <img :src="urlposter" height="215" width="160">

            <v-row width="100%" class="mt-1 ms-3 d-flex">
                <v-col cols="12" class="ma-0 pa-0">
                    <p class="col pa-0 titlemovie">{{movie.title}} </p>
                </v-col>
                <v-col class="d-flex ma-0 pa-0">
                    <v-col cols="6" class="ma-0 pa-0">
                        <v-rating id="rating-card" class="col pa-0" :value="movie.vote_average/2"
                            background-color="green lighten-3" color="green" small>
                        </v-rating>
                    </v-col>
                    <v-col class="ma-0 pa-0">
                        <span>{{movie.vote_average.toFixed(1)}}</span>
                    </v-col>
                </v-col>

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
    max-width: 150px;
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 600;
    margin: 0;
    padding-bottom: 0;
    padding-top: 0;
}



img {
    border-radius: 10px;
}
</style>