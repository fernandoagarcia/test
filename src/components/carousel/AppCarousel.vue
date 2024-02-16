<template>
  <div class="app-carousel">
    <hooper
      v-if="slides"
      ref="appCarousel"
      :progress="this.progress"
      :auto-play="this.isAutoplay"
      :play-speed="this.speed"
      :hover-pause="this.hoverPause"
      :infinite-scroll="false"
      :mouse-drag="!isSingleSlide"
      :short-drag="!isSingleSlide"
      :touch-drag="!isSingleSlide"
      :keys-control="!isSingleSlide"
      :wheel-control="!isSingleSlide"
      @beforeSlide="beforeSlideHandler"
      @slide="slideHandler"
      @afterSlide="afterSlideHandler">
      <slide
        v-for="(slide, index) in slides"
        :key="index"
        :class="slide.type === 'video' ? `slide-${getVideoPlatform(slide.url)}` : ''">
        <component
          v-if="slide.type === 'image'"
          :is="'img'"
          :data-slide-index="index"
          :src="slide.url"
          :alt="slide.title" />

        <component
          v-if="slide.type === 'video'"
          :is="getVideoPlatform(slide.url)"
          :ref="`${getVideoPlatform(slide.url)}Player`"
          :data-slide-index="index"
          tabindex="-1"
          v-bind="getVideoSettings(slide)"
          @ready="videoReadyHandler" />
      </slide>
      <hooper-progress v-if="this.progress && !isSingleSlide" slot="hooper-addons" />
      <hooper-controls
        v-if="!isSingleSlide && isAutoplay"
        :controls="this.hooperControls"
        @play="this.playCarousel"
        @pause="this.pauseCarousel"
        slot="hooper-addons" />
      <hooper-navigation
        v-if="!isSingleSlide"
        slot="hooper-addons">
        <template slot="hooper-prev">
          <i class="hooper-nav__icon fas fa-angle-left"></i>
          <span class="hooper-nav__title">Go to Previous Slide</span>
        </template>
        <template slot="hooper-next">
          <i class="hooper-nav__icon fas fa-angle-right"></i>
          <span class="hooper-nav__title">Go to Next Slide</span>
        </template>
      </hooper-navigation>
      <hooper-pagination
        v-if="!isSingleSlide"
        slot="hooper-addons" />
    </hooper>
  </div>
</template>

<script>
import {
  getVideoPlatform,
  getYoutubeId,
  getVimeoId,
  getFacebookId,
  getYoutubeSettings
} from '@/common/utils/VideoPlatformUtils'
import {
  parseUrlQuery
} from '@/common/utils/MCUtils'
import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Navigation as HooperNavigation,
  Pagination as HooperPagination,
  Controls as HooperControls
} from '@/public/views/components/carousel/index.js'
import AppYoutubePlayer from '@/public/views/components/AppYoutubePlayer'
import AppFacebookPlayer from '@/public/views/components/AppFacebookPlayer'
import AppVimeoPlayer from '@/public/views/components/AppVimeoPlayer'
// import 'hooper/dist/hooper.css'

