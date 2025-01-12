const fs = require("fs");
const os = require("os");
const { prepareWAMessageMedia, generateWAMessageFromContent } = require("@whiskeysockets/baileys");

let handler = async (m, { xyu, pushname, isCreator, isPremium, qtext, runtime }) => {
  let teksnya = `
ʜᴀʟᴏ ᴋᴀᴋ ${pushname} ᴘᴇʀᴋᴇɴᴀʟᴋᴀɴ ɴᴀᴍᴀ ꜱᴀʏᴀ *ᴛᴀᴋᴀsʜɪ ʙᴏᴛ* ꜱᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ꜱᴇʀʙᴀɢᴜɴᴀ ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴅɪ ɢᴜɴᴀᴋᴀɴ ꜱᴇ ʜᴀʀɪ-ʜᴀʀɪ.

 *乂 I N F O - U S E R*
  • *Number :* ${m.sender.split("@")[0]}
  • *Status :* ${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}

  `;

  const { imageMessage } = await prepareWAMessageMedia({
    image: { url: "https://files.catbox.moe/fuc0ox.jpg" }
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
          buttonId: '.allmenu',
          buttonText: { displayText: '🪐 Allmenu' },
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

handler.command = ["menu"];

module.exports = handler;