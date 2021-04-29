import { shallowMount } from '@vue/test-utils'

import Component from './TextInput.vue'

jest.mock('uuid', () => ({
  v4: () => 'testID',
}))

describe('TextInput', () => {
  it('- renders correctly', () => {
    const wrapper = shallowMount(Component)

    expect(wrapper).toMatchSnapshot()
  })
})
