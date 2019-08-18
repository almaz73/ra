<template>
  <div class="menu" :class="{open: isMenu}" @click="closeWindow()">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/aboutVue">AboutVue</router-link>
    <router-link to="/example_1">Пример 1</router-link>
    <router-link to="/example_2">Пример 2</router-link>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    isOpen: { type: Boolean, required: true, default: true }
  },
  computed: {
    isMenu: function() {
      return this.isOpen;
    }
  },
  methods: {
    closeWindow: function() {
      this.$store.dispatch("setIsMenu", !this.$store.getters.isMenu);
    }
  }
};
</script>

<style scoped>
.inline a {
  display: inline-block;
}
.menu {
  background: #47494e;
  width: 300px;
  height: calc(100vh - 150px);
  position: absolute;
  padding: 20px 0;
  color: white;
  left: -300px;
  -webkit-transition: left 0.3s, transform 0.3s;
  z-index: 100;
}

.menu.open {
  left: 0px;
}

a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 10px 20px;
}

a:hover {
  background: #7f828b;
  color: blanchedalmond;
}
</style>