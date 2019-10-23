// Vue
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBroom,
  faExclamationCircle,
  faPlusCircle,
  faUser,
  faArrowLeft,
  faHome,
  faExclamationTriangle,
  faChartPie,
  faCheckSquare,
  faUserPlus,
  faExclamation,
  faBell
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faBroom,
  faExclamationCircle,
  faPlusCircle,
  faUser,
  faArrowLeft,
  faHome,
  faExclamationTriangle,
  faChartPie,
  faCheckSquare,
  faUserPlus,
  faExclamation,
  faBell
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// Buefy
import Buefy from "buefy";
Vue.use(Buefy, {
  defaultIconComponent: "font-awesome-icon",
  defaultIconPack: "fas"
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
