<template>
  <section class="banner full-height" :style="{backgroundImage: 'url(' + dataSrc + ')'}" >
      <div class="banner-content">
        <h1>{{subTitle}}</h1>
        <h2>{{title}}</h2>
      </div>

        <div v-if="isVideo" class="banner-video">
            <video playsinline autoplay muted loop>
                <source :src="videoSrc" type="video/mp4">
                Your browser does not support HTML video.
            </video>
        </div>

      <div class="overlay"/>
  </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        subTitle: {
            type: String,
            default: '',
        },
        isVideo: {
            type: Boolean,
            default: () => false
        },
        dataSrc: {
            type: String,
            default: () => ''
        },
        videoSrc: {
            type: String,
            default: () => ''
        },
    },
    
    
}
</script>
<style scoped>
.banner {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    overflow: hidden;
}
.banner-content {
    width: 100%;
    max-width: 40%;
    margin-left: 10vw;
    color: white;
    z-index: 10;
}
.overlay {
    background-image: radial-gradient(farthest-corner at 85% 10%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
h1 {
    font-size: 2.4rem;
    letter-spacing: 1.36px;
    margin-bottom: .5rem;
}
h2 {
    font-size: 6rem;
    line-height: .9;
    letter-spacing: -3.48px;
}
.banner-video video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translateX(-50%) translateY(-50%);
    background: url(//demosthenes.info/assets/images/polina.jpg) no-repeat;
    background-size: cover;
    transition: 1s opacity;
}
</style>