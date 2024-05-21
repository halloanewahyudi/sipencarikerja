<template>
    <div>
      <h1>Dashboard</h1>
      <p>Selamat datang, {{ user?.email }}</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script setup>
  import { auth } from '@/firebaseConfig';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { onAuthStateChanged, signOut } from 'firebase/auth';
  
  const router = useRouter();
  const user = ref(null);
  
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      user.value = currentUser;
    } else {
      router.push('/login');
    }
  });
  
  const logout = async () => {
    await signOut(auth);
    router.push('/login');
  };
  </script>
  
  <style scoped>
  /* Add some styling if needed */
  </style>
  