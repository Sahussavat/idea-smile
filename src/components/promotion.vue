<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'

const slides = [
  {
    title: 'El Teide Volcano, Spain',
    content: 'Photo by Max Rive',
    // You can also provide a URL for the image.
    image: "https://images.pexels.com/photos/355241/pexels-photo-355241.jpeg?w=1800"
  },
  {
    title: 'El Teide Volcano, Spain',
    content: 'Photo by Max Rive',
    // You can also provide a URL for the image.
    image: "https://images.pexels.com/photos/355241/pexels-photo-355241.jpeg?w=1800"
  },
  {
    title: 'El Teide Volcano, Spain',
    content: 'Photo by Max Rive',
    // You can also provide a URL for the image.
    image: "https://images.pexels.com/photos/355241/pexels-photo-355241.jpeg?w=1800"
  },
  // Other slides.
]
</script>

<template>
<vueper-slides>
    <vueper-slide
    v-for="(slide, i) in slides"
    :key="i"
    :image="slide.image"
    :title="slide.title"
    :content="slide.content" />
</vueper-slides>
</template>