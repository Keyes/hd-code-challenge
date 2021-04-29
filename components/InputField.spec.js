import { shallowMount } from '@vue/test-utils'

import Component from './InputField.vue'

describe('InputField', () => {
  it('- renders correctly - default', () => {
    const wrapper = shallowMount(Component)

    expect(wrapper).toMatchSnapshot()
  })

  it('- renders correctly - caption', () => {
    const wrapper = shallowMount(Component, {
      slots: {
        caption: 'Caption',
        error: 'Error',
      },
    })

    expect(wrapper).toMatchSnapshot()
  })

  it('- renders correctly - error', () => {
    const wrapper = shallowMount(Component, {
      slots: {
        caption: 'Caption',
        error: 'Error',
      },
      propsData: {
        state: 'error',
      },
    })

    expect(wrapper).toMatchSnapshot()
  })
})
