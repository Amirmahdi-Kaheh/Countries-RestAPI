const actions = {
  async nuxtServerInit ({ dispatch },app) {
    await dispatch('theme/init', app);
  }
};
export default {
  namespaced: true,
  actions,
};
