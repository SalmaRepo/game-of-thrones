<template class="w-50 m-auto mt-5 p-5">
  <div class="card  w-50 m-auto mt-5 p-5">
    <span v-for="char in convertToraw" :key="char.slug" class="w-20 mt-5">
      <h1 v-if="!isReplace">{{ char?.name }} is form {{ char?.house?.name }}</h1>
      <h1 v-if="isReplace">Other Quotations</h1>
      <h3 v-if="!isReplace">Quotes:</h3>
      <ul v-if="!isReplace">
        <li v-for="quote in char?.quotes" :key="char.quotes.indexOf(quote)">
          {{ quote }}
        </li>
      </ul>
    
        <ul v-if="isReplace">
            <h6>{{replaceWait}}</h6>
        <li v-for="quote in tobeReplacedQuotes" :key="tobeReplacedQuotes.indexOf(quote)">
          {{ quote?.sentence }} from <strong>{{quote?.character.name}}</strong>
        </li>
      </ul>
    </span>
    <button @click="replaceQuote" v-if="!isReplace" class="btn btn-primary w-25 m-auto">Get Other Quotations</button>
     <button @click="replaceQuote" v-if="isReplace" class="btn btn-primary w-25 m-auto">Retrive Quotations of {{this.rawChar[0].name}}</button>
  </div>
</template>

<script>
import { isProxy, toRaw } from "vue";

export default {
  name: "Person",
  props: ["name"],
  data() {
    return {
      person: [],
      tobeReplacedQuotes: [],
      isReplace:false,
      rawChar:[],
      replaceWait:""
    };
  },
  computed: {
    convertToraw() {
      let rawData = this.person;
      console.log(rawData);
      if (isProxy(this.person)) {
        rawData = toRaw(this.person);
        this.rawChar=rawData
        console.log(rawData);
      }
      return rawData;
    },
  },
  methods: {

     messageDisplayer(){
        this.replaceWait=`As per your request, replaced the quotes of ${this.person[0].name} with quotes from other Characters from GOT` 
        setTimeout(()=>{
            fetch(`https://api.gameofthronesquotes.xyz/v1/random/${this.rawChar[0].quotes.length}`)
        .then((res) => res.json())
        .then((result) => {
          this.tobeReplacedQuotes = result;
          console.log(this.tobeReplacedQuotes)
          return this.tobeReplacedQuotes;
        })
        .catch((err) => console.log(err));
        
        },800)
    },

    replaceQuote() {
        this.isReplace=!this.isReplace
     console.log(this.rawChar)
     console.log(this.isReplace)
     this.messageDisplayer()   
     
     
      
    },

   
  },

  created() {
    console.log(this.slug);
    fetch(
      `https://api.gameofthronesquotes.xyz/v1/character/${
        this.name.split("-")[0]
      }`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        this.person = result;
        return this.person;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
