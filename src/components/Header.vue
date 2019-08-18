<template>
  <div class="head" :style="{'background':this.$store.state.color}">
    <a @click="isOpen=!isOpen">Меню</a>
    <Menu :isOpen="isOpen" />
    {{$store.state.color}}
  </div>
</template>

<script>
import Menu from "./Menu";
export default {
  name: "Header",
  components: {
    Menu
  },
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style scoped>
.head {
  height: 50px;
  width: 100%;
  background: black;
  color: white;
  line-height: 50px;
  padding-left: 10px;
  text-align: left;
}
.head a {
  cursor: pointer;
  padding: 10px;
  margin-left: 10px;
}
.head a:hover {
  background: #47494e;
  border-radius: 5px;
  color: blanchedalmond;
}
.head img {
  position: relative;
  top: 4px;
  height: 20px;
  width: 20px;
}
</style>