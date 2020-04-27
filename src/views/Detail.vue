<template>
  <v-row>
    <v-col cols="12" sm="8" offset-sm="2">
      <v-card>
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="6">
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-3 text-capitalize">{{ pokemon.name }}</v-list-item-title>
                  <v-list-item-subtitle>Alto: <b>{{ pokemon.height }} cm</b></v-list-item-subtitle>
                  <v-list-item-subtitle>Peso: <b>{{pokemon.weight}} Kg</b></v-list-item-subtitle>
                  <v-list-item-subtitle>Tipos: <b>{{ pokemon.types ? getTypes(pokemon.types) : 'No tiene' }}</b></v-list-item-subtitle>
                  <v-list-item-subtitle>Habilidades: <b>{{ pokemon.abilities ? getAbilities(pokemon.abilities) : 'No tiene' }}</b></v-list-item-subtitle>
                  <v-list-item-subtitle>Experiencia: <b>{{ pokemon.base_experience}}</b></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col cols="12" sm="6">
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title
                    class="headline mb-3 text-capitalize"
                  >{{ pokemon.name }} imagenes</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-row>
                <v-col v-for="n in pictures" :key="n" class="d-flex child-flex" cols="4">
                  <v-img :src="n" :lazy-src="n" aspect-ratio="1" class="transparent">
                    <template v-slot:placeholder>
                      <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>

export default {
  name: "Detail",
  data: () => ({
    model: null,
    pokemon: {},
    loading: false,
    error: "",
    pictures: [],
    allAbilities: []
  }),

  mounted() {
    this.initialize()
  },
  methods: {
    initialize() {
      this.loading = true
      this.$store
        .dispatch("GET_ALL_POKEMONS", this.$route.params.id)
        .then(response => {
          this.pokemon = response
          let pictures = Object.values(response.sprites)
          this.pictures = pictures.filter(elemento => elemento != null)
        })
        .catch(error => (this.error = error))
    },
    getTypes(types) {
      const allTypes = []
      types.forEach(type => allTypes.push(type.type.name))
      return allTypes.join(", ")
    },
    getAbilities(abilities) {
      const allAbilities = []
      abilities.forEach(ability => allAbilities.push(ability.ability.name))
      return allAbilities.join(", ")
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../plugins/preset/variables.scss";
.theme--dark {
  .v-card {
    background-color: $gris-pantano;
    color: $gris-delfin;
  }

  .v-list-item__title {
    color: $naranja-fuego;
	}

	.v-list-item__subtitle {
    color: $naranja-melon !important;
  }
}
</style>