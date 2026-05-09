<script setup>
import AppNav from './components/AppNav.vue'
</script>

<template>
  <div class="relative flex min-h-svh min-w-0 flex-col text-slate-100">
    <!-- Warm / violet ambient accents (lively, stays behind content) -->
    <div
      class="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        class="absolute -right-[25%] -top-[20%] h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.14),transparent_68%)] animate-ambient blur-2xl"
      />
      <div
        class="absolute -bottom-[15%] -left-[20%] h-[min(65vw,480px)] w-[min(65vw,480px)] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,188,92,0.08),transparent_65%)] animate-ambient-slow blur-2xl"
      />
      <div
        class="absolute left-1/2 top-1/3 h-[40vh] w-[90vw] max-w-3xl -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.06),transparent_70%)] blur-3xl"
      />
    </div>

    <AppNav class="relative z-20" />
    <main class="relative z-10 min-w-0 flex-1">
      <RouterView />
    </main>
    <footer
      class="relative z-10 border-t border-gold-900/50 bg-black/25 py-6 text-center text-sm text-gold-200/40"
    >
      © {{ new Date().getFullYear() }} Mad Hive.Inc. All rights reserved.
    </footer>
  </div>
</template>
