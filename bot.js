//////////////////////////////////////////////////////////////////////////////////////////////////
const Discord1 = require('discord.js');
const Discord2 = require('discord.js');
const Discord3 = require('discord.js');
const Discord4 = require('discord.js');
const Discord5 = require('discord.js');
const Discord6 = require('discord.js');
const Discord7 = require('discord.js');
const Discord8 = require('discord.js');
//////////////////////////////////////////////////////////////////////////////////////////////////
const client1 = new Discord1.Client();
const client2 = new Discord2.Client();
const client3 = new Discord3.Client();
const client4 = new Discord4.Client();
const client5 = new Discord5.Client();
const client6 = new Discord6.Client();
const client7 = new Discord7.Client();
const client8 = new Discord8.Client();
//////////////////////////////////////////////////////////////////////////////////////////////////
var ServerID = "523273139421970433"; 
var ChannelID = "523451175710752768";
var prefix = "H";
console.log('Hs .. Online.');
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.on('ready', () => {
    function timerFunc() {
        client1.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client2.on('ready', () => {
    function timerFunc() {
        client2.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client3.on('ready', () => {
    function timerFunc() {
        client3.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client4.on('ready', () => {
    function timerFunc() {
        client4.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client5.on('ready', () => {
    function timerFunc() {
        client5.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client6.on('ready', () => {
    function timerFunc() {
        client6.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client7.on('ready', () => {
    function timerFunc() {
        client7.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client8.on('ready', () => {
    function timerFunc() {
        client8.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "455331653309562910") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client2.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "343743154429755392") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client3.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "343743154429755392") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client4.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "343743154429755392") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client5.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "343743154429755392") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client6.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "343743154429755392") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client7.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "343743154429755392") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client8.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "343743154429755392") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.on('ready', () => {
client1.user.setActivity('Hs ..', {type: "STREAMING",url: "http://www.twitch.tv/iitxbro"});
});
client2.on('ready', () => {
client2.user.setActivity('Hs ..', {type: "STREAMING",url: "http://www.twitch.tv/iitxbro"});
});
client3.on('ready', () => {
client3.user.setActivity('Hs ..', {type: "STREAMING",url: "http://www.twitch.tv/iitxbro"});
});
client4.on('ready', () => {
client4.user.setActivity('Hs ..', {type: "STREAMING",url: "http://www.twitch.tv/iitxbro"});
});
client5.on('ready', () => {
client5.user.setActivity('Hs ..', {type: "STREAMING",url: "http://www.twitch.tv/iitxbro"});
});
client6.on('ready', () => {
client6.user.setActivity('Hs ..', {type: "STREAMING",url: "http://www.twitch.tv/iitxbro"});
});
client7.on('ready', () => {
client7.user.setActivity('Hs ..', {type: "STREAMING",url: "http://www.twitch.tv/iitxbro"});
});
client8.on('ready', () => {
client8.user.setActivity('Hs ..', {type: "STREAMING",url: "http://www.twitch.tv/iitxbro"});
});
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "343743154429755392") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
message.channel.send('#rep <@!343743154429755392>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!343743154429755392>').then(s => {
s.delete(3000);
});
}
});
client2.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "343743154429755392") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
message.channel.send('#rep <@!343743154429755392>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!343743154429755392>').then(s => {
s.delete(3000);
});
}
});
client2.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "343743154429755392") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
message.channel.send('#rep <@!343743154429755392>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!343743154429755392>').then(s => {
s.delete(3000);
});
}
});
client3.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "343743154429755392") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
message.channel.send('#rep <@!343743154429755392>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!343743154429755392>').then(s => {
s.delete(3000);
});
}
});
client4.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "343743154429755392") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
message.channel.send('#rep <@!343743154429755392>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!343743154429755392>').then(s => {
s.delete(3000);
});
}
});
client5.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "343743154429755392") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
message.channel.send('#rep <@!343743154429755392>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!343743154429755392>').then(s => {
s.delete(3000);
});
}
});
client6.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "343743154429755392") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
message.channel.send('#rep <@!343743154429755392>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!343743154429755392>').then(s => {
s.delete(3000);
});
}
});
client7.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "343743154429755392") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
message.channel.send('#rep <@!343743154429755392>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!343743154429755392>').then(s => {
s.delete(3000);
});
}
});
client8.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "343743154429755392") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
message.channel.send('#rep <@!343743154429755392>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!343743154429755392>').then(s => {
s.delete(3000);
});
}
});
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.login(process.env.BOT1_TOKEN);
client2.login(process.env.BOT2_TOKEN);
client3.login(process.env.BOT3_TOKEN);
client4.login(process.env.BOT4_TOKEN);
client5.login(process.env.BOT5_TOKEN);
client6.login(process.env.BOT6_TOKEN);
client7.login(process.env.BOT7_TOKEN);
client8.login(process.env.BOT8_TOKEN);
