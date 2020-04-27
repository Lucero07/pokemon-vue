import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      dark: {
        primary: '#e6ab04',
        secondary: '#58585a',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#e6ab04',
        warning: '#FFC107',
        backgroundTitle: '#FFC107'
      },
    },
    headline:{
      color: 'pink'
    }
  },
})
