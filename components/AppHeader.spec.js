import { shallowMount } from '@vue/test-utils'

import Component from './AppHeader.vue'

describe('AppHeader', () => {
  it('- renders correctly', () => {
    const wrapper = shallowMount(Component)

    expect(wrapper).toMatchSnapshot()
  })
})
