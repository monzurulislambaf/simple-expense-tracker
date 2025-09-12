<template>
  <div>
    <nav class="flex gap-4 items-center p-4 bg-gray-200">
      <ul>
        <li>
          <Link :href="route('home')">Home</Link>
        </li>
        <li>
          <Link :href="route('about')">About</Link>
        </li>
        <li>
          <Link :href="route('contact')">Contact</Link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
</script>

<style lang="scss" scoped>

</style>
