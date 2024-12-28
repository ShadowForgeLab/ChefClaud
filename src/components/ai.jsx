import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe based on ingredients. 
Provide the response in **pure Markdown** (use ** for bold and - for lists). Do not use any HTML tags.
`

const hf = new HfInference(process.env.REACT_APP_CHEF_API)

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}