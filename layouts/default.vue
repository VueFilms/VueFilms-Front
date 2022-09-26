<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
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
      <v-app-bar-nav-icon v-if="show" @click.stop="draw" />
      <v-container class="d-flex align-center">
        <img id="logo" @click="$router.push('/home')" src="../assets/logo.svg">
        <v-spacer></v-spacer>
        <v-col v-if="!show" cols="8" class="d-flex ">
          <v-btn v-for="(item, i) in items" :key="i" :to="item.to" color="transparent" elevation="0" router exact>
            {{item.title}}
          </v-btn>
        </v-col>
      </v-container>
    </v-app-bar>

    <v-main class="ma-0">
      <v-container class="pa-0" fluid>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer>
      <v-container>
        <v-row justify="center" align="center" class="ma-5">
          <v-col width="100%" cols="12" sm="5" class="d-flex flex-column justify-center align-center">
            <v-card-text class="pb-0">
              <h3>Encuentra tu película:</h3>
            </v-card-text>
            <v-col width="55%">
              <v-chip v-for=" (item, i) in items" :key="i" :to="item.to" router exact class="ma-2"
                color="green darken-4" text-color="white">
                <v-icon left>
                  {{ item.icon }}
                </v-icon>
                {{ item.title }}
              </v-chip>
            </v-col>

          </v-col>
          <v-col class="">
            <img class=" ma-4 " width="55%" contain src="../assets/logo.svg"></img>
            <p>VueFilms es tu aplicacion de confianza para encontrar peliculas que ver y saber en que plataformas esta
              disponible. </p>
          </v-col>
        </v-row>
      </v-container>

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
    }
  },
  computed: {
    show() {
      if (this.$vuetify.breakpoint.name === 'xs') {
        return true
      } else {
        return false
      }
    },
    showAside() {
      if (this.$vuetify.breakpoint.name === 'xs') {
        return this.drawer
      } else {
        return false
      }
    }
  },
  methods: {
    draw() {
      this.drawer = !this.drawer
      console.log(this.drawer)
    },
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
