<script setup>
import { reactive, ref } from 'vue'

const CONTACT_EMAIL = 'brianmuriuki475@gmail.com'
const FORMSUBMIT_AJAX = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: 'general',
  message: '',
})

const subjects = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'pricing', label: 'Pricing Inquiry' },
  { value: 'company', label: 'Company Inquiry' },
  { value: 'technical', label: 'Technical Inquiry' },
]

const status = ref('idle') // idle | sending | ok | error
const errorText = ref('')

async function onSubmit() {
  errorText.value = ''
  status.value = 'sending'

  const subjectLabel = subjects.find((s) => s.value === form.subject)?.label ?? form.subject
  const fullName = `${form.firstName} ${form.lastName}`.trim()

  const payload = {
    name: fullName || 'Website visitor',
    email: form.email,
    phone: form.phone,
    _subject: `Contact · ${subjectLabel}`,
    message: [
      `Subject: ${subjectLabel}`,
      `Phone: ${form.phone || '—'}`,
      '',
      form.message,
    ].join('\n'),
    _captcha: false,
  }

  try {
    const res = await fetch(FORMSUBMIT_AJAX, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) {
      throw new Error(data.error || data.message || 'Request failed')
    }
    status.value = 'ok'
    form.firstName = ''
    form.lastName = ''
    form.email = ''
    form.phone = ''
    form.subject = 'general'
    form.message = ''
  } catch (e) {
    status.value = 'error'
    errorText.value =
      e instanceof Error ? e.message : 'Something went wrong. You can also email me directly.'
  }
}
</script>

