<template>
  <div class="app-showcase"
    :style="{
      backgroundImage: backgroundImage
    }">
    <div class="left-container">
      <slot name="image">
        <img class="showcase-image" v-if="book" :src="book" />
      </slot>
    </div>
    <div class="right-container">
      <h3>{{ title }}</h3>
      <slot></slot>
      <a  class="showcase-cta" :href="link" target="_blank">Learn More</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: String,
    backgroundImage: String,
    title: String,
    link: String
  },
  data () {
    return {}
  },
  mounted () {}
}
</script>
<style scoped lang="scss">
.app-showcase {
    width: 100%;
    min-height: 100vh;
    display: flex;
    background-color: #182b3a;
    background-size: cover;
    background-position: center center;

  .showcase-cta {
    background-color: transparent;
    border: 2px solid white;
    padding: 10px 20px;
    font-size: 22px;
    text-decoration: none;
    color: white;
    max-width: 230px;
    text-align: center;
  }

  .left-container,
  .right-container {}
  .left-container {
    flex: 0 0 30%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 50px;
  }
  .right-container {
    flex: 0 0 70%;
    display: flex;
    flex-direction: column;
    padding: 50px;

    h3 {
        color: white;
        font-size: 48px;
        text-shadow: 0 2px 4px rgba(0, 0, 0, .2);
    }

    h4 {
        color: white;
        font-size: 32px;
        text-shadow: 0 2px 4px rgba(0, 0, 0, .2);
    }

    p {
        color: white;
        font-size: 20px;
    }
  }

  .left-container {
    padding-top: 100px;
  }

  .showcase-image {
    width: 100%;
    max-width: 100%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8), 0 0 60px rgba(1, 17, 29, 0.5);
  }
}
</style>
