<script setup>
import Main_page from "./main_page.vue"
import Promotion from "./promotion.vue"
import Service from "./service.vue"
import Doctors from "./doctors.vue"
import Footer from "./footer.vue"
import BgImg from "./bg_img.vue"
import Map from "./map.vue"
</script>

<template>
    <Main_page>

<template v-slot:body>
    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
    <BgImg></BgImg>
    <br><br>
    <div align="center" class="fade-in shadow" style="background-color: #ffffff; padding-top: 2%;">
        <p id="news" style="font-family: noto; font-size: 100px; color: #578FCA;" >ข่าวสาร</p>
    </div>
    <div class="d-flex justify-content-center">
        <div class="w-100">
        <Promotion></Promotion>
        </div>
    </div>
    
    
    <div style="background-color: #A1E3F9;">
        <br>
    <div align="center" class="fade-in shadow" style="padding-top: 2%;">
        <b><p id="service" style="color: #3674B5; font-family: noto; font-size: 100px;">บริการ</p></b>
    </div>
    <br>
    <div class="d-flex justify-content-center">
        <div class="w-100">
        <Service></Service>
        </div>
    </div>
    </div>
    <br>
    <div id="doctors" align="center" class="fade-in shadow" style="padding-top: 2%;">
        <p style="font-family: noto; font-size: 100px; color: #578FCA;">คุณหมอ</p>
    </div>
    <div class="d-flex justify-content-center">
        <div class="w-100">
        <Doctors></Doctors>
        </div>
    </div>
    <br>
    <div id="map" align="center" class="fade-in shadow" style="padding-top: 2%;">
        <p style="font-family: noto; font-size: 100px; color: #578FCA;">พิกัด</p>
    </div>
    <div class="d-flex justify-content-center">
        <div class="w-100">
        <Map></Map>
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