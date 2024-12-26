import React,{useState} from'react';
import CluadeRecipe from './CluadeRecipe';
import IngredientList from './IngredientList';
import { getRecipeFromMistral } from './ai';
import Loading from '../images/Eclipse@1x-1.0s-200px-200px (1).gif'


export default function Ingredient(props){
    const [Ingredients,setIngredients]=useState(['all the main spices','Chicken breast','tomato paste','pasta','Leg piece'])
    
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

    const [recipe, setRecipe] = React.useState("")
    const [loading, setLoading] = useState(false);

    async function getRecipe() {
        console.log('button clicked');
        setLoading(true); // Start loading
        try {
            const recipeMarkdown = await getRecipeFromMistral(Ingredients);
            setRecipe(recipeMarkdown);
            console.log(recipeMarkdown);
        } catch (error) {
            console.error('Error fetching recipe:', error);
        } finally {
            setLoading(false); // End loading
        }
    }


    return(
        <>
        <main  className='Main' >
            <form className="Input" action={submitForm}>  {/* Instead of adding a event listner to theh form use action button*/}
                <input type="text" placeholder='e.g. oregano' name='ingredient' required />
                <button className='btn'>Add ingredients</button>
            </form>
            <IngredientList Ingredients={Ingredients} getRecipe={getRecipe}/>

            {loading && <div className="LoadingGif"><img style={{width:"100px"}} src={Loading} alt='Loading...'/></div>}

            {recipe && <CluadeRecipe recipe={recipe} />}
        </main>
        
        </>
    )
}