<script setup>
import { ref } from 'vue';
const profesi = ref([
    'Admin', 'Marketing', 'Drafter', 'Arsitek', 'Programmer', 'Sopir', 'Security', 'Chief', 'Montir', 'Tukang', 'Teknisi AC', 'Guru', 'Kasir'
])
</script>
<template>
    <div class="py-20">
        <div class="container">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>

                </div>
                <div>
                    <h4 class="text-brand-1 mb-4">Posisi  pencari kerja terbanyak</h4>
                    <div class="flex flex-wrap gap-2">
                        <div v-for="item in profesi" :key="item" >
                         <router-link to="/" class="text-brand-1 bg-light py-1 px-3 ">  {{ item }}</router-link>  
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>