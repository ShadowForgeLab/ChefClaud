export default function IngredientList(props) {
    const ListItems=props.Ingredients.map((item,index)=>{
        return(
        <li key={index}>{item}</li>
        )
    })
    return(
        <>
        <section className='Ingredient-container'>
                {props.Ingredients.length>0 && <h2 className='Ingre-Header'>Ingredients on hand:</h2>}
                <ul className='Ingredient-List'>
                    {ListItems}
                </ul>
                {props.Ingredients.length>4 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe ?</h3>
                        <p>Generate a recipe from your list of Ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a Recipe</button>
                </div>}
            </section>
        </>
    )
};
