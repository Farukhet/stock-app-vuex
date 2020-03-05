<template>
  <div class="card text-dark mb-3">
    <div class="card-header">{{ stock.name }} - {{ stock.price }} Price</div>
    <div class="card-body">
      <input type="number" class="form-control m-1" v-model="quantity" />
      <button
        class="btn btn-success"
        @click="buyStock"
        :disabled="quantity <= 0"
      >
        Buy
      </button>
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  name: "StockItems",
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    buyStock() {
      const newStock = {
        name: this.stock.name,
        price: this.stock.price,
        quantity: this.quantity
      };
      console.log(newStock);
      this.$store.dispatch("addStock", newStock);
      console.log("buyStock ");
      this.quantity = 0;
    }
  }
};
</script>

<style></style>
