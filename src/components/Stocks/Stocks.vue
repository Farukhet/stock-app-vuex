<template>
  <div class="row">
    <div class="col-xs-12 col-md-4" :key="stock.id" v-for="stock in stocks">
      <StockItems :stock="stock" />
    </div>
  </div>
</template>

<script>
import StockItems from "./StockItems";
import { mapState } from "vuex";
export default {
  name: "Stocks",
  components: { StockItems },
  computed: {
    ...mapState({
      stocks: state => state.stocks.stocks
    })
  },
  created() {
    this.$store.dispatch("intiStocks");
  }
};
</script>

<style></style>
