<template>
  <div class="home">
    <section class="section fade-in">
      <div class="container">
        <!-- Header -->
        <h1 class="title header">Dashboard</h1>

        <!-- Locale -->
        <div class="locale-wrapper">
          <b-button
            type="is-danger"
            icon-left="map-marker-alt"
            rounded
            @click="localeChoose"
          >
            {{ locale.campus }} - {{ locale.unit }}
          </b-button>
        </div>

        <!-- Tiles -->
        <div class="tile is-ancestor">
          <div class="tile is-parent is-vertical is-6">
            <article class="tile is-child box todoList-container">
              <h1 class="subtitle">Afazeres</h1>
              <TodoList />
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <div class="problemsCategory-container">
                <ProblemsCategory></ProblemsCategory>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Components
import TodoList from "@/components/Todo/TodoList";
import ProblemsCategory from "@/components/Charts/ProblemsCategory";

export default {
  name: "Dashboard",
  components: { TodoList, ProblemsCategory },
  computed: {
    locale() {
      return this.$store.getters.localeSelected;
    }
  },
  methods: {
    localeChoose() {
      this.$router.push({ name: "localeChoose" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";
.locale-wrapper {
  margin: 0rem auto 2rem;
  .button {
    display: flex;
    margin: 0 auto;
  }
  svg {
    font-size: 1rem;
  }
}

.todoList-container {
  padding: 1rem 2rem;
}

.problemsCategory-container {
  width: 80%;
  margin: 0 auto;
}
</style>
