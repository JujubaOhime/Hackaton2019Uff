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
      todoSelected: undefined,
      modalActive: false
    };
  },
  computed: {
    todos() {
      return this.$store.getters.localeSelected.todos;
    }
  },
  methods: {
    viewModal(key) {
      this.todoSelected = key;
      this.modalActive = true;
    }
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
