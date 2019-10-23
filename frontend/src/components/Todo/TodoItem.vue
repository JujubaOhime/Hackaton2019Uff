<template>
  <div class="todo-item">
    <div class="columns">
      <div class="column category-icon">
        <b-icon
          pack="fas"
          :icon="todo.icon"
          class="has-text-accent"
          size="is-large"
        ></b-icon>
      </div>
      <div class="column description">
        <p class="title has-text-primary">{{ todo.category }}</p>
        <p class="subtitle has-text-info">{{ todo.subcategory }}</p>
      </div>
      <div class="column status">
        <b-icon
          pack="fas"
          :icon="todo.people.length > 0 ? 'clock' : 'exclamation-circle'"
          :class="
            todo.people.length > 0 ? 'has-text-warning' : 'has-text-danger'
          "
          size="is-medium"
        ></b-icon>
        <div class="people">
          <b-icon pack="fas" icon="user" size="is-small"></b-icon>
          <span>{{ todo.people.length }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  data() {
    return {
      modalActive: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";

.todo-item {
  &:hover {
    cursor: pointer;
    background-color: rgba($accent, 0.1);
  }
}
.category-icon {
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .title {
    font-size: 1.25rem;
  }
  .subtitle {
    font-size: 1rem;
  }
}

.status {
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .people {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      padding-left: 0.15rem;
    }
  }
}

.progress-wrapper {
  margin-bottom: 0.25rem !important;
}
</style>
