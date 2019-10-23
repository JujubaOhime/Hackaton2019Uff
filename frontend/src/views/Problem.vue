<template>
  <div class="problem1">
    <NavbarMobileTop
      title="Selecione a Categoria"
      v-if="mobile"
    ></NavbarMobileTop>
    <section class="section problem">
      <div class="container">
        <h1 class="title header">
          <font-awesome-icon
            icon="arrow-left"
            @click="goBack"
          ></font-awesome-icon>
          {{ titles[status - 1] }}
        </h1>
        <!-- Choose Category -->
        <div v-if="status == 1" class="fade-in">
          <div
            class="info box"
            v-for="(category, key) in categories"
            :key="key"
            @click="
              () => {
                selectOption('category', key);
              }
            "
          >
            <span class="info-icon">
              <font-awesome-icon :icon="category.icon"></font-awesome-icon>
            </span>
            <span class="info-desc">
              {{ category.name }}
            </span>
          </div>
        </div>
        <div v-if="status == 2" class="fade-in">
          <div
            class="info box"
            v-for="(sub, key) in categories[selections.category].subs"
            :key="key"
            @click="
              () => {
                selectOption('subcategory', key);
              }
            "
          >
            <span class="info-icon">
              <font-awesome-icon :icon="sub.icon"></font-awesome-icon>
            </span>
            <span class="info-desc">
              {{ sub.name }}
            </span>
          </div>
        </div>
        <div v-if="status == 3" class="fade-in">
          <div
            class="info box"
            v-for="(info, key) in locales"
            :key="key"
            @click="
              () => {
                selectOption('campus', key);
              }
            "
          >
            <span class="info-icon">
              <font-awesome-icon icon="building"></font-awesome-icon>
            </span>
            <span class="info-desc"> {{ info.campus }} - {{ info.unit }} </span>
          </div>
        </div>
        <div v-if="status == 4" class="fade-in">
          <div
            class="info box"
            v-for="(info, key) in locales[selections.campus].rooms"
            :key="key"
            @click="
              () => {
                selectOption('room', key);
              }
            "
          >
            <span class="info-icon">
              <font-awesome-icon icon="building"></font-awesome-icon>
            </span>
            <span class="info-desc"> {{ info.name }} </span>
          </div>
        </div>
        <div v-if="status == 5" class="fade-in">
          <b-field class="comment">
            <b-input
              maxlength="512"
              type="textarea"
              v-model="selections.comment"
              placeholder="Digite seu comentário..."
            ></b-input>
          </b-field>
          <b-button id="report" @click="submitProblem" type="is-success"
            >Reportar</b-button
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavbarMobileTop from "@/components/Navbar/NavbarMobileTop";

export default {
  components: { NavbarMobileTop },
  data() {
    return {
      /*
        1 - Choose Category
        2 - Choose Subcategory
        3 - Choose Campus
        4 - Choose Room
        5 - Comment
      */
      status: 1,
      titles: [
        "Escolha uma categoria",
        "Escolha uma subcategoria",
        "Escolha um campus",
        "Escolha uma sala",
        "Deseja fazer algum comentário?"
      ],
      selections: {
        category: undefined,
        subcategory: undefined,
        campus: undefined,
        room: undefined,
        comment: undefined
      }
    };
  },
  computed: {
    locales() {
      return this.$store.getters.locales;
    },
    categories() {
      return this.$store.getters.categories;
    },
    mobile() {
      return this.$store.getters.mobile;
    }
  },
  methods: {
    selectOption(option, key) {
      console.log(option, key);
      this.selections[option] = key;
      console.log(this.selections);
      this.status++;
    },

    goBack() {
      this.status--;
      if (this.status == 0) {
        this.$router.push({ name: "home" });
      }
    },

    goToLink(link) {
      this.$router.push({ name: link });
    },

    submitProblem() {
      let todo = {
        category: this.categories[this.selections.category].name,
        subcategory: this.categories[this.selections.category].subs[
          this.selections.subcategory
        ].name,
        icon: this.categories[this.selections.category].icon,
        description: this.selections.comment,
        priority: 80,
        people: []
      };
      console.log(todo);

      this.$store.commit("addTodo", {
        todo: todo,
        locale: this.selections.campus
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";

.header {
  svg {
    &:hover {
      cursor: pointer;
    }
  }
}

.info {
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 60vw;
  margin: 0 auto 0.5rem !important;

  &:hover {
    cursor: pointer;
    background-color: #f6f6f6;
  }

  .info-icon {
    color: $accent;
    flex-basis: 3rem;

    svg {
      display: block;
      font-size: 2rem;
      margin: 0 auto;
    }
  }

  .info-desc {
    flex-grow: 1;
    text-align: center;
    color: $primary;
    font-size: 1.5rem;
    font-weight: 600;
  }
}

#report {
  display: flex;
  margin: 0 auto;
}

.comment {
  width: 50vw;
  display: block;
  margin: 0 auto;
}
</style>
