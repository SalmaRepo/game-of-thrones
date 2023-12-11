<template>
  <div class="p-5 mt-5">
    <Nav/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Nav,
    Footer
  },
};
</script>
