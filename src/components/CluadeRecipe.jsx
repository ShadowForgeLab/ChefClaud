
import ReactMarkDown from "react-markdown";

export default function CluadeRecipe(props) {
    return (
    <section className='Recipe-Section suggested-recipe-container' aria-live="polite">
    <h2>Chef Claude Recommends:</h2>
        <ReactMarkDown>{props.recipe}</ReactMarkDown>
</section>
    )
};
