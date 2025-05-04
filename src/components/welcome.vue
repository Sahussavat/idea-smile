<script setup>
import Main_page from "./main_page.vue"
import Promotion from "./promotion.vue"
import Service from "./service.vue"
import Doctors from "./doctors.vue"
import Videoes from "./videoes.vue"
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
        <p id="news" class="title-name" style="font-family: noto; color: #578FCA;" >ข่าวสาร | News</p>
    </div>
    <div class="d-flex justify-content-center">
        <div class="w-100">
        <Promotion></Promotion>
        </div>
    </div>
    
    
    <div style="background-image: linear-gradient(
          rgba(0, 0, 0, 0.4), 
          rgba(0, 0, 0, 0.4)
        ), url('smile-bg.jpg'); background-repeat: no-repeat; background-position-y: 50%; background-position-x: 50%;
    background-size: auto;">
        <br>
    <div align="center" class="shadow" style="padding-top: 2%; background-color: #393E46;">
        <b><p id="service" class="title-name" style="color: #DFD0B8; font-family: noto;">บริการ | Services</p></b>
        <p style="color: #DFD0B8; font-family: noto-regular; font-size: 25px; margin-left: 10%; margin-right: 10%;">สอบถามรายละเอียดติดต่อจองคิว หรือนัดปรึกษา</p>
        <p class="ms-3" style="color: #DFD0B8; font-family: noto-regular; font-size: 25px;"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
        </svg>
        092-499-5393</p>
        <p class="ms-3" style="color: #DFD0B8; font-family: noto-regular; font-size: 25px;"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-line" viewBox="0 0 16 16">
        <path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0M5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.15.15 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157m.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832l-.013-.015v-.001l-.01-.01-.003-.003-.011-.009h-.001L7.88 4.79l-.003-.002-.005-.003-.008-.005h-.002l-.003-.002-.01-.004-.004-.002-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.2.2 0 0 0 .039.038l.001.001.01.006.004.002.008.004.007.003.005.002.01.003h.003a.2.2 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.16.16 0 0 0-.108.044h-.001l-.001.002-.002.003a.16.16 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.16.16 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z"/>
        </svg>
        @ids_dental</p>
        <br>
    </div>
    <br>
    <div class="d-flex justify-content-center">
        <div class="w-100">
        <Service></Service>
        </div>
    </div>
    </div>
    <div style="background-color: #FBF8EF;">
        <br>
    <div id="videoes" align="center" class="fade-in shadow" style="padding-top: 2%; background-color: #3b3b3b;">
        <p class="title-name" style="font-family: noto; color: #ececec;">สาระน่ารู้ | Facts</p>
    </div>
    <div class="d-flex justify-content-center">
        <div class="w-100">
        <Videoes></Videoes>
        </div>
    </div>
    </div>
    <br>
    <div id="doctors" align="center" class="fade-in shadow" style="padding-top: 2%;">
        <p class="title-name" style="font-family: noto; color: #578FCA;">คุณหมอ | Doctors</p>
    </div>
    <div class="d-flex justify-content-center">
        <div class="w-100">
        <Doctors></Doctors>
        </div>
    </div>
    <br>
    <div id="map" align="center" class="fade-in shadow" style="padding-top: 2%;">
        <p class="title-name" style="font-family: noto; color: #578FCA;">พิกัด | Location</p>
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

<style>
@media only screen and (max-width: 600px) {
  .title-name {
    font-size: 50px;
  }

}

@media only screen and (min-width: 992px) {
  .title-name {
    font-size: 100px;
  }

}
</style>
