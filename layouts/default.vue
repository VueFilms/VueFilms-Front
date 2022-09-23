<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-spacer></v-spacer>
        <v-list-item v-if="local.id" @click="logout">
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Cerrar Sesion'" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-else to="/">
          <v-list-item-action>
            <v-icon>mdi-login</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Logearse'" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <img id="logo" @click="$router.push('/home')" src="../assets/logo.svg">
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer>
      <v-row justify="center" align="center" class="ma-5">
        <v-col width="100%" cols="12" sm="5">
          <v-row><img class=" ma-4 " width="55%" contain src="../assets/logo.svg">
          </v-row>
          <v-row width="55%">
            <v-chip v-for=" (item, i) in items" :key="i" :to="item.to" router exact class="ma-2" color="green darken-4"
              text-color="white">
              <v-icon left>
                {{ item.icon }}
              </v-icon>
              {{ item.title }}
            </v-chip>
          </v-row>

        </v-col>
        <v-col class="text-center">
          <p>Lorem fistrum papaar papaar a gramenawer condemor jarl va usté muy cargadoo está la cosa muy malar. Me cago
            en tus muelas qué dise usteer papaar papaar apetecan la caidita ahorarr a wan ese que llega te va a hasé
            pupitaa. Por la gloria de mi madre te va a hasé pupitaa torpedo por la gloria de mi madre va usté muy
            cargadoo apetecan. Diodeno diodeno diodeno ese pedazo de ese pedazo de. No te digo trigo por no llamarte
            Rodrigor pupita qué dise usteer quietooor se calle ustée torpedo ese hombree de la pradera. No puedor
            caballo blanco caballo negroorl está la cosa muy malar te va a hasé pupitaa qué dise usteer.</p>
        </v-col>
      </v-row>
      <!-- <span>&copy; {{ new Date().getFullYear() }}</span> -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      local: localStorage,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/home',
        },
        {
          icon: 'mdi-hand-okay',
          title: 'Popular',
          to: '/popular',
        },
        {
          icon: 'mdi-movie',
          title: 'Cartelera',
          to: '/cartelera',
        },
        {
          icon: 'mdi-crystal-ball',
          title: 'Proximamente',
          to: '/proximamente',
        },
        {
          icon: 'mdi-rocket-launch',
          title: 'MejorValoradas',
          to: '/mejorValoradas',
        },
        {
          icon: 'mdi-clipboard-list-outline',
          title: 'Mi Lista',
          to: '/miLista',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  methods: {
    logout() {
      localStorage.clear()
    }
  }
}
</script>

<style scoped>
v-app {
  font-family: 'Quicksand', sans-serif;
}

#logo {
  cursor: pointer;
}
</style>
