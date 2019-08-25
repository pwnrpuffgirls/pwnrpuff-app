<template>
  <ul id="hexGrid">
    <li class="hex" v-for="pwnr in pwnrs" :key="pwnr.name">
      <a class="hexIn" :href="`pwnrs/${pwnr.name}`">
        <img :src="thumbUrl(pwnr.filename)" alt="" />
        <h1>{{ pwnr.name }}</h1>
        <p>{{ pwnr.description }}</p>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HexagonGrid",
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
          filename: "marit.jpg",
          description: "Secure coder",
          url: "/powerpuff"
        },
        {
          name: "Ingeborg",
          filename: "ingeborg.jpg",
          description: "Pwn boss",
          url: "/powerpuff"
        },
        {
          name: "Ina",
          filename: "Ina.jpg",
          description: "Mobile pwner",
          url: "/powerpuff"
        },
        {
          name: "PwnrPuff 1",
          filename: "the_4th_powerpuff_girl_no_one_asked_for.png",
          description: "Pwnr puff",
          url: "/powerpuff"
        },
        {
          name: "PwnrPuff 2",
          filename: "the_4th_powerpuff_girl_no_one_asked_for.png",
          description: "Pwnr puff",
          url: "/powerpuff"
        },
        {
          name: "PwnrPuff 3",
          filename: "the_4th_powerpuff_girl_no_one_asked_for.png",
          description: "Pwnr puff",
          url: "/powerpuff"
        }
      ],
      showSuccess: false
    };
  }
};
</script>
<style lang="scss" scoped>
@import "./../assets/css/hexagons.css";
</style>
