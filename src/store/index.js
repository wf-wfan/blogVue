import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import user from './modules/user'
import common from './modules/common'
import commonUsed from './modules/commonlyUsed'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    common,
    commonUsed
  },
  getters
})

export default store
