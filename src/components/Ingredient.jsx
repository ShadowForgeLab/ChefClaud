import React,{useState} from'react';
import CluadeRecipe from './CluadeRecipe';
import IngredientList from './IngredientList';

export default function Ingredient(){
    const [Ingredients,setIngredients]=useState(['all the main spices','Chicken breast','tomato paste','pasta','Leg piece'])
    
    const [recipeShown,setRecipeShown]=useState(false);
    // function handleSubmit(event){
    //     event.preventDefault();
    //     // console.log(`form submitted`)
    //     const formEle=event.currentTarget
    //     const formData=new FormData(formEle)
    //     const newIngredient=formData.get('ingredient')
    //     setIngrdients(prevIngre=>[...prevIngre,newIngredient]);
    //     // Ingredients.push(newIngredient)
    //     // console.log(Ingredients);
    //     formEle.reset()
    // }//hard form submitting

    //In built form submitting
    function submitForm(formData){
        const newIngredient=formData.get('ingredient')
        setIngredients((prevIngre)=>{
            const updatedIngre=[...prevIngre,newIngredient];
            console.log(updatedIngre);
            return updatedIngre;
        });
        
    }

    function toggleRecipeShown(){
        setRecipeShown(prevRecipeShown=>!prevRecipeShown)
        console.log(recipeShown);
    }


    return(
        <>
        <main  className='Main' >
            <form className="Input" action={submitForm}>  {/* Instead of adding a event listner to theh form use action button*/}
                <input type="text" placeholder='e.g. oregano' name='ingredient' required />
                <button className='btn'>Add ingredients</button>
            </form>
            <IngredientList Ingredients={Ingredients} recipeShown={toggleRecipeShown}/>
            {recipeShown && <CluadeRecipe Ingredients={Ingredients}/>}
        </main>
        
        </>
    )
}