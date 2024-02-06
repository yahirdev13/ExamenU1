
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const routes = [

  {
    path: '/',
    component: () => import('../components/LandingPage.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/Layout.vue')
  },
  {
    path: '/formulario',
    name: 'formulario',
    component: () => import('../components/Formulario.vue')
  },
  {
    path: '/tabla',
    name: 'tabla',
    component: () => import('../components/Paginacion.vue')
  }

]

const router = new VueRouter({ routes, });

export default router;