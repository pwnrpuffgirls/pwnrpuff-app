<template>
  <div class="wrapper">
    <div class="container">
      <h2>PWNRS</h2>
      <pwnr
        v-for="(field, index) in fields"
        ref="fields"
        :key="index"
        :name="field.name"
        :picture="field.picture"
        :url="field.url"
      />
    </div>
  </div>
</template>

<script>
import powerpuff from "@/assets/pwnr-pics/the_4th_powerpuff_girl_no_one_asked_for.png";
import Pwnr from "@/components/Pwnr.vue";
export default {
  components: {
    Pwnr
  },
  data() {
    return {
      fields: [
        {
          name: "PowerPuff",
          picture: powerpuff,
          url: "/powerpuff" 
        },
        {
          name: "PowerPuff2",
          picture: powerpuff,
          url: "/powerpuff" 
        },
        {
          name: "PowerPuff3",
          picture: powerpuff,
          url: "/powerpuff" 
        },
      ],
      showSuccess: false
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  margin-top: 100px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>