////////////////////////////////////////////////////////////////////////////////////////////////// M
const D1 = require('discord.js');
const D2 = require('discord.js');
const D3 = require('discord.js');
const D4 = require('discord.js');
const D5 = require('discord.js');
const D6 = require('discord.js');
const D7 = require('discord.js');
const D8 = require('discord.js');
////////////////////////////////////////////////////////////////////////////////////////////////// M
const p1 = new D1.Client();
const p2 = new D2.Client();
const p3 = new D3.Client();
const p4 = new D4.Client();
const p5 = new D5.Client();
const p6 = new D6.Client();
const p7 = new D7.Client();
const p8 = new D8.Client();
////////////////////////////////////////////////////////////////////////////////////////////////// M
p1.on('message', message => {
    if(message.author.id !== '343743154429755392') return;
    if(message.content.toLowerCase().split(' ')[0] == '1') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p2.on('message', message => {
    if(message.author.id !== '343743154429755392') return;
    if(message.content.toLowerCase().split(' ')[0] == '2') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p3.on('message', message => {
    if(message.author.id !== '343743154429755392') return;
    if(message.content.toLowerCase().split(' ')[0] == '3') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p4.on('message', message => {
    if(message.author.id !== '343743154429755392') return;
    if(message.content.toLowerCase().split(' ')[0] == '4') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p5.on('message', message => {
    if(message.author.id !== '343743154429755392') return;
    if(message.content.toLowerCase().split(' ')[0] == '5') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p6.on('message', message => {
    if(message.author.id !== '343743154429755392') return;
    if(message.content.toLowerCase().split(' ')[0] == '6') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p7.on('message', message => {
    if(message.author.id !== '343743154429755392') return;
    if(message.content.toLowerCase().split(' ')[0] == '7') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p8.on('message', message => {
    if(message.author.id !== '343743154429755392') return;
    if(message.content.toLowerCase().split(' ')[0] == '8') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
////////////////////////////////////////////////////////////////////////////////////////////////// M
p1.login(process.env.B1);
p2.login(process.env.B2);
p3.login(process.env.B3);
p4.login(process.env.B4);
p5.login(process.env.B5);
p6.login(process.env.B6);
p7.login(process.env.B7);
p8.login(process.env.B8);
