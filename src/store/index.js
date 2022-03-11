import { createStore } from "vuex";

export default createStore({
  state: {
    aboutMeData: {
      name: "",
      age: "",
      interests: []
    }
  },
  mutations: {
    setData(state, props) {
      state.aboutMeData = props
    }
  },
  getters: {
    getData(state) {
      return state.aboutMeData
    }
  },
});
