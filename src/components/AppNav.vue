<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppLogo from './AppLogo.vue'

const route = useRoute()
const menuOpen = ref(false)

const links = [
  { to: '/', label: 'Home', name: 'home' },
  { to: '/services', label: 'Services', name: 'services' },
  { to: '/portfolio', label: 'Portfolio', name: 'portfolio' },
  { to: '/prices', label: 'Pricing', name: 'prices' },

  { to: '/contact', label: 'Contact', name: 'contact' },

]

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)

function linkIcon(name) {
  if (name === 'home') {
    return 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  }
  if (name === 'services') {
    return 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
  }
  if (name === 'portfolio') {
    return 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
  }
  return 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z'
}
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-gold-900/50 bg-[#050810]/90 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md"
  >
    <div
      class="mx-auto flex max-w-6xl items-center justify-between gap-3 px-3 py-3 sm:gap-4 sm:px-6 sm:py-4"
    >
      <RouterLink
        to="/"
        class="flex min-w-0 max-w-[65%] items-center gap-2 outline-none ring-gold-400/40 focus-visible:ring-2 sm:max-w-none sm:gap-3"
      >
        <AppLogo class="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
        <span
          class="truncate text-base font-semibold tracking-tight text-white sm:text-xl"
        >
          Mad Hive.Inc
        </span>
      </RouterLink>

      <!-- Desktop -->
      <nav class="hidden items-center gap-1 md:flex lg:gap-2" aria-label="Primary">
        <RouterLink
          v-for="link in links"
          :key="`desk-${link.to}`"
          :to="link.to"
          class="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 transition hover:bg-gold-500/10 hover:text-gold-200 lg:px-4 lg:text-sm"
          :class="{
            'bg-gradient-to-r from-gold-500/20 to-gold-600/10 text-gold-200 ring-1 ring-gold-400/25':
              route.name === link.name,
          }"
        >
          <span
            class="text-gold-400/80"
            aria-hidden="true"
          >
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.75"
                :d="linkIcon(link.name)"
              />
            </svg>
          </span>
          {{ link.label }}
        </RouterLink>
      </nav>

      <!-- Mobile menu toggle -->
      <button
        type="button"
        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gold-500/25 bg-gold-500/5 text-gold-200 transition hover:bg-gold-500/15 md:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-nav"
        aria-label="Menu"
        @click="menuOpen = !menuOpen"
      >
        <svg v-if="!menuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile panel -->
    <div
      v-show="menuOpen"
      id="mobile-nav"
      class="border-t border-gold-900/40 bg-[#050810]/98 md:hidden"
    >
      <nav class="mx-auto flex max-w-6xl flex-col gap-1 px-3 py-3 sm:px-6" aria-label="Primary mobile">
        <RouterLink
          v-for="link in links"
          :key="`mob-${link.to}`"
          :to="link.to"
          class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wider text-slate-300 transition hover:bg-gold-500/10 hover:text-gold-200"
          :class="{
            'bg-gradient-to-r from-gold-500/20 to-transparent text-gold-200 ring-1 ring-gold-400/20':
              route.name === link.name,
          }"
        >
          <span class="text-gold-400/90" aria-hidden="true">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.75"
                :d="linkIcon(link.name)"
              />
            </svg>
          </span>
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
