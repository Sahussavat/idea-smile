<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
</script>

<template>
  <div style="background-color: #FAF1E6; height: fit-content;">
    <br>
    <div class="wrapper" style='margin-left: 5%; margin-right: 5%;' v-for="(item, index) in items">
    <div class="row row-cols-1 row-cols-sm-2">
      <div class="col" align="center">
        <div style="margin: 2%; height: 100%;">
        <div class="shadow" style="padding: 2%; background-color: #FDFAF6;">
          <div style="margin:5%;">
          <p style="font-family: noto; font-size: 45px; color: #393E46;">{{ item.title }}</p>
          <p style="white-space: pre-wrap; font-family: noto-regular; font-size: 25px; color: #393E46;">{{ item.description }}</p>
          
          <br>
          <div align="center">
          <a :href=item.info_link target="_blank" class="btn btn-light loaded" style="display: none; font-family: noto-regular;
          color:#3674B5; margin-left: 30%; margin-right: 30%;">อ่านเพิ่มเติม..</a>
          </div>
          <br>
          </div>
        </div>  
        </div>
    </div>
      <div class="col">
        <div style="margin: 2%;">
        <div class="shadow" style="padding: 2%; background-color: #FDFAF6;">
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
        <SplideSlide align="center" v-for="pic_link in item.pic_link_arr" :key="index">
          <div class="loading" align="center">
          <div class="spinner-grow" role="status" style="margin: 20%;">
            <span class="visually-hidden">Loading...</span>
          </div></div>
          <img :src="pic_link" alt="..." class="shadow rounded splide-main-img loaded" style="display: none;">
        </SplideSlide>
      </Splide>
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
          grid       : {
            // You can define rows/cols instead of dimensions.
            dimensions: [ [ 2, 2 ] ],
            gap: {
              row: '6px',
              col: '6px',
            },
          },
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
        <SplideSlide align="center" v-for="pic_link in item.pic_link_arr" :key="index">
          <div class="loading" align="center">
          <div class="spinner-grow" role="status" style="margin: 20%;">
            <span class="visually-hidden">Loading...</span>
          </div></div>
          <img :src="pic_link" alt="..." class="shadow rounded loaded" style="width: 100%; display: none;">
        </SplideSlide>
      </Splide>
      </div>
    </div>
      </div>
    </div>
      <br>
      <hr class="hr" v-if="index < items.length - 1" />
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
    width: 60%;
  }

}
</style>

<script>
import PublicGoogleSheetsParser from 'public-google-sheets-parser'

export default {
  data() {
    let _items = []
    for(let i=0;i<20;i++){
      var temp_blank = []
      for(let j=0;j<10;j++){
        temp_blank.push("")
      }
      _items.push({
        pic_link_arr: temp_blank
      })
    }
    
    return {
      items: _items,
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
        this.$nextTick(
          function () {
            if(this.$refs['thumbs']){
              for(var i=0;i<this.$refs['thumbs'].length;i++){
                const thumbsSplide = this.$refs['thumbs'][i].splide;
                if ( thumbsSplide ) {
                    this.$refs['main'][i].splide.sync( thumbsSplide );
                }
              }
            }
        }.bind(this)
      );
      }
    })
  },
}

</script>