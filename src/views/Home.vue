<template>
  <div class="home">
    <!-- Issue: This class has a margin-->
    <h1>Pwnrpuff girls</h1>
    <p class="under-construction">
      This web page and project is very much under constructions^_^
      You should look forward to awesome future changes!
    </p>
    <p>
      This is a project for infosec females and non-binary people.
      We refer to ourselves as <b>pwners</b>, or <b>pwnrs</b>.
    </p>
    <p>
      A pwnr is a person doing pwning. Pwn comes from the word "own".
      When you hack someting, you pwn it. Hence, you are a pwnr.
    </p>
    <p>
      Now, we call us pwnrs because we like hacking and security.
      However.. We've noticed a lack of technical women in the security domain!
      This project is to gather technical infosec women,
      and allow any infosec others to join our community.
      Also, the ones who would like may make their own page by contributing
      to this project.
    </p>
    <p>
      If you would like to contribute, we will open source the project as soon
      as we have made routines for contributions.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
  width: 50%;
}
h1 {
  max-width: 400px;
  margin: auto;
}
.under-construction {
  color: darkolivegreen;
}
p {
  max-width: 400px;
  margin: auto;
}
a {
  color: #42b983;
}
</style>
