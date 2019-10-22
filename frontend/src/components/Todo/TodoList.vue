<template>
  <div>
    <div v-for="(todo, key) in todos" :key="key">
      <TodoItem> </TodoItem>
      <hr v-if="key != todos.length - 1" />
    </div>
  </div>
</template>

<script>
// Components
import TodoItem from "@/components/Todo/TodoItem";
export default {
  name: "TodoList",
  components: { TodoItem },
  data() {
    return {
      todos: undefined
    };
  },

  mounted() {
    // Get Todos
    this.todos = [
      {
        description: "Test 1"
      },
      {
        description: "Test 2"
      }
    ];
  }
};
</script>

<style lang="scss" scoped>
hr {
  margin: 1rem 0;
}
</style>
