<template>
    <div class="app-book-carousel">
      <div v-for="(image, index) in images" :key="index" :class="{ active: currentImage === index }" class="image-container">
        <img :src="image">
      </div>
    </div>
  </template>

<script>
export default {
  props: {
    images: Array
  },
  data () {
    return {
      currentImage: 0
    }
  },
  mounted () {
    setInterval(() => {
      this.currentImage = (this.currentImage + 1) % this.images.length
    }, 5000)
  }
}
</script>

<style scoped lang="scss">
.app-book-carousel {
    width: 100%;
    max-width: 400px;
    height: 700px;
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8), 0 0 60px rgba(1, 17, 29, 0.5);
}

.image-container {
  position: relative;
  width: 100%;
}

.image-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.image-container.active {
    opacity: 1;
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
