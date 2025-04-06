<script setup>
import Main_page from "./main_page.vue"
import Promotion from "./promotion.vue"

</script>

<template>
    <Main_page>

<template v-slot:body>
    <br>
    <div align="center">
        <h2>ข่าวสาร</h2>
    </div>
    <br>
    <div class="d-flex justify-content-center">
        <div class="w-100">
        <Promotion></Promotion>
        </div>
    </div>
    
    <br>
    <div align="center">
        <h2>โปรโมชั่น</h2>
    </div>
    <br>
    <div class="d-flex justify-content-center">
        <div class="w-100">
            <Promotion></Promotion>
        </div>
    </div>
</template>

<template v-slot:footer>
    
</template>
</Main_page>
</template>