import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import ErrorBox from '@/components/global/ErrorBox.vue'
import { useWeatherStore } from '@/stores/weather.js'

describe('ErrorBox.vue', () => {
  let store

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useWeatherStore()
    store.errorCode = 404
    store.errorMessage = 'City not found'
  })

  it('Renders error code and message from store', () => {
    const wrapper = mount(ErrorBox)

    expect(wrapper.text()).toContain('Ooops!')
    expect(wrapper.text()).toContain('404')
    expect(wrapper.text()).toContain('City not found')
  })
})
