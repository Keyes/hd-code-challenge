export default {
  transition(to, from) {
    if (!from) return { mode: 'out-in', name: 'card-swipe' }

    const navigationSteps = JSON.parse(
      window.sessionStorage.getItem('navigationSteps')
    )

    const findIndex = (route) =>
      navigationSteps.findIndex((step) => step === route)

    return {
      mode: 'out-in',
      name:
        findIndex(to.path) < findIndex(from.path)
          ? 'card-swipe-reverse'
          : 'card-swipe',
    }
  },
}