<template>
  <div class="mx-auto w-full max-w-6xl min-w-0 px-3 py-8 sm:px-6 sm:py-16">
    <div
      class="grid min-w-0 gap-8 rounded-2xl border border-gold-900/40 bg-[#0a0f1a]/90 p-4 shadow-2xl shadow-[0_24px_48px_-12px_rgba(201,162,39,0.08)] backdrop-blur-sm sm:rounded-3xl sm:p-6 sm:gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-14 lg:p-10"
    >
      <!-- Left: contact info -->
      <aside
        class="flex min-w-0 flex-col rounded-2xl bg-gradient-to-b from-[#121a2a] to-[#0f1624] p-5 ring-1 ring-gold-500/15 sm:p-8"
      >
        <h2 class="text-xl font-bold text-white">
          Contact
          <span class="text-gold-400/90">Information</span>
        </h2>
        <ul class="mt-8 flex flex-col gap-6 text-slate-300">
          <li class="flex items-start gap-4">
            <span class="mt-0.5 text-gold-400" aria-hidden="true">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.75"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </span>
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-slate-500">Phone</p>
              <p class="mt-1">+230 57246614</p>
            </div>
          </li>
          <li class="flex items-start gap-4">
            <span class="mt-0.5 text-gold-400" aria-hidden="true">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.75"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-slate-500">Email</p>
              <a
                class="mt-1 block break-all text-white underline decoration-gold-500/35 underline-offset-4 hover:decoration-gold-300"
                :href="`mailto:${CONTACT_EMAIL}`"
              >
                {{ CONTACT_EMAIL }}
              </a>
            </div>
          </li>
          <li class="flex items-start gap-4">
            <span class="mt-0.5 text-gold-400" aria-hidden="true">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.75"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-slate-500">Location</p>
              <p class="mt-1">Nairobi, Kenya</p>
            </div>
          </li>
        </ul>

        <div class="mt-8 flex flex-wrap gap-3 pt-2 sm:mt-auto sm:pt-10">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-gold-500/45 hover:text-gold-200"
            aria-label="X (Twitter)"
          >
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/brian-waweru-644145364/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-gold-500/45 hover:text-gold-200"
            aria-label="LinkedIn"
          >
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
          <a
            href="https://wa.me/23057246614"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-emerald-500/40 hover:text-emerald-300"
            aria-label="WhatsApp"
          >
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
          </a>
        </div>
      </aside>

      <!-- Right: form -->
      <div class="min-w-0">
        <h1
          class="text-xl font-bold leading-snug sm:text-2xl lg:text-3xl"
        >
          <span class="text-white">Any question or remarks?</span>
          <span class="mt-1 block text-gold-200/95 sm:mt-0 sm:inline sm:before:content-['\00a0']">
            Just write us a message!
          </span>
        </h1>

        <form class="mt-8 space-y-8 sm:mt-10 sm:space-y-10" @submit.prevent="onSubmit">
          <div class="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            <label class="block min-w-0">
              <span class="text-sm font-medium text-slate-200">First Name</span>
              <input
                v-model="form.firstName"
                type="text"
                name="firstName"
                autocomplete="given-name"
                placeholder="Judith"
                required
                class="mt-2 w-full min-w-0 max-w-full border-0 border-b border-white/25 bg-transparent py-2 text-white placeholder:text-slate-600 focus:border-gold-400 focus:outline-none focus:ring-0"
              />
            </label>
            <label class="block min-w-0">
              <span class="text-sm font-medium text-slate-200">Email</span>
              <input
                v-model="form.email"
                type="email"
                name="email"
                autocomplete="email"
                placeholder="judith@basingse.com"
                required
                class="mt-2 w-full min-w-0 max-w-full border-0 border-b border-white/25 bg-transparent py-2 text-white placeholder:text-slate-600 focus:border-gold-400 focus:outline-none focus:ring-0"
              />
            </label>
            <label class="block min-w-0">
              <span class="text-sm font-medium text-slate-200">Last Name</span>
              <input
                v-model="form.lastName"
                type="text"
                name="lastName"
                autocomplete="family-name"
                placeholder="Njeri"
                required
                class="mt-2 w-full min-w-0 max-w-full border-0 border-b border-white/25 bg-transparent py-2 text-white placeholder:text-slate-600 focus:border-gold-400 focus:outline-none focus:ring-0"
              />
            </label>
            <label class="block min-w-0">
              <span class="text-sm font-medium text-slate-200">Phone Number</span>
              <input
                v-model="form.phone"
                type="tel"
                name="phone"
                autocomplete="tel"
                placeholder="+1 012 3456 789"
                class="mt-2 w-full min-w-0 max-w-full border-0 border-b border-white/25 bg-transparent py-2 text-white placeholder:text-slate-600 focus:border-gold-400 focus:outline-none focus:ring-0"
              />
            </label>
          </div>

          <fieldset class="min-w-0">
            <legend class="text-sm font-medium text-slate-200">Select Subject?</legend>
            <div
              class="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2"
            >
              <label
                v-for="s in subjects"
                :key="s.value"
                class="flex min-w-0 cursor-pointer items-center gap-2 text-sm text-slate-300"
              >
                <input
                  v-model="form.subject"
                  type="radio"
                  name="subject"
                  :value="s.value"
                  class="h-4 w-4 border-white/30 bg-[#0f1624] text-gold-500 focus:ring-gold-400/50"
                />
                {{ s.label }}
              </label>
            </div>
          </fieldset>

          <label class="block">
            <span class="text-sm font-medium text-slate-200">Message</span>
            <textarea
              v-model="form.message"
              name="message"
              rows="4"
              placeholder="Write your message.."
              required
              class="mt-2 w-full min-w-0 max-w-full resize-y border-0 border-b border-white/25 bg-transparent py-2 text-white placeholder:text-slate-600 focus:border-gold-400 focus:outline-none focus:ring-0"
            />
          </label>

          <p v-if="status === 'ok'" class="text-sm text-emerald-400">
            Thanks—your message was sent. I will reply soon.
          </p>
          <p v-else-if="status === 'error'" class="text-sm text-rose-400">
            {{ errorText }}
            <span class="block text-slate-400">
              You can always reach me at
              <a class="underline" :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a
              >.
            </span>
          </p>

          <button
            type="submit"
            :disabled="status === 'sending'"
            class="w-full rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-amber-600 py-4 text-sm font-semibold uppercase tracking-wide text-navy-950 shadow-lg shadow-[0_12px_40px_-8px_rgba(201,162,39,0.25)] ring-1 ring-gold-300/25 transition enabled:hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {{ status === 'sending' ? 'Sending…' : 'Send Message' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
