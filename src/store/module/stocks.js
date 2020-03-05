import axios from "axios";

const state = {
  stocks: []
};
const mutations = {
  INIT_STOCKS(state, payload) {
    state.stocks = payload;
  }
};
const actions = {
  intiStocks: ({ commit }) => {
    axios.get("http://localhost:3000/stocks").then(res => {
      console.log(res.data);
      commit("INIT_STOCKS", res.data);
    });
  }
};

export default { state, mutations, actions };
