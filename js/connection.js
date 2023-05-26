// Declare an async function


const getData = async (id) => { 
    try{  
    const DataJSON = await fetch( `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const respJSON = await DataJSON.json()

      console.log(respJSON.meals[0].strMeal);
  
      const{createApp} = Vue
      createApp({
        data(){
            return{
                receta: respJSON.meals[0].strMeal
            }
        }

      }).mount("#api")

    }catch(error){console.log("hubo un error", error)}
}
getData(52772)
