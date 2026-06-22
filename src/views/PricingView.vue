<script setup>
const webPlans = [
  {
    name: 'Starter Website',
    price: '',
    per: null,
    popular: false,
    tagline: 'Perfect for individuals and small businesses.',
    features: [
      'Up to 5 pages',
      'Mobile responsive',
      'Contact form',
      'Google Maps integration',
      'WhatsApp integration',
      'Basic SEO',
      '2 rounds of revisions',
    ],
  },
  {
    name: 'Business Website',
    price: '',
    per: null,
    popular: true,
    tagline: 'For established businesses and organizations.',
    features: [
      'Up to 15 pages',
      'Custom UI design',
      'Blog/news management',
      'Advanced contact forms',
      'Social media integration',
      'SEO optimization',
      'Performance optimization',
      '30 days support',
    ],
  },
  {
    name: 'Custom Web Application',
    price: '',
    per: null,
    popular: false,
    tagline: 'For businesses requiring custom functionality.',
    features: [
      'Authentication & user accounts',
      'Dashboards',
      'Database integration',
      'Admin panel',
      'API integrations',
      'Reporting & analytics',
      'Security hardening',
      'Deployment assistance',
    ],
  },
]

const consultingPlans = [
  {
    name: 'Technical Review',
    price: '',
    per: null,
    popular: false,
    tagline: 'Single consultation session.',
    features: [
      '1-hour consultation',
      'Requirements review',
      'Technology recommendations',
      'Written summary',
    ],
  },
  {
    name: 'Project Advisory',
    price: '',
    per: null,
    popular: true,
    tagline: 'For businesses planning a project.',
    features: [
      'Architecture review',
      'Technology stack recommendations',
      'Security considerations',
      'Deployment strategy',
      'Cost estimation',
    ],
  },
  {
    name: 'Technical Partnership',
    price: '',
    per: '',
    popular: false,
    tagline: 'Ongoing consulting support.',
    features: [
      'Monthly strategy meetings',
      'Technical guidance',
      'Architecture reviews',
      'Vendor recommendations',
      'Priority support',
      'Project oversight',
    ],
  },
]