export default {
  props: {
    isPreview: Boolean,
    isManager: Boolean,
    isMobile: Boolean,
    progress: Boolean,
    autoplay: Boolean,
    hoverPause: Boolean,
    infiniteScroll: Boolean,
    speed: Number,
    slides: Array,
    playFirstVideo: String
  },
  data () {
    return {
      playOverride: this.autoplay
    }
  },
  components: {
    Hooper,
    Slide,
    HooperProgress,
    HooperNavigation,
    HooperPagination,
    HooperControls,
    youtube: AppYoutubePlayer,
    vimeo: AppVimeoPlayer,
    facebook: AppFacebookPlayer
  },
  computed: {
    hooperControls () {
      return this.isAutoplay
        ? [{ label: 'Pause', emit: 'pause', icon: 'fas fa-pause' }]
        : [{ label: 'Play', emit: 'play', icon: 'fas fa-play' }]
    },
    playFirstVideoMuted () {
      return this.playFirstVideo === '0'
    },
    playFirstVideoAudio () {
      return this.playFirstVideo === '1'
    },
    playFirstVideoFalse () {
      return this.playFirstVideo === '2'
    },
    hasFirstVideo () {
      const firstSlide = this.slides[0]
      return firstSlide && firstSlide.type === 'video'
    },
    isAutoplay () {
      let autoplay = this.autoplay

      if (this.isSingleSlide) return false

      if (this.hasFirstVideo && this.playFirstVideoMuted) {
        autoplay = false
      }

      if (this.hasFirstVideo && this.playFirstVideoAudio) {
        autoplay = false
      }

      autoplay = this.playOverride

      return autoplay
    },
    isSingleSlide: function () {
      return this.slides && this.slides.length === 1
    }
  },
  methods: {
    getVideoPlatform: getVideoPlatform,
    getYoutubeId: getYoutubeId,
    getVimeoId: getVimeoId,
    getFacebookId: getFacebookId,
    getYoutubeSettings: getYoutubeSettings,
    parseUrlQuery: parseUrlQuery,
    handleTabIndex (v) {
      const currentNode = this.$refs.appCarousel.$slots.default[v.currentSlide]
      const prevNode = this.$refs.appCarousel.$slots.default[v.slideFrom] || null
      const currentChildNode = currentNode
        ? Array.prototype.slice.call(currentNode.elm.children, 0)[0]
        : null
      const prevChildNode = prevNode
        ? Array.prototype.slice.call(prevNode.elm.children, 0)[0]
        : null

      if (currentChildNode) {
        currentChildNode.setAttribute('tabindex', '0')
      }

      if (prevChildNode) {
        prevChildNode.setAttribute('tabindex', '-1')
      }
    },
    afterSlideHandler (v) {
      // console.log('afterSlideHander:', v)
    },
    slideHandler (v) {
      this.handleTabIndex(v)
    },
    beforeSlideHandler (v) {
      if (this.$refs.youtubePlayer) {
        this.$refs.youtubePlayer.forEach(elm => {
          if (elm.getCurrentState() === 'play') {
            elm.pause()
          }
        })
      }

      if (this.$refs.vimeoPlayer) {
        this.$refs.vimeoPlayer.forEach(elm => {
          if (elm.getCurrentState() === 'play') {
            elm.pause()
          }
        })
      }

      if (this.$refs.facebookPlayer) {
        this.$refs.facebookPlayer.forEach(elm => {
          if (elm.getCurrentState() === 'play') {
            elm.pause()
          }
        })
      }
    },
    getVideoSettings (v) {
      const settings = {}
      const parsedSettings = this.parseUrlQuery(v.url)
      const platform = this.getVideoPlatform(v.url)

      if (platform === 'youtube') {
        const defaults = {
          autoplay: 0,
          mute: 1,
          playsinline: 0,
          controls: 1,
          rel: 1,
          disablekb: 1,
          enablejsapi: 1
        }
        settings.options = { ...defaults, ...parsedSettings }
        settings.title = this.getYoutubeId(v.url)
        settings.videoId = this.getYoutubeId(v.url)
        settings.options = this.getYoutubeSettings(settings.options)
      }

      if (platform === 'vimeo') {
        settings.title = ''
        settings.videoId = this.getVimeoId(v.url)
        settings.options = {
          autoplay: false,
          controls: true,
          mute: true,
          playsinline: true,
          loop: true
        }
      }

      if (platform === 'facebook') {
        settings.title = ''
        settings.videoId = this.getFacebookId(v.url)
        settings.options = {
          autoplay: false,
          href: v.url,
          loop: true,
          width: '585px',
          height: '465px'
        }
      }

      return settings
    },
    videoReadyHandler (v) {
      const parentActive = v && v.$parent
        ? v.$parent.isActive
        : null

      const isPreview = this.$route && this.$route.query.preview === 'true'

      if (isPreview) return false

      if (parentActive) {
        const isFacebook = v.getPlatform() === 'facebook'

        if (this.playFirstVideoAudio && !isFacebook) {
          v.unMute()
          v.play()
        }

        if (this.playFirstVideoMuted && !isFacebook) {
          v.mute()
          v.play()
        }
      }
    },
    keyboardEventHandler (v) {},
    pauseCarousel () {
      this.playOverride = false
    },
    playCarousel () {
      this.playOverride = true
    }
  },
  created () {
    document.addEventListener('keyup', this.keyboardEventHandler)
  },
  mounted () {
    if (this.hasFirstVideo && this.playFirstVideoMuted) {}
  },
  beforeDestroy () {
    document.removeEventListener('keyup', this.keyboardEventHandler)
  }
}
</script>
<style lang="scss">
@import '@/public/styles/vars.scss';
@import '@/public/styles/lib/mixins/_screen-reader-text-only.scss';

.hooper {
  height: 465px;
}

.hooper-nav__title {
  @include screen-reader-text-only();
}

.hooper-nav__icon {
  font-size: 54px;
  color: var(--color-primary);
  transition: all .3s ease;
  text-shadow: map-get($text_shadow_levels, lv2);

  &:hover {
    color: white;
  }
}

.hooper-slide img {
  height: 100%;
}

.hooper-slide iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

.hooper-controls {
  position: absolute;
  bottom: 30px;
  right: 50%;
  -webkit-transform: translateX(50%);
  transform: translateX(50%);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 5px 10px;
  list-style: none;
}

.hooper-control {
  background-color: transparent;
  border: 0;
  font-size: 30px;
  color: var(--color-primary);
  transition: all .3s ease;
  text-shadow: map-get($text_shadow_levels, lv2);

  &:focus,
  &:hover,
  &:active {
    color: white;
  }
}

.slide-facebook {
  background-color: black;
  height: 100%;

  .fb-video {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
}
</style>
