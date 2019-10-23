import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "LBT - Home"
    }
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "LBT - About"
    }
  },
  {
    path: "/localeChoose",
    name: "localeChoose",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LocaleChoose.vue"),
    meta: {
      title: "LBT - Escolha de Campus"
    }
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),
    meta: {
      title: "LBT - Dash"
    }
  },
  {
    path: "/problem",
    name: "problem",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Problem.vue")
  },
  {
    path: "/todoList",
    name: "todoList",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TodoList.vue")
  },
  {
    path: "/task",
    name: "task",
    component: () => import(/* webpackChunkName: "about" */ "../views/Task.vue")
  },
  {
    path: "/taskPeople",
    name: "taskPeople",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TaskPeople.vue")
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
