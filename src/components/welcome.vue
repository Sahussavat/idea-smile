<script setup>
import Main_page from "./main_page.vue"
import Promotion from "./promotion.vue"
import Service from "./service.vue"
import Doctors from "./doctors.vue"
import Footer from "./footer.vue"

</script>

<template>
    <Main_page>

<template v-slot:body>
    <br>
    <div align="center">
        <h2 id="news">ข่าวสาร</h2>
    </div>
    <br>
    <div class="d-flex justify-content-center">
        <div class="w-100">
        <Promotion></Promotion>
        </div>
    </div>
    
    <br>
    <div align="center">
        <h2 id="service">บริการ</h2>
    </div>
    <br>
    <div class="d-flex justify-content-center">
        <div class="w-100">
        <Service></Service>
        </div>
    </div>
    <br>
    <div align="center">
        <h2 id="doctors">คุณหมอ</h2>
    </div>
    <br>
    <div class="d-flex justify-content-center">
        <div class="w-100">
        <Doctors></Doctors>
        </div>
    </div>
</template>

<template v-slot:footer>
    <Footer></Footer>
</template>
</Main_page>
</template>