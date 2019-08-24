<template>
  <div class="gallery">
    <div class="gallery-panel"
      v-for="pwnr in pwnrs"
      :key="pwnr"
    >
      <router-link :to="`pwnrs/${pwnr.name}`">
      <img :src="thumbUrl(pwnr.filename)" url="`pwnrs/${pwnr.name}`">
      </router-link>
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
          name: "Marit",
          filename: "marit.png",
          url: "/powerpuff" 
        },
        {
          name: "Ingeborg",
          filename: "ingeborg.jpg",
          url: "/powerpuff" 
        },
        {
          name: "Ina",
          filename: "Ina.jpg",
          url: "/powerpuff" 
        },
        {
          name: "PowerPuff 1",
          filename: "the_4th_powerpuff_girl_no_one_asked_for.png",
          url: "/powerpuff" 
        },
        {
          name: "PowerPuff 2",
          filename: "the_4th_powerpuff_girl_no_one_asked_for.png",
          url: "/powerpuff" 
        },
        {
          name: "PowerPuff 3",
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
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  padding: 0 5rem;
}

.gallery-panel {
  width: 30%;
  border: 1px;
  border-color: white;
  border-style: solid;
  margin: 0;
  padding: 0;

  &:hover{
      border-color: black;
  }

  img {
    background-color: white;
    width: 100%;
    height: 80%;
    object-fit: cover;
  }
}

</style>