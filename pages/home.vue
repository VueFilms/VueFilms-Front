<template>
  <v-row justify="center" align="center">

    <v-col class="hometop text-center d-flex justify-center align-center">

      <v-col cols="12" sm="8">
        <v-card-title class="justify-center">
          <h1> Bienvenidos.</h1>
        </v-card-title>

        <v-text-field label="Buscar Pelicula" v-model="value" filled rounded dense append-icon="mdi-movie-search"
          @keyup.enter.exact="search" @click:append="search">
        </v-text-field>

        <v-card-text>
          <p> Millones de peliculas a tu disposición</p>
          <h3>Encuentra. Comparte.</h3>
        </v-card-text>
      </v-col>

    </v-col>

    <v-col cols="11">
      <TenddenciasDia></TenddenciasDia>
    </v-col>
    <v-col cols="11">
      <PopularCard></PopularCard>
    </v-col>
    <v-col cols="11">
      <VideoTrailer></VideoTrailer>
    </v-col>
    <v-col cols="11">
      <CarteleraCard></CarteleraCard>
    </v-col>
    <v-col cols="11">
      <ProximamenteCard></ProximamenteCard>
    </v-col>
    <v-col cols="11">
      <MejorValoradas></MejorValoradas>
    </v-col>
  </v-row>
</template>

<script>
import TenddenciasDia from "../components/TenddenciasDia.vue";
// import VideoTrailer from "../components/VideoTrailer.vue";
import CarteleraCard from "../components/CarteleraCard.vue";
import PopularCard from "../components/PopularCard.vue"
export default {
  name: "HomePage",
  components: { TenddenciasDia, PopularCard, CarteleraCard },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    search() {
      this.$router.push(`/search/${this.value}`)
      this.value = ''

    }
  }
}
</script>

<style scoped>
.hometop {
  min-height: 500px;
  background:
    linear-gradient(rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)),
    url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/2RSirqZG949GuRwN38MYCIGG4Od.jpg') no-repeat center center fixed !important;
  background-size: cover;
}
</style>