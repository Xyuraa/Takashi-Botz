const fs = require("fs");
const os = require("os");

let handler = async (m, { xyu, isCreator, isPremium, qtext, runtime }) => {
  let teksnya = `
 *乂 I N F O R M A T I O N*
  • *Botname :* ${global.botname2}
  • *Version :* ${global.versi}
  • *Mode :* ${xyu.public ? "Public" : "Self"}
  • *Creator :* @${global.owner}
  • *Runtime Bot :* ${runtime(process.uptime())}
  • *Uptime Vps :* ${runtime(os.uptime())}
  
 *乂 I N F O - U S E R*
  • *Number :* ${m.sender.split("@")[0]}
  • *Status :* ${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}

  ┏❐  *⌜ Othermenu ⌟*  ❐
  ┃ッ .cekidch
  ┃ッ .brat 
  ┃ッ .brat2 < support emoji >
  ┃ッ .quote 
  ┃ッ .doxxing
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
  ┃ッ .openai
  ┃ッ .gemini-image
  ┃ッ .enc
  ┗❐
  
  ┏❐  *⌜ Downloadmenu ⌟*  ❐
  ┃ッ .tiktok
  ┃ッ .instagram
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
  
  ┏❐  *⌜ Storemenu ⌟*  ❐
  ┃ッ .addprem
  ┃ッ .delprem
  ┃ッ .listprem
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
  ┗❐
  `;

  await xyu.sendMessage(
    m.chat,
    {
      document: fs.readFileSync("./package.json"),
      mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      caption: teksnya,
      fileName: `${global.botname2} V${global.versi}`,
      contextInfo: {
        isForwarded: true,
        forwardingScore: 9999,
        businessMessageForwardInfo: {
          businessOwnerJid: global.owner + "@s.whatsapp.net",
        },
        forwardedNewsletterMessageInfo: {
          newsletterName: `${global.botname}`,
          newsletterJid: global.idSaluran,
        },
        mentionedJid: [global.owner + "@s.whatsapp.net", m.sender],
        externalAdReply: {
          containsAutoReply: true,
          thumbnail: await fs.readFileSync("./src/media/thumb.jpg"),
          title: `© Copyright By ${global.namaOwner}`,
          renderLargerThumbnail: true,
          sourceUrl: global.linkSaluran,
          mediaType: 1,
        },
      },
    },
    { quoted: qtext }
  );
};

handler.command = ["menu"];

module.exports = handler;