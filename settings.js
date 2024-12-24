const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

// Settings Bot 
global.owner = '6283176305101'
global.versi = version
global.namaOwner = "Xyuraa"
global.ownername = "Xyuraa - Yudis"
global.packname = 'Bot WhatsApp'
global.botname = '𝐓𝐚𝐤𝐚𝐬𝐡𝐢 - 𝐁𝐨𝐭𝐳'
global.botname2 = '𝐓𝐚𝐤𝐚𝐬𝐡𝐢 - 𝐁𝐨𝐭𝐳'

global.tempatDB = 'database.json' // Jangan ubah
global.pairing_code = true // Jangan ubah

// Settings Link / Tautan
global.linkOwner = "https://wa.me/6283176305101"
global.linkGrup = "https://whatsapp.com/channel/0029VaqBRU9ATRSkHSEfND1w"

// Settings Channel / Saluran
global.linkSaluran = "https://whatsapp.com/channel/0029VaqBRU9ATRSkHSEfND1w"
global.idSaluran = "120363324795151892@newsletter"
global.namaSaluran = "𝐓𝐚𝐤𝐚𝐬𝐡𝐢 - 𝐁𝐨𝐭𝐳"
global.channeljid = "120363324795151892@newsletter"

// Settings Image Url
global.image = {
menu: "https://k.top4top.io/p_3278r0wsm1.jpg", 
reply: "https://k.top4top.io/p_3278r0wsm1.jpg"
}

global.Scraper = {
    Ytdl: require('./src/scrape/ytdl')
};

// Message Command 
global.mess = {
	owner: "* *Akses Ditolak*\nFitur ini hanya untuk owner bot!",
	admin: "* *Akses Ditolak*\nFitur ini hanya untuk admin grup!",
	botAdmin: "* *Akses Ditolak*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "* *Akses Ditolak*\nFitur ini hanya untuk dalam grup!",
	private: "* *Akses Ditolak*\nFitur ini hanya untuk dalam private chat!",
	prem: "* *Akses Ditolak*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})