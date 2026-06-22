<script setup>
import { portfolioItems } from '../data/portfolio.js'
</script>

<template>
  <div class="relative mx-auto max-w-6xl min-w-0 px-4 py-16 sm:px-6 sm:py-24">
    <div
      class="pointer-events-none absolute left-0 top-32 h-72 w-72 rounded-full blur-2xl"
      style="background: radial-gradient(circle, rgba(217,164,65,0.28), transparent 65%);"
      aria-hidden="true"
    />

    <header class="relative">
      <p class="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em]" style="color: #B9803A;">
        <span class="h-1 w-8 rounded-full" style="background: linear-gradient(to right, #B9803A, #D9A441);" />
        Portfolio
      </p>
      <h1 class="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl" style="color: #241B0C;">
        Brands & builds
      </h1>
      <p class="mt-4 max-w-2xl text-lg" style="color: #5C5036;">
        Organisations I have worked with and what was delivered.
      </p>
    </header>

    <ul class="relative mt-14 flex flex-col gap-8 p-0">
      <li v-for="item in portfolioItems" :key="item.brand" class="list-none">
        <article
          class="group relative overflow-hidden rounded-2xl shadow-md transition"
          style="border: 1.5px solid rgba(201,162,79,0.35); background: #FBF6EA;"
        >
          <div class="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:gap-10">
            <div class="flex shrink-0 flex-row gap-4 sm:items-start lg:w-60 lg:flex-col lg:items-center lg:pr-10"
              style="border-right: none;">
              <div
                class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-lg font-bold tracking-tight sm:h-[4.5rem] sm:w-[4.5rem] sm:text-xl"
                style="background: linear-gradient(to bottom right, rgba(217,164,65,0.3), rgba(185,128,58,0.2)); color: #B9803A; box-shadow: inset 0 0 0 1px rgba(201,162,79,0.4);"
                aria-hidden="true"
              >{{ item.initials }}</div>
              <div class="min-w-0 flex-1 lg:text-center">
                <h2 class="text-xl font-bold sm:text-2xl" style="color: #241B0C;">{{ item.brand }}</h2>
                <p class="mt-1 text-sm" style="color: #B9803A;">{{ item.sector }}</p>
                <div class="mt-3 flex flex-wrap gap-2 lg:justify-center">
                  <span
                    v-for="tag in item.tags" :key="tag"
                    class="rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider"
                    style="background: rgba(217,164,65,0.15); color: #B9803A; box-shadow: inset 0 0 0 1px rgba(201,162,79,0.3);"
                  >{{ tag }}</span>
                </div>
              </div>
            </div>

            <div class="min-w-0 flex-1 border-t pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
              style="border-color: rgba(201,162,79,0.25);">
              <p class="text-sm font-medium uppercase tracking-wider" style="color: #8C7A55;">What I built</p>
              <p class="mt-2" style="color: #5C5036;">{{ item.summary }}</p>
              <ul class="mt-4 flex flex-col gap-2.5 text-sm leading-relaxed" style="color: #5C5036;">
                <li v-for="(line, i) in item.deliverables" :key="i" class="flex gap-3">
                  <span
                    class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style="background: linear-gradient(to bottom right, #D9A441, #B9803A); box-shadow: 0 0 6px rgba(217,164,65,0.4);"
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

    <p class="relative mt-12 text-center text-sm" style="color: #8C7A55;">
      Want something similar?
      <RouterLink to="/contact" class="font-medium underline underline-offset-4" style="color: #B9803A; text-decoration-color: rgba(185,128,58,0.4);">
        Start a conversation
      </RouterLink>
    </p>
  </div>
</template>
