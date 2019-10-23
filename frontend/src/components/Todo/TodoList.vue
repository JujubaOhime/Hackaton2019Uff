<template>
  <div>
    <div v-for="(todo, key) in todos" :key="key">
      <TodoItem :todo="todo"> </TodoItem>
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
        category: "Limpeza",
        icon: "broom",
        description: "Dei PT",
        priority: 80,
        people: []
      },
      {
        category: "Manutenção",
        icon: "tools",
        description: "Consertar Ar",
        priority: 30,
        people: [
          {
            name: "Thomas"
          }
        ]
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
