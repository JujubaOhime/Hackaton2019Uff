<template>
  <div class="home">
    <section class="section fade-in">
      <div class="container">
        <!-- Header -->
        <h1 class="title header">Dashboard</h1>

        <!-- Locale select -->
        <b-field id="locale-select">
          <b-select
            placeholder="Local"
            icon="map-marker-alt"
            icon-pack="fas"
            v-model="locale"
          >
            <option value="1">Praia Vermelha - IC</option>
            <option value="2">Praia Vermelha - Bloco H</option>
          </b-select>
        </b-field>

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
  data() {
    return {
      locale: 1
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";
/deep/ #locale-select {
  .icon {
    color: $danger;
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
