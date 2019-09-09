const state = {
    user: null
}

const getters = {
    check: state => !! state.user,
    username: state => state.user ? state.user.name : ''
}

const mutations = {
    setUser (state, user) {
        state.user = user
    }
}

const actions = {
    async register (context, data) {
        const response = await axios.post('/vuesplash/api/register', data)
        context.commit('setUser', response.data)
    },
    async login (context, data) {
        const response = await axios.post('/vuesplash/api/login', data)
        context.commit('setUser', response.data)
    },
    async logout (context) {
        const response = await axios.post('/vuesplash/api/logout')
        context.commit('setUser', null)
    },
    async currentUser (context) {
        const response = await axios.get('/vuesplash/api/user')
        const user = response.data || null
        context.commit('setUser', user)
    }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}