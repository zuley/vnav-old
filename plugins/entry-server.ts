import { defineNuxtPlugin, useState } from '#app'
import { getOptions } from '~/api/global'

export default defineNuxtPlugin(async nuxtApp => {
  const options = await getOptions()
  nuxtApp.payload.state = {
    options: options.data.value.data
  }
})