<template>
  <section class="section fade-in">
    <div class="container">
      <!-- Header -->
      <h1 class="title header">Unidades</h1>
      <div class="columns is-centered">
        <div
          class="column is-one-quarter"
          v-for="(locale, key) in locales"
          :key="key"
        >
          <div
            class="box locale"
            @click="
              () => {
                chooseLocale(key);
              }
            "
          >
            <h1 class="subtitle has-text-centered">{{ locale.campus }}</h1>
            <h1 class="subtitle has-text-centered">{{ locale.unit }}</h1>
            <div class="columns is-centered">
              <div class="column has-text-centered is-one-third">
                <span>
                  <font-awesome-icon
                    icon="broom"
                    style="color: #48dbfb"
                  ></font-awesome-icon>
                  {{
                    locale.todos.filter(locale => locale.category == "Limpeza")
                      .length
                  }}
                </span>
              </div>
              <div class="column has-text-centered is-one-third">
                <span>
                  <font-awesome-icon
                    icon="tools"
                    style="color: #feca57"
                  ></font-awesome-icon>
                  {{
                    locale.todos.filter(
                      locale => locale.category == "Manutenção"
                    ).length
                  }}
                </span>
              </div>
              <div class="column has-text-centered is-one-third">
                <span>
                  <font-awesome-icon
                    icon="shield-alt"
                    style="color: #1dd1a1"
                  ></font-awesome-icon>
                  {{
                    locale.todos.filter(
                      locale => locale.category == "Segurança"
                    ).length
                  }}
                </span>
              </div>
            </div>
            <div class="columns is-centered">
              <div class="column has-text-centered is-one-third">
                <span>
                  <font-awesome-icon
                    icon="first-aid"
                    style="color: #ff6b6b"
                  ></font-awesome-icon>
                  {{
                    locale.todos.filter(
                      locale => locale.category == "Emergência"
                    ).length
                  }}
                </span>
              </div>
              <div class="column has-text-centered is-one-third">
                <span>
                  <font-awesome-icon
                    icon="thermometer-half"
                    style="color: #01a3a4"
                  ></font-awesome-icon>
                  {{
                    locale.todos.filter(locale => locale.category == "Ambiente")
                      .length
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "LocaleChoose",
  computed: {
    locales() {
      return this.$store.getters.locales;
    }
  },
  methods: {
    chooseLocale(key) {
      this.$store.commit("changeLocaleSelected", key);
      this.$router.push({ name: "dashboard" });
    }
  },
  mounted() {
    axios.get("http://localhost:8000/local").then(response => {
      console.log(response);
    });
  }
};
</script>

<style lang="scss">
@import "@/styles/theme.scss";

.box.locale {
  border-radius: 10px;
  transition: 0.2s ease;
  &:hover {
    cursor: pointer;
    background-color: #f6f6f6;
  }
  .subtitle {
    font-size: 1.15rem;
    color: $danger;
    font-weight: 600;

    &:nth-child(2) {
      margin-top: -1rem;
      font-size: 1rem;
      font-weight: normal;
    }
  }
  .column {
    span {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-style: italic;
      font-family: "Fira Code iScript";
      font-size: 1.2rem;
      svg {
        font-size: 1.5rem;
        flex-grow: 1;
      }
    }
  }
}
</style>
