<script setup lang="ts">
import { ref } from 'vue';
import MessageForm from './components/MessageForm.vue';
import MessageList from './components/MessageList.vue';

const messages = ref<string[]>([]);

const handleSend = (msg: string) => {
  messages.value.push(msg);
};
</script>

<template>
  <MessageForm @send="handleSend" />
  <MessageList :messages="messages" />
</template>
