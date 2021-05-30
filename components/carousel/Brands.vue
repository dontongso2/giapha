<template>
  <div v-if="brands.length > 0" id="brands" class="carousel-brands full-height">
    <client-only>
      <carousel
        :autoplay="true"
        :items="1"
        :nav="false"
        :loop="true"
        :dots="false"
      >
        <template slot="prev">
          <div class="prev btn-nav">
            <ButtonExagon icon="left" />
          </div>
        </template>

        <div
          v-for="(item, index) in brands"
          :key="'caroul' + index"
          class="carou-item"
        >
          <div class="content">
            <div>
              <h2>{{item.name}}</h2>
              <h3>{{item.sologan}}</h3>
              <nuxt-link :to="`brands/${item.link}`">
                <ButtonExagon class="mr-2" />
                Explore the {{item.name}}
              </nuxt-link>
            </div>
          </div>
          <div class="bg-left full-height">
            <img :src="item.banner" />
          </div>
          <div class="bg-right full-height">
            <img :src="item.subBanner" />
          </div>
        </div>

        <template slot="next">
          <div class="next btn-nav">
            <ButtonExagon icon="right" />
          </div>
        </template>
      </carousel>
    </client-only>
  </div>
</template>

<script>
import ButtonExagon from "~/components/ButtonExagon.vue";

export default {
  components: {
    ButtonExagon,
  },
  computed: {
      brands() {
          return this.$store.state.brands;
      }
  }
};
</script>
