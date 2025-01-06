const fs = require("fs");
const os = require("os");
const { prepareWAMessageMedia, generateWAMessageFromContent } = require("@whiskeysockets/baileys");

let handler = async (m, { xyu, pushname, isCreator, runtime }) => {
  // Pesan utama untuk mode
  let teksnya = `
*Current Mode:* ${xyu.public ? "🔵 Public" : "🔴 Self"}

pilih mode bot di bawah ini:
  `;

  // Tambahkan gambar ke pesan
  const { imageMessage } = await prepareWAMessageMedia({
    image: { url: "https://files.catbox.moe/zpfwd1.jpg" }
  }, { upload: xyu.waUploadToServer });

  const messageContent = {
    buttonsMessage: {
      contentText: teksnya,
      footerText: 'Takashi Botz',
      buttons: [
        {
          buttonId: '.self',
          buttonText: { displayText: '🔴 Self' },
          type: 1
        },
        {
          buttonId: '.Public',
          buttonText: { displayText: '🔵 Public' },
          type: 1
        }
      ],
      headerType: 4,
      imageMessage: imageMessage,
    }
  };

  // Kirim pesan dengan tombol
  const message = generateWAMessageFromContent(m.chat, {
    ephemeralMessage: {
      message: messageContent
    }
  }, { userJid: xyu.user.id });

  await xyu.relayMessage(m.chat, message.message, { messageId: message.key.id });
};
handler.command = ["mode"];

module.exports = handler;