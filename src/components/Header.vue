<template>
  <div>
  <b-navbar type="light" variant="light">
    <b-navbar-nav>
      <b-navbar-brand href="/">Reclist</b-navbar-brand>
      <b-nav-item href="/smartview">Smartview</b-nav-item>
      <!-- Navbar dropdowns -->
    </b-navbar-nav>
  </b-navbar>
  <img alt="Vue logo" src="@/assets/logo.png">
</div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.navbar-brand{
  margin:0px 20px;
}
.nav-link{
  margin:0px 50px;
}
</style>