const networkPlans = [
  {
    name: 'Small Office Setup',
    price: '',
    per: null,
    popular: false,
    features: [
      'Router configuration',
      'Wi-Fi setup',
      'Basic security configuration',
      'Device connectivity testing',
      'Documentation',
    ],
  },
  {
    name: 'Business Network Deployment',
    price: '',
    per: null,
    popular: true,
    features: [
      'Network design',
      'VLAN planning',
      'Wireless optimization',
      'Security hardening',
      'User access management',
      'Network documentation',
    ],
  },
  {
    name: 'Managed Network Support',
    price: '',
    per: '',
    popular: false,
    features: [
      'Monitoring & maintenance',
      'Performance optimization',
      'Security reviews',
      'Troubleshooting',
      'Monthly reports',
      'Remote support',
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
      Pricing
    </p>
    <h1 class="relative mt-3 text-4xl font-bold tracking-tight sm:text-5xl" style="color: #241B0C;">
      Simple, transparent pricing
    </h1>
    <p class="relative mt-4 max-w-2xl text-lg" style="color: #5C5036;">
      No surprises — pick the plan that fits your stage.
    </p>

    <!-- Web Development -->
    <h2 class="relative mt-16 text-2xl font-bold sm:text-3xl" style="color: #241B0C;">Web Development</h2>
    <p class="mt-2" style="color: #5C5036;">From simple sites to full custom applications.</p>

    <div class="relative mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="plan in webPlans"
        :key="plan.name"
        class="group relative flex flex-col overflow-hidden rounded-2xl p-8 shadow-md transition"
        :style="plan.popular
          ? 'background: #FBF6EA; border: 1.5px solid rgba(185,128,58,0.55);'
          : 'background: #FBF6EA; border: 1.5px solid rgba(201,162,79,0.3);'"
      >
        <div
          class="pointer-events-none absolute inset-x-0 top-0 h-1 transition"
          :class="plan.popular ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'"
          style="background: linear-gradient(to right, transparent, #D9A441, transparent);"
          aria-hidden="true"
        />
        <span
          v-if="plan.popular"
          class="absolute right-6 top-6 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
          style="background: rgba(217,164,65,0.2); color: #B9803A; box-shadow: inset 0 0 0 1px rgba(201,162,79,0.45);"
        >Popular</span>
        <h3 class="text-lg font-semibold" style="color: #241B0C;">{{ plan.name }}</h3>
        <p class="mt-1 text-xs" style="color: #8C7A55;">{{ plan.tagline }}</p>
        <p class="mt-3 text-3xl font-bold" style="color: #B9803A;">{{ plan.price }}</p>
        <ul class="mt-6 flex flex-1 flex-col gap-3">
          <li v-for="item in plan.features" :key="item" class="flex gap-3 text-sm leading-relaxed" style="color: #5C5036;">
            <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style="background: linear-gradient(to bottom right, #D9A441, #B9803A);" />
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Technical Consulting -->
    <h2 class="relative mt-16 text-2xl font-bold sm:text-3xl" style="color: #241B0C;">Technical Consulting</h2>
    <p class="mt-2" style="color: #5C5036;">Expert guidance from a single session to ongoing partnership.</p>

    <div class="relative mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="plan in consultingPlans"
        :key="plan.name"
        class="group relative flex flex-col overflow-hidden rounded-2xl p-8 shadow-md transition"
        :style="plan.popular
          ? 'background: #FBF6EA; border: 1.5px solid rgba(185,128,58,0.55);'
          : 'background: #FBF6EA; border: 1.5px solid rgba(201,162,79,0.3);'"
      >
        <div
          class="pointer-events-none absolute inset-x-0 top-0 h-1 transition"
          :class="plan.popular ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'"
          style="background: linear-gradient(to right, transparent, #D9A441, transparent);"
          aria-hidden="true"
        />
        <span
          v-if="plan.popular"
          class="absolute right-6 top-6 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
          style="background: rgba(217,164,65,0.2); color: #B9803A; box-shadow: inset 0 0 0 1px rgba(201,162,79,0.45);"
        >Popular</span>
        <h3 class="text-lg font-semibold" style="color: #241B0C;">{{ plan.name }}</h3>
        <p class="mt-1 text-xs" style="color: #8C7A55;">{{ plan.tagline }}</p>
        <p class="mt-3 text-3xl font-bold" style="color: #B9803A;">
          {{ plan.price }}<span v-if="plan.per" class="text-base font-normal" style="color: #8C7A55;">{{ plan.per }}</span>
        </p>
        <ul class="mt-6 flex flex-1 flex-col gap-3">
          <li v-for="item in plan.features" :key="item" class="flex gap-3 text-sm leading-relaxed" style="color: #5C5036;">
            <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style="background: linear-gradient(to bottom right, #D9A441, #B9803A);" />
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Network Solutions -->
    <h2 class="relative mt-20 text-2xl font-bold sm:text-3xl" style="color: #241B0C;">Network Solutions</h2>
    <p class="mt-2" style="color: #5C5036;">Straightforward pricing for every stage of your network journey.</p>

    <div class="relative mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="plan in networkPlans"
        :key="plan.name"
        class="group relative flex flex-col overflow-hidden rounded-2xl p-8 shadow-md transition"
        :style="plan.popular
          ? 'background: #FBF6EA; border: 1.5px solid rgba(185,128,58,0.55);'
          : 'background: #FBF6EA; border: 1.5px solid rgba(201,162,79,0.3);'"
      >
        <div
          class="pointer-events-none absolute inset-x-0 top-0 h-1 transition"
          :class="plan.popular ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'"
          style="background: linear-gradient(to right, transparent, #D9A441, transparent);"
          aria-hidden="true"
        />
        <span
          v-if="plan.popular"
          class="absolute right-6 top-6 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
          style="background: rgba(217,164,65,0.2); color: #B9803A; box-shadow: inset 0 0 0 1px rgba(201,162,79,0.45);"
        >Popular</span>
        <h2 class="text-lg font-semibold" style="color: #241B0C;">{{ plan.name }}</h2>
        <p class="mt-3 text-3xl font-bold" style="color: #B9803A;">
          {{ plan.price }}<span v-if="plan.per" class="text-base font-normal" style="color: #8C7A55;">{{ plan.per }}</span>
        </p>
        <ul class="mt-6 flex flex-1 flex-col gap-3">
          <li v-for="item in plan.features" :key="item" class="flex gap-3 text-sm leading-relaxed" style="color: #5C5036;">
            <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style="background: linear-gradient(to bottom right, #D9A441, #B9803A);" />
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
