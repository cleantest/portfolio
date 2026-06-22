<script setup>
const services = [
  {
    title: 'Custom Websites & Web Applications',
    tag: 'Development',
    points: [
'Business websites and portfolio sites',
'Client portals and dashboards',
'Fast, responsive, mobile-first design',
'Deployment, hosting, and ongoing support',
    ],
  },
  {
    title: 'Technical Consulting',
    tag: 'Systems',
    points: [
      'Software and infrastructure recommendations.',
      'Technology strategy and planning.',
      'Security and best-practice reviews',
      'Performance optiization',
    ],
  },
  {
    title: 'IT Systems & Network Solutions',
    tag: 'Computer networks',
    points: [
      'Small business network setup.',
      'Wi-Fi optimization and troubleshooting.',
      'Device and user access management.',
    ],
  },
]
</script>
<template>
  <div class="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
    <div
      class="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full blur-2xl"
      style="background: radial-gradient(circle, rgba(217,164,65,0.25), transparent 65%);"
      aria-hidden="true"
    />

    <p class="relative inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em]" style="color: #B9803A;">
      <span class="h-1 w-8 rounded-full" style="background: linear-gradient(to right, #B9803A, #D9A441);" />
      Services
    </p>
    <h1 class="relative mt-3 text-4xl font-bold tracking-tight sm:text-5xl" style="color: #241B0C;">
      What we offer
    </h1>
    <p class="relative mt-4 max-w-2xl text-lg" style="color: #5C5036;">
      Three focused practice areas—each backed by hands-on delivery and attention to detail.
    </p>

    <div class="relative mt-16 grid gap-8 lg:grid-cols-3">
      <article
        v-for="(svc, i) in services"
        :key="svc.title"
        class="group relative flex flex-col overflow-hidden rounded-2xl p-8 shadow-md transition"
        style="background: #FBF6EA; border: 1.5px solid rgba(201,162,79,0.35);"
        @mouseover="$el.style"
      >
        <div
          class="pointer-events-none absolute inset-x-0 top-0 h-1 opacity-0 transition group-hover:opacity-100"
          style="background: linear-gradient(to right, transparent, #D9A441, transparent);"
          aria-hidden="true"
        />
        <span
          class="absolute right-6 top-6 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
          style="background: rgba(217,164,65,0.15); color: #B9803A; box-shadow: inset 0 0 0 1px rgba(201,162,79,0.35);"
        >
          {{ svc.tag }}
        </span>
        <span class="text-5xl font-bold" style="color: rgba(185,128,58,0.3);">
          {{ String(i + 1).padStart(2, '0') }}
        </span>
        <h2 class="mt-4 text-xl font-bold sm:text-2xl" style="color: #241B0C;">{{ svc.title }}</h2>
        <ul class="mt-6 flex flex-1 flex-col gap-3">
          <li v-for="p in svc.points" :key="p" class="flex gap-3 text-sm leading-relaxed" style="color: #5C5036;">
            <span
              class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
              style="background: linear-gradient(to bottom right, #D9A441, #B9803A); box-shadow: 0 0 6px rgba(217,164,65,0.5);"
            />
            {{ p }}
          </li>
        </ul>
      </article>
    </div>
  </div>
</template>
