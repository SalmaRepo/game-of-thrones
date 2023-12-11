<template>
  <div class="card  w-50 m-auto mt-5 p-5">
    <h2 class="mt-5">Memebers of the House {{ slug[0].toUpperCase()+slug.slice(1) }}</h2>
    
      <span v-for="member in convertToraw" :key="member.slug">
        <p>{{ member?.name}}</p>
      </span>
    
  </div>
</template>

<script>
import { isProxy, toRaw } from "vue";

export default {
  name: "House",
  props: ["slug"],
  data() {
    return {
      members: [],
    };
  },
  computed:{
    convertToraw(){
      let rawData=this.members;
      console.log(rawData)
      if(isProxy(this.members)){
       rawData=toRaw(this.members)
       console.log(rawData)
      
      }
      return rawData
    }
  },

  created() {
    console.log(this.slug);
    fetch(`https://api.gameofthronesquotes.xyz/v1/house/${this.slug}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        this.members = result[0].members;
         return this.members
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
