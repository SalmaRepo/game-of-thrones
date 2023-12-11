import Vue from "vue";

import Houses from "../components/Houses.vue";
import Persons from "../components/Persons.vue";
import Quotes from "../components/Quotes.vue";
import House from "../components/House.vue";
import Person from "../components/Person.vue";
import Home from "../components/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

//creating routes

const routes = [
  { path: "/", component: Home },
  { path: "/houses", component: Houses },
  { path: "/persons", component: Persons },
  { path: "/quotes", component: Quotes },
  { path: "/housemembers/:slug", component: House, props: true },
  { path: "/person/:name", component: Person, props: true },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
