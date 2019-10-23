// Vue
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    mobile: undefined
  },
  mutations: {
    change(state, mobile) {
      state.mobile = mobile;
    }
  },
  getters: {
    mobile: state => state.mobile
  }
});
