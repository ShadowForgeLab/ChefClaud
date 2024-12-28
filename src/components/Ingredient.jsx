import React,{useEffect, useRef, useState} from'react';
import CluadeRecipe from './CluadeRecipe';
import IngredientList from './IngredientList';
import { getRecipeFromMistral } from './ai';
import Loading from '../images/Eclipse@1x-1.0s-200px-200px (1).gif'


export default function Ingredient(props){
    const [Ingredients,setIngredients]=useState([])
    const [recipe, setRecipe] = React.useState("")
    const [loading, setLoading] = useState(false);
    const [buttonClicked,setButtonClicked]=useState(false)


    const recipeSection=useRef(null);

    useEffect(()=>{
        if(recipe!=='' && recipeSection.current!==null){
            recipeSection.current.scrollIntoView({behavior:"smooth"});
        }
    },[recipe])
    
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



    useEffect(()=>{
        const fetchRecipe=async()=>{
            if(buttonClicked && Ingredients.length>0){
            setLoading(true);
            const recipe=await getRecipeFromMistral(Ingredients);
            setRecipe(recipe);
            setLoading(false);
            setButtonClicked(false);
            }}
            fetchRecipe();

            },[buttonClicked,Ingredients]);

    async function getRecipe(){
        setButtonClicked(true)

    }

    function handleDelete(){
        setIngredients([]); 
    }


    return(
        <>
        <main  className='Main' >
            <form className="Input" action={submitForm}>  {/* Instead of adding a event listner to theh form use action button*/}
                <input type="text" placeholder='e.g. oregano' name='ingredient' required />
                <button className='btn' aria-label='Add more than 4 ingredients to get a result'>Add ingredients
                <span className="tooltip">Add more than 4 ingredients to get a result</span>
                </button>
            </form>
            {Ingredients.length===0 && <div className="mt-3" style={{marginLeft:"23rem"}}>
                <p>Note: Add 5 or more than five ingredietns to get a recipe .</p>
            </div>}
            <IngredientList ref={recipeSection} Ingredients={Ingredients} handleDelete={handleDelete} getRecipe={getRecipe} />

            {loading && <div className="LoadingGif"><img style={{width:"100px"}} src={Loading} alt='Loading...'/></div>}

            {recipe && <CluadeRecipe recipe={recipe} />}
        </main>
        
        </>
    )
}
