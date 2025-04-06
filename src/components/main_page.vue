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