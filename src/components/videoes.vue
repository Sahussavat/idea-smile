<template>
    <br>
    <div class="wrapper" style='margin-left: 5%; margin-right: 5%;' v-for="(item, index) in items">
    <div class="row row-cols-1 row-cols-sm-2">
      <div class="col" align="center">
        <div style="margin: 2%; height: 100%;">
        <div class="shadow" style="padding: 2%; background-color: #FDFAF6;">
          <div style="margin:5%;">
          <p style="font-family: noto; font-size: 45px; color: #393E46;">{{item.video_title}}</p>
          <p style="white-space: pre-wrap; font-family: noto-regular; font-size: 25px; color: #393E46;">{{ item.video_description }}</p>
          
          <br>
          <div align="center">
          <a target="_blank" :src="item.info_link" class="btn btn-light loaded" style="display: none; font-family: noto-regular;
          color:#3674B5; margin-left: 30%; margin-right: 30%;">อ่านเพิ่มเติม..</a>
          </div>
          <br>
          </div>
        </div>  
        </div>
    </div>
      <div class="col">
        <div class="video-box">
        <div class="shadow" style="padding: 2%; background-color: #FDFAF6;" align="center">
            <iframe class="rounded shadow" :src="item.video_link" width="300" height="600" allow="autoplay"></iframe>
      </div>
    </div>
      </div>
    </div>
      <br>
      <hr class="hr" v-if="index < items.length - 1" />
    </div>
    <br>
</template>

<style>
@media only screen and (max-width: 600px) {
  .video-box {
    margin: 5%; margin-top: 0%; margin-bottom: 0%;
  }

}

@media only screen and (min-width: 992px) {
  .video-box {
    margin: 25%; margin-top: 0%; margin-bottom: 0%;
  }

}
</style>

<script>
  import { defineComponent } from 'vue'
  import PublicGoogleSheetsParser from 'public-google-sheets-parser'
  import { VideoPlayer } from '@videojs-player/vue'
  import 'video.js/dist/video-js.css'

  export default defineComponent({
    components: {
      VideoPlayer
    },
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
    const parser = new PublicGoogleSheetsParser('1cmoazrtDRaFABHTaSwKgOE7dq0F0Prn4M-rxj6JTeN8')
    parser.parse().then(data => {
      this.items = data
      console.log(data)
      var video_link_pattern = "https://drive.google.com/file/d/[pic_id]/preview"
      for (var i=0;i<this.items.length;i++){
        var item = this.items[i]
        var pic_id = item.video_link.split("https://drive.google.com/file/d/")[1].split("/view?usp=sharing")[0]
        item.video_link = video_link_pattern.replace("[pic_id]", pic_id)
      }
      
  })
}
  })
</script>