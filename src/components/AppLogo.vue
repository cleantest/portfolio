<script setup>
import logo from '../assets/tuyt.jpg'
</script>

<template>
  <img
    :src="logo"
    alt="Site logo"
    v-bind="$attrs"
    class="h-full w-full max-h-full max-w-full rounded-xl object-cover drop-shadow-[0_0_14px_rgba(201,162,39,0.35)]"
  />
</template>
