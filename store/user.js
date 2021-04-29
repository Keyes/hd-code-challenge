export const state = () => ({
  firstName: '',
  lastName: '',
  githubUsername: '',
  emailAddress: '',
  termsAccepted: false,
  githubResult: {},
})

export const mutations = {
  setFormData(state, data) {
    Object.assign(state, data)
  },
  setGithubData(state, data) {
    state.githubResult = data
  },
}

export const actions = {
  async requestGithubData({ commit, state }) {
    // return to index if no data is entered yet
    if (!state.githubUsername) return window.$nuxt.$router.push('/')

    // clear the data to make sure it's reloaded
    commit('setGithubData', {})

    const user = await this.$axios.$get(
      `https://api.github.com/users/${state.githubUsername}`
    )

    commit('setGithubData', user)
  },
}
