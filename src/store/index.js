import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemon: []
  },
  getters:{
    POKEMON: state => state.pokemon
  },
  mutations: {
  },
  actions: {
    GET_ALL_POKEMONS: async ({commit}, pokemonId) => {
      let urlPokemon = `pokemon/${pokemonId}/`
       return await axios.get(`https://pokeapi.co/api/v2/${urlPokemon}`)
       .then( response => response.data )
       .catch( () => 'Upss! Hubo un error' )
    }
  },
  modules: {
  }
})
