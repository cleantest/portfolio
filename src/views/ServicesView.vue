<script setup>
const services = [
  {
    title: 'AI automation',
    tag: 'Systems',
    points: [
      'Automating repetitive tasks with scripts, APIs, and AI tools.',
      'Connecting spreadsheets, inboxes, and apps into one flow.',
      'Practical guardrails: validation, logging, and human review where it matters.',
    ],
  },
  {
    title: 'Computer network analyst',
    tag: 'Infrastructure',
    points: [
      'LAN/Wi‑Fi design, performance checks, and fault isolation.',
      'Security-minded review of devices, segmentation, and access.',
      'Clear documentation so teams can operate with confidence.',
    ],
  },
  {
    title: 'Photo framing & printing',
    tag: 'Production',
    points: [
      'Custom framing, mounting, and presentation finishes.',
      'Large-format and photo-quality prints for events and décor.',
      'Colour-accurate workflows from file to physical output.',
    ],
  },
]
</script>

<template>
  <div class="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
    <div
      class="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.12),transparent_65%)] blur-2xl"
      aria-hidden="true"
    />

    <p
      class="relative inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-gold-300/95"
    >
      <span class="h-1 w-8 rounded-full bg-gradient-to-r from-gold-600 to-gold-300" />
      Services
    </p>
    <h1
      class="relative mt-3 bg-gradient-to-r from-white to-gold-200/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl"
    >
      What we offer
    </h1>
    <p class="relative mt-4 max-w-2xl text-lg text-slate-400">
      Three focused practice areas—each backed by hands-on delivery and attention to detail.
    </p>

    <div class="relative mt-16 grid gap-8 lg:grid-cols-3">
      <article
        v-for="(svc, i) in services"
        :key="svc.title"
        class="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0f1624]/95 p-8 shadow-xl transition hover:border-gold-500/30 hover:shadow-[0_24px_48px_-16px_rgba(201,162,39,0.12)]"
      >
        <div
          class="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent opacity-0 transition group-hover:opacity-100"
          aria-hidden="true"
        />
        <span
          class="absolute right-6 top-6 rounded-full bg-gold-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-200 ring-1 ring-gold-400/20"
        >
          {{ svc.tag }}
        </span>
        <span
          class="bg-gradient-to-br from-gold-500/25 to-transparent bg-clip-text text-5xl font-bold text-transparent"
        >
          {{ String(i + 1).padStart(2, '0') }}
        </span>
        <h2 class="mt-4 text-xl font-bold text-white sm:text-2xl">{{ svc.title }}</h2>
        <ul class="mt-6 flex flex-1 flex-col gap-3 text-slate-400">
          <li v-for="p in svc.points" :key="p" class="flex gap-3 text-sm leading-relaxed">
            <span
              class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-gold-300 to-gold-600 shadow-[0_0_8px_rgba(201,162,39,0.45)]"
            />
            {{ p }}
          </li>
        </ul>
      </article>
    </div>
  </div>
</template>
