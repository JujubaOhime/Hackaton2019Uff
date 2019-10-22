<template>
  <div class="todo-item">
    <div class="columns">
      <div class="column category-icon">
        <b-icon
          pack="fas"
          icon="broom"
          class="has-text-accent"
          size="is-large"
        ></b-icon>
      </div>
      <div class="column description">
        <p class="title has-text-primary">Limpeza > Vomito</p>
        <p class="subtitle has-text-info">Po dei PT</p>
      </div>
      <div class="column status">
        <b-icon
          pack="fas"
          icon="exclamation-circle"
          class="has-text-danger"
          size="is-medium"
        ></b-icon>
        <b-progress :value="20" size="is-small"></b-progress>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem"
};
</script>

<style lang="scss" scoped>
.category-icon {
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.description {
  .title {
    font-size: 1.25rem;
  }
  .subtitle {
    font-size: 1rem;
  }
}

.status {
  flex-grow: 0;
  // display: flex;
  justify-content: center;
  align-items: center;
}
</style>
