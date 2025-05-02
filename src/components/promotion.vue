<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import Album from './album.vue';
import '@splidejs/vue-splide/css';

const slides = [
  {src: "https://drive.google.com/thumbnail?id=1m_cW5YQBOY3U8ZVzLUTy_Kwgh-R1ojEU&sz=w1000", alt:"test1"},
  {src: "https://drive.google.com/thumbnail?id=1m_cW5YQBOY3U8ZVzLUTy_Kwgh-R1ojEU&sz=w1000", alt:"test1"},
  {src: "https://drive.google.com/thumbnail?id=1m_cW5YQBOY3U8ZVzLUTy_Kwgh-R1ojEU&sz=w1000", alt:"test1"},
  {src: "https://drive.google.com/thumbnail?id=1m_cW5YQBOY3U8ZVzLUTy_Kwgh-R1ojEU&sz=w1000", alt:"test1"},
  {src: "https://drive.google.com/thumbnail?id=1m_cW5YQBOY3U8ZVzLUTy_Kwgh-R1ojEU&sz=w1000", alt:"test1"},
  {src: "https://drive.google.com/thumbnail?id=1m_cW5YQBOY3U8ZVzLUTy_Kwgh-R1ojEU&sz=w1000", alt:"test1"},
  {src: "https://drive.google.com/thumbnail?id=1m_cW5YQBOY3U8ZVzLUTy_Kwgh-R1ojEU&sz=w1000", alt:"test1"},
  {src: "https://drive.google.com/thumbnail?id=1m_cW5YQBOY3U8ZVzLUTy_Kwgh-R1ojEU&sz=w1000", alt:"test1"},
  {src: "https://drive.google.com/thumbnail?id=1m_cW5YQBOY3U8ZVzLUTy_Kwgh-R1ojEU&sz=w1000", alt:"test1"},
]
</script>

<template>
  <div style='margin-left: 5%; margin-right: 5%;'>
<vueper-slides class="no-shadow fade-in"
  :visible-slides="3"
  slide-multiple
  fixed-height="600px"
  :dragging-distance="100"
  :breakpoints="{ 
    800: { visibleSlides: 1, slideMultiple: 2 }}"
   autoplay bullets-outside :touchable="true">
    <vueper-slide v-for="(item, index) in items" :key="index" :style="'background-color: transparent;'">
    <template #content>
      <div class="vueperslide__content-wrapper" style="flex-direction: row">
        
        <div class="card shadow" style="width: 90%;">
        <img :src=item.pic_link draggable="false" class="card-img-top loaded" alt="..." style="display: none;">
        <div class="loading" align="center">
        <div class="spinner-grow" role="status" style="margin: 20%;">
          <span class="visually-hidden">Loading...</span>
        </div></div>
        
        <div class="card-body">
          <!-- <h5 class="card-title">Card title</h5> -->
          <a :href=item.info_link target="_blank" class="btn btn-light loaded" style="display: none; font-family: noto-regular; color:#3674B5;">อ่านเพิ่มเติม..</a>
        </div>
      </div>
        
      </div>
    </template>

    </vueper-slide>
  </vueper-slides>
  </div>
  <Album></Album>
</template>

<style>
@media only screen and (max-width: 600px) {
  .splide-main-img {
    width: 90%;
  }

}

@media only screen and (min-width: 992px) {
  .splide-main-img {
    width: 40%;
  }

}
</style>

<script>
import PublicGoogleSheetsParser from 'public-google-sheets-parser'

export default {
  data() {
    let _items = []
    for(let i=0;i<20;i++){
      _items.push({})
    }
    return {
      items: _items,
    }
  },
  mounted(){
    const parser = new PublicGoogleSheetsParser('18MRIi6Iya-iZJl12fp_PBreJTHbG18zRXJ0paxdmOjM')
    parser.parse().then(data => {
      this.items = data
      var pic_link_pattern = "https://drive.google.com/thumbnail?id=[pic_id]&sz=w1000"
      for (var i=0;i<this.items.length;i++){
        var item = this.items[i]
        var pic_id = item.pic_link.split("https://drive.google.com/file/d/")[1].split("/view?usp=sharing")[0]
        item.pic_link = pic_link_pattern.replace("[pic_id]", pic_id)
      }
      this.array_l = Array.from(document.getElementsByClassName("loaded"))
      this.array_l_ing = Array.from(document.getElementsByClassName("loading"))
      for(let index in this.array_l_ing){
        this.array_l_ing[index].style.display = "none"
      }
      for(let index in this.array_l){
        this.array_l[index].style.display = "block"
      }
    })

    
  },
}

</script>