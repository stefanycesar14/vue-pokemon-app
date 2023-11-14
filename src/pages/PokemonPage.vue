<template>
  <h1 v-if="!pokemon" >Wait a moment please...</h1>
 <div v-else >
  <h2>Who is this Pokemon?</h2>
  <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
  <PokemonOption :pokemons="pokemonArr"
  @selection="checkAnswer()"/>
  <div>
    <h2>{{ message }}</h2>
    <button @click="newGame">Try again</button>
  </div>
 </div>
</template>

<script>
import PokemonOption from '@/components/PokemonOption.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';
import getPokemonOption from '@/helpers/GetPokemonOption';
export default {
components:{
    PokemonOption,
    PokemonPicture
},
data(){
return{
  pokemonArr: [],
  pokemon:null,
  showPokemon:false,
  message:""
}
},
methods:{
 async mixedPokemons(){
this.pokemonArr = await getPokemonOption()
 const numRandom = Math.floor(Math.random()*4)
this.pokemon =this.pokemonArr[numRandom]
},
checkAnswer(selected){
this.showPokemon = true
if(selected===this.pokemon.id){
this.message= `Correct!! ${this.pokemon.name}`
}else{
  this.message= `Ops!! It ${this.pokemon.name}`
}
},
newGame(){
  this.pokemonArr = []
  this.pokemon = null
  this.showPokemon = false
  this.message = ''
  this.mixedPokemons()
}
},
mounted(){
  this.mixedPokemons()
}
} 

</script>

<style>

</style>