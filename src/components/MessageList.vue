<script setup lang="ts">
defineProps<{
  messages: Array<string>;
}>();
</script>

<template>
  <ul>
    <li v-for="(message, i) in messages" :key="i">{{ message }}</li>
  </ul>
</template>
