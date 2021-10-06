import Vue from 'vue'
import { isArray, has } from 'lodash'

function displayNotification(group, type, text) {
  Vue.prototype.$notify({
    group,
    type,
    text,
  })
}

export default {
  handle(data) {
    const codename = Vue.prototype.$codename

    if (has(data, 'success') && isArray(data.success)) {
      for (let message of data.success) {
        displayNotification(codename, 'success', message)
      }
    } else if (has(data, 'error') && isArray(data.error)) {
      for (let message of data.error) {
        displayNotification(codename, 'success', message)
      }
    } else if (has(data, 'info') && isArray(data.info)) {
      for (let message of data.info) {
        displayNotification(codename, 'success', message)
      }
    }
  },
}