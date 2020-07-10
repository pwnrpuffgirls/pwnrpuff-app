<template>
  <div class="home">
    <p class="under-construction">
      This web page and project is very much under constructions^_^
    </p>
    <p>
      This is a project for infosec females and non-binary people. We refer to
      ourselves as <b>pwners</b>, or <b>pwnrs</b>.
      A pwner is a person doing pwning. Pwn comes from the word "own".
      When you hack something, you pwn it. Hence, you are a pwner.
    </p>
    <p>
      Now, we call us pwners because we like hacking and security.
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
  name: "Home",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
	margin-top: 5rem;
	margin-right: 15px;
	margin-left: 15px;
}

.under-construction {
  color: cadetblue;
}

p {
    max-width: 650px;
    margin: auto;
	margin-bottom: 25px;
}

a {
  color: #42b983;
}
</style>
