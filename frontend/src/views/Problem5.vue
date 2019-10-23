<template>
  <div class="problem1">
    <NavbarMobileTop title="Qual Andar?"></NavbarMobileTop>
    <section class="section problem">
      <div class="container ">
        <div
          class="line-background"
          @click="
            () => {
              goToLink('problem6');
            }
          "
        >
          <font-awesome-icon
            icon="user"
            class="customIcon middle"
          ></font-awesome-icon>
          <h2>Limpeza</h2>
        </div>
        <div class="line-background">
          <font-awesome-icon
            icon="user"
            class="customIcon middle"
          ></font-awesome-icon>
          <h2>Limpeza</h2>
        </div>
        <div class="line-background">
          <font-awesome-icon
            icon="user"
            class="customIcon middle"
          ></font-awesome-icon>
          <h2>Limpeza</h2>
        </div>
        <div class="line-background">
          <font-awesome-icon
            icon="user"
            class="customIcon middle"
          ></font-awesome-icon>
          <h2>Limpeza</h2>
        </div>
        <div class="line-background">
          <font-awesome-icon
            icon="user"
            class="customIcon middle"
          ></font-awesome-icon>
          <h2>Limpeza</h2>
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
</style>
