<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['send']);

const message = ref('');

const send = () => {
  emit('send', message.value);
  message.value = '';
};
</script>

<template>
  <div>
    <input type="text" data-test="messageText" v-model="message" />
    <button @click="send">send</button>
  </div>
</template>
