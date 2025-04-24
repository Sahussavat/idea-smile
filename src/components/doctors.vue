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
  <div style="margin-left: 5%; margin-right: 5%;">
<vueper-slides class="no-shadow fade-in"
  :visible-slides="4"
  slide-multiple
  fixed-height="500px"
  fixed-width="90%"
  :gap="1"
  :slide-ratio="1 / 4"
  :dragging-distance="100"
  :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 2 } }"
   autoplay bullets-outside :touchable="true">
    <vueper-slide v-for="(item, index) in items" :key="index" :style="'background-color: transparent;'">
    <template #content>
      <div class="vueperslide__content-wrapper" style="flex-direction: row">
        
        <div class="card shadow" style="width: 90%;">
        <img :src="item.pic_link" class="card-img-top loaded" draggable="false" style="display: none;" alt="...">
        <div class="loading" align="center">
        <div class="spinner-grow" role="status" style="margin: 20%;">
          <span class="visually-hidden">Loading...</span>
        </div></div>
        <div class="card-body">
          <p class="card-text loaded" style="display: none;">{{ item.name }}</p>
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
    let _items = []
    for(let i=0;i<40;i++){
      _items.push({})
    }
    return {
      items: _items,
    }
  },
  mounted() {
    const parser = new PublicGoogleSheetsParser('1Hb3lPDY23uNcz_oIpz54K5r8yWLh9hmSmunbbKnvA4g')
    console.log(parser)
    parser.parse().then(data => {
      this.items = data
      var pic_link_pattern = "https://drive.google.com/thumbnail?id=[pic_id]&sz=w1000"
      for (var i=0;i<this.items.length;i++){
        var item = this.items[i]
        var pic_id = item.pic_link.split("https://drive.google.com/file/d/")[1].split("/view?usp=sharing")[0]
        item.pic_link = pic_link_pattern.replace("[pic_id]", pic_id)
      }
    })
  },
}
</script>