<template>
<ul id="navigation">
    <li v-for="item in navList">
        <template v-if="item.children">
            <a
            :href="item.url"
            :title="item.name"
            @click="isOpen = !isOpen, active = !active"
            :class="{ active }">{{ item.name }} <svg viewBox="0 0 451.847 451.847" width="12"><path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
            c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
            c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z" fill="#fff"/></svg></a>
            <div :class="{ isOpen }" class="dropdown-content">
            <ul>
                <li
                    v-for="{ url, name, index, target } in item.children"
                    :key="index">
                    <a :href="url" :title="name" :target="target">{{ name }}</a>
                </li>
            </ul>
            </div>
        </template>
        <template v-else>
        <a :href="item.url" :title="item.name">{{ item.name }}</a>
        </template>
    </li>
</ul>

</template>

<script>

  export default {
    name: 'navigation',
    props: ['item'],
    data() {
      return {
        active: false,
        isOpen: false,
        navList: [
          { url: '#', name: 'Home' },

          {
            url: '#',
            name: 'Pwnrpuff Girls',
            children: [
              {
                url: 'https://twitter.com/andrejsharapov',
                name: 'Twitter',
                target: '_blank'
              },
              {
                url: 'https://dribbble.com/andrejsharapov',
                name: 'Dribbble',
                target: '_blank'
              },
              {
                url: 'https://www.instagram.com/andrej.sharapov/',
                name: 'Instagram',
                target: '_blank'
              }
            ]
          },
          { url: '#', name: 'Contributing' }
        ]
      }
    }
  }

</script>

<style scoped>

  ul {
      list-style-type: none;
      margin: auto;
      max-width: 50%;
      padding: 0;
      overflow: hidden;
  }

  @media only screen and (max-width: 850px) {
      ul {
          max-width: 90%;
      }
  }

  li {
      float: left;
  }

  li a,
  .dropbtn {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover,
  .dropdown:hover .dropbtn {
    background-color: lightgray;
  }

  li.dropdown {
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

</style>
