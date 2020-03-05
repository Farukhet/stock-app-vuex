import axios from "axios";

const state = {
  stocks: []
};
const mutations = {
  LoadStocks(state, payload) {
    state.stocks = payload;
  }
};
const actions = {
  addStock: () => {
    console.log("Farukh OK");
  },
  loadData: ({ commit }) => {
    axios.get("http://localhost:3000/stocks").then(res => {
      console.log(res);
      commit("LoadStocks", res.data);
    });
  }
};

export default { state, mutations, actions };
