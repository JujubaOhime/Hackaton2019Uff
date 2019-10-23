<template>
  <div class="navbar-mobile-bottom">
    <font-awesome-icon icon="home" class="customIcon"> </font-awesome-icon>
    <font-awesome-icon icon="plus-circle" class="customIcon middle">
    </font-awesome-icon>
    <font-awesome-icon icon="bell" class="customIcon"> </font-awesome-icon>
  </div>
</template>

<script>
export default {
  name: "NavbarMobile",
  props: ["title"]
};
</script>

<style lang="scss">
@import "@/styles/theme.scss";
.navbar {
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}

.navbar-mobile-bottom {
  background-color: $white;
  left: 0;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 30;
  height: 70px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: flex;
  justify-content: space-around;
}

.navbar-mobile-bottom .customIcon {
  font-size: 30px;
  color: $accent;
  display: flex;
  align-items: center;
  text-align: center;
  height: 42px;
  margin-top: 15px;
}

.navbar-mobile-bottom .middle {
  color: $primary;
}
</style>
