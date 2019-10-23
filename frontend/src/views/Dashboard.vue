<template>
  <div class="home">
    <section class="section fade-in">
      <div class="container">
        <!-- Header -->
        <h1 class="title header">Dashboard</h1>

        <!-- Locale -->
        <div class="locale">
          <font-awesome-icon
            icon="map-marker-alt"
            class="has-text-danger"
          ></font-awesome-icon>
          <span class="has-text-white">
            {{ locale }}
          </span>
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
      return this.$store.getters.localeSelected.name;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";
.locale {
  margin-top: -1rem;
  margin-bottom: 1rem;
  width: 100%;
  text-align: center;
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
