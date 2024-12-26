const fs = require("fs");
const gTTS = require("gtts");

let handler = async (m, { command, Reply }) => {
    // Daftar kodam yang bisa dipilih secara random
    const kodamList = [
        "Kodam I Bukit Barisan",
        "Kodam II Sriwijaya",
        "Kodam III Siliwangi",
        "Kodam IV Diponegoro",
        "Kodam V Brawijaya",
        "Kodam VI Mulawarman",
        "Kodam VII Wirabuana",
        "Kodam VIII Udayana",
        "Kodam IX Udayana",
        "Kodam Jaya"
    ];

    // Pilih kodam secara acak
    const randomKodam = kodamList[Math.floor(Math.random() * kodamList.length)];

    // Teks yang akan diubah menjadi suara
    const textToSpeak = `Kodam yang terpilih untukmu adalah ${randomKodam}`;

    // Path file suara di folder ./database/sampah
    const audioPath = "./database/sampah/kodam.mp3";

    // Buat file suara menggunakan gTTS
    const gtts = new gTTS(textToSpeak, "id");

    // Simpan file suara dan kirimkan
    gtts.save(audioPath, async (err) => {
        if (err) {
            console.error(err);
            return m.reply("Gagal membuat suara, coba lagi nanti.");
        }
        // Kirim pesan teks dan file suara
        await m.reply(`Kodam yang terpilih adalah:\n*${randomKodam}*`);
        await m.sendFile(audioPath, "kodam.mp3", null, m.chat);
        
        // Hapus file suara dari folder sampah setelah dikirim
        fs.unlinkSync(audioPath);
    });
};

// Nama perintah
handler.command = ["cekkodam", "randomkodam", "kodam"];

// Ekspor handler
module.exports = handler;