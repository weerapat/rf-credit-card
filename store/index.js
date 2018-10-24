export const state = () => ({
  footer: '',
  navigation: ''
});

export const mutations = {
  setFooterView(state, value) {
    state.footer = value
  },
  setMainNavigationView(state, value) {
    state.navigation = value
  }
};
