import { expect } from 'chai'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import CardPokemon from '@/components/CardPokemon.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()



shallowMount(CardPokemon, {
  stubs: ['router-link', ':id/detail'],
  propsData: {
    pokemon: {}
  }
})


