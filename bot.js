const {Client,GatewayIntentBits} = require('discord.js');
const {Dashboard} = require("./index.js");
require("dotenv").config();


const client = new Client({

    intents:[GatewayIntentBits.Guilds]
});


client.on("ready",() =>{

    console.log(`Logged in as ${client.user.tag}`);
    Dashboard(client);
    console.log("Dashboard iniciado con éxito");
})

client.login(process.env.TOKEN)