const express = require('express');
const router = express.Router();
const OpenAI  = require('openai');
const dotenv = require('dotenv');

dotenv.config();



const openai = new OpenAI({
    apiKey: process.env.API_KEY
});


router.route('/chat').post( async(req,res) =>{

    const reply = await openai.chat.completions.create({

        messages: [{ role: 'user', content: `${req.body.question}` }],
        model: 'gpt-3.5-turbo',
    });

    res.status(200).send(reply.data.choices[0].message.content);
});





// Test route
// router.route('/allData').post((req,res) =>{

//     const reply = req.body.message;
    
//     res.status(200).send(reply);
// });


module.exports = router;