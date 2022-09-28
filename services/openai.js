const OpenAI = require('openai-api');
require('dotenv').config();

//set up openai api
const OPENAI_API_KEY = process.env.OPENAI_SECRET_KEY;
const openai = new OpenAI(OPENAI_API_KEY);

async function getJoke(jokePrompt){
    try{
        const gptResponse = await openai.complete({
            engine: 'text-davinci-002',
            prompt: jokePrompt,
            maxTokens: 256,
            temperature: 0.7,
            topP: 1,
            presencePenalty: 0,
            frequencyPenalty: 0,
            bestOf: 1,
            n: 1,
            stream: false
            });
    
        console.log(gptResponse.data);
        return gptResponse.data.choices[0].text
    }
    catch(err){
        console.log(err)
    }
};

module.exports = { getJoke }