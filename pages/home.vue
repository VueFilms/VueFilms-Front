<template>
  <v-row justify="center" align="center">

    <v-col cols="12" class="hometop text-center d-flex justify-center align-center">

      <v-col cols="12" sm="8">
        <v-card-title class="justify-center">
          <h1> Bienvenido.</h1>
        </v-card-title>

        <v-text-field class="mt-5" label="Buscar Pelicula" v-model="value" filled dense outlined rounded
          append-icon="mdi-movie-search" @keyup.enter.exact="search" @click:append="search">
        </v-text-field>

        <v-card-text>
          <p> Miles de películas a tu disposición</p>
          <h3>Encuentra. Comparte.</h3>
        </v-card-text>
      </v-col>

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
    url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/2RSirqZG949GuRwN38MYCIGG4Od.jpg') no-repeat center center !important;
  background-size: cover;
}
</style>