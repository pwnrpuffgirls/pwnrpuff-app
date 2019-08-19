<template>
  <div class="gallery">
    <div class="gallery-panel"
      v-for="pwnr in pwnrs"
      :key="pwnr"
      :name="pwnr.name"
      :picture="pwnr.filename"
      :url="pwnr.url"
    >
      <router-link :to="`/photo/${pwnr.name}`">
      <img :src="thumbUrl(pwnr.filename)">
      </router-link>
      <div class="container">
        <p>{{pwnr.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Pwnr from '@/components/Pwnr.vue';

export default {
  components: {
    Pwnr
  },
  methods: {
    thumbUrl(filename) {
      return require(`../assets/pwnr-pics/${filename}`);
    }
  },
  data() {
    return {
      pwnrs: [
        {
          name: "PowerPuff",
          filename: "the_4th_powerpuff_girl_no_one_asked_for.png",
          url: "/powerpuff" 
        },
        {
          name: "PowerPuff2",
          filename: "the_4th_powerpuff_girl_no_one_asked_for.png",
          url: "/powerpuff" 
        },
        {
          name: "PowerPuff3",
          filename: "the_4th_powerpuff_girl_no_one_asked_for.png",
          url: "/powerpuff" 
        },
        {
          name: "PowerPuff2",
          filename: "the_4th_powerpuff_girl_no_one_asked_for.png",
          url: "/powerpuff" 
        },
        {
          name: "PowerPuff2",
          filename: "the_4th_powerpuff_girl_no_one_asked_for.png",
          url: "/powerpuff" 
        },
        {
          name: "PowerPuff2",
          filename: "the_4th_powerpuff_girl_no_one_asked_for.png",
          url: "/powerpuff" 
        },
      ],
      showSuccess: false
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: 5rem auto;
  padding: 0 5rem;
}

.gallery-panel {
  background-color: white;
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0.75rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 25px;
  }
  .container {
    text-align: center;
    padding: 10px 20px;
  }
}

</style>