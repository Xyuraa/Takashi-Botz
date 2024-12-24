const fs = require("fs")

let handler = async (m, { isCreator, Reply }) => {
if (!isCreator) return Reply(global.mess.owner)
const dirsesi = fs.readdirSync("./session").filter(e => e !== "creds.json")
const dirsampah = fs.readdirSync("./database/sampah").filter(e => e !== "A")
for (const i of dirsesi) {
await fs.unlinkSync("./session/" + i)
}
for (const u of dirsampah) {
await fs.unlinkSync("./database/sampah/" + u)
}
m.reply(`*Berhasil membersihkan sampah ✅*
*${dirsesi.length}* sampah session\n*${dirsampah.length}* sampah file`)
}

handler.command = ["boost", "clearsession", "delsesi", "clearsesi"]

module.exports = handler