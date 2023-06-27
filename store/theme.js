export const state = () => ({
  theme: 'light'
});

export const mutations = {
  SET_USER_DEFAULT_THEME (state, theme) {
    state.theme = theme;
  }
};

export const getters = {
  userDefaultTheme (state) {
    try {
      return state.theme
    } catch {
      return 'light'
    }
  },
};

export const actions = {
  init ({commit}, app) {
    try {
      const theme = app.$cookies.get('theme')

      if (theme) {
        commit('SET_USER_DEFAULT_THEME', theme)
      } else {
        app.$cookies.set('theme', 'light')
      }
    } catch {
      console.log('Error on THEME INIT');
    }
  }
};
