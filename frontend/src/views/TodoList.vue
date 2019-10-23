<template>
  <div class="problem1">
    <NavbarMobileTop title="Lista de Tarefas"></NavbarMobileTop>
    <section class="section problem">
      <div class="container">
        <div
          class="line-background"
          @click="
            () => {
              goToLink('task');
            }
          "
        >
          <font-awesome-icon
            icon="tools"
            class="customIcon middle"
          ></font-awesome-icon>
          <h2>Técnicos</h2>
          <div class="right">
            <font-awesome-icon
              icon="exclamation-circle"
              class="customIcon icon-right"
            ></font-awesome-icon>
            <b-progress type="is-accent" :value="40"></b-progress>
            <div class="icon-and-text">
              <font-awesome-icon
                icon="user"
                class="customIcon icon-right"
              ></font-awesome-icon
              >1
            </div>
          </div>
        </div>
        <div class="line-background">
          <font-awesome-icon
            icon="tools"
            class="customIcon middle"
          ></font-awesome-icon>
          <h2>Técnicos</h2>
          <div class="right">
            <font-awesome-icon
              icon="exclamation-circle"
              class="customIcon icon-right"
            ></font-awesome-icon>
            <b-progress type="is-accent" :value="40"></b-progress>
            <div class="icon-and-text">
              <font-awesome-icon
                icon="user"
                class="customIcon icon-right"
              ></font-awesome-icon
              >1
            </div>
          </div>
        </div>
        <div class="line-background">
          <font-awesome-icon
            icon="tools"
            class="customIcon middle"
          ></font-awesome-icon>
          <h2>Técnicos</h2>
          <div class="right">
            <font-awesome-icon
              icon="exclamation-circle"
              class="customIcon icon-right"
            ></font-awesome-icon>
            <b-progress type="is-accent" :value="40"></b-progress>
            <div class="icon-and-text">
              <font-awesome-icon
                icon="user"
                class="customIcon icon-right"
              ></font-awesome-icon
              >1
            </div>
          </div>
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
  height: 100px;
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
  margin-top: 25px;
  display: inline;
  float: left;
}

.icon-right {
  float: right;
  margin-left: 0px;
  margin-top: 0px;
  font-size: 20px;
  margin-top: 10px;
}

.icon-and-text .icon-right {
  float: left;
  display: inline;
  margin-top: 0px;
}
.line-background .right {
  float: right;
  margin-left: 0px;
  margin-right: 10px;
  display: grid;
  height: 100px;
}

.progress-wrapper .progress {
  margin-top: 10px !important;
  width: 40px;
  margin-bottom: 5px !important;
}

.progress-wrapper {
  margin-bottom: 0px !important;
}

.line-background h2 {
  display: inline-flex;
  margin: 10px auto;
  width: calc(80vw - 120px);
}
</style>
