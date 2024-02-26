
const TelegramBot = require('node-telegram-bot-api');
const botToken = '6626615868:AAGVCOIFIUghAb408UL6dzd8D89JgSLCzR0';
const bot = new TelegramBot(botToken, { polling: true });

const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY ="AIzaSyCg-JZVIZ1pxZg_ZsCOlC2CPx11cA36qwE";

const genAI = new GoogleGenerativeAI(API_KEY);
bot.on('message', function (msg) {
  
  const messag = msg.text;
  const chatId = msg.chat.id;
  const message=messag.substring(0,3);
if(messag =='/start'){

bot.sendMessage(chatId, 'Hello there! I am gemini , a large language model, trained by Google.How can I assist you?');




}
  if(messag !== '/start'){
async function run1() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});


  const result = await model.generateContent(messag);
  const response = await result.response;
  bot.sendMessage(chatId,response.text());
  
  console.log(messag);
}

run1();
}
});
