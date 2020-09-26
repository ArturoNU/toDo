import Vue from "vue";
import Vuex from "vuex";
import { auth, db } from "../firebase";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tareas: [],
        tarea: { Nombre: "", id: "" },
        tareasTotales: 0,
        tareasCompletadas: 0,
    },
    mutations: {
        setTareas(state, payload) {
            state.tareas = payload;
        },
        setEliminarTarea(state, payload) {
            state.tareas = state.tareas.filter((item) => item.id !== payload);
        },
        setTarea(state, payload) {
            state.tarea = payload;
        },
    },
    actions: {
        getTareas({ commit, state }, estado) {
            const tareas = [];
            state.tareasCompletadas = 0;
            state.tareasTotales = 0;
            db.collection("tareas")
                .get()
                .then((res) => {
                    res.forEach((doc) => {
                        console.log(doc.id);
                        console.log(doc.data());
                        let tarea = doc.data();
                        tarea.id = doc.id;
                        state.tareasTotales++;
                        if (tarea.Estado) {
                            state.tareasCompletadas++;
                        }
                        switch (estado) {
                            case 2:
                                if (tarea.Estado) tareas.push(tarea);
                                break;
                            case 3:
                                if (!tarea.Estado) tareas.push(tarea);
                                break;

                            default:
                                tareas.push(tarea);
                                break;
                        }
                    });
                });
            commit("setTareas", tareas);
        },
        agregarTarea({ commit, state }, nombreTarea) {
            db.collection("tareas")
                .add({
                    Nombre: nombreTarea,
                    Estado: false,
                })
                .then((doc) => {
                    router.push({ name: "Inicio" });
                })
                .catch((error) => console.log(error));
        },
        eliminarTareas({ commit, state }) {
            state.tareas.forEach((tarea) => {
                console.log(tarea.Estado);
                if (tarea.Estado === true) {
                    db.collection("tareas")
                        .doc(tarea.id)
                        .delete()
                        .then(() => {
                            commit("setEliminarTarea", tarea.id);
                        })
                        .catch((error) => console.log(error));
                }
            });
        },
        cambiarEstado({ commit, state }, tarea) {

            db.collection("tareas")
                .doc(tarea.id)
                .update({
                    Estado: !tarea.Estado,
                })
                .then(() => {
                    //router.push({ name: "Inicio" });
                })
                .catch((error) => console.log(error));
        },
        getTarea({ commit, state }, id) {
            db.collection("tareas")
                .doc(id)
                .get()
                .then((doc) => {
                    let tarea = doc.data();
                    tarea.id = doc.id;
                    commit("setTarea", tarea);
                })
                .catch((error) => console.log(error));
        },
        editarTarea({ commit, state }, tarea) {
            db.collection("tareas")
                .doc(tarea.id)
                .update({
                    Nombre: tarea.Nombre,
                })
                .then(() => {
                    router.push({ name: "Inicio" });
                })
                .catch((error) => console.log(error));
        },
    },
    modules: {},
});