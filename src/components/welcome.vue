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
    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
    <div align="center">
        <p id="news" style="font-family: noto; font-size: 50px; color: #578FCA;" >ข่าวสาร</p>
    </div>
    <div class="d-flex justify-content-center">
        <div class="w-100">
        <Promotion></Promotion>
        </div>
    </div>
    
    
    <div style="background-color: #A1E3F9;">
        <br>
    <div align="center">
        <b><p id="service" class="fade-in-left" style="color: black; font-family: noto; font-size: 50px;">บริการ</p></b>
    </div>
    <br>
    <div class="d-flex justify-content-center">
        <div class="w-100">
        <Service></Service>
        </div>
    </div>
    </div>
    <br>
    <div id="doctors" align="center">
        <p  class="fade-in-left" style="font-family: noto; font-size: 50px; color: #578FCA;">คุณหมอ</p>
    </div>
    <div class="d-flex justify-content-center">
        <div class="w-100">
        <Doctors></Doctors>
        </div>
    </div>
    <br><br><br>
    </div>
</template>

<template v-slot:footer>
    <Footer></Footer>
</template>
</Main_page>
</template>