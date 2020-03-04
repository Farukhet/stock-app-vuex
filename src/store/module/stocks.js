const state = {
  stocks: [
    { id: 1, name: "BMW", price: 100 },
    { id: 2, name: "benxo", price: 40 },
    { id: 3, name: "blow", price: 60 }
  ]
};
const mutations = {};
const actions = {
  addStock({ commit }) {
    console.log("farukh ok ");
    console.log(commit);
  }
};

export default { state, mutations, actions };
