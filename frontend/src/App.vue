<template>
  <div id="app">
    <b-navbar v-if="!mobile">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="@/assets/logo.svg"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          Home
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/localeChoose' }">
          Dashboard
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/relatorios' }">
          Relatorios
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    mobile() {
      return this.$store.getters.mobile;
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/theme.scss";
body {
  min-height: 100vh;
  background-color: $primary;
}
</style>
