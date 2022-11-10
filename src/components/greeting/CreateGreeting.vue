<script setup>
import { ref } from 'vue';
import { useGreetingStore } from '../../stores/greeting';

const store = useGreetingStore();
const greeting = ref({
  message: '',
});

function processForm(greeting) {
  store.addGreeting(greeting);
  greeting['message'] = '';
}
</script>

<template>
  <h2>Create a Greeting:</h2>
  <form @submit.prevent="processForm(greeting)">
    <input v-model="greeting['message']" name="new-message" />
    <input type="submit" value="Save" />
  </form>
</template>
