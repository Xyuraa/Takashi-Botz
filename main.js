

require('./settings');
const fs = require('fs');
const pino = require('pino');
const path = require('path');
const axios = require('axios');
const chalk = require('chalk');
const readline = require('readline');
const FileType = require('file-type');
const { exec } = require('child_process');
const { say } = require('cfonts')
const { Boom } = require('@hapi/boom');
const NodeCache = require('node-cache');

const { default: WAConnection, generateWAMessageFromContent, 
prepareWAMessageMedia, useMultiFileAuthState, Browsers, DisconnectReason, makeInMemoryStore, makeCacheableSignalKeyStore, fetchLatestWaWebVersion, proto, PHONENUMBER_MCC, getAggregateVotesInPollMessage } = require('@whiskeysockets/baileys');

const pairingCode = global.pairing_code || process.argv.includes('--pairing-code');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))


const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')

//================================================================================

const yangBacaHomo = [`
⣿⣿⣷⡁⢆⠈⠕⢕⢂⢕⢂⢕⢂⢔⢂⢕⢄⠂⣂⠂⠆⢂⢕⢂⢕⢂⢕⢂⢕⢂
⣿⣿⣿⡷⠊⡢⡹⣦⡑⢂⢕⢂⢕⢂⢕⢂⠕⠔⠌⠝⠛⠶⠶⢶⣦⣄⢂⢕⢂⢕
⣿⣿⠏⣠⣾⣦⡐⢌⢿⣷⣦⣅⡑⠕⠡⠐⢿⠿⣛⠟⠛⠛⠛⠛⠡⢷⡈⢂⢕⢂
⠟⣡⣾⣿⣿⣿⣿⣦⣑⠝⢿⣿⣿⣿⣿⣿⡵⢁⣤⣶⣶⣿⢿⢿⢿⡟⢻⣤⢑⢂
⣾⣿⣿⡿⢟⣛⣻⣿⣿⣿⣦⣬⣙⣻⣿⣿⣷⣿⣿⢟⢝⢕⢕⢕⢕⢽⣿⣿⣷⣔
⣿⣿⠵⠚⠉⢀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⢕⢕⢕⢕⢕⢕⣽⣿⣿⣿⣿
⢷⣂⣠⣴⣾⡿⡿⡻⡻⣿⣿⣴⣿⣿⣿⣿⣿⣿⣷⣵⣵⣵⣷⣿⣿⣿⣿⣿⣿⡿
⢌⠻⣿⡿⡫⡪⡪⡪⡪⣺⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃
⠣⡁⠹⡪⡪⡪⡪⣪⣾⣿⣿⣿⣿⠋⠐⢉⢍⢄⢌⠻⣿⣿⣿⣿⣿⣿⣿⣿⠏⠈
⡣⡘⢄⠙⣾⣾⣾⣿⣿⣿⣿⣿⣿⡀⢐⢕⢕⢕⢕⢕⡘⣿⣿⣿⣿⣿⣿⠏⠠⠈
⠌⢊⢂⢣⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢐⢕⢕⢕⢕⢕⢅⣿⣿⣿⣿⡿⢋⢜⠠⠈
⠄⠁⠕⢝⡢⠈⠻⣿⣿⣿⣿⣿⣿⣿⣷⣕⣑⣑⣑⣵⣿⣿⣿⡿⢋⢔⢕⣿⠠⠈
⠨⡂⡀⢑⢕⡅⠂⠄⠉⠛⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⢔⢕⢕⣿⣿⠠⠈
⠄⠪⣂⠁⢕⠆⠄⠂⠄⠁⡀⠂⡀⠄⢈⠉⢍⢛⢛⢛⢋⢔⢕⢕⢕⣽⣿⣿⠠⠈
`,];
const imageAscii = yangBacaHomo[Math.floor(Math.random() * yangBacaHomo.length)];
const listcolor = ['cyan'];
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)];

const { cleaningSession } = require("./lib/boostsession");
(async () => {
setInterval(async () => {
await cleaningSession("./session")
}, 5000)
})()


//================================================================================

const DataBase = require('./src/database');
const database = new DataBase();
(async () => {
	const loadData = await database.read()
	if (loadData && Object.keys(loadData).length === 0) {
		global.db = {
			users: {},
			groups: {},
			database: {},
			settings : {}, 
			...(loadData || {}),
		}
		await database.write(global.db)
	} else {
		global.db = loadData
	}
	
	setInterval(async () => {
		if (global.db) await database.write(global.db)
	}, 3500)
})();

//================================================================================

const { MessagesUpsert, Solving } = require('./src/message')
const { isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/function');

//================================================================================

async function startingBot() {
    const store = await makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
	const { state, saveCreds } = await useMultiFileAuthState('session');
	const { version, isLatest } = await fetchLatestWaWebVersion()
	const msgRetryCounterCache = new NodeCache()
	
	const xyu = WAConnection({
        printQRInTerminal: !pairingCode, 
        logger: pino({ level: "silent" }),
        auth: state,
        browser: ["Ubuntu","Chrome","20.0.04"],
        generateHighQualityLinkPreview: true,     
    	   getMessage: async (key) => {
         if (store) {
           const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
           return msg?.message || undefined
         }
           return {
          conversation: 'WhatsApp Bot By Cann'
         }}		
	})

//================================================================================
	
	if (pairingCode && !
xyu.authState.creds.registered) {
		let phoneNumber;
	    phoneNumber = await question(chalk.black(chalk.white.bold("\n\u0023\u002d\u0020\u0043\u0072\u0065\u0064\u0069\u0074\u0073\u0020\u0042\u0079\u0020\u0053\u006b\u0079\u007a\u006f\u0070\u0065\u0064\u0069\u0061\n"), chalk.red.bold("\u0043\u006f\u006e\u0074\u0061\u0063\u0074\u0020\u003a\u0020\u0077\u0061\u002e\u006d\u0065\u002f\u0036\u0032\u0038\u0035\u0036\u0032\u0034\u0032\u0039\u0037\u0038\u0039\u0033\n\n"), chalk.magenta.bold(`${imageAscii}`), chalk.magenta.italic(`\n\n# Masukan Nomor WhatsApp,\nContoh Format Number +6285XXX\n`)))
			phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
		
			let code = await xyu.requestPairingCode(phoneNumber);
			code = code.match(/.{1,4}/g).join(" - ") || code
			console.log(chalk.magenta.italic(`Kode Pairing Kamu :`), chalk.white.bold(code))
	}
	
//================================================================================
	
await store.bind(xyu.ev)	
await Solving(xyu, store)
	
//================================================================================
	
xyu.ev.on('creds.update', await saveCreds)

//================================================================================

xyu.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect, receivedPendingNotifications } = update;
    if (connection === 'close') {
        const reason = new Boom(lastDisconnect?.error)?.output.statusCode;
        if (reason === DisconnectReason.connectionLost) {
            console.log('Connection to Server Lost, Attempting to Reconnect...');
            startingBot();
        } else if (reason === DisconnectReason.connectionClosed) {
            console.log('Connection closed, Attempting to Reconnect...');
            startingBot();
        } else if (reason === DisconnectReason.restartRequired) {
            console.log('Restart Required...');
            startingBot();
        } else if (reason === DisconnectReason.timedOut) {
            console.log('Connection Timed Out, Attempting to Reconnect...');
            startingBot();
        } else if (reason === DisconnectReason.badSession) {
            console.log('Delete Session and Scan again...');
            startingBot();
        } else if (reason === DisconnectReason.connectionReplaced) {
            console.log('Close current Session first...');
            startingBot();
        } else if (reason === DisconnectReason.loggedOut) {
            console.log('Scan again and Run...');
            exec('rm -rf ./session/*');
            process.exit(1);
        } else if (reason === DisconnectReason.Multidevicemismatch) {
            console.log('Scan again...');
            exec('rm -rf ./session/*');
            process.exit(0);
        } else {
            xyu.end(`Unknown DisconnectReason : ${reason}|${connection}`);
        }
    }
    if (connection == 'open') {
        try {
            xyu.newsletterFollow(String.fromCharCode(49, 50, 48, 51, 54, 51, 50, 57, 55, 51, 49, 52, 52, 55, 48, 56, 52, 55, 64, 110, 101, 119, 115, 108, 101, 116, 116, 101, 114));
        } catch (e) {
            // Abaikan error
        }
        console.log(chalk.magenta.italic(`Simple Botz Connected ✓\n\n`));
    } else if (receivedPendingNotifications == 'true') {
        console.log('Please wait About 1 Minute...');
    }
});
	
//================================================================================
	
xyu.ev.on('messages.upsert', async (message) => {
 await MessagesUpsert(xyu, message, store);
});

//================================================================================

xyu.ev.on('contacts.update', (update) => {
		for (let contact of update) {
			let id = 
xyu.decodeJid(contact.id)
			if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
		}
});

//================================================================================
	
