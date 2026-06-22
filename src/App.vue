<script setup>
import AppNav from './components/AppNav.vue'
</script>

<template>
  <div class="relative flex min-h-svh min-w-0 flex-col" style="color: #241B0C;">
    <!-- Ambient amber glow orbs -->
    <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        class="absolute -right-[25%] -top-[20%] h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full animate-ambient blur-3xl"
        style="background: radial-gradient(circle at center, rgba(217,164,65,0.28), transparent 68%);"
      />
      <div
        class="absolute -bottom-[15%] -left-[20%] h-[min(65vw,480px)] w-[min(65vw,480px)] rounded-full animate-ambient-slow blur-3xl"
        style="background: radial-gradient(circle at center, rgba(185,128,58,0.18), transparent 65%);"
      />
    </div>

    <AppNav class="relative z-20" />
    <main class="relative z-10 min-w-0 flex-1">
      <RouterView />
    </main>
    <footer
      class="relative z-10 py-6 text-center text-sm"
      style="border-top: 1px solid rgba(201,162,79,0.35); background: rgba(244,236,214,0.6); color: #8C7A55;"
    >
      © {{ new Date().getFullYear() }} Mad Hive.Inc. All rights reserved.
    </footer>
  </div>
</template>
