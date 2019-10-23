<template>
  <div>
    <div v-for="(todo, key) in todos" :key="key">
      <TodoItem
        :todo="todo"
        @click.native="
          () => {
            viewModal(key);
          }
        "
      >
      </TodoItem>
      <hr v-if="key != todos.length - 1" />
      <b-modal :active.sync="modalActive" has-modal-card trap-focus>
        <TodoModal :todo="todos[todoSelected]"></TodoModal>
      </b-modal>
    </div>
  </div>
</template>

<script>
// Components
import TodoItem from "@/components/Todo/TodoItem";
import TodoModal from "@/components/Todo/TodoModal";

export default {
  name: "TodoList",
  components: { TodoItem, TodoModal },
  data() {
    return {
      todos: undefined,
      todoSelected: undefined,
      modalActive: false
    };
  },
  methods: {
    viewModal(key) {
      this.todoSelected = key;
      this.modalActive = true;
    }
  },
  mounted() {
    // Get Todos
    this.todos = [
      {
        category: "Limpeza",
        subcategory: "Pontual",
        icon: "broom",
        description: "Dei PT",
        priority: 80,
        people: []
      },
      {
        category: "Manutenção",
        subcategory: "Equipamento",
        icon: "tools",
        description: "Consertar Ar",
        priority: 30,
        people: []
      },
      {
        category: "Segurança",
        subcategory: "Assalto",
        icon: "shield-alt",
        description: "Rio ta foda",
        priority: 30,
        people: [
          {
            name: "Thomas"
          }
        ]
      },
      {
        category: "Emergência",
        subcategory: "Saúde",
        icon: "first-aid",
        description: "Geral morrendo",
        priority: 100,
        people: [
          {
            name: "Thomas"
          },
          {
            name: "Thomas"
          },
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
/deep/ .modal-background {
  opacity: 0.25;
}

hr {
  margin: 1rem 0;
}
</style>
