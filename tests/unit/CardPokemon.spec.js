import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import CardPokemon from '@/components/CardPokemon.vue'

describe('CardPokemon.vue', () => {
  it('renders props.pokemon when passed', () => {
    const pokemon = {}
    const wrapper = shallowMount(CardPokemon, {
      propsData: { pokemon }
    })
    expect(wrapper.text()).to.include(pokemon)
  })
})
