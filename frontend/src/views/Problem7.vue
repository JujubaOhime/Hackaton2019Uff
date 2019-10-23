<template>
  <div class="problem1">
    <NavbarMobileTop title="Mais algum comentário?"></NavbarMobileTop>
    <section class="section problem">
      <div class="container">
        <textarea></textarea>

        <b-button
          type="is-light"
          @click="
            () => {
              goToLink('problem8');
            }
          "
        >
          Confirmar</b-button
        >
      </div>
    </section>
  </div>
</template>

<script>
import NavbarMobileTop from "@/components/Navbar/NavbarMobileTop";

export default {
  name: "home",
  components: { NavbarMobileTop },
  methods: {
    goToLink(link) {
      this.$router.push({ name: link });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";
.line-background {
  display: block;
  width: 80vw;
  background-color: $white;
  height: 80px;
  border-radius: 30px;

  margin: 0 auto;
  margin-top: 10px;
}

.problem {
  height: calc(100vh - 80px);
  vertical-align: middle;
  display: table-cell;
  width: 100vw;
}

.customIcon {
  font-size: 3em;
  color: $accent;
  margin-left: 20px;
  margin-top: 15px;
  display: inline;
  float: left;
}

.line-background h2 {
  display: flex;
  width: calc(80vw - 62px);
  text-align: center;
  color: $primary;
  font-size: 20px;
  height: 80px;
  align-items: center;
  justify-content: center;
}

textarea {
  display: block;
  margin: 0 auto;
  width: 80vw;
  font-size: 20px;
  border-radius: 20px;
  padding: 5px;
  box-sizing: border-box;
  height: 30vh;
  outline: none;
  resize: none;
  overflow: auto;
  color: $primary;
  font-weight: bold;
}

.problem button {
  border-radius: 20px;
  font-size: 20px;
  font-weight: bold;
  margin: 0 auto;
  margin-top: 20px;
  display: block;
  color: $accent !important;
}

.problem button span {
  display: table-cell;
  vertical-align: middle;
}
</style>
