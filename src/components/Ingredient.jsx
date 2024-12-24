import React from'react';

export default function Ingredient(){
    const Ingredients=['Chiken','Oregano','Tomatoes']
    const ListItems=Ingredients.map((item,index)=>{
        return(
        <li key={index}>{item}</li>
        )
    })
    function handleSubmit(event){
        event.preventDefault();
        console.log(`form submitted`)
        const formData=new FormData(event.currentTarget)
        const newIngredient=formData.get('ingredient')
        Ingredients.push(newIngredient)
        console.log(Ingredients);
    }
    return(
        <>
        <div  className='Main' >
            <form className="Input" onSubmit={handleSubmit} >
                <input type="text" placeholder='e.g. oregano' name='ingredient' />
                <button className='btn'>Add ingredients</button>
            </form>
            <ul className='InputItems'>
                {ListItems}
            </ul>
        </div>
        </>
    )
}