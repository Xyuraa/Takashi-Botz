const fs = require("fs");
const os = require("os");
const { prepareWAMessageMedia, generateWAMessageFromContent } = require("@whiskeysockets/baileys");

let handler = async (m, { xyu, isCreator, runtime }) => {
  // Pesan utama untuk mode
  let teksnya = `
• *Close* 🔴	: menutup group
• *Open* 🔵	: membuka group

pilih mode group di bawah ini:
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
          buttonId: '.close',
          buttonText: { displayText: '🔴 Close' },
          type: 1
        },
        {
          buttonId: '.open',
          buttonText: { displayText: '🔵 Open' },
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
handler.command = ["group","gc"];

module.exports = handler;