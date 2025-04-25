<script setup>
var path = "https://www.google.com/maps/embed/v1/directions"
  +"?key=AIzaSyCsA4HzPzdBWYHVmfUnwZk94a46CAbbsY4"
  +"&origin={latitude},{longitude}"
  +"&destination=2GCG%2BXGR+คลินิกทันตกรรมไอเดียสไมล์+ถนน+พัฒนสัมพันธ์+ตำบล+บางปรอก+อำเภอเมืองปทุมธานี+ปทุมธานี+12000"

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function show_direction(pos) {
    const crd = pos.coords;

    path = path.replace("{latitude}", crd.latitude)
    path = path.replace("{longitude}", crd.longitude)

    let map_iframe = document.getElementById("map_iframe")
    if (map_iframe.hasChildNodes()) {
            map_iframe.removeChild(map_iframe.children[0]);
    }
    
    map_iframe.innerHTML = '<iframe src='+'"'+path+'"'
    +'width="100%" height="600px" style="border:0;" allowfullscreen="" loading="lazy"' 
    +'referrerpolicy="no-referrer-when-downgrade"></iframe>'
    document.getElementsByClassName("loading-map")[0].style.display = "none"
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    document.getElementsByClassName("loading-map")[0].style.display = "none"
}

function find_direction(){
    document.getElementsByClassName("loading-map")[0].style.display = ""
    navigator.geolocation.getCurrentPosition(show_direction, error, options);
}

</script>

<template>
    <div align="center" style="margin: 4%;">
        <button type="button" class="shadow btn btn-outline-primary" style="font-family: noto-regular; font-size: 20px;" @click="find_direction()">ค้นหาเส้นทาง
  <span class="loading-map spinner-border spinner-border-sm" style="font-size: 10px; display: none;" role="status" aria-hidden="true"></span>
        </button>
    </div>
    <div id="map_iframe">
        <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCsA4HzPzdBWYHVmfUnwZk94a46CAbbsY4&q=คลินิกทันตกรรมไอเดียสไมล์"
        width="100%" height="600px" style="border:0;" allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>