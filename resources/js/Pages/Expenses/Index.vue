<!-- resources/js/Pages/Expenses/Index.vue -->
<template>
  <div class="p-6 max-w-4xl mx-auto">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Expense Tracker</h1>
      <Link :href="route('expenses.create')" class="btn btn-primary">
        Add Expense
      </Link>
    </div>

    <div v-if="$page.props.flash.success" class="alert alert-success mb-4 shadow-lg">
      {{ $page.props.flash.success }}
    </div>

    <div class="stats shadow mb-6">
      <div class="stat">
        <div class="stat-title">Total Expenses</div>
        <div class="stat-value text-green-600">${{ total.toFixed(2) }}</div>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="table table-zebra w-full">
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="expense in expenses" :key="expense.id">
            <td>{{ expense.title }}</td>
            <td class="text-red-600 font-semibold">${{ expense.amount }}</td>
            <td>{{ new Date(expense.date).toLocaleDateString() }}</td>
            <td>{{ expense.description || '—' }}</td>
            <td class="space-x-2">
              <Link :href="route('expenses.edit', expense.id)" class="btn btn-xs btn-outline">
                Edit
              </Link>
              <button @click="destroy(expense.id)" class="btn btn-xs btn-error">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import MainLayout from '../../Layouts/MainLayout.vue';

defineOptions({ layout: MainLayout });
defineProps({
  expenses: Array,
  total: Number,
});

const destroy = (id) => {
  if (confirm('Are you sure?')) {
    router.delete(route('expenses.destroy', id));
  }
};
</script>