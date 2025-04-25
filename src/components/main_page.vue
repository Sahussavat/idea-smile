<script setup>
import Header from "./header.vue"

</script>

<template>
    <head>
        <slot name="head"></slot>  
    </head>
    <body class="">
        <Header></Header>
            
        <slot name="body"></slot>  
    </body>
    <footer>
        <slot name="footer"></slot>  
    </footer>
</template>

<style>
.fade-in{
  opacity: 0;
  animation: fade-in linear forwards;
  animation-timeline: view();
  animation-range: entry 150px;
}

.fade-in-left{
  opacity: 0;
  animation: ld-float-ltr-in linear forwards;
  animation-timeline: scroll();
  animation-range: entry;
}

@keyframes fade-in {
  to{
    opacity: 1;
  }
}
</style>
