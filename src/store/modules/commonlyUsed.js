const getDefaultState = () => {
  return {
    arid : 0,
  }
}

const defaultState = getDefaultState();

const mutations = {
  SET_ID: (state, arid) => {
    state.arid = arid
  },
}
const actions = {
  addID({ commit }, arid) {
    commit('SET_ID', arid)
  },
}

export default {
  namespaced: true,
  state: defaultState,
  mutations,
  actions
}

