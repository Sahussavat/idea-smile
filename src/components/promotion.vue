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
  <div style='margin-left: 5%; margin-right: 5%;'>
<vueper-slides class="no-shadow fade-in"
  :visible-slides="3"
  slide-multiple
  fixed-height="600px"
  :dragging-distance="100"
  :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 2 } }"
   autoplay bullets-outside :touchable="true">
    <vueper-slide v-for="(item, index) in items" :key="index" :style="'background-color: transparent;'">
    <template #content>
      <div class="vueperslide__content-wrapper" style="flex-direction: row">
        
        <div class="card shadow" style="width: 90%;">
        <img :src=item.pic_link draggable="false" class="card-img-top" alt="...">
        <div class="card-body">
          <!-- <h5 class="card-title">Card title</h5> -->
          <a :href=item.info_link target="_blank" class="btn btn-light">อ่านเพิ่มเติม..</a>
        </div>
      </div>
        
      </div>
    </template>
    </vueper-slide>
  </vueper-slides>
  </div>

</template>


<script>
import PublicGoogleSheetsParser from 'public-google-sheets-parser'

export default {
  data() {
    return {
      items: [],
    }
  },
  mounted() {
    const parser = new PublicGoogleSheetsParser('18MRIi6Iya-iZJl12fp_PBreJTHbG18zRXJ0paxdmOjM')
    console.log(parser)
    parser.parse().then(data => {
      this.items = data
      console.log(data)
    })
  },
}
</script>