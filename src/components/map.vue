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
        <span style="margin-left: 2%;">
            <a target="_blank" href="https://www.google.com/maps/place/%E0%B8%84%E0%B8%A5%E0%B8%B4%E0%B8%99%E0%B8%B4%E0%B8%81%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%95%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%84%E0%B8%AD%E0%B9%80%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B8%AA%E0%B9%84%E0%B8%A1%E0%B8%A5%E0%B9%8C/@14.0224895,100.5262786,17z/data=!3m1!4b1!4m6!3m5!1s0x30e287cecc4f2369:0xa7a49d3db2acbb59!8m2!3d14.0224895!4d100.5262786!16s%2Fg%2F11vskmvq8l?entry=ttu&g_ep=EgoyMDI1MDQyMi4wIKXMDSoASAFQAw%3D%3D">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-zoom-in" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"/>
                <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"/>
                </svg>
            </a>
        </span>
    </div>
    <div id="map_iframe">
        <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCsA4HzPzdBWYHVmfUnwZk94a46CAbbsY4&q=คลินิกทันตกรรมไอเดียสไมล์"
        width="100%" height="600px" style="border:0;" allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>