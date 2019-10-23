<template>
  <div class="problem1">
    <NavbarMobileTop title="Lista de Tarefas"></NavbarMobileTop>
    <section class="section problem">
      <div class="container">
        <div class="line-background">
          <h1>Categoria</h1>
          <h2>SubCategoria</h2>
          <h2>Nível de Prioridade</h2>
          <b-progress type="is-primary" :value="40"></b-progress>
          <h2>Status</h2>
        </div>
        <br /><br />
        <div class="line-background line-background2 people">
          <h1>Pessoas</h1>
          <div>
            <h2>
              Fulano 1
              <font-awesome-icon
                icon="minus-circle"
                class="customIcon icon-right"
              ></font-awesome-icon>
            </h2>
          </div>
          <h2>
            Fulano 2
            <font-awesome-icon
              icon="minus-circle"
              class="customIcon icon-right"
            ></font-awesome-icon>
          </h2>

          <font-awesome-icon
            icon="plus-circle"
            class="customIcon icon"
            size="is-large"
            @click="
              () => {
                goToLink('taskPeople');
              }
            "
          ></font-awesome-icon>
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
  border-radius: 30px;
  height: 200px;
  margin: 0 auto;
  margin-top: 10px;
}

.line-background2 {
  height: 165px;
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
  display: block;
  margin: 0 auto;
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

.line-background h1 {
  text-align: center;
  padding: 10px;
  font-size: 20px;
  color: $accent;
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
  display: block;
  text-align: left;
  margin-left: 20px;
  height: unset;
  margin-bottom: 10px;
}

.progress-wrapper {
  width: 90%;
  margin: 0 auto;
  height: 30px;
}

.progress-wrapper .progress {
  height: 20px;
}
</style>
