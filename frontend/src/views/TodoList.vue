<template>
  <div class="problem1">
    <NavbarMobileTop title="Lista de Tarefas"></NavbarMobileTop>
    <section class="section problem">
      <div class="container">
        <div class="line-background">
          <font-awesome-icon
            icon="tools"
            class="customIcon middle"
          ></font-awesome-icon>
          <h2>Técnicos</h2>
        </div>
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

.customIcon {
  font-size: 3em;
  color: $accent;
  margin-left: 20px;
  margin-top: 15px;
  display: inline;
  float: left;
}
</style>
