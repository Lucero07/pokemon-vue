<template>
  <v-container class="home">
    <v-row class="text-center">
      <v-col class="mb-5" v-for="pokemon in defaultPokemon" :key="pokemon.id" cols="12" sm="6" md="4" lg="3" xl="2">
        <CardPokemon :pokemon="pokemon" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import CardPokemon from "@/components/CardPokemon.vue"

export default {
  name: "Home",
  components: {
    CardPokemon
  },
  props: {
    search: {
      type: String
    }
  },
  data: () => ({
    defaultPokemon: [],
    loading: false,
    error: ""
  }),

  mounted() {
    console.log(this.props)
    for (let i = 1; i < 21; i++) {
      this.initialize(i)
    }
  },
  methods: {
    initialize(pokemonId) {
      this.loading = true
      this.$store.dispatch("GET_ALL_POKEMONS", pokemonId).then(response => {
        this.defaultPokemon.push(response)
      }).catch( error => this.error = error)
    },
  }
}
</script>
