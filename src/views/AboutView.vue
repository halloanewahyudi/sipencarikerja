
<script setup>
import { ref, computed } from 'vue';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const uniqueNames = new Set();
while (uniqueNames.size < 100) {
  uniqueNames.add('Nama' + getRandomString(5));
}
const names = Array.from(uniqueNames);

const educations = ['SD', 'SMP', 'SMA', 'D3', 'S1'];
const skills = ['Tukang', 'Petani', 'Guru', 'Dokter', 'Programmer', 'Seniman', 'Insinyur', 'Penulis'];
const streets = ['Jl. Merdeka', 'Jl. Sudirman', 'Jl. Thamrin', 'Jl. Ahmad Yani', 'Jl. Gatot Subroto', 'Jl. Diponegoro'];
const districts = ['Kabupaten A', 'Kabupaten B', 'Kabupaten C', 'Kabupaten D', 'Kabupaten E', 'Kabupaten F', 'Kabupaten G'];
const provinces = ['Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Sumatera Utara', 'Sulawesi Selatan', 'Kalimantan Timur', 'Bali'];

const members = ref(Array.from({ length: 100 }, (_, index) => {
  return {
    nama: names[index],
    usia: getRandomInt(20, 60),
    pendidikan: getRandomElement(educations),
    tahun_lulusan: getRandomInt(1980, 2023),
    keahlian: getRandomElement(skills),
    terakhir_bekerja: getRandomInt(2010, 2023),
    phone: '0' + getRandomInt(8000000000, 8999999999).toString(),
    sosmed: {
      facebook: 'link_facebook_' + getRandomString(5),
      twitter: 'link_twitter_' + getRandomString(5),
      instagram: 'link_instagram_' + getRandomString(5),
      tiktok: 'link_tiktok_' + getRandomString(5)
    },
    alamat: {
      jalan: getRandomElement(streets),
      kabupaten: getRandomElement(districts),
      propinsi: getRandomElement(provinces)
    },
    tentang_anda: getRandomString(100)
  };
}));

const ageFilter = ref('');
const educationFilter = ref('');
const skillFilter = ref('');
const districtFilter = ref('');

const filteredMembers = computed(() => {
  return members.value.filter(member => {
    return (
      (!ageFilter.value || member.usia == ageFilter.value) &&
      (!educationFilter.value || member.pendidikan === educationFilter.value) &&
      (!skillFilter.value || member.keahlian === skillFilter.value) &&
      (!districtFilter.value || member.alamat.kabupaten === districtFilter.value)
    );
  });
});

// Pagination logic
const itemsPerPage = 12;
const currentPage = ref(1);

const paginatedMembers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredMembers.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(filteredMembers.value.length / itemsPerPage);
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};
</script>

<template>
  <div class="bg-light">
    <div class="container py-16">
      <h4>Daftar Anggota</h4>
      <div class="flex flex-wrap gap-3 py-5">
        <div class="form-group">
          <label>Filter Usia:</label>
          <input type="number" v-model="ageFilter" placeholder="Masukkan usia" class="form-control" />
        </div>

        <div class="form-group">
          <label>Filter Pendidikan:</label>
          <select v-model="educationFilter" class="form-control">
            <option value="">Semua</option>
            <option v-for="edu in educations" :key="edu" :value="edu">{{ edu }}</option>
          </select>
        </div>

        <div class="form-group">
          <label>Filter Keahlian:</label>
          <select v-model="skillFilter" class="form-control">
            <option value="">Semua</option>
            <option v-for="skill in skills" :key="skill" :value="skill">{{ skill }}</option>
          </select>
        </div>

        <div class="form-group">
          <label>Filter Kabupaten:</label>
          <select v-model="districtFilter" class="form-control">
            <option value="">Semua</option>
            <option v-for="district in districts" :key="district" :value="district">{{ district }}</option>
          </select>
        </div>

      </div> <!-- end filter wrap -->

      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <li v-for="member in paginatedMembers" :key="member.phone"
          class="p-4 rounded-lg border bg-white hover:shadow-lg duration-300 ">
          <p>Nama: {{ member.nama }}</p>
          <p>Usia: {{ member.usia }}</p>
          <p>Pendidikan: {{ member.pendidikan }}</p>
          <p>Keahlian: {{ member.keahlian }}</p>
          <p>Alamat: {{ member.alamat.jalan }}, {{ member.alamat.kabupaten }}, {{ member.alamat.propinsi }}</p>
        </li>
      </ul>
   <div class="flex gap-3 items-center pt-10">
    <button class="" @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <button class="" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
   </div>
    
    </div>
  </div>
</template>

<style scoped>
/* Add some styling if needed */

</style>
