import { shallowMount } from '@vue/test-utils'

import Component from './ToggleInput.vue'

jest.mock('uuid', () => ({
  v4: () => 'testID',
}))

describe('ToggleInput', () => {
  it('- renders correctly', () => {
    const wrapper = shallowMount(Component)

    expect(wrapper).toMatchSnapshot()
  })

  it('- works correctly', () => {
    const wrapper = shallowMount({
      data: { checked: false },
      template: '<div> <ToggleInput v-model="checked"></ToggleInput> </div>',
      components: { ToggleInput: Component },
    })

    expect(wrapper.vm.checked).toEqual(false)

    wrapper.find('label').trigger('click')

    expect(wrapper.vm.checked).toEqual(true)
  })
})
