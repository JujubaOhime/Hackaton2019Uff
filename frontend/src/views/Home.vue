<template>
  <div class="home">
    <section class="section">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-parent is-4">
            <article class="tile is-child box">
              <TodoList />
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

export default {
  name: "home",
  components: { TodoList }
};
</script>
