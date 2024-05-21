<template>
  <div class="register grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-68px)] items-center">
    <div class="bg-brand-3 h-full bg-image">
    </div>
    <div class="flex flex-col items-center justify-center bg-brand-4 h-full">
      <div class="max-w-[400px] w-full rounded-lg border bg-white p-6">

        <h4 class="font-semibold text-brand-1 mb-5 text-center">Login</h4>
        <form @submit.prevent="loginWithEmail" class="flex flex-col gap-4 mb-5">
          <div class="form-group">
            <label>Email:</label>
            <input v-model="email" type="email" class="form-control" required />
          </div>
          <div class="form-group">
            <label>Password:</label>
            <input v-model="password" type="password"  class="form-control" required />
          </div>
          <button class="btn" type="submit">Login</button>
        </form>
        <hr />
        <button @click="loginWithGoogle">Login dengan Google</button>

        <p>
          Belum punya akun? <router-link to="/register">Register</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { auth, provider } from '@/firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');

const loginWithEmail = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push('/dashboard');
  } catch (error) {
    console.error("Error during login:", error);
    alert(error.message);
  }
};

const loginWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
    router.push('/dashboard');
  } catch (error) {
    console.error("Error during login:", error);
    alert(error.message);
  }
};
</script>

<style scoped>
/* Add some styling if needed */
.register .bg-image{
  background: url('@/assets/img/masuk.jpg') no-repeat center;
  background-size: cover;
}
</style>
