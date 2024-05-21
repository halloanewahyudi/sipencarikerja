<script setup>
import CounterAnimation from '../CounterAnimation.vue';
</script>
<template>
    <div class="min-h-screen bg-brand-4 py-10">
        <div class="container">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center h-full">
                
                <div class=" text-center ">
                    <img src="@/assets/img/people.png" alt="" srcset="">
                </div>
                <div class=" max-w-[460px] flex flex-col gap-4">
                    <h1 class="text-brand-1">
                        Para Pencari Kerja Kumpul disini
                    </h1>
                    <p class="lg:text-xl">
                      Jika posisi anda menjari pekerjaan, silakan daftarkan diri anda dan para pencari SDM silakan temukan sesuai dengan kriteria anda
                    </p>
                    <router-link to="/" class="btn max-w-max"> Jelajahi</router-link>
                </div>
            </div>
        </div>
    </div>

</template>