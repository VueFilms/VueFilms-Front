<template>
  <v-row justify="center" align="center">

    <v-col class="hometop text-center">

      <v-card-title class="justify-center">
        <h1> Bienvenidos.</h1>
      </v-card-title>

      <v-text-field label="Filled" placeholder="Dense & Rounded" filled rounded dense append-icon="mdi-movie-search">
      </v-text-field>

      <v-card-text>
        <p> Millones de peliculas a tu disposición</p>
        <h3>Encuentra. Comparte.</h3>
      </v-card-text>

    </v-col>

    <v-col cols="12">
      <v-card class="logo py-4 d-flex justify-center">

      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <p>
            Vuetify is a progressive Material Design component framework for
            Vue.js. It was designed to empower developers to create amazing
            applications.
          </p>
          <p>
            For more information on Vuetify, check out the
            <a href="https://vuetifyjs.com" target="_blank" rel="noopener noreferrer">
              documentation </a>.
          </p>
          <p>
            If you have questions, please join the official
            <a href="https://chat.vuetifyjs.com/" target="_blank" rel="noopener noreferrer" title="chat">
              discord </a>.
          </p>
          <p>
            Find a bug? Report it on the github
            <a href="https://github.com/vuetifyjs/vuetify/issues" target="_blank" rel="noopener noreferrer"
              title="contribute">
              issue board </a>.
          </p>
          <p>
            Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.
          </p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3" />
          <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">
            Nuxt Documentation
          </a>
          <br />
          <a href="https://github.com/nuxt/nuxt.js" target="_blank" rel="noopener noreferrer">
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.hometop {
  background:
    linear-gradient(rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)),
    url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/2RSirqZG949GuRwN38MYCIGG4Od.jpg') no-repeat center center fixed !important;
  background-size: cover;
}
</style>