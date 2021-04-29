import { shallowMount } from '@vue/test-utils'

import Component from './ButtonInput.vue'

describe('ButtonInput', () => {
  it('- renders correctly', () => {
    const wrapper = shallowMount(Component)

    expect(wrapper).toMatchSnapshot()
  })
})
