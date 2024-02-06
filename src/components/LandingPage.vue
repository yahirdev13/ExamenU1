<template>
  <div class="landing-page">
    <div class="hero-section">
      <img src="../assets/banner.jpg" alt="Porsche Banner" class="hero-image">
      <h1>Descubre el Mundo de Porsche</h1>
      <p>Explora la elegancia y el rendimiento de los autos Porsche.</p>
      <router-link to="/home" class="btn">Ir a página principal</router-link>
    </div>

    <div class="feature-section">
      <div class="feature">
        <img src="../assets/porshe911.jpg" alt="Porsche 911 GT3 RS" class="feature-image">
        <h2>Porshe 911 GT3 RS</h2>
        <p>Una leyenda que ha perdurado a lo largo de décadas, es mucho más que un simple automóvil
          deportivo; es una obra maestra de ingeniería y diseño que ha definido el estándar de los deportivos de lujo.
          Desde su debut en la década de 1960, el 911 ha mantenido su esencia distintiva, combinando elegancia atemporal
          con un rendimiento excepcional.</p>
      </div>

      <div class="feature">
        <img src="../assets/caiman.jpg" alt="Porsche Feature 2" class="feature-image">
        <h2>Porsche 718 Cayman</h2>
        <p>Un testimonio de la excelencia en la ingeniería alemana, representa la perfecta síntesis
          entre elegancia y rendimiento dinámico. Este automóvil deportivo de dos plazas cautiva a los amantes de la
          conducción con su diseño cautivador y su potente desempeño en la carretera.</p>
      </div>
    </div>

    <!-- Sección de Características Adicionales -->
    <div class="extra-section">
      <h2>Más Características Sobresalientes</h2>
      <p>Descubre las innovaciones de Porsche que marcan la diferencia. Desde sistemas de sonido de alta gama hasta
        detalles de comodidad que elevan la experiencia de conducción, estas características adicionales demuestran el
        compromiso de Porsche con la excelencia y el lujo en cada detalle.</p>
    </div>

    <!-- Sección de Historia de Porsche -->
    <div class="history-section">
      <h2>La Fascinante Historia de Porsche</h2>
      <p>La historia de Porsche es un viaje lleno de pasión, innovación y éxito. Desde los primeros diseños de Ferdinand
        Porsche hasta la creación del legendario 911, cada hito en la historia de Porsche ha sido impulsado por una
        dedicación inquebrantable a la calidad y el rendimiento excepcional.</p>
    </div>

    <!-- Sección de Innovaciones Tecnológicas -->
    <div class="innovation-section">
      <h2>Explorando Innovaciones Tecnológicas</h2>
      <p>Porsche ha sido pionero en tecnologías que definen el futuro de la movilidad. Desde sistemas de propulsión
        híbrida hasta avances en conectividad, estas innovaciones tecnológicas no solo mejoran la eficiencia, sino que
        también ofrecen una experiencia de conducción más emocionante y conectada con el mundo moderno.</p>
    </div>

    <footer class="footer-section">
      <p>&copy; 2024 Porsche. Todos los derechos reservados.</p>
    </footer>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.landing-page {
  text-align: center;
}

.hero-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.5em;
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  border-radius: 10px;

}

.feature-section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px;
  padding-top: 0%;
}

.feature {
  flex: 1;
  margin: 0 20px;
  text-align: left;
}

.feature-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.extra-section,
.history-section,
.innovation-section {
  background-color: #f9f9f9;
  padding: 50px;
  text-align: center;
  margin-top: 30px;
}

.extra-section h2,
.history-section h2,
.innovation-section h2 {
  font-size: 2em;
  margin-bottom: 20px;
}

.extra-section p,
.history-section p,
.innovation-section p {
  font-size: 1.5em;
  color: #555;
}

.footer-section {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.footer-section p {
  margin: 0;
}
</style>