// import { OpenAI } from "openai"; // Use OpenAI directly since the new SDK has updated exports
import { HfInference } from '@huggingface/inference'

// Initialize OpenAI with your API key
// const openai = new OpenAI({
//   apiKey: process.env.REACT_APP_CHEF_API, dangerouslyAllowBrowser: true// Ensure your API key is stored in a .env file
// });


  const SYSTEM_PROMPT = `
    You are a culinary assistant specializing in Indian recipes. 
    The user will provide a list of ingredients they have, and you will suggest one recipe. 
    Format the output in **Markdown** with bold headers for ingredients and steps. 
    Use - for list formatting. Avoid HTML entirely.`;

    const hf = new HfInference(process.env.HF_ACCESS_TOKEN)

    export async function getRecipeFromMistral(ingredientsArr) {
        const ingredientsString = ingredientsArr.join(", ")
        try {
            const response = await hf.chatCompletion({
                model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
                ],
                max_tokens: 1024,
            })
            return response.choices[0].message.content
        } catch (err) {
            console.error(err.message)
        }
    }