<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'

const slides = [
  {
    title: 'El Teide Volcano, Spain',
    content: 'Photo by Max Rive',
    // You can also provide a URL for the image.
    image: "https://images.pexels.com/photos/355241/pexels-photo-355241.jpeg?w=1800"
  },
  {
    title: 'El Teide Volcano, Spain',
    content: 'Photo by Max Rive',
    // You can also provide a URL for the image.
    image: "https://images.pexels.com/photos/355241/pexels-photo-355241.jpeg?w=1800"
  },
  {
    title: 'El Teide Volcano, Spain',
    content: 'Photo by Max Rive',
    // You can also provide a URL for the image.
    image: "https://images.pexels.com/photos/355241/pexels-photo-355241.jpeg?w=1800"
  },
  // Other slides.
]
</script>

<template>
<vueper-slides class="no-shadow" autoplay bullets-outside :touchable="false">
    <vueper-slide v-for="n in 3" :style="'background-color: transparent;'">
    <template #content>
      <div class="vueperslide__content-wrapper" style="flex-direction: row">
        <div class="container">
          <div class="row" align="center">
            <div class="col" v-for="n in 3">
              <div class="card" style="width: 75%;">
        <img src="../assets/images/pro1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Card title</p>
        </div>
      </div>
            </div>
            <!-- <div class="col">

            </div>
            <div class="col"></div> -->
          </div>
        </div>
        
      </div>
    </template>
    </vueper-slide>
</vueper-slides>


</template>

<style>
  .vueperslides__bullet .default {
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 16px;
  height: 16px;
}

.vueperslides__bullet--active .default {background-color: #42b983;}
</style>