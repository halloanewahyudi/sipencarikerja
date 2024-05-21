<script setup>
const props = defineProps(['nama', 'usia', 'pendidikan', 'pengalaman', 'alamat'])
</script>
<template>
    <div class="card">
        <div class="card-header flex items-end justify-between border-b pb-2 mb-2">
            <h5>{{ props.nama }}</h5><span>{{ props.usia }}</span>
        </div>
        <div class="card-content">
            <div class="flex items-center justify-between">
                <span>Pendidikan</span> <span>{{ props.pendidikan }}</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
  .card{
    @apply p-4 rounded-lg border bg-white hover:shadow-xl duration-300 ;
  }
  .card-header{
    @apply text-brand-1
  }
</style>