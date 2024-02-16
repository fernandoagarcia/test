<template>
  <div class="app-jumbotron">
    <a  class="jumbotron-cta" href="steve@prlawinc.com" target="_blank">Subscribe</a>
    <appMenu />
    <h1>The Justice in America Network TV Series</h1>
    <slot></slot>
    <div class="logo-container">
      <img class="image-logo" src="https://res.cloudinary.com/fsquaredmedia/image/upload/v1707436554/murphy-2.png"/>
    </div>
    <h2>The Power of Suspense,  Adventure, Truth & Justice</h2>
  </div>
</template>

<script>
import AppMenu from '@/components/AppMenu.vue'
export default {
  components: {
    AppMenu
  },
  data () {
    return {}
  },
  mounted () {}
}
</script>
<style scoped lang="scss">
.app-jumbotron {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #182b3a;
  background-image: url(https://res.cloudinary.com/fsquaredmedia/image/upload/c_fill,q_64,w_1920/v1707320497/sharegrid-7IBigEuL9Tw-unsplash.jpg);
  background-image: linear-gradient(to top, rgba(4, 21, 38, 0.5), rgba(12, 47, 160, 0.5)), url('https://res.cloudinary.com/fsquaredmedia/image/upload/c_fill,q_64,w_1920/v1707320497/sharegrid-7IBigEuL9Tw-unsplash.jpg');
  background-size: cover;
  background-position: center center;

  .jumbotron-cta {
    top: 15px;
    right: 15px;
    position: absolute;
    background-color: transparent;
    border: 2px solid white;
    padding: 10px 20px;
    font-size: 22px;
    text-decoration: none;
    // border-radius: 12px;
    color: white;
    max-width: 150px;
    text-align: center;
  }

  .image-logo {
    max-width: 300px;
    margin-top: 20px;
  }

  h1, h2 {
    color: white;
    font-size: 48px;
    text-align: center;
    text-shadow: 0 2px 4px rgba(0, 0, 0, .2);
    margin-top: 5px;
  }

  h1 {
    font-weight: 800;
  }

  h2 {
    font-style: italic;
    font-weight: 800;
  }
}
</style>
