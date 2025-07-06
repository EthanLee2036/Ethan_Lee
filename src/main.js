// main.js
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

// Import components
import Home from './components/Home.vue'
import AboutLab from './components/AboutLab.vue'
import ResearchThemes from './components/ResearchThemes.vue'
import Publications from './components/Publications.vue'
import Presentations from './components/Presentations.vue'
import Portfolio from './components/Portfolio.vue'
import Team from './components/Team.vue'
import Contact from './components/Contact.vue'

// Router configuration
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutLab },
  { path: '/research', component: ResearchThemes },
  { path: '/publications', component: Publications },
  { path: '/presentations', component: Presentations },
  { path: '/portfolio', component: Portfolio },
  { path: '/team', component: Team },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

