import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ContactView from '../views/ContactView.vue'
import PricingView from '../views/PricingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'Home' } },
    { path: '/services', name: 'services', component: ServicesView, meta: { title: 'Services' } },
    { path: '/portfolio', name: 'portfolio', component: PortfolioView, meta: { title: 'Portfolio' } },
    { path: '/prices', name: 'prices', component: PricingView, meta: { title: 'Pricing' } },
    { path: '/contact', name: 'contact', component: ContactView, meta: { title: 'Contact' } },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title
    ? `${to.meta.title} · Mad Hive.Inc`
    : 'Mad Hive.Inc'
})

export default router
