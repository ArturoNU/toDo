import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Inicio",
        component: function() {
            return import ( /* webpackChunkName: "about" */ "../views/Inicio.vue");
        },
    },
    {
        path: "/agregar",
        name: "Agregar",
        component: function() {
            return import ( /* webpackChunkName: "about" */ "../views/Agregar.vue");
        },
    },
    {
        path: "/editar",
        name: "Editar",
        component: function() {
            return import ( /* webpackChunkName: "about" */ "../views/Editar.vue");
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;