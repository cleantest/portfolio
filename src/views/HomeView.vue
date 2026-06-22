<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const flipped = ref(null)
const combFieldEl = ref(null)

const skills = [
  {
    title: 'Custom Website Development',
    desc: 'Building responsive, scalable, and secure web applications with modern frontend and backend technologies.',
    video: null, // replace with: new URL('../assets/web.mp4', import.meta.url).href
    poster: new URL('../assets/huy.jpg', import.meta.url).href,
  },
  {
    title: 'IT Systems & Network Solutions',
    desc: 'Understanding of security fundamentals, secure web practices, threat awareness, and system hardening concepts.',
    video: null, // replace with: new URL('../assets/cyber.mp4', import.meta.url).href
    poster: new URL('../assets/uy.jpg', import.meta.url).href,
  },
  {
    title: 'Technical Consultations',
    desc: 'Helping businesses make informed technology decisions through practical advice and system planning.',
    video: null, // replace with: new URL('../assets/ai.mp4', import.meta.url).href
    poster: new URL('../assets/bv.jpg', import.meta.url).href,
  },
]

function toggle(index) {
  flipped.value = flipped.value === index ? null : index
}

function cellNumber(i) {
  return String(i + 1).padStart(2, '0')
}

// Builds a true hexagon tessellation as an SVG lattice behind the hero.
// Recomputed on resize so it always fills the viewport edge-to-edge.
function hexPoints(cx, cy, r) {
  const pts = []
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 180) * (60 * i - 30)
    pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`)
  }
  return pts.join(' ')
}

function buildComb() {
  const el = combFieldEl.value
  if (!el) return

  const w = el.clientWidth || window.innerWidth
  const h = el.clientHeight || window.innerHeight
  const size = 58
  const hexW = size * Math.sqrt(3)
  const hexH = size * 2
  const vertStep = hexH * 0.75

  const cols = Math.ceil(w / hexW) + 2
  const rows = Math.ceil(h / vertStep) + 2

  let svg = `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">`

  for (let row = -1; row < rows; row++) {
    for (let col = -1; col < cols; col++) {
      const xOffset = row % 2 === 0 ? 0 : hexW / 2
      const cx = col * hexW + xOffset
      const cy = row * vertStep
      const glowClass = Math.random() > 0.92 ? ' comb-cell-glow' : ''
      const delay = (Math.random() * 6).toFixed(2)
      svg += `<polygon class="comb-cell${glowClass}" style="animation-delay:${delay}s" points="${hexPoints(cx, cy, size)}" />`
    }
  }
  svg += `</svg>`
  el.innerHTML = svg
}

let resizeObserver
onMounted(() => {
  buildComb()
  resizeObserver = new ResizeObserver(() => buildComb())
  if (combFieldEl.value) resizeObserver.observe(combFieldEl.value)
})
onUnmounted(() => {
  if (resizeObserver) resizeObserver.disconnect()
})
</script>

<template>
  <div class="hive-page relative overflow-hidden">
    <!-- Honeycomb lattice background -->
    <div class="comb-field" ref="combFieldEl" aria-hidden="true" />
    <div
      class="pointer-events-none absolute top-[-10%] right-[-10%] h-[60%] w-[60%] rounded-full bg-[radial-gradient(circle,rgba(217,164,65,0.28),transparent_70%)]"
      aria-hidden="true"
    />

    <!-- Profile section -->
    <section class="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">

      <p class="comb-eyebrow">
        <span class="hex-dot" aria-hidden="true" />
        Nairobi · Build Studio
      </p>

      <h1 class="comb-headline max-w-3xl">
        Every cell built<br class="hidden sm:block" />
        with <em>purpose</em>.
      </h1>
      <p class="comb-sub mt-6 max-w-2xl">
        We're a small hive of builders — web platforms, automation, and network
        infrastructure, each one a cell in the same comb. Structured. Deliberate.
        Built to hold weight.
      </p>
      <div class="mt-10 flex flex-wrap gap-3 sm:gap-4">
        <RouterLink
          to="/services"
          class="comb-btn comb-btn-primary"
        >
          View services
        </RouterLink>
        <RouterLink
          to="/portfolio"
          class="comb-btn comb-btn-ghost"
        >
          Portfolio
        </RouterLink>
        <RouterLink
          to="/contact"
          class="comb-btn comb-btn-ghost"
        >
          Get in touch
        </RouterLink>
      </div>
    </section>

    <!-- Skills cards -->
    <section class="skills-section">
      <p class="comb-section-label">— What's inside the comb</p>
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
              <span class="cell-tag" aria-hidden="true">{{ cellNumber(i) }}</span>
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
/* ===== Light hive tokens ===== */
.hive-page {
  --paper:      #FBF6EA;
  --cell:       #EDE2C3;
  --amber:      #D9A441;
  --amber-deep: #B9803A;
  --amber-glow: #F2B84B;
  --line:       #C9A24F;
  --deep:       #241B0C;
  --ink-soft:   #5C5036;
  background: var(--paper);
  min-height: 100vh;
}

/* ===== Honeycomb lattice ===== */
.comb-field {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}
.comb-field :deep(svg) { width: 100%; height: 100%; }
.comb-field :deep(.comb-cell) {
  fill: var(--cell);
  stroke: var(--line);
  stroke-width: 1.1;
  opacity: 0.55;
  transition: fill 0.4s ease, opacity 0.4s ease;
}
.comb-field :deep(.comb-cell-glow) { animation: comb-hum 7s ease-in-out infinite; }

@keyframes comb-hum {
  0%, 100% { opacity: 0.3; }
  50%       { opacity: 0.65; }
}

/* ===== Eyebrow ===== */
.comb-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--amber-deep);
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}
.comb-eyebrow .hex-dot {
  width: 14px; height: 14px;
  clip-path: polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);
  background: var(--amber);
}

/* ===== Headline ===== */
.comb-headline {
  position: relative; z-index: 1;
  font-weight: 600;
  font-size: clamp(2.25rem, 5.5vw, 3.75rem);
  line-height: 1.08;
  letter-spacing: -0.01em;
  color: var(--deep);
}
.comb-headline em {
  font-style: italic;
  font-weight: 500;
  color: var(--amber-deep);
}

/* ===== Sub ===== */
.comb-sub {
  position: relative; z-index: 1;
  font-size: 1.125rem;
  line-height: 1.65;
  color: var(--ink-soft);
}

/* ===== Buttons ===== */
.comb-btn {
  position: relative; z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  padding: 0.875rem 1.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.comb-btn-primary {
  background: linear-gradient(135deg, var(--amber-glow), var(--amber-deep));
  color: var(--deep);
  box-shadow: 0 8px 24px -8px rgba(185,128,58,0.45);
}
.comb-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px -8px rgba(185,128,58,0.55);
}
.comb-btn-ghost {
  border: 1.5px solid var(--line);
  color: var(--amber-deep);
  background: rgba(217,164,65,0.06);
}
.comb-btn-ghost:hover {
  background: rgba(217,164,65,0.14);
  transform: translateY(-2px);
}

/* ===== Section label ===== */
.comb-section-label {
  position: relative; z-index: 1;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-bottom: 1.5rem;
}

.skills-section {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem 5rem;
  position: relative;
  z-index: 1;
}
.skills-row { display: flex; flex-direction: column; gap: 1rem; align-items: stretch; }

@media (min-width: 640px) {
  .skills-section { padding: 0 1.5rem 5rem; }
  .skills-row { flex-direction: row; gap: 1.5rem; align-items: stretch; }
}

/* ===== Flip card ===== */
.flip-wrapper {
  flex: 0 0 auto;
  width: 100%;
  min-width: 0;
  min-height: 15rem;
  aspect-ratio: 4 / 3;
  cursor: pointer;
  perspective: 1000px;
  position: relative;
}
@media (min-width: 640px) {
  .flip-wrapper { flex: 1 1 0; width: auto; min-height: 0; aspect-ratio: unset; height: 220px; }
}

.flip-inner {
  position: relative; width: 100%; height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.55s cubic-bezier(0.4,0.2,0.2,1);
}
.flip-inner.flipped { transform: rotateY(180deg); }

.flip-face {
  position: absolute; inset: 0;
  border-radius: 1rem;
  border: 1.5px solid rgba(201,162,79,0.35);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  overflow: hidden;
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
}

/* Front: warm dark cell (keeps imagery legible, hive-branded) */
.flip-front { background: var(--deep); }
.flip-wrapper:hover .flip-front {
  border-color: rgba(242,184,75,0.7);
  box-shadow: inset 0 0 40px rgba(242,184,75,0.12), 0 16px 36px -14px rgba(185,128,58,0.35);
}

/* Back: warm paper */
.flip-back {
  background: radial-gradient(circle at 50% 40%, rgba(242,184,75,0.18), transparent 65%), var(--cell);
  border-color: rgba(201,162,79,0.5);
  transform: rotateY(180deg);
  display: flex; align-items: center; justify-content: center;
  padding: 1.5rem; text-align: center;
}

.card-video {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover; display: block;
}

.card-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(36,27,12,0.88) 0%, rgba(36,27,12,0.22) 55%, transparent 100%);
  transition: background 0.4s ease;
}
.flip-wrapper:hover .card-overlay {
  background: linear-gradient(to top, rgba(36,27,12,0.78) 0%, rgba(217,164,65,0.2) 55%, rgba(242,184,75,0.08) 100%);
}

.cell-tag {
  position: absolute; top: 0.9rem; left: 0.9rem; z-index: 2;
  width: 30px; height: 30px;
  clip-path: polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);
  background: linear-gradient(160deg, var(--amber-glow), var(--amber-deep));
  display: flex; align-items: center; justify-content: center;
  font-size: 0.7rem; font-weight: 700; color: var(--deep);
  box-shadow: 0 4px 10px -3px rgba(0,0,0,0.4);
}

.card-bottom {
  position: absolute; bottom: 0; left: 0; right: 0; z-index: 2;
  padding: 0.85rem 1rem;
  display: flex; align-items: flex-end; justify-content: space-between; gap: 0.5rem;
}
.card-bottom h3 {
  color: #fff; font-size: 0.9rem; font-weight: 600;
  margin: 0; line-height: 1.3;
  text-shadow: 0 1px 4px rgba(0,0,0,0.6);
}
@media (min-width: 640px) { .card-bottom h3 { font-size: 1rem; } }

.plus-btn {
  width: 2rem; height: 2rem; border-radius: 50%;
  border: 1.5px solid rgba(201,162,79,0.7);
  background: rgba(36,27,12,0.45);
  color: #EDE2C3;
  font-size: 1.25rem; line-height: 1;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; flex-shrink: 0;
  transition: background 0.2s, border-color 0.2s;
}
.plus-btn:hover { background: rgba(217,164,65,0.25); border-color: var(--amber); }

.flip-back p { color: var(--ink-soft); font-size: 0.875rem; line-height: 1.65; margin: 0; }
</style>
