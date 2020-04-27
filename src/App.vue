<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped color="grey darken-4">
      <v-list dense>
        <router-link to="/" class="router-link-custom">
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">Pokemon</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon link large href="https://github.com/Lucero07/pokemon-vue">
        <v-avatar size="32px">
          <v-img src="./assets/pokebola.png" alt="Github" />
        </v-avatar>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view :search="search"/>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2020, Lucero Ramos</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    search: ""
  }),
  created() {
    this.$vuetify.theme.dark = true
  },
  methods: {
    getPokemon() {
      console.log(this.search)
    }
  }
}
</script>
<style lang="scss" scoped>
.router-link-custom {
  text-decoration: none;
}
</style>