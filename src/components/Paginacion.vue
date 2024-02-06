<template>
  <div>
    <!-- Header -->

    <nav class="navbar header">
      <div class="logo">PORSHE</div>
      <div class="navbar-links">
        <router-link to="/">Regresar a Landingpage</router-link>
      </div>
    </nav>


    <!-- Sidebar -->
    <aside v-show="sidebarVisible" class="sidebar">
      <div class="sidebar-content">
        <div>
          <router-link to="/home" class="link"> <b-icon icon="house-door" variant="white"></b-icon> Inicio</router-link>
        </div>
        <div>
          <router-link to="/formulario" class="link"> <b-icon icon="pencil-square" variant="white"></b-icon>
            Formulario</router-link>
        </div>
        <div>
          <router-link to="/tabla" class="link"><b-icon icon="table" variant="white"></b-icon> Tabla</router-link>
        </div>
      </div>
    </aside>

    <!-- Contenido principal de tu página -->
    <main :style="{ marginLeft: sidebarVisible ? '275px' : '0' }">
      <h1>Bienvenido, estas en la pagina principal </h1>

      <b-table id="my-table" :items="vehiculos" :per-page="perPage" :current-page="currentPage" :fields="fields"
        :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" label-sort-asc="" label-sort-desc="" small striped bordered
        responsive>
        <template #cell(marca)="data">
          <strong>{{ data.value }}</strong>
        </template>
        <template #cell(modelo)="data">
          <em>{{ data.value }}</em>
        </template>
      </b-table>

      <div class="overflow-auto">
        <b-pagination v-model="currentPage" :total-rows="vehiculos.length" :per-page="perPage"
          aria-controls="my-table"></b-pagination>
        <p class="mt-3">Current Page: {{ currentPage }}</p>
      </div>

    </main>
  </div>
</template>

<script>
import { ref } from 'vue';
import vehiculoService from "../services/vehiculo"

export default {
  setup() {
    const sidebarVisible = ref(true);

    return {
      sidebarVisible,
    };
  },

  data() {
    return {
      sortBy: "brand",
      sortDesc: false,
      perPage: 10,
      currentPage: 1,
      vehiculos: [],
      fields: [
        { key: "brand", label: "Marca", sortable: true },
        { key: "model", label: "Modelo", sortable: true },
        { key: "serie", label: "No. serie", sortable: true },
        { key: "year", label: "Año", sortable: true },
      ],
    };
  },
  mounted() {
    this.obtenerVehiculos();
  },
  methods: {
    async obtenerVehiculos() {
      try {
        const data = await vehiculoService.getVehiculos(
          parseInt(this.currentPage),
          parseInt(this.perPage),
          this.sortBy,
          this.sortDesc
        );
        this.vehiculos = data.content;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: white;
}

.header {
  background-color: #D64045;
  color: white;
  padding: 15px;
  z-index: 2;
  margin-top: 0;
  top: 0;
  position: fixed;
  width: 100%;
  margin-top: 0;
}

.link {
  color: white;
  text-decoration: none;
  font-size: 2rem;
  margin-bottom: 10px;
  display: block;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5em;
}

.navbar-links {
  display: flex;
  gap: 20px;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  padding: 10px;
}

.dropdown {
  position: relative;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.sidebar {
  background-color: #19323C;
  color: white;
  height: 100vh;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  transition: margin 0.5s;
  z-index: 1;
}

.sidebar-content {
  margin-top: 75px;
  padding: 15px;
}

main {
  margin-top: 75px;
  padding: 15px;
  transition: margin 0.5s;
}
</style>