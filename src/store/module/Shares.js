import axios from "axios";
const state = {
  shares: []
};
const mutations = {
  INIT_SHARES(state, payload) {
    state.shares = payload;
  },
  NEW_SHARE(state, newStock) {
    axios
      .post("http://localhost:3000/shares", newStock)
      .then(res => console.log(res.status, res.statusText))
      .catch(e => console.log(e.error));

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
    axios
      .get("http://localhost:3000/shares")
      .then(res => {
        console.log(res.data);
        commit("INIT_SHARES", res.data);
      })
      .catch(err => console.error(err.error));
  }
};

export default { state, mutations, actions };
