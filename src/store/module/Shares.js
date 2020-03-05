import axios from "axios";
const state = {
  shares: []
};
const mutations = {
  LOAD_SHARES(state, payload) {
    state.shares = payload;
  },
  NEW_SHARE(state, newStock) {
    console.log(newStock);
    axios
      .post("http://localhost:3000/shares", newStock)
      .then(res => console.log(res))
      .catch(e => console.log(e));

    state.shares = [...state.shares, newStock];
    console.log(state.shares);
  }
};
const actions = {
  addStock: ({ commit }, newStock) => {
    console.log("Farukh OK");
    commit("NEW_SHARE", newStock);
  },
  loadShare: ({ commit }) => {
    axios.get("http://localhost:3000/shares").then(res => {
      console.log(res.data);
      commit("LOAD_SHARES", res.data);
    });
  }
};

export default { state, mutations, actions };
