<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
</script>

<template>
  <div style='margin-left: 5%; margin-right: 5%;'>
    <vueper-slides class="no-shadow service-slide"
  :visible-slides="1"
  slide-multiple
  fixed-height="800px"
  :dragging-distance="100"
  :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 1},}"
  bullets-outside :touchable="true">
    <vueper-slide class="v-slide" v-for="(item, index) in items" :key="index" :style="'background-color: transparent;'">
    <template #content>
      <div class="vueperslide__content-wrapper" style="flex-direction: column">
      <div class="container bg-light rounded-3" style="margin-bottom: 2%;" v-for="i in item">
        <div class="row services-row" align="center">
          <div class="col" align="left">
            <p style="font-family: noto; font-size: 100%; padding-left: 5%;">{{ i.service_name }}</p>
          </div>
          <div class="col" align="right">
            <p style="font-family: noto-regular; font-size: 100%; padding-right: 5%;">{{ i.cost}}</p>
          </div>
        </div>
      </div>
    </div>
    </template>
    </vueper-slide>
  </vueper-slides>
</div>
</template>

<style>
@media only screen and (max-width: 600px) {
  .services-row {
    padding-top: 5%;
  }

  .v-slide {
    padding-left: 5%; 
    padding-right: 5%;
  }
  .service-slide .vueperslides__bullet .default {background-color: #FFECDB;
  border: none;
  box-shadow: none;}
.service-slide .vueperslides__bullet--active .default {background-color: #60B5FF;}
}

@media only screen and (min-width: 992px) {
  .services-row {
    padding-top: 1%;
  }
  
  .v-slide {
    padding-left: 25%; 
    padding-right: 25%;
  }

  .service-slide .vueperslides__bullet .default {background-color: #FFECDB;
  border: none;
  box-shadow: none;}
.service-slide .vueperslides__bullet--active .default {background-color: #60B5FF;}
}
</style>

<script>
import PublicGoogleSheetsParser from 'public-google-sheets-parser'

const max_service_per_page = 10

function sort_catalog(old_table){
  var new_table = []
  for(var i=0;i < old_table.length ;i++){
    if (i%max_service_per_page == 0){
      new_table.push([])
    }
    new_table[new_table.length - 1].push(old_table[i])
  }
  return new_table
}

export default {
  data() {
    return {
      items: [{},{},{}],
    }
  },
  mounted() {
    const parser = new PublicGoogleSheetsParser('1Q2lGyzIJuBX5rdhUVmUbbyqQ1LUrl3Pj5v5ckUIg6AE')
    parser.parse().then(data => {
      this.items = sort_catalog(data)
    })
  },
}
</script>