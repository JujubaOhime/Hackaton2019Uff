<template>
  <div class="home">
    <NavbarMobile v-if="mobile"></NavbarMobile>
    <section class="section fade-in">
      <div class="container ">
        <div class="background-img">
          <img
            src="@/assets/logoPink.svg"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </div>
        <h1 class="has-text-white">Olá, Fulanx</h1>
        <h2 class="has-text-white">Seja bem vindo(a)!</h2>
        <div class="actions">
          <div class="columns is-centered is-mobile">
            <div class="column is-one-third">
              <div
                class="action-icon-wrapper
              "
                @click="
                  () => {
                    goToLink('problem');
                  }
                "
              >
                <font-awesome-icon
                  icon="exclamation-triangle"
                  class="customIcon"
                ></font-awesome-icon>
              </div>
              <h2 class="has-text-white">Reportar problema</h2>
            </div>
            <div class="column is-one-third">
              <div class="action-icon-wrapper">
                <font-awesome-icon
                  icon="exclamation"
                  class="customIcon"
                ></font-awesome-icon>
              </div>
              <h2 class="has-text-white">Problemas reportados</h2>
            </div>
            <div class="column is-one-third">
              <div class="action-icon-wrapper">
                <font-awesome-icon
                  icon="chart-pie"
                  class="customIcon"
                ></font-awesome-icon>
              </div>
              <h2 class="has-text-white">Gráficos de relatórios</h2>
            </div>
          </div>
          <div class="columns is-centered is-mobile ">
            <div class="column is-one-third">
              <div
                class="action-icon-wrapper"
                @click="
                  () => {
                    goToLink('todoList');
                  }
                "
              >
                <font-awesome-icon
                  icon="check-square"
                  class="customIcon"
                ></font-awesome-icon>
              </div>
              <h2 class="has-text-white">Lista de tarefas</h2>
            </div>
            <div class="column is-one-third">
              <div class="action-icon-wrapper">
                <font-awesome-icon
                  icon="user-plus"
                  class="customIcon"
                ></font-awesome-icon>
              </div>
              <h2 class="has-text-white">Cadastrar Funcionário</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Components
import NavbarMobile from "@/components/Navbar/NavbarMobile";

export default {
  name: "home",
  components: { NavbarMobile },
  computed: {
    mobile() {
      return this.$store.getters.mobile;
    }
  },

  methods: {
    goToLink(link) {
      this.$router.push({ name: link });
    }
  },

  mounted() {
    // if (!this.mobile) {
    //   this.$router.push({ name: "localeChoose" });
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";

.actions {
  width: 80vw;
  max-width: 500px;
  min-width: 300px;
  margin: 0 auto;
  text-align: center;
}
h1 {
  font-size: 1.5em;
}
img {
  width: 80px;
}

.columns {
  margin-top: 20px;
}

.column h2 {
  text-align: center;
}

.action-icon-wrapper {
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 20vh;
  max-height: 20vw;
  min-height: 10vh;
  width: 20vh;
  max-width: 20vw;
  min-width: 10vh;
  border-radius: 15px;
  cursor: pointer;
}

.customIcon {
  width: 100%;
  font-size: 300%;
  color: $accent;
}

.home h1 {
  font-family: "Bevan", cursive;
}

.home h2 {
  font-family: "Roboto", sans-serif;
}
.problem {
}
</style>
