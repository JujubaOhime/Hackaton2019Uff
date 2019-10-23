import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue")
  },
  {
    path: "/problem1",
    name: "problem1",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Problem1.vue")
  },

  {
    path: "/problem2",
    name: "problem2",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Problem2.vue")
  },

  {
    path: "/problem3",
    name: "problem3",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Problem3.vue")
  },

  {
    path: "/problem4",
    name: "problem4",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Problem4.vue")
  },
  {
    path: "/problem5",
    name: "problem5",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Problem5.vue")
  },
  {
    path: "/problem6",
    name: "problem6",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Problem6.vue")
  },
  {
    path: "/problem7",
    name: "problem7",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Problem7.vue")
  },
  {
    path: "/problem8",
    name: "problem8",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Problem8.vue")
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

export default router;
