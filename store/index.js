export const state = () => ({
  isMobile: false,
});

export const mutations = {
  setProps(state, payload) {
    state[payload.props] = payload.value;
  },
};

export const actions = {};
