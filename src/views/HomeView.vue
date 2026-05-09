<script setup>
import { RouterLink } from 'vue-router'

const skills = [
  {
    title: 'AI automation',
    desc: 'Workflows, integrations, and durable systems that reduce turnaround time in businesses.',
    icon: 'ai',
  },
  {
    title: 'Networks & systems',
    desc: 'Design, troubleshooting, and analysis for reliable connectivity and secure operations.',
    icon: 'net',
  },
  {
    title: 'Print & framing',
    desc: 'Quality photo framing, large-format printing, and finishing for homes, offices, and retail.',
    icon: 'frame',
  },
]
</script>

<template>
  <div class="relative overflow-hidden">
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_80%_-10%,rgba(201,162,39,0.18),transparent_55%),radial-gradient(ellipse_60%_45%_at_10%_60%,rgba(139,92,246,0.1),transparent_50%)]"
    />
    <div
      class="pointer-events-none absolute -right-24 top-40 h-64 w-64 rounded-full border border-gold-500/10 sm:h-80 sm:w-80"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -left-16 bottom-32 h-48 w-48 rounded-full border border-gold-400/5"
      aria-hidden="true"
    />

    <section class="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
      <p
        class="mb-4 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-gold-300/95"
      >
        <span class="h-1.5 w-1.5 rounded-full bg-gold-400 shadow-[0_0_12px_rgba(201,162,39,0.6)]" />
        Profile
      </p>
      <h1
        class="max-w-3xl bg-gradient-to-br from-white via-white to-gold-200/90 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl"
      >
        Intelligent automation, dependable networks and creative production.
      </h1>
      <p class="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
        I am Brian Waweru—a specialist across AI-driven automation, computer network analysis and physical
        print and framing. I build bridges between craft, software, and infrastructure.
      </p>
      <div class="mt-10 flex flex-wrap gap-3 sm:gap-4">
        <RouterLink
          to="/services"
          class="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-gold-900/40 ring-1 ring-gold-300/30 transition hover:brightness-110 sm:px-8"
        >
          View services
        </RouterLink>
        <RouterLink
          to="/portfolio"
          class="inline-flex items-center justify-center rounded-xl border border-gold-500/35 bg-gold-500/5 px-7 py-3.5 text-sm font-semibold text-gold-100 transition hover:border-gold-400/50 hover:bg-gold-500/10 sm:px-8"
        >
          Portfolio
        </RouterLink>
        <RouterLink
          to="/contact"
          class="inline-flex items-center justify-center rounded-xl border border-gold-500/35 bg-gold-500/5 px-7 py-3.5 text-sm font-semibold text-gold-100 transition hover:border-gold-400/50 hover:bg-gold-500/10 sm:px-8"
        >
          Get in touch
        </RouterLink>
      </div>
    </section>

    <section class="relative mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <div class="flex flex-wrap items-end gap-4">
        <h2 class="text-2xl font-bold text-white sm:text-3xl">Skillset</h2>
        <span
          class="hidden h-px flex-1 bg-gradient-to-r from-gold-500/40 to-transparent sm:block sm:min-w-[120px]"
          aria-hidden="true"
        />
      </div>
      <p class="mt-2 max-w-xl text-slate-400">
        A concise snapshot of what I deliver for clients and collaborators.
      </p>
      <ul class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="s in skills"
          :key="s.title"
          class="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f1624]/85 p-6 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-gold-500/35 hover:shadow-[0_20px_50px_-12px_rgba(201,162,39,0.15)]"
        >
          <div
            class="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold-400/10 blur-2xl transition group-hover:bg-gold-400/20"
            aria-hidden="true"
          />
          <div
            class="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-500/25 via-gold-600/10 to-violet-500/15 text-gold-200 ring-1 ring-gold-400/20"
          >
            <svg v-if="s.icon === 'frame'" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.75"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"
              />
            </svg>
            <svg v-else-if="s.icon === 'ai'" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.75"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.75"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </div>
          <h3 class="relative text-lg font-semibold text-white">{{ s.title }}</h3>
          <p class="relative mt-2 text-sm leading-relaxed text-slate-400">{{ s.desc }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>
