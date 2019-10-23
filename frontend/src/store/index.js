// Vue
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    mobile: window.innerWidth <= 700,
    locales: [
      {
        campus: "Praia Vermelha",
        unit: "IC",
        todos: [
          {
            category: "Limpeza",
            subcategory: "Rotina",
            icon: "broom",
            description: "Nenhum",
            priority: 80,
            people: [
              {
                name: "João Almeida"
              }
            ]
          },
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
                name: "Thomas Lopes"
              },
              {
                name: "Amelia Guerreiro"
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
                name: "Thomas Gouveia"
              },
              {
                name: "Felipe Simões"
              },
              {
                name: "Gabriel Caetano"
              }
            ]
          }
        ]
      },
      {
        campus: "Praia Vermelha",
        unit: "Bloco H",
        todos: [
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
        ]
      }
    ],
    localeSelected: 0
  },
  mutations: {
    change(state, mobile) {
      state.mobile = mobile;
    },
    changeLocaleSelected(state, localeSelected) {
      state.localeSelected = localeSelected;
    }
  },
  getters: {
    mobile: state => state.mobile,
    locales: state => state.locales,
    localeSelected: state => state.locales[state.localeSelected]
  }
});
