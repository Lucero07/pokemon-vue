<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-3 text-uppercase" >{{ pokemon.name }}</v-list-item-title>
        <v-list-item-subtitle>Alto: {{ pokemon.height }} cm</v-list-item-subtitle>
        <v-list-item-subtitle>Peso: {{pokemon.weight}} Kg</v-list-item-subtitle>
        <v-list-item-subtitle>Tipos: {{ getTypes(pokemon.types) }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-avatar size="82px">
        <v-img :src="pokemon.sprites.front_default" alt="Vuetify" />
      </v-avatar>
    </v-list-item>

    <v-card-actions class="d-flex flex-row-reverse">
      <v-btn
        right
        text
        color="success"
        :to="{ name: 'pokemon-detail', params: { id: pokemon.id }}"
      >Ver mas ...</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    pokemon: {
      required: true,
      type: Object,
      default: {}
    }
  },
  data: () => ({
    types: ""
  }),
  methods: {
    getTypes(types) {
      const allTypes = [];
      types.forEach(type => allTypes.push(type.type.name));
      return allTypes.join(", ");
    }
  }
};
</script>