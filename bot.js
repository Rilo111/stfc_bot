var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];


	var rnd = Math.floor(Math.random() * 10001);
	var allies = "Allies:\n\nFU\nREAV";
	var kos = "KOS (if you choose)\n\nTREX\nWHN\nAnyone that Jahma is hitting :)\n\nThat last one is not true.";
	var nap = "NAP:\n\nTITN and LGS\nYes, TITN has hit, so retaliation is okay.";
	var parsteel = "I am going to pretend you did not ask me that.";
	var tritanium = "The possibilities are more than you could imagine.";
	var ore = "Neutral Space\nore 2: Dhi'Ban, Deneva, Labac, Kepler-018, Fastolf, Azha, Sorenle\n\nRomulan Space\nore 3: Nabok, Huebr\nore 2: Aerimea\n\nKlingon Space\nOre 2: Lixar\n\nFederation Space\nOre 2: Doska, Thama";
	var gas = "Federation space\nGas 2: Siiolux, Thama\nGas 3: P'Jem, Priya\n\nRomulan Space\nGas 2: Aerimea, Vendus A\nGas 3: Davidul\n\nNeurtal space\nGas 2: Elona, Opla, Sorenle, Obilent, Cita Laga,Vindermiatrix, Zaurak\nGas 3: Midnight";
	var crystal = "Neutral Space\nore 2: Dhi'Ban, Deneva, Labac, Kepler-018, Fastolf, Azha, Sorenle\n\nRomulan Space\nore 3: Nabok, Huebr\nore 2: Aerimea\n\nKlingon Space\nOre 2: Lixar\n\nFederation Space\nOre 2: Doska, Thama";
	var npc = "NPC Resources\n\nParasteel\nOrion Slaver\nRigellian Destroyer\nNausican Outlaw\nSuliban Nomad\nFederation Trader\nFederation Patrol\nKlingon Patrol\nKlingon Trader\n\nTritanium\nOrion Traitor\nTakret Militia\n\nDilithium\nPakled Thief\nSona Pirate\nSuliban Nomad\nFederation Trader\nFederation Patrol\nKlingon Patrol\nKlingon Trader"
	var pizza = "https://forshiggles.files.wordpress.com/2013/02/totinos-pizza-rolls.jpg";
	var help = "Understood Commands:\n\nparsteel\ntritanium\nore\ngas\ncrystal\nnpc\n\allies\nally\nkos\nnap\npizza";
	var dinner = "http://www.reciperoulette.tv/#" + rnd;
	var noinfo = "I have no information about that.";

      
        args = args.splice(1);
        switch(cmd) {
            // !help
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: help
                });
            break;
            // !parsteel
            case 'parsteel':
                bot.sendMessage({
                    to: channelID,
                    message: parsteel
                });
            break;
            // !tritanium
            case 'tritanium':
                bot.sendMessage({
                    to: channelID,
                    message: tritanium
                });
            break;
            // !ore
            case 'ore':
                bot.sendMessage({
                    to: channelID,
                    message: ore
                });
            break;
            // !gas
            case 'gas':
                bot.sendMessage({
                    to: channelID,
                    message: gas
                });
            break;
            // !crystal
            case 'crystal':
                bot.sendMessage({
                    to: channelID,
                    message: crystal
                });
            break;
            // !npc
            case 'npc':
                bot.sendMessage({
                    to: channelID,
                    message: npc
                });
            break;
            // !allies
	    case 'ally':
            case 'allies':
                bot.sendMessage({
                    to: channelID,
                    message: allies
                });
	    break;
            // !kos
            case 'kos':
                bot.sendMessage({
                    to: channelID,
                    message: kos
                });
	    break;
            // !nap
            case 'nap':
                bot.sendMessage({
                    to: channelID,
                    message: nap
                });
	    break;
            // !pizza
            case 'pizza':
                bot.sendMessage({
                    to: channelID,
                    message: pizza
                });
	    break;
         }
     }
});
