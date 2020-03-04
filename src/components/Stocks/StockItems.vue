<template>
  <div class="card text-dark mb-3">
    <div class="card-header">{{ stock.name }} - {{ stock.price }}Price</div>
    <div class="card-body">
      <input type="number" class="form-control m-1" />
      <button class="btn btn-success" @click="buyStock">Buy</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StockItems",
  props: ["stock"],
  methods: {
    buyStock() {
      console.log("helllp");
      this.$store.dispatch("stocks/addStock");
    }
  }
};
</script>

<style></style>
