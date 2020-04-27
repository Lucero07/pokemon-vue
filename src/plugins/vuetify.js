import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { preset } from 'vue-cli-plugin-vuetify-preset-rally/preset'

Vue.use(Vuetify)
const options = {
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: '#e6ab04',
        secondary: '#58585a',
        accent: '#e35906',
        error: '#c8102e',
        info: '#2196F3',
        success: '#e6ab04',
        warning: '#FFC107',
        backgroundTitle: '#FFC107'
      },
    },
    headline: {
      color: 'pink'
    }
  }
}

export default new Vuetify({
  preset,
  rtl: false,
  ...options,
})
