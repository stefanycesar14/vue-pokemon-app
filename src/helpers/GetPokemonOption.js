import pokemonApi from "@/api/pokemonApi"



const getPokemons = ()=>{
    const pokemonArr = Array.from(Array(650))

    return (pokemonArr.map((_,index)=>index+1))
}
 const getPokemonOptions = async()=>{
    const mixedPokemons = getPokemons().sort(()=>Math.random()-0.50)
    
     const pokemons = await getPokemonNames(mixedPokemons.slice(0,4))
     return pokemons
}

const getPokemonNames = async ([a,b,c,d] =[])=>{
const promisesArr = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`)
]
     const [resp1, resp2, resp3, resp4] = await   Promise.all(promisesArr)
     return[{name:resp1.data.name, id:resp1.data.id},
        {name:resp2.data.name, id:resp2.data.id},
        {name:resp3.data.name, id:resp3.data.id},
        {name:resp4.data.name, id:resp4.data.id}]}

        export default getPokemonOptions