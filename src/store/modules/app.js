/**
 * 
 * this.$store.dispatch('setUser', data)
 */
const app = {
    state: {
    //   token: {
    //     name: '',
    //     xxx: 123
    //   }
        user: {
            name: '',
            identity: '',
            img: '',
        }

    },
    mutations: {
    //   SET_USER_INFORMATIONS: (state, data) => {
    //     state.token = data
    //   }
        SET_USER_INFO: (state, data) => {
            state.user = data
        }
    },
    actions: {
    //   setUser ({ commit }, token) {
    //     commit('SET_USER_INFORMATIONS', token)
    //   }
        setUser({ commit }, data) {
            commit('SET_USER_INFO', data)
        }
    }
}
export default app
  