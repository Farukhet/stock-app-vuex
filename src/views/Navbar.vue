<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Stock Exchange</router-link>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/myshare">My Share</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/stocks">Stock</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default { name: "Navbar" };
</script>

<style></style>
