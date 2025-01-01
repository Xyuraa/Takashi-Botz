const fs = require("fs");
const os = require("os");
const { prepareWAMessageMedia, generateWAMessageFromContent } = require("@whiskeysockets/baileys");

let handler = async (m, { xyu, isCreator, isPremium, qtext, runtime }) => {
  let teksnya = `
 *乂 I N F O R M A T I O N*
  • *Botname :* ${global.botname2}
  • *Version :* ${global.versi}
  • *Mode :* ${xyu.public ? "Public" : "Self"}
  • *Creator :* 6283176305101
  • *Runtime Bot :* ${runtime(process.uptime())}
  • *Uptime Vps :* ${runtime(os.uptime())}
  
 *乂 I N F O - U S E R*
  • *Number :* ${m.sender.split("@")[0]}
  • *Status :* ${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}

  ┏❐  *⌜ Othermenu ⌟*  ❐
  ┃ッ .cekidch
  ┃ッ .brat 
  ┃ッ .brat2 
  ┃ッ .brat3 
  ┃ッ .quote 
  ┃ッ .ceknik
  ┃ッ .ocr
  ┃ッ .faketweet
  ┃ッ .qc
  ┃ッ .ttsearch 
  ┃ッ .rvo
  ┃ッ .stickerwm
  ┃ッ .smeme
  ┃ッ .sticker
  ┗❐
  
  ┏❐  *⌜ Searchmenu ⌟*  ❐
  ┃ッ .yts
  ┃ッ .apkmod
  ┃ッ .pinterest
  ┗❐
  
  ┏❐  *⌜ Toolsmenu ⌟*  ❐
  ┃ッ .ai
  ┃ッ .gpt
  ┃ッ .tourl
  ┃ッ .tourl2
  ┃ッ .ssweb
  ┃ッ .translate
  ┃ッ .tohd
  ┃ッ .shortlink
  ┃ッ .shortlink-dl
  ┃ッ .spam-pairing
  ┃ッ .bard
  ┗❐
  
  ┏❐  *⌜ Downloadmenu ⌟*  ❐
  ┃ッ .tiktok
  ┃ッ .instagram
  ┃ッ .mediafire
  ┃ッ .play
  ┃ッ .gitclone
  ┃ッ .gdrive
  ┃ッ .sfile
  ┗❐
  
  ┏❐  *⌜ Storemenu ⌟*  ❐
  ┃ッ .addrespon
  ┃ッ .delrespon
  ┃ッ .listrespon
  ┃ッ .done
  ┃ッ .proses
  ┗❐
  
  ┏❐  *⌜ Groupmenu ⌟*  ❐
  ┃ッ .add
  ┃ッ .kick
  ┃ッ .close
  ┃ッ .open
  ┃ッ .hidetag
  ┃ッ .kudetagc
  ┃ッ .leave
  ┃ッ .tagall
  ┃ッ .promote
  ┃ッ .demote
  ┃ッ .resetlinkgc
  ┃ッ .on
  ┃ッ .off
  ┃ッ .linkgc
  ┗❐
  
  ┏❐  *⌜ Ownermenu ⌟*  ❐
  ┃ッ .autoread
  ┃ッ .autoreadsw
  ┃ッ .autotyping
  ┃ッ .addplugins
  ┃ッ .listplugins
  ┃ッ .delplugins
  ┃ッ .getplugins
  ┃ッ .saveplugins
  ┃ッ .addowner
  ┃ッ .listowner
  ┃ッ .delowner
  ┃ッ .sendsc
  ┃ッ .self/public
  ┃ッ .setppbot
  ┃ッ .clearsession
  ┃ッ .clearchat
  ┃ッ .resetdb
  ┃ッ .restartbot
  ┃ッ .getsc
  ┃ッ .getcase
  ┃ッ .totag
  ┃ッ .listgc
  ┃ッ .joingc
  ┃ッ .delcase
  ┃ッ .addcase
  ┃ッ .upch
  ┃ッ .upsw
  ┃ッ .get <url>
  ┃ッ .sendcase
  ┃ッ .sendsc
  ┗❐
  `;

  const { imageMessage } = await prepareWAMessageMedia({
    image: fs.readFileSync('./src/media/thumb.jpg')
  }, { upload: xyu.waUploadToServer });

  const messageContent = {
    buttonsMessage: {
      contentText: teksnya,
      footerText: 'Takashi Botz',
      buttons: [
        {
          buttonId: '.owner',
          buttonText: { displayText: '🧑‍💻 Developer' },
          type: 1
        },
        {
          buttonId: '.gcbot',
          buttonText: { displayText: '🌐 Group Botz' },
          type: 1
        }
      ],
      headerType: 4,
      imageMessage: imageMessage,
    }
  };

  const message = generateWAMessageFromContent(m.chat, {
    ephemeralMessage: {
      message: messageContent
    }
  }, { userJid: xyu.user.id });

  await xyu.relayMessage(m.chat, message.message, { messageId: message.key.id });
};

handler.command = ["menu", "allmenu"];

module.exports = handler;