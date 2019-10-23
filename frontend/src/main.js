// Vue
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//  Vuex
import Vuex from "vuex";
Vue.use(Vuex);
import { store } from "./store/index";

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
  faBell,
  faShieldAlt,
  faFirstAid,
  faTools,
  faThermometerHalf,
  faMapMarkerAlt,
  faBuilding,
  faDoorClosed,
  faMinusCircle
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
  faBell,
  faBroom,
  faShieldAlt,
  faFirstAid,
  faTools,
  faThermometerHalf,
  faMapMarkerAlt,
  faBuilding,
  faDoorClosed,
  faMinusCircle
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
  store,
  render: h => h(App)
}).$mount("#app");
