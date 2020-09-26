<template>
  <div class="container">
    <h1>To do list</h1>

    <div>
      <div class="card text-white bg-primary mb-3" style="max-width: 15rem">
        <div class="card-header">Tareas pendientes</div>
        <div class="card-body">
          <p class="card-text"></p>
          <p>{{ tareasTotales - tareasCompletadas }}</p>
        </div>
      </div>
      <div class="card text-white bg-success mb-3" style="max-width: 15rem">
        <div class="card-header">Tareas completadas</div>
        <div class="card-body">
          <p class="card-text"></p>
          <p>{{ tareasCompletadas }}</p>
        </div>
      </div>
    </div>

    <div class="my-3">
      <button @click="getTareas(1)" class="btn btn-info mx-2">Ver todas</button>
      <button @click="getTareas(2)" class="btn btn-info mx-2">
        Ver completadas
      </button>
      <button @click="getTareas(3)" class="btn btn-info mx-2">
        Ver Pendientes
      </button>
      <button @click="eliminarTareas()" class="btn btn-danger mx-2">
        Eliminar completadas
      </button>
    </div>

    <ul>
      <li v-for="(item, index) in tareas" :key="index" class="list-group-item">
        <input
          type="checkbox"
          :checked="item.Estado"
          @click="cambiarEstado(item), getTareas()"
          class="mr-3"
        />
        {{ item.Nombre }}
        <router-link :to="{ name: 'Editar', params: { id: item.id } }">
          <button class="btn btn-warning ml-4">Editar</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { Line } from 'vue-chartjs'

export default {
  name: "Inicio",
  data() {
    return {};
  },
  created() {
    this.getTareas();
  },
  computed: {
    ...mapState(["tareas", "tareasCompletadas", "tareasTotales"]),
  },
  methods: {
    ...mapActions(["getTareas", "eliminarTareas", "cambiarEstado"]),
  },
};
</script>