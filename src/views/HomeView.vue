<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const flipped = ref(null)

const skills = [
  {
    title: 'Fullstack web development',
    desc: 'Building responsive, scalable, and secure web applications with modern frontend and backend technologies.',
    video: null, // replace with: new URL('../assets/web.mp4', import.meta.url).href
    poster: new URL('../assets/huy.jpg', import.meta.url).href,
  },
  {
    title: 'Cyber security',
    desc: 'Understanding of security fundamentals, secure web practices, threat awareness, and system hardening concepts.',
    video: null, // replace with: new URL('../assets/cyber.mp4', import.meta.url).href
    poster: new URL('../assets/uy.jpg', import.meta.url).href,
  },
  {
    title: 'AI automation',
    desc: 'Creating automated workflows, integrations, and AI-assisted systems to improve efficiency and reduce manual work.',
    video: null, // replace with: new URL('../assets/ai.mp4', import.meta.url).href
    poster: new URL('../assets/bv.jpg', import.meta.url).href,
  },
]

function toggle(index) {
  flipped.value = flipped.value === index ? null : index
}
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

    <!-- Profile section -->
    <section class="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
      <p class="mb-4 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-gold-300/95">
        <span class="h-1.5 w-1.5 rounded-full bg-gold-400 shadow-[0_0_12px_rgba(201,162,39,0.6)]" />
        Profile
      </p>
      <h1
        class="max-w-3xl bg-gradient-to-br from-white via-white to-gold-200/90 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl"
      >
        Intelligent automation, dependable networks and creative production.
      </h1>
      <p class="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
        We are a tech firm established in 2026, specializing in AI-driven automation, computer network analysis and physical
        print and framing. We build bridges between craft, software, and infrastructure.
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

    <!-- Skills cards -->
    <section class="skills-section">
      <div class="skills-row">
        <div
          v-for="(s, i) in skills"
          :key="s.title"
          class="flip-wrapper"
          @click="toggle(i)"
        >
          <div class="flip-inner" :class="{ flipped: flipped === i }">
            <!-- Front -->
            <div class="flip-face flip-front">
              <video
                v-if="s.video"
                :src="s.video"
                :poster="s.poster"
                class="card-video"
                autoplay
                muted
                loop
                playsinline
              />
              <img v-else :src="s.poster" :alt="s.title" class="card-video" />
              <div class="card-overlay" />
              <div class="card-bottom">
                <h3>{{ s.title }}</h3>
                <button class="plus-btn" aria-label="Learn more">+</button>
              </div>
            </div>
            <!-- Back -->
            <div class="flip-face flip-back">
              <p>{{ s.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.skills-section {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.5rem 5rem;
}

.skills-row {
  display: flex;
  gap: 1.5rem;
}

/* Flip card */
.flip-wrapper {
  flex: 1;
  height: 220px;
  cursor: pointer;
  perspective: 1000px;
}

.flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1);
}

.flip-inner.flipped {
  transform: rotateY(180deg);
}

.flip-face {
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  border: 1px solid rgba(201, 162, 39, 0.25);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  overflow: hidden;
}

.flip-front {
  background: #0a0f1a;
}

.flip-back {
  background: rgba(201, 162, 39, 0.08);
  border-color: rgba(201, 162, 39, 0.45);
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.75rem;
  text-align: center;
}

/* Video / poster fills the front */
.card-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Dark gradient so text is readable */
.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 55%, transparent 100%);
}

/* Bottom bar: title left, + right */
.card-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem 1.1rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.5rem;
}

.card-bottom h3 {
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
  text-shadow: 0 1px 4px rgba(0,0,0,0.6);
}

.plus-btn {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1.5px solid rgba(201, 162, 39, 0.7);
  background: rgba(0, 0, 0, 0.45);
  color: #e8d5a3;
  font-size: 1.25rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.2s, border-color 0.2s;
}

.plus-btn:hover {
  background: rgba(201, 162, 39, 0.2);
  border-color: rgba(201, 162, 39, 1);
}

.flip-back p {
  color: #cbd5e1;
  font-size: 0.9rem;
  line-height: 1.65;
  margin: 0;
}

@media (max-width: 768px) {
  .skills-row {
    flex-direction: column;
  }

  .flip-wrapper {
    height: 180px;
  }
}
</style>
