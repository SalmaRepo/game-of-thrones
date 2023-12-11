<template>
  <ul
    class="navbar no-list-style  navbar-expand-lg bg-body-tertiary border-bottom border-body m-auto p-3 fixed-top d-flex justify-content-around no-list-style"
    data-bs-theme="dark"
  >
    <li class="nav-item no-list-style">
      <router-link to="/" class="text-decoration-none"
        ><h1>GOT</h1></router-link
      >
    </li>
    <li class="nav-item no-list-style">
      <router-link
        to="/houses"
        class="navlink fs-3 text-decoration-none"
        >Houses</router-link
      >
    </li>
    <li>
      <router-link
        to="/persons"
        class="navlink fs-3 text-decoration-none"
        >Persons</router-link
      >
    </li>
    <li>
      <router-link
        to="/quotes"
        class="navlink fs-3 text-decoration-none"
        >Quotes</router-link
      >
    </li>
  </ul>
</template>
<script>
export default {
  name: "Nav",
};
</script>

<style>
 .navlink:focus{
  border-bottom:2px solid white;
 }

</style>
