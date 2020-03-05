<template>
  <div class="card text-dark mb-3">
    <div class="card-header">{{ share.name }} - {{ share.price }} Price</div>
    <div class="card-body">
      <button class="btn btn-warning " @click="sellStock">
        Sell
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShareItem",
  props: ["share"],
  methods: {
    sellStock() {
      console.log("sellStock");
    }
  }
};
</script>

<style></style>
