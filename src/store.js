import { createStore } from "vuex";

const store = createStore({
  state() {},
  mutations: {
    increment() {
      console.log("나타내쟈");
    },
    hideDougnut() {
      console.log("숨겨버리쟈!");
    },
  },
});

export default store;
