<template>
<div  class="card  w-50 m-auto mt-5 p-5">
<h1 class="mt-3">Quotes</h1>
<ul v-if="!isReplace" class="w-20 mt-2">
    <li v-for="quote in quotes" :key="quotes.indexOf(quote)">{{quote.sentence}}</li>
</ul>
<ul v-if="isReplace" >
    <li v-for="quote in replaceQuotes" :key="replaceQuotes.indexOf(quote)">{{quote.sentence}}</li>
</ul>
<button @click="replacedQuotes" class="btn btn-primary w-20 m-auto">Replace with Other Quotations</button>
    
</div>

</template>
<script>
export default{
    name:"Quotes",
    data(){
        return {
        quotes:[],
        replaceQuotes:[],
        isReplace:false
        }
    },

    methods:{
       replacedQuotes(){
        this.isReplace=true
        console.log(this.isReplace)
        fetch("https://api.gameofthronesquotes.xyz/v1/random/5")
       .then(res=>res.json())
       .then(result=>{
        this.replaceQuotes=result;
        console.log(this.replaceQuotes)
        return this.replaceQuotes

       }).catch(err=>console.log(err))
       console.log(this.replaceQuotes)
       
       }
    },
    mounted(){
       fetch("https://api.gameofthronesquotes.xyz/v1/random/5")
       .then(res=>res.json())
       .then(result=>{
        this.quotes=result;
        return this.quotes

       }).catch(err=>console.log(err))
    }
}
</script>
<style>
</style>