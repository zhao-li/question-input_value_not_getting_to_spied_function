import $axios from '../services/backend-service.js';
import { defineStore } from 'pinia';

export const useGreetingStore = defineStore('greeting', {
  state: () => {
    return {
      greetings: [],
    };
  },
  actions: {
    async addGreeting(greeting) {
      const response = await $axios.post(
        '/greetings/relational-database/',
        greeting
      );
      const savedGreeting = response.data;
      this.greetings.push({
        id: savedGreeting['id'],
        message: savedGreeting['message'],
      });
    },
  },
});
