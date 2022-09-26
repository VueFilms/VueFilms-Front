<template>
  <v-row justify="center" align="center">

    <v-col cols="12" :style="bgimg" class="hometop text-center d-flex justify-center align-center">
      <v-row class="wrapperfront text-center d-flex justify-center align-center">
        <v-col cols="12" sm="8">
          <v-card-title class="justify-center">
            <h1> Bienvenido.</h1>
          </v-card-title>

          <v-text-field class="ma-5" label="Buscar Pelicula" v-model="value" filled dense outlined rounded
            append-icon="mdi-movie-search" @keyup.enter.exact="search" @click:append="search">
          </v-text-field>

          <v-card-text>
            <p> Miles de películas a tu disposición</p>
            <h3>Encuentra. Comparte.</h3>
          </v-card-text>

        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" sm="10">
      <TenddenciasDia></TenddenciasDia>
    </v-col>
    <v-col cols="12" sm="10">
      <PopularCard></PopularCard>
    </v-col>
    <v-col cols="12" sm="10">
      <VideoTrailer></VideoTrailer>
    </v-col>
    <v-col cols="12" sm="10">
      <CarteleraCard></CarteleraCard>
    </v-col>
    <v-col cols="12" sm="10">
      <ProximamenteCard></ProximamenteCard>
    </v-col>
    <v-col cols="12" sm="10">
      <MejorValoradas></MejorValoradas>
    </v-col>
  </v-row>
</template>

<script>
import TenddenciasDia from "../components/TenddenciasDia.vue";
import API from '../services/serviceMovie.js'
import CarteleraCard from "../components/CarteleraCard.vue";
import PopularCard from "../components/PopularCard.vue"
export default {
  name: "HomePage",
  components: { TenddenciasDia, PopularCard, CarteleraCard },
  data() {
    return {
      value: '',
      url: false,
      movies: false,
    }
  },
  computed: {
    bgimg() {
      return {
        "background-image": `url('${this.url}')`
      }
    }
  },
  async mounted() {
    this.movies = await API.getProximamenteMovie()
    const num = Math.floor(Math.random() * 20)
    this.url = `https://image.tmdb.org/t/p/w500${this.movies[num].backdrop_path}`
  },
  methods: {
    search() {
      this.$router.push(`/search/${this.value}`)
      this.value = ''
    }
  }
}
</script>

<style>
.hometop {
  min-height: 500px;
  background-size: cover !important;
}

.wrapperfront {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  height: 500px;
}
</style>