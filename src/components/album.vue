<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { event } from 'jquery';
</script>

<template>
  <div style="background-color: #FAF1E6; height: fit-content;">
    <br>
    <div class="wrapper" style='margin-left: 10%; margin-right: 10%;' v-if="items.length > 0">
      <Splide
        aria-labelledby="thumbnail-example-heading"
        :options=" {
          type      : 'loop',
          perPage   : 1,
          perMove   : 1,
          gap       : '1rem',
          arrows    : false,
          pagination: false,
        }"
        ref="main"
      >
        <SplideSlide align="center" v-for="pic_link in items[0].pic_link_arr" :key="index">
          <img :src="pic_link" alt="..." class="shadow rounded splide-main-img">
        </SplideSlide>
      </Splide>
        <br>
        <a :href=items[0].info_link target="_blank" class="btn btn-light loaded" style="display: none; font-family: noto-regular;
         color:#3674B5; margin-left: 30%; margin-right: 30%;">อ่านเพิ่มเติม..</a>
        <br>
      <Splide
        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
        :options="{
          type        : 'slide',
          rewind      : true,
          gap         : '1rem',
          pagination  : false,
          perPage     : 5,
          focus       : 'center',
          isNavigation: true,
          arrows    : false,
          updateOnMove: true,
          breakpoints: {
            600: {
              perPage: 3,
              arrows    : true,
            },
            992: {
              perPage: 3,
            },
          },
        }"
        ref="thumbs"
      >
        <SplideSlide align="center" v-for="pic_link in items[0].pic_link_arr" :key="index">
          <img :src="pic_link" alt="..." class="shadow rounded" style="width: 70%;">
        </SplideSlide>
      </Splide>
    </div>
    <br>
  </div>
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
      items: [{
        pic_link_arr:[
            "https://drive.google.com/thumbnail?id=1m_cW5YQBOY3U8ZVzLUTy_Kwgh-R1ojEU&sz=w1000",
            "https://drive.google.com/thumbnail?id=1m_cW5YQBOY3U8ZVzLUTy_Kwgh-R1ojEU&sz=w1000",
            "https://drive.google.com/thumbnail?id=1m_cW5YQBOY3U8ZVzLUTy_Kwgh-R1ojEU&sz=w1000",
            "https://drive.google.com/thumbnail?id=1m_cW5YQBOY3U8ZVzLUTy_Kwgh-R1ojEU&sz=w1000",
            "https://drive.google.com/thumbnail?id=1m_cW5YQBOY3U8ZVzLUTy_Kwgh-R1ojEU&sz=w1000",
            "https://drive.google.com/thumbnail?id=1m_cW5YQBOY3U8ZVzLUTy_Kwgh-R1ojEU&sz=w1000",
            "https://drive.google.com/thumbnail?id=1m_cW5YQBOY3U8ZVzLUTy_Kwgh-R1ojEU&sz=w1000"
        ]
      }],
    }
  },
  mounted(){
    const parser = new PublicGoogleSheetsParser('18JS9nQ1oBcyJiKnPaC_ECuIbdrg85m2nSBGAD4WqXH4')
    parser.parse().then(data => {
      this.items = data
      var pic_link_pattern = "https://drive.google.com/thumbnail?id=[pic_id]&sz=w1000"
      for (var i=0;i<this.items.length;i++){
        var item = this.items[i]
        var item_pic_links = item.pic_links.replace(" ","").split(/[\r\n]+/)
        for(var j=0;j<item_pic_links.length;j++){
            var item_pic_link = item_pic_links[j]
            if(!item.pic_link_arr){
                item.pic_link_arr = []
            }
            var pic_id = item_pic_link.split("https://drive.google.com/file/d/")[1].split("/view?usp=sharing")[0]
            item.pic_link_arr.push(pic_link_pattern.replace("[pic_id]", pic_id))
        }
        const thumbsSplide = this.$refs.thumbs.splide;

        if ( thumbsSplide ) {
            this.$refs.main.splide.sync( thumbsSplide );
        }
      }
    })
  },
}

</script>