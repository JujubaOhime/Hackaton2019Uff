// Vue
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    mobile: window.innerWidth <= 700,
    categories: [
      {
        name: "Limpeza",
        icon: "broom",
        subs: [
          {
            name: "Rotina",
            icon: "broom"
          },
          {
            name: "Pontual",
            icon: "broom"
          }
        ]
      },
      {
        name: "Manutenção",
        icon: "tools",
        subs: [
          {
            name: "Conserto",
            icon: "tools"
          },
          {
            name: "Troca de Equipamento",
            icon: "toolbox"
          },
          {
            name: "Queda de Recursos (Energia, Rede...)",
            icon: "lightbulb"
          }
        ]
      },
      {
        name: "Segurança",
        icon: "shield-alt",
        subs: [
          {
            name: "Rotina",
            icon: "shield-alt"
          },
          {
            name: "Pontual",
            icon: "shield-alt"
          }
        ]
      },
      {
        name: "Emergência",
        icon: "first-aid",
        subs: [
          {
            name: "Rotina",
            icon: "first-aid"
          },
          {
            name: "Pontual",
            icon: "first-aid"
          }
        ]
      },
      {
        name: "Ambiente",
        icon: "thermometer-half",
        subs: [
          {
            name: "Rotina",
            icon: "thermometer-half"
          },
          {
            name: "Pontual",
            icon: "thermometer-half"
          }
        ]
      }
    ],
    locales: [
      {
        campus: "Praia Vermelha",
        unit: "IC",
        rooms: [
          {
            name: "Sala de Estudos",
            icon: ""
          },
          {
            name: "Lab 301",
            icon: ""
          }
        ],
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
            description: "Vômito",
            priority: 80,
            people: []
          },
          {
            category: "Segurança",
            subcategory: "Assalto",
            icon: "shield-alt",
            description: "Nenhuma",
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
            description: "Incidente Hospitalar",
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
        rooms: [
          {
            name: "Sala 402",
            icon: ""
          },
          {
            name: "Sala 403",
            icon: ""
          },

          {
            name: "Sala 404",
            icon: ""
          },

          {
            name: "Sala 405",
            icon: ""
          }
        ],
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
    },
    addTodo(state, payload) {
      let todo = payload.todo;
      let locale = payload.locale;
      state.locales[locale].todos = [...state.locales[locale].todos, todo];
    }
  },
  getters: {
    mobile: state => state.mobile,
    categories: state => state.categories,
    locales: state => state.locales,
    localeSelected: state => state.locales[state.localeSelected]
  }
});
