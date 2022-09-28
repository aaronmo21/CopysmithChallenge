const koaRouter = require('koa-router')
const openai = require('../../services/openai.js')
const bodyParser = require('koa-bodyparser')
const Joke = require('../models/Joke');
require('dotenv').config();

//router and bodyparser middleware
const router = new koaRouter()
router.use(bodyParser())

router.post('/joke', async (ctx, next) => {
    //make sure we have our required fields
    if (
        !ctx.request.body.topic ||
        !ctx.request.body.ageGroup
    ) {
        ctx.response.status = 400;
        ctx.body = 'Please enter the data';
    } else {
        const topic = ctx.request.body.topic
        const ageGroup = ctx.request.body.ageGroup
        const prompt = `Write a funny joke about ${topic} for a ${ageGroup}`
        
        //call the openai function
        let punchline = await openai.getJoke(prompt)
        
        //replace newline at the beginning of the text
        punchline = punchline.replace(/^\s+|\s+$/g, '')
        
        let newJoke = new Joke({
            topic: ctx.request.body.topic,
            ageGroup: ctx.request.body.ageGroup,
            prompt: prompt,
            punchline: punchline,
            date: Date.now(),
        });
        try{
            //save to mongoDB
            const savedJoke = await newJoke.save();
            ctx.response.status = 201;
            console.log(savedJoke)
            ctx.response.body = newJoke;
            return punchline
        }
        catch(err){
            ctx.response.body = ({message: err});
        }
    }
    next();
})

module.exports = router;