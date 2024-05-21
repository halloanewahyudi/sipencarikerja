
<script setup>
import { ref } from 'vue';
import { auth } from '@/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');

const register = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    router.push('/dashboard');
  } catch (error) {
    console.error("Error during registration:", error);
    alert(error.message);
  }
};
</script>
<template>
  <div class="register grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-68px)] items-center">
    <div class="bg-brand-3 h-full bg-image">
    </div>
    <div class="flex flex-col items-center justify-center bg-brand-4 h-full">
      <div class="max-w-[400px] w-full rounded-lg border bg-white p-6">
        <h4 class="font-semibold text-brand-1 mb-5 text-center">Register</h4>
      <form @submit.prevent="register" class="flex flex-col gap-4 mb-5">
        <div class="form-group">
          <label>Email:</label>
          <input v-model="email" type="email" class="form-control" required />
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input v-model="password" type="password" class="form-control" required />
        </div>
        <button type="submit" class="btn">Register</button>
      </form>
      <p class="">
        Sudah punya akun? <router-link to="/login">Login</router-link>
      </p>
      </div>
      
    </div>
  </div>

  </template>
  
  <style scoped>
  /* Add some styling if needed */
  .register .bg-image{
    background: url('@/assets/img/masuk.jpg') no-repeat center;
    background-size: cover;
  }
  </style>
  