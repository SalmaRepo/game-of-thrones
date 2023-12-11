<template>
<!-- using bootstrap for styling -->
    <div class="card text-center w-50 m-auto mt-5">
      <h2 class="mt-5">Houses</h2>
      <!-- input to search houses -->
      <input class="form-control w-50 m-auto mt-5 p-4" type="search" v-model="search"  placeholder="Search houses" />
       
      <ul class="d-flex flex-row justify-content-between align-items-center flex-wrap p-4 gap-3 h-50 overflow-auto" >   
       
        <li v-for="house in filteredHouses" :key="house.slug" class="card w-25 p-5 shadow p-3 mb-5 bg-body-tertiary rounded">
          <router-link :to=" {path:`/housemembers/${house.slug}`} " v-if="house" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
          {{ house.name }}
        </router-link> 
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name:"Houses",
    data() {
      return {
        houses: [],
        search: ''
      };
    
    },
    computed: {
      filteredHouses() {
        return this.houses.filter(house => house.name.toLowerCase().includes(this.search.toLowerCase()));
      }
    },
    mounted() {
      // Fetch houses data from API and populate houses array
      fetch("https://api.gameofthronesquotes.xyz/v1/houses")
      .then(res=>res.json())
      .then(result=>{
        console.log(result)
        return this.houses=result
      }).catch(err=>console.log(err))
    },
      
  };
  </script>