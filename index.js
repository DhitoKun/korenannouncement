const { Client, GatewayIntentBits, ActivityType } = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        // ...
    ],
})
//const functionkoren = require("./includes/include-const.js")
const keepAlive = require("./server.js")
const Monitor = require('ping-monitor');
client.on('ready', () => {
 // functionkoren(client)
  console.log("BOT DISCORD KOYAKI RENTAL (OFFICIAL) Online");
  console.log(client.user.username);

// STATUS BOT KOYAKI ANNOUNCEMENT
client.user.setPresence({
  activities: [{ name: `Koyaki Announcement`, type: ActivityType.Listening }],
  status: 'online',
});
  
});
keepAlive();
const monitor = new Monitor({
    website: 'https://KoRen-Announcement.koyakirental.repl.co',
    title: 'Koyaki Rental Announcement',
    interval: 2
});
monitor.on('up', (res) => console.log(`${res.website} its on.`));
monitor.on('down', (res) => console.log(`${res.website} it has died - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} has stopped.`) );
monitor.on('error', (error) => console.log(error));
client.login(process.env.TOKEN);