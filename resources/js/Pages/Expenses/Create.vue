<!-- resources/js/Pages/Expenses/Create.vue -->
<template>
  <div class="p-6 max-w-lg mx-auto">
    <h1 class="text-2xl font-bold mb-6">Add New Expense</h1>

    <form @submit.prevent="submit" class="space-y-4">
      <div>
        <label class="label">
          <span class="label-text">Title</span>
        </label>
        <input v-model="form.title" type="text" class="input input-bordered w-full" required />
        <div v-if="form.errors.title" class="text-red-500 text-sm mt-1">{{ form.errors.title }}</div>
      </div>

      <div>
        <label class="label">
          <span class="label-text">Amount ($)</span>
        </label>
        <input v-model="form.amount" type="number" step="0.01" class="input input-bordered w-full" required />
        <div v-if="form.errors.amount" class="text-red-500 text-sm mt-1">{{ form.errors.amount }}</div>
      </div>

      <div>
        <label class="label">
          <span class="label-text">Date</span>
        </label>
        <input v-model="form.date" type="date" class="input input-bordered w-full" required />
        <div v-if="form.errors.date" class="text-red-500 text-sm mt-1">{{ form.errors.date }}</div>
      </div>

      <div>
        <label class="label">
          <span class="label-text">Description (Optional)</span>
        </label>
        <textarea v-model="form.description" class="textarea textarea-bordered w-full" rows="3"></textarea>
      </div>

      <div class="flex gap-2">
        <button type="submit" class="btn btn-primary" :disabled="form.processing">
          Save Expense
        </button>
        <Link href="/expenses" class="btn">Cancel</Link>
      </div>
    </form>
  </div>
</template>

<script setup>
import { Link, useForm } from '@inertiajs/vue3';
import MainLayout from '../../Layouts/MainLayout.vue';

defineOptions({ layout: MainLayout });
const form = useForm({
  title: '',
  amount: '',
  date: '',
  description: '',
});

const submit = () => {
  form.post('/expenses', {
    onSuccess: () => form.reset(),
  });
};
</script>