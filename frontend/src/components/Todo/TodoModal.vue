<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <b-icon
        pack="fas"
        :icon="todo.icon"
        class="has-text-accent"
        size="is-medium"
      ></b-icon>
      <p class="modal-card-title">Tarefa</p>
    </header>
    <section class="modal-card-body">
      <h1 class="title has-text-primary">{{ todo.category }}</h1>
      <p class="subtitle has-text-info">{{ todo.subcategory }}</p>

      <div class="columns is-centered">
        <div class="column is-6">
          <span>
            <b>Encarregados</b>
            <b-table :data="todo.people" hoverable>
              <template slot-scope="props">
                <b-table-column field="name" label="Nome" width="40">
                  {{ props.row.name }}
                </b-table-column>
                <b-table-column label="" width="40" numeric>
                  <b-button
                    type="is-danger"
                    icon-right="minus-circle"
                    rounded
                  />
                </b-table-column>
              </template>

              <template slot="empty">
                <section class="section">
                  <div class="content has-text-grey has-text-centered">
                    <p>
                      <b-icon icon="sad-cry" size="is-medium"> </b-icon>
                    </p>
                    <p>Nenhum encarregado.</p>
                  </div>
                </section>
              </template>
            </b-table>
          </span>
        </div>
        <div class="column is-6">
          <span>
            Status:
            <b
              :class="
                todo.people.length > 0 ? 'has-text-warning' : 'has-text-danger'
              "
            >
              {{ todo.people.length > 0 ? "Doing" : "Pending" }}
            </b>
          </span>
          <span>
            Descrição:
            <b>
              {{ todo.description }}
            </b>
          </span>
        </div>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">
        Close
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TodoModal",
  props: ["todo"]
};
</script>

<style lang="scss" scoped>
.modal-card {
  width: 60vw;
}

.modal-card-head {
  p {
    margin-left: 0.5rem;
  }
}

.modal-card-body {
  .title {
    font-size: 1.25rem;
    text-align: center;
  }
  .subtitle {
    font-size: 1rem;
    text-align: center;
  }

  .columns {
    .column:nth-child(1) {
      border-right: 1.5px rgba(0, 0, 0, 0.3) solid;
    }
    .column:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>