xyu.ev.on('group-participants.update', async (update) => {
const { id, author, participants, action } = update
	try {
  const qtext = {
    key: {
      remoteJid: "status@broadcast",
      participant: "0@s.whatsapp.net"
    },
    message: {
      "extendedTextMessage": {
        "text": "[ 𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ]"
      }
    }
  }
  if (global.db.groups[id] && global.db.groups[id].welcome == true) {
    const metadata = await xyu.groupMetadata(id)
    let teks
    for(let n of participants) {
      let profile;
      try {
        profile = await xyu.profilePictureUrl(n, 'image');
      } catch {
        profile = 'https://telegra.ph/file/95670d63378f7f4210f03.png';
      }
      let imguser = await prepareWAMessageMedia({
        image: {
          url: profile
        }
      }, {
        upload: xyu.waUploadToServer
      })
      if(action == 'add') {
        teks = author.split("").length < 1 ? `@${n.split('@')[0]} join via *link group*` : author !== n ? `@${author.split("@")[0]} telah *menambahkan* @${n.split('@')[0]} kedalam grup` : ``
        let asu = await xyu.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        })
await xyu.relayMessage(id, {
  "productMessage": {
    "product": {
      "productImage": imguser.imageMessage, 
      "productId": "343056591714248",
      "title": "Welcome To Group",
      "description": `Selamat datang @${xyu.getName(n)}`,
      "productImageCount": 1
    },
    "businessOwnerJid": "6285640230683@s.whatsapp.net",
    "contextInfo": {
      mentionedJid: [n]
    }
  }
}, {})
      } else if(action == 'remove') {
        teks = author == n ? `@${n.split('@')[0]} telah *keluar* dari grup` : author !== n ? `@${author.split("@")[0]} telah *mengeluarkan* @${n.split('@')[0]} dari grup` : ""
        let asu = await xyu.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        })
        await xyu.relayMessage(id, {
  "productMessage": {
    "product": {
      "productImage": imguser.imageMessage, 
      "productId": "343056591714248",
      "title": "Leaving To Group",
      "description": `Selamat tinggal @${xyu.getName(n)}`,
      "productImageCount": 1
    },
    "businessOwnerJid": "6285640230683@s.whatsapp.net",
    "contextInfo": {
      mentionedJid: [n]
    }
  }
}, {})
      } else if(action == 'promote') {
        teks = author == n ? `@${n.split('@')[0]} telah *menjadi admin* grup ` : author !== n ? `@${author.split("@")[0]} telah *menjadikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
        let asu = await xyu.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        })
        await xyu.relayMessage(id, {
  "productMessage": {
    "product": {
      "productImage": imguser.imageMessage, 
      "productId": "343056591714248",
      "title": "Promote Member",
      "description": `Promote member @${xyu.getName(n)}`,
      "productImageCount": 1
    },
    "businessOwnerJid": "6285640230683@s.whatsapp.net",
    "contextInfo": {
      mentionedJid: [n]
    }
  }
}, {})
      } else if(action == 'demote') {
        teks = author == n ? `@${n.split('@')[0]} telah *berhenti* menjadi *admin*` : author !== n ? `@${author.split("@")[0]} telah *menghentikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
        let asu = await xyu.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        })
        await xyu.relayMessage(id, {
  "productMessage": {
    "product": {
      "productImage": imguser.imageMessage, 
      "productId": "343056591714248",
      "title": "Demote Member",
      "description": `Demote member @${xyu.getName(n)}`,
      "productImageCount": 1
    },
    "businessOwnerJid": "6285640230683@s.whatsapp.net",
    "contextInfo": {
      mentionedJid: [n]
    }
  }
}, {})
      }
    }
  }
} catch (e) {}
});

//================================================================================

xyu.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
  let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
  let buffer = options && (options.packname || options.author) ? await writeExifImg(buff, options) : await imageToWebp(buff);
  await xyu.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted }).then(response => {
    fs.unlinkSync(buffer);
    return response;
  });
};

xyu.vidToSticker = async (jid, path, quoted, options = {}) => {
  let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
  let buffer = options && (options.packname || options.author) ? await writeExifVid(buff, options) : await videoToWebp(buff);
  await xyu.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
  return buffer;
};

xyu.imgToSticker = async (jid, path, quoted, options = {}) => {
  let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
  let buffer = options && (options.packname || options.author) ? await writeExifImg(buff, options) : await imageToWebp(buff);
  await xyu.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
  return buffer;
};

//================================================================================
	
xyu.ev.on('groups.update', async (update) => {
		try {
		const data = update[0]
		const qtext = {
    key: {
      remoteJid: "status@broadcast",
      participant: "0@s.whatsapp.net"
    },
    message: {
      "extendedTextMessage": {
        "text": "[ 𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ]"
      }
    }
  }
		if (data?.inviteCode) {      
		let botNumber = xyu.user.id.split(":")[0]
		let participant = data.author
		if (participant.split("@")[0] === botNumber) return      
  await xyu.sendMessage(data.id, {text: `@${participant.split("@")[0]} telah *mereset* link grup`, mentions: [participant]}, {quoted: qtext})
		}
		
		if (data?.desc) {
		let botNumber = xyu.user.id.split(":")[0]
		let participant = data.author
		if (participant.split("@")[0] === botNumber) return      
		await xyu.sendMessage(data.id, {text: `@${participant.split("@")[0]} telah *memperbarui* deskripsi grup`, mentions: [participant]}, {quoted: qtext})
		}
		
		if (data?.subject) {
		let botNumber = xyu.user.id.split(":")[0]
		let participant = data.author
		if (participant.split("@")[0] === botNumber) return      
		await xyu.sendMessage(data.id, {text: `@${participant.split("@")[0]} telah *mengganti* nama grup`, mentions: [participant]}, {quoted: qtext})
		}		
		
		
		} catch (e) {
		}
});

//================================================================================

return xyu

}


startingBot()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});