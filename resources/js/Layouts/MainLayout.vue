<template>
  <div class="min-h-screen bg-base-100" :data-theme="theme">
    <div class="navbar bg-base-200">
      <div class="flex-1">
        <Link href="/expenses" class="btn btn-ghost text-xl">ExpenseTracker</Link>
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <div tabindex="0" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-5 h-5 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM13 5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4h-4a4 4 0 01-4-4V5a2 2 0 012-2h4z">
              </path>
            </svg>
          </div>
          <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li @click="setTheme('light')"><a>Light</a></li>
            <li @click="setTheme('dark')"><a>Dark</a></li>
            <li @click="setTheme('cupcake')"><a>Cupcake</a></li>
            <li @click="setTheme('corporate')"><a>Corporate</a></li>
          </ul>
        </div>
      </div>
    </div>

    <main class="p-4">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';

const theme = ref('light');

const setTheme = (t) => {
  theme.value = t;
  localStorage.setItem('theme', t);
};

onMounted(() => {
  const saved = localStorage.getItem('theme');
  if (saved) theme.value = saved;
});
</script>