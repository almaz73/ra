import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// state может быть только массивом или переменным. Объект не принимается

export default new Vuex.Store({
  state: {
    color:'black'
  },
  mutations: {
    setColor(state, color) {
      state.color = color;
    }
  },
  actions: {
    setColor(context, payload) {
      context.commit('setColor', payload);
    }
  }
});
