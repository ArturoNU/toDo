<template>
  <div>
    <h1>Agregar tarea</h1>
    <form @submit.prevent="agregarTarea(nombre)">
      <input type="text" v-model="nombre" />
      <button type="submit">Agregar</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Agregar",
  methods: {
    ...mapActions(["agregarTarea"]),
  },
};
</script>