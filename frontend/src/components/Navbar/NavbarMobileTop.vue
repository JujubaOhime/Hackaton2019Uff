<template>
  <div class="navbar-mobile-top">
    <font-awesome-icon icon="arrow-left" class="customIcon left">
    </font-awesome-icon>
    <h1 class="has-text-accent">{{ title }}</h1>
    <font-awesome-icon
      icon="home"
      class="customIcon right"
      @click="
        () => {
          goToLink('home');
        }
      "
    >
    </font-awesome-icon>
  </div>
</template>

<script>
export default {
  name: "NavbarMobileTop",
  props: ["title"],
  methods: {
    goToLink(link) {
      this.$router.push({ name: link });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";
.navbar-mobile-top {
  background-color: $white;
  left: 0;
  position: sticky;
  right: 0;
  z-index: 30;
  height: 80px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  display: flex;
  justify-content: space-around;

  h1 {
    font-family: "Bevan", cursive;
  }
}

.navbar-mobile-top .customIcon {
  font-size: 30px;
  color: $accent;
  display: flex;
  align-items: center;
  text-align: center;
  height: 42px;
  margin-top: 15px;
}

.navbar-mobile-top h1 {
  font-size: 1.3em;
  margin-top: 21px;
}

.navbar-mobile-top-flex {
  display: flex;
  align-items: center;
  text-align: center;
  height: 42px;
  margin-top: 15px;
}
</style>
