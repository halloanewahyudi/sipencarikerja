<script setup>
  import { ref, onMounted } from 'vue'
  
  const props = defineProps({
    numberValue:{
      type:Number
    }
  })
   // const targetValue = 1000  // Angka tujuan
  const duration = 1500     // Durasi animasi dalam milidetik
  
  const counterContainer = ref(null)
  const displayedValue = ref(0)
  
  const animateCounter = (start, end, duration) => {
    let startTime = null
  
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      displayedValue.value = Math.floor(progress * (end - start) + start)
  
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
  
    window.requestAnimationFrame(step)
  }
  
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(0, props.numberValue, duration)
          observer.disconnect()
        }
      })
    }, { threshold: 1.0 })
  
    observer.observe(counterContainer.value)
  })
  </script>
<template>
    <div ref="counterContainer" class="counter-container">
      <span>{{ displayedValue }}</span>
    </div>
  </template>
  
  <style scoped>
  .counter-container {
    display: inline-block;
  }
  </style>
  