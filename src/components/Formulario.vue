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
      <h1>Bienvenido, estas en el formulario </h1>
      <b-form @submit.prevent="submitForm">

        <!-- Marca -->
        <b-form-group id="marcaFormGroup" label="Marca" label-for="marcaInput" :state="marcaValid ? true : false"
          :invalid-feedback="marcaValid ? '' : 'Marca debe ser alfanumérica'">
          <b-form-input id="marcaInput" v-model="marca" required></b-form-input>
        </b-form-group>

        <!-- Modelo -->
        <b-form-group id="modeloFormGroup" label="Modelo" label-for="modeloInput" :state="modeloValid ? true : false"
          :invalid-feedback="modeloValid ? '' : 'Modelo debe ser alfanumérico'">
          <b-form-input id="modeloInput" v-model="modelo" required></b-form-input>
        </b-form-group>

        <!-- Año de fabricación -->
        <b-form-group id="anioFormGroup" label="Año de Fabricación" label-for="anioInput"
          :state="anioValid ? true : false"
          :invalid-feedback="anioValid ? '' : 'Año de fabricación no puede ser mayor al actual'">
          <b-form-input id="anioInput" type="number" v-model="anio" required></b-form-input>
        </b-form-group>

        <!-- Número de serie -->
        <b-form-group id="serieFormGroup" label="Número de Serie" label-for="serieInput"
          :state="serieValid ? true : false"
          :invalid-feedback="serieValid ? '' : 'Número de serie no cumple el formato XXXX000-00XX '">
          <b-form-input id="serieInput" v-model="serie" required></b-form-input>
        </b-form-group>

        <!-- Botón de enviar -->
        <b-button type="submit" variant="primary">Enviar</b-button>

        <b-alert v-if="showAlert" variant="success" dismissible @dismiss="showAlert = false">
          Formulario enviado con éxito.
        </b-alert>
      </b-form>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios'; // Importar Axios

export default {
  setup() {
    const sidebarVisible = ref(true);
    const showAlert = ref(false); // Nueva variable de estado para la alerta

    return {
      sidebarVisible,
      showAlert,
    };
  },

  data() {
    return {
      marca: '',
      modelo: '',
      anio: null,
      serie: '',
      marcaValid: true,
      modeloValid: true,
      anioValid: true,
      serieValid: true,
    };
  },
  methods: {
    async submitForm() {
      // Validaciones
      this.marcaValid = /^[a-zA-Z0-9]+$/.test(this.marca);
      this.modeloValid = /^[a-zA-Z0-9]+$/.test(this.modelo);
      this.anioValid = this.anio <= new Date().getFullYear();
      this.serieValid = /^([a-zA-Z]{4}\d{3}-\d{2}[a-zA-Z]{2})$/.test(this.serie);

      console.log('Datos antes de enviar:', {
        marca: this.marca,
        modelo: this.modelo,
        anio: this.anio,
        serie: this.serie,
      });

      // Si todas las validaciones son exitosas, puedes enviar el formulario
      if (this.marcaValid && this.modeloValid && this.anioValid && this.serieValid) {
        try {
          const response = await axios.post('http://localhost:8080/api/vehiculos', {
            brand: this.marca,
            model: this.modelo,
            year: this.anio,
            serie: this.serie,
          }, {
            headers: {
              'Content-Type': 'application/json',
            },
          });

          // Manejar la respuesta del backend, por ejemplo, puedes imprimir en la consola
          console.log('Respuesta del backend:', response.data);

          // Mostrar la alerta y limpiar los campos después de enviar el formulario
          this.showAlert = true;
          this.clearForm();

          // También puedes realizar otras acciones después de enviar el formulario

        } catch (error) {
          console.error('Error al enviar el formulario:', error);
        }
      } else {
        console.log('Formulario inválido. Revise los campos.');
      }
    },
    clearForm() {
      // Limpiar los campos del formulario
      this.marca = '';
      this.modelo = '';
      this.anio = null;
      this.serie = '';
      this.marcaValid = true;
      this.modeloValid = true;
      this.anioValid = true;
      this.serieValid = true;
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