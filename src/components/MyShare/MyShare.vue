<template>
  <div class="row">
    <div class="col-xs-12 col-md-4" :key="share.id" v-for="share in shares">
      <ShareItem :share="share" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ShareItem from "./ShareItem";
export default {
  name: "MyShare",
  components: {
    ShareItem
  },
  computed: {
    ...mapState({
      shares: state => state.shares.shares
    })
  },
  created() {
    this.$store.dispatch("loadShare");
  }
};
</script>

<style></style>
