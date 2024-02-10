const { default: OpenAI } = require("openai");
const readline = require("readline-sync");


require("dotenv").config({path:"./.env"});

(async ()=>{
    while (true) {
        var cevap = readline.question("\n Soru giriniz:");
        const openai = new OpenAI({apiKey:process.env.APIKEY});
        const stream = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: cevap }],
            stream:true
          });
          for await (const chunk of stream) {
            process.stdout.write(chunk.choices[0]?.delta?.content || '');
          } 
    }
    
    
})()

