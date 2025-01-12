const fs = require("fs");
const os = require("os");
const { prepareWAMessageMedia, generateWAMessageFromContent } = require("@whiskeysockets/baileys");

let handler = async (m, { xyu, pushname, isCreator, isPremium, qtext, runtime }) => {
  let teksnya = `
 *乂 I N F O R M A T I O N*
  • *Botname :* ${global.botname2}
  • *Version :* ${global.versi}
  • *Mode :* ${xyu.public ? "Public" : "Self"}
  • *Runtime Bot :* ${runtime(process.uptime())}
  • *Uptime Vps :* ${runtime(os.uptime())}
  
 *乂 I N F O - U S E R*
  • *Number :* ${m.sender.split("@")[0]}
  • *Status :* ${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}

  ┏⪼  ⧼ Ｆｕｎ  ｍｅｎｕ  ⧽  
  ┃𖦜 .brat 
  ┃𖦜 .brat2 
  ┃𖦜 .brat3 
  ┃𖦜 .txt2img
  ┃𖦜 .quote 
  ┃𖦜 .ocr
  ┃𖦜 .faketweet
  ┃𖦜 .emojimix 
  ┃𖦜 .qc
  ┃𖦜 .rvo
  ┃𖦜 .stickerwm
  ┃𖦜 .smeme
  ┃𖦜 .sticker
  ┗⪼
  
  ┏⪼  ⧼ Ｅｐｈｏｔｏ３６０ Ｍｅｎｕ ⧽  
  ┃𖦜 .glitchtext
  ┃𖦜 .writetext
  ┃𖦜 .advancedglow
  ┃𖦜 .typographytext
  ┃𖦜 .pixelglitch
  ┃𖦜 .neonglitch
  ┃𖦜 .flagtext
  ┃𖦜 .flag3dtext
  ┃𖦜 .deletingtext
  ┃𖦜 .blackpinkstyle
  ┃𖦜 .glowingtext
  ┃𖦜 .underwatertext
  ┃𖦜 .logomaker
  ┃𖦜 .cartoonstyle
  ┃𖦜 .papercutstyle
  ┃𖦜 .watercolortext
  ┃𖦜 .effectclouds
  ┃𖦜 .blackpinklogo
  ┃𖦜 .gradienttext
  ┃𖦜 .summerbeach
  ┃𖦜 .luxurygold
  ┃𖦜 .multicoloredneon
  ┃𖦜 .sandsummer
  ┃𖦜 .galaxywallpaper
  ┃𖦜 .1917style
  ┃𖦜 .makingneon
  ┃𖦜 .royaltext
  ┃𖦜 .freecreate
  ┃𖦜 .galaxystyle
  ┃𖦜 .lighteffects
  ┗⪼
  
  ┏⪼  ⧼ Ｓｅａｒｃｈ ｍｅｎｕ  ⧽  
  ┃𖦜 .yts
  ┃𖦜 .apkmod
  ┃𖦜 .ttsearch 
  ┃𖦜 .pinterest
  ┗⪼
  
  ┏⪼  ⧼ Ｍｅｎｕ ａｉ ⧽ 
  ┃𖦜 .ai
  ┃𖦜 .gpt
  ┃𖦜 .bard
  ┃𖦜 .takashi
  ┗⪼
  
  ┏⪼  ⧼ Ｔｏｏｌｓ ｍｅｎｕ ⧽ 
  ┃𖦜 .tourl
  ┃𖦜 .tourl2
  ┃𖦜 .ssweb
  ┃𖦜 .translate
  ┃𖦜 .remini
  ┃𖦜 .hdvid
  ┃𖦜 .shortlink
  ┃𖦜 .shortlink-dl
  ┃𖦜 .spam-pairing
  ┗⪼
  
  ┏⪼  ⧼ Ｄｏｗｎ ｍｅｎｕ ⧽  
  ┃𖦜 .tiktok
  ┃𖦜 .instagram
  ┃𖦜 .mediafire
  ┃𖦜 .play
  ┃𖦜 .gitclone
  ┃𖦜 .gdrive
  ┃𖦜 .sfile
  ┃𖦜 .videydl
  ┗⪼
  
  ┏⪼  ⧼ Ｓｔｏｒｅ ｍｅｎｕ ⧽  
  ┃𖦜 .addrespon
  ┃𖦜 .delrespon
  ┃𖦜 .listrespon
  ┃𖦜 .done
  ┃𖦜 .proses
  ┗⪼
  
  ┏⪼  ⧼ Ｇｒｏｕｐ ｍｅｎｕ ⧽  
  ┃𖦜 .add
  ┃𖦜 .kick
  ┃𖦜 .group < mode >
  ┃𖦜 .hidetag
  ┃𖦜 .kudetagc
  ┃𖦜 .leave
  ┃𖦜 .tagall
  ┃𖦜 .promote
  ┃𖦜 .demote
  ┃𖦜 .resetlinkgc
  ┃𖦜 .on
  ┃𖦜 .off
  ┃𖦜 .linkgc
  ┗⪼
  
  ┏≫  ⧼ Ｏｗｎｅｒ ｍｅｎｕ ⧽  
  ┃𖦜 .autoread
  ┃𖦜 .autoreadsw
  ┃𖦜 .autotyping
  ┃𖦜 .addplugins
  ┃𖦜 .listplugins
  ┃𖦜 .delplugins
  ┃𖦜 .getplugins
  ┃𖦜 .saveplugins
  ┃𖦜 .addowner
  ┃𖦜 .listowner
  ┃𖦜 .delowner
  ┃𖦜 .ceknik
  ┃𖦜 .cekidch
  ┃𖦜 .sendsc
  ┃𖦜 .mode
  ┃𖦜 .setppbot
  ┃𖦜 .clearsession
  ┃𖦜 .clearchat
  ┃𖦜 .resetdb
  ┃𖦜 .restartbot
  ┃𖦜 .getsc
  ┃𖦜 .getcase
  ┃𖦜 .totag
  ┃𖦜 .listgc
  ┃𖦜 .joingc
  ┃𖦜 .delcase
  ┃𖦜 .addcase
  ┃𖦜 .upch
  ┃𖦜 .upsw
  ┃𖦜 .get <url>
  ┃𖦜 .sendcase
  ┃𖦜 .sendsc
  ┗⪼
  `;

  // Menyiapkan video sebagai media
  const { imageMessage } = await prepareWAMessageMedia({
    image: { url: "https://files.catbox.moe/fuc0ox.jpg" }
  }, { upload: xyu.waUploadToServer });

  const messageContent = {
    buttonsMessage: {
      contentText: teksnya,
      footerText: 'Takashi Botz',
      buttons: [
        {
          buttonId: '.ping',
          buttonText: { displayText: '📍 Ping' },
          type: 1
        }, 
        {
          buttonId: '.script',
          buttonText: { displayText: '📁‍ Script' },
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

handler.command = ["allmenu"];

module.exports = handler;