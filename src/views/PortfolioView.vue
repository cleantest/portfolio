<script setup>
import { portfolioItems } from '../data/portfolio.js'
</script>

<template>
  <div class="relative mx-auto max-w-6xl min-w-0 px-4 py-16 sm:px-6 sm:py-24">
    <div
      class="pointer-events-none absolute left-0 top-32 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.14),transparent_65%)] blur-2xl"
      aria-hidden="true"
    />

    <header class="relative">
      <p
        class="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-gold-300/95"
      >
        <span class="h-1 w-8 rounded-full bg-gradient-to-r from-gold-600 to-gold-300" />
        Portfolio
      </p>
      <h1
        class="mt-3 max-w-3xl bg-gradient-to-r from-white to-gold-200/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl"
      >
        Brands & builds
      </h1>
      <p class="mt-4 max-w-2xl text-lg text-slate-400">
        Organisations I have worked with and what was delivered.
      </p>
    </header>

    <ul class="relative mt-14 flex flex-col gap-8 p-0">
      <li
        v-for="item in portfolioItems"
        :key="item.brand"
        class="list-none"
      >
        <article
          class="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f1624]/95 shadow-xl transition hover:border-gold-500/35 hover:shadow-[0_24px_48px_-16px_rgba(201,162,39,0.12)]"
        >
          <div class="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:gap-10">
            <div
              class="flex shrink-0 flex-row gap-4 sm:items-start lg:w-60 lg:flex-col lg:items-center lg:border-r lg:border-white/10 lg:pr-10"
            >
              <div
                class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500/30 to-gold-700/20 text-lg font-bold tracking-tight text-gold-100 ring-1 ring-gold-400/25 sm:h-[4.5rem] sm:w-[4.5rem] sm:text-xl"
                aria-hidden="true"
              >
                {{ item.initials }}
              </div>
              <div class="min-w-0 flex-1 lg:text-center">
                <h2 class="text-xl font-bold text-white sm:text-2xl">{{ item.brand }}</h2>
                <p class="mt-1 text-sm text-gold-200/70">{{ item.sector }}</p>
                <div class="mt-3 flex flex-wrap gap-2 lg:justify-center">
                  <span
                    v-for="tag in item.tags"
                    :key="tag"
                    class="rounded-full bg-gold-500/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-gold-200/90 ring-1 ring-gold-500/20"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>

            <div class="min-w-0 flex-1 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p class="text-sm font-medium uppercase tracking-wider text-slate-500">What I built</p>
              <p class="mt-2 text-slate-300">{{ item.summary }}</p>
              <ul class="mt-4 flex flex-col gap-2.5 text-sm leading-relaxed text-slate-400">
                <li
                  v-for="(line, i) in item.deliverables"
                  :key="i"
                  class="flex gap-3"
                >
                  <span
                    class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-gold-300 to-gold-600 shadow-[0_0_8px_rgba(201,162,39,0.35)]"
                    aria-hidden="true"
                  />
                  <span>{{ line }}</span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </li>
    </ul>

    <p class="relative mt-12 text-center text-sm text-slate-500">
      Want something similar?
      <RouterLink
        to="/contact"
        class="font-medium text-gold-300 underline decoration-gold-500/40 underline-offset-4 hover:text-gold-200"
      >
        Start a conversation
      </RouterLink>
    </p>
  </div>
</template>
