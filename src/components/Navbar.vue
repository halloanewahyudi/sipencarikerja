<script setup>
import { computed, onMounted, ref } from 'vue';
import IconLockVue from './icons/IconLock.vue';
import IconMenu from './icons/IconMenu.vue';
import LoginButton from './LoginButton.vue';
import Logo from './Logo.vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const navMenu = ref(null)
const header = ref("")
const openMenu = () => {
    navMenu.value.classList.toggle('open')
}
const closeMenu = ()=> {
    setTimeout(() => {
        navMenu.value.classList.remove('open')
    }, 300);
}
onMounted(()=>{

})
const bgnav = computed(()=>{
  const path =  route.path
  if(path == '/'){
    header.value = 'bg-brand-4'
  }else{
    header.value = 'border-b'
  }
  return header.value
})

</script>
<template>
    <div :class="bgnav " class="py-2 w-full">
        <div class="container flex items-center justify-between">
            <div class="brand">
                <Logo class="cursor-pointer" @click="router.push('/')" />
            </div>
            <div class="flex gap-4 lg:flex-row-reverse">
                <router-link to="/login" class="btn flex gap-2 items-center text-brand-4">
                    <IconLockVue /> Login
                </router-link>
                <button @click="openMenu" class="text-brand-1 text-4xl lg:hidden">
                    <IconMenu />
                </button>
                <nav ref="navMenu" class="nav-menu">
                    <router-link  @click="closeMenu"   to="/pencari-kerja" class="nav-link"> Si pencari kerja</router-link>
                    <router-link  @click="closeMenu"  to="/register" class="nav-link"> Register </router-link>
                </nav>

            </div>
        </div>
    </div>
</template>
<style scoped>
.nav-menu {
    @apply hidden lg:flex gap-4 items-center absolute lg:static top-16 lg:top-auto bg-white lg:bg-transparent w-full lg:w-auto;
}

.nav-menu.open {
    @apply flex flex-col items-start left-0 p-4;
}

.nav-menu a:not(.btn) {
    @apply font-medium text-brand-1 hover:text-brand-2 duration-200;
}
</style>