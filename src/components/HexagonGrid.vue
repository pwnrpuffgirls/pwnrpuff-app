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
          name: "PowerPuff 1",
          filename: "the_4th_powerpuff_girl_no_one_asked_for.png",
          description: "Pwnr puff",
          url: "/powerpuff"
        },
        {
          name: "PowerPuff 2",
          filename: "the_4th_powerpuff_girl_no_one_asked_for.png",
          description: "Pwnr puff",
          url: "/powerpuff"
        },
        {
          name: "PowerPuff 3",
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
//test { // list-style-type: none; // position: relative; // float: left; //
width: 27.85714285714286%; // padding: 0 0 32.16760145166612% 0; //
-o-transform: rotate(-60deg) skewY(30deg); // -moz-transform: rotate(-60deg)
skewY(30deg); // -webkit-transform: rotate(-60deg) skewY(30deg); //
-ms-transform: rotate(-60deg) skewY(30deg); // transform: rotate(-60deg)
skewY(30deg); // background: #fd005f; //} //.hexagon { // position: absolute; //
top: 0; // left: 0; // width: 100%; // height: 100%; // background: #fdbf00; //
-o-transform: skewY(-30deg) rotate(60deg); // -moz-transform: skewY(-30deg)
rotate(60deg); // -webkit-transform: skewY(-30deg) rotate(60deg); //
-ms-transform: skewY(-30deg) rotate(60deg); // transform: skewY(-30deg)
rotate(60deg); //} //.gallery { // display: grid; // grid-template-columns:
repeat(auto-fill, minmax(20rem, 1fr)); // grid-gap: 1rem; // max-width: 80rem;
// margin: 5rem auto; // padding: 0 5rem; //} //.gallery-panel { // width: 80%;
// border-radius: 0.75rem; // // img { // background-color: white; // width:
100%; // height: 80%; // object-fit: cover; // border-radius: 0.75rem; //
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); //
margin-bottom: 25px; // // &:hover { // box-shadow: 0 8px 12px 0 rgba(1, 0, 0,
0.8), // 0 10px 30px 0 rgba(1, 0, 0, 0.8); // } // } //}
