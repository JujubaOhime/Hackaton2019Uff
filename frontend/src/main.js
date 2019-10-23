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
  faMinus,
faSadCry,
faMinusCircle,
faBuilding,
faDoorClosed,
faTrash,
faCheckSquare,
faExclamationTriangle,
faBroom,
faBell,
faFirstAid,
faUserPlus,
faThermometerHalf,
faExclamation,
faPlusCircle,
faExclamationCircle,
faMapMarkerAlt,
faClock,
faChartPie,
faUser,
faShieldAlt,
faArrowLeft,
faHome,
faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faMinus,
faSadCry,
faMinusCircle,
faBuilding,
faDoorClosed,
faTrash,
faCheckSquare,
faExclamationTriangle,
faBroom,
faBell,
faFirstAid,
faUserPlus,
faThermometerHalf,
faExclamation,
faPlusCircle,
faExclamationCircle,
faMapMarkerAlt,
faClock,
faChartPie,
faUser,
faShieldAlt,
faArrowLeft,
faHome,
faTools
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
