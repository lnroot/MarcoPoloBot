const {Client, GatewayIntentBits} = require('discord.js')
require('dotenv/config') //access env file

const client = new Client({
    intents: [ //intents determine which events Discord will send your app when you're creating a Gateway API connection
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
})

client.on('ready', () => {
console.log('Bot is ready')
})

client.on('messageCreate', message => {
    if (message.content === 'marco') { //user's message
        message.reply('polo') //bot's message
    }
})

client.login(process.env.TOKEN) //allow the app to sign in to the API and access the bot