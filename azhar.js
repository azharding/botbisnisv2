process.on('uncaughtException', console.error)
require('./src/config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const fetch = require('node-fetch')
const crypto = require('crypto')
const ms = require('parse-ms')
const toMs = require('ms')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const x = require('xfarr-api')
const mathjs = require('mathjs')
const maker = require('mumaker')
const ggs = require('google-it')
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const { performance } = require('perf_hooks')
const caliph = require('caliph-api')
const hx = require("hxz-api")
const bocil = require("@bochilteam/scraper")
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const imgbbUploader = require('imgbb-uploader')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const  { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, generateProfilePicture, reSize}= require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,  Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { pinterest, wallpaper, wikimedia, quotesAnime, aiovideodl, umma, ringtone } = require('./lib/scraper.js')
const { hentai } = require('./lib/scraper2.js')
const { cmdadd } = require('./lib/hit')
const { cmdaddtd } = require('./lib/hittd')
const { mediafireDl } = require('./lib/mediafire.js')
const cerpen = require('./lib/cerpen.js')
const { color, bgcolor } = require("./lib/color")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { azharWiki } = require('./lib/azharwiki.js')
const {
  adduang,
  adduangUser,
  checkuangUser,
  confirmuang
} = require('./lib/atm.js')
const tanggl = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
const timetime = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
// read database
let limit = JSON.parse(fs.readFileSync('./database/user/limit.json'));
let uang = JSON.parse(fs.readFileSync('./database/user/uang.json'));
let premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let banned = JSON.parse(fs.readFileSync('./database/user/banned.json'));
let register = JSON.parse(fs.readFileSync('./database/user/register.json'));
let setting = JSON.parse(fs.readFileSync('./src/setting.json'))
logonya = fs.readFileSync("./media/thumb.jpg")
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
const ceemde = JSON.parse(fs.readFileSync('./database/totalcmd.json'))
const ceemdetd = JSON.parse(fs.readFileSync('./database/todaycmd.json'))
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let antilink = JSON.parse(fs.readFileSync("./database/group/antilink.json"));
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    users: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
const limitawal = setting.limitawal
const uangawal = setting.uangawal
karutamd = fs.readFileSync('./media/karuta.png')

// UCAPAN WAKTU By MyMans APIs)
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = '𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝙼𝚊𝚕𝚊𝚖'
}
if(time2 < "19:00:00"){
var ucapanWaktu = '𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝙿𝚎𝚝𝚊𝚗𝚐'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = '𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝚜𝚘𝚛𝚎'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = '𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝚜𝚒𝚊𝚗𝚐'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = '𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝙿𝚊𝚐𝚒'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = '𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝙼𝚊𝚕𝚊𝚖'
 }
// TANGGAL By MyMans APIs 
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)
module.exports = azhar = async (azhar, m, chatUpdate, store) => {
    try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? setting.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await azhar.decodeJid(azhar.user.id)
const isOwner = setting.ownerNumber == m.sender ? true : ["6285811597011@s.whatsapp.net"].includes(m.sender) ? true : false
const itsMe = m.sender == botNumber ? true : false
const text = args.join(' ')
const q = args.join(' ')
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
	const isPremium = premium.includes(m.sender)
	const isBan = banned.includes(m.sender)
	const isRegister = register.includes(m.sender)
// Group
const groupMetadata = m.isGroup ? await azhar.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isWelkom = m.isGroup ? welkom.includes(from) : false
const isAntilink = m.isGroup ? antilink.includes(from) : false
const isMute = m.isGroup ? mute.includes(from) : false
if (isMute){
if (!groupAdmins && !isOwner)
return
}
// Public & Self
if (!azhar.public) {
if (isOwner && !m.key.fromMe) return
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const hsjdh = randomNomor(5)
// Push Message To Console && Auto Read
if (m.message && !m.key.fromMe) {
azhar.readMessages([m.key])
azhar.sendPresenceUpdate('available', from)
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
adduangUser(sender, hsjdh)
}
const reactionMessage = {
    react: {
text: args[0],
key: { remoteJid: m.chat, fromMe: false, id: quoted.id }
    }
}
//BUTON MESAGE
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const butonna = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
azhar.sendMessage(id, butonna, options)
}
const http = randomNomor(500)
	///reply
const reply = (teks) => {
return azhar.sendMessage(from, { text: teks, mentions: parseMention(teks) }, { quoted: ftoko })
}

  //Resize
         const reSize = async(buffer, ukur1, ukur2) => {
             return new Promise(async(resolve, reject) => {
             let jimp = require('jimp')
             var baper = await jimp.read(buffer);
             var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
             resolve(ab)
             })
             }

//// tempat kata //////////////
const katahi = `𝙷𝚊𝚒 _${pushname}_
𝙸𝚗𝚒 𝙰𝚍𝚊𝚕𝚊𝚑 𝙿𝚎𝚜𝚊𝚗 𝙾𝚝𝚘𝚖𝚊𝚝𝚒𝚜  
⬣━━━</>𝐏𝐄𝐑𝐇𝐀𝐓𝐈𝐀𝐍</>━━━⬣ 
=⬣ 𝙹𝚊𝚗𝚐𝚊𝚗 𝚂𝚙𝚊𝚖 𝚃𝚎𝚕𝚙𝚘𝚗 𝙱𝚘𝚝 
=⬣ 𝙹𝚊𝚗𝚐𝚊𝚗 𝚂𝚙𝚊𝚖 𝙲𝚑𝚊𝚝 𝙱𝚘𝚝   
⬣======================⬣

┏━⬣ 𝘽𝙊𝙏 𝙏𝙀𝙇𝘼𝙃 𝘽𝙀𝙍𝙅𝘼𝙇𝘼𝙉 
┗━━━━━━━━━━━━━━━━━━━⬣ 
⬡ ${runtime(process.uptime())}
⬣━━━━━━━━━━━━━━━━━━━⬣ 

𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝙿𝚒𝚕𝚒𝚑 𝙼𝚎𝚗𝚞 𝙳𝚒𝚋𝚊𝚠𝚊𝚑 𝙸𝚗𝚒`

const katalist = `𝙷𝚊𝚒 ${ucapanWaktu}
𝙸𝚗𝚏𝚘 𝙺𝚊𝚖𝚞 
● Nama : ${pushname}
● Nomor : ${sender.split('@')[0]}
● User : ${isPremium ? 'Premium' : 'Free'}
● Admin : ${isAdmins ? 'Ya' : 'No'}

𝙸𝚗𝚏𝚘 𝙱𝚘𝚝 
● Running : ${runtime(process.uptime())}
● Server : Linux
● Language : JavaScript
● Jam  : ${moment().utcOffset('+0900').format('HH:mm')} WIT
             : ${moment().utcOffset('+0800').format('HH:mm')} WITA
             : ${moment().utcOffset('+0700').format('HH:mm')} WIB

Silahkan Pilih Menu Di bawah ini`
//// penutup kata///////////

////Text CENTANG STATUS ////
// FAKE TOKO
const image12 = {image: { url:'./media/thumb.jpg'}}
const ftoko = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? 
{remoteJid: "status@broadcast" } : {})}, 
message: 
{ "productMessage": 
{ "product": 
{ "productImage":
{ "mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync("./media/pp.jpg")},
"title": `${setting.tokoName}`, 
 "currencyCode": "ID",
 "priceAmount1000": "100", 
 "retailerId": ``, 
"productImageCount": 1}, 
"businessOwnerJid": `0@s.whatsapp.net`}}} 

const ftex = {
	 key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
},
	 message: { 
"extendedTextMessage": {
 "text": `𝘾𝙊𝙍𝙀𝙄𝙕𝙀𝙉 𝘽𝙊𝙏 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋`,
 "title": `Hallo ${pushname}`,
 'jpegThumbnail': fs.readFileSync("./media/pp.jpg")
}}}

const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022 ,status: 200, thumbnail: await reSize(thumb, 100, 100), surface: 200, message: `${pushname}`, orderTitle: 'Naze', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
	const kmd = (teks) => {
azhar.sendMessage(from, { text : teks, contextInfo:{externalAdReply:{
title:"XIE BOT",
body: "Free WhatsApp Bot", 
thumbnail: fs.readFileSync("./media/pp.jpg"),
mediaType:1,
mediaUrl: 'https://wa.me/6281210685207?text=hi%20admin',
sourceUrl: "https://wa.me/6281210685207?text=hi%20admin"}}}, { quoted: m })
}
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
}
    
//SETINGAN
let karutaset = global.db.settings[botNumber]
if (typeof karutaset !== 'object') global.db.settings[botNumber] = {}
if (karutaset) {
if (!isNumber(karutaset.status)) karutaset.status = 0
if (!('autobio' in karutaset)) karutaset.autobio = true
if (!('templateImage' in karutaset)) karutaset.templateImage = false
if (!('templateVideo' in karutaset)) karutaset.templateVideo = false
if (!('templateGif' in karutaset)) karutaset.templateGif = false
if (!('templateMsg' in karutaset)) karutaset.templateMsg = false
if (!('templateDocument' in karutaset)) karutaset.templateDocument = true
} else global.db.settings[botNumber] = {
status: 0,
autobio: true,
templateImage: false,
templateVideo: false,
templateGif: false,
templateMsg: false,
templateDocument: true,
}
} catch (err) {
console.error(err)
}
// AFK
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan di reply/tag*
➸ ${reason ? 'Alasan :' + reason : 'Alasan : Nothing'}
➸ *Selama* : ${clockString(new Date - afkTime)}`
.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
reply(`@${sender.split("@")[0]} Telah kembali
Selama : ${clockString(new Date - user.afkTime)}
Setelah : ${user.afkReason}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
if (isCmd) cmdadd()
const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
if (isCmd) cmdaddtd()
const totalhittd = JSON.parse(fs.readFileSync('./database/todaycmd.json'))[0].todaycmd
// AntiLink
if (isAntilink) {
if (!isBotAdmins) return
}
if (budy.includes(`https://chat.whatsapp.com/`)) {
bvl = `*GROUP LINK DETECTOR*\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
kice = m.sender
azhar.sendMessage(from, {text:`*GROUP LINK DETECTOR*\n\n@${kice.split("@")[0]} Akan dikick karena mengirim link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
setTimeout( () => {
  azhar.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}, 3000)
} else {
}
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
	// write database every 5 minute
	setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 5 * 1000)
  // reset every 12 hours
let cron = require('node-cron')
cron.schedule('00 00 * * *', () => {
var resetyah = [{"todaycmd":0}]
claimnya = resetyah
console.log('time to reset')
fs.writeFileSync('./database/todaycmd.json', JSON.stringify(claimnya))
exec(`pm2 restart index`)
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
const point = Math.floor(Math.random() * 1) + 0
  /////////FUNTION LIMIT
const addlimit = (sender) => {
	const obj = {id: sender, limit : 0}
limit.push(obj)
fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit))
}
const addlimitUser = (sender, amount) => {
	let position = false
Object.keys(limit).forEach((i) => {
if (limit[i].id === sender) {
    position = i
}
})
if (position !== false) {
limit[position].limit += amount
fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit))
}
}

const checklimitUser = (sender) => {
	let position = false
Object.keys(limit).forEach((i) => {
if (limit[i].id === sender) {
    position = i
}
})
if (position !== false) {
return limit[position].limit
}
}
 
 const confirmlimit = (sender, amount) => {
   if (isPremium) {return false;}
 let position = false
Object.keys(limit).forEach((i) => {
if (limit[i].id == sender) {
    position = i
}
})
if (position !== false) {
limit[position].limit -= amount
fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit))
}
}
//Checklimit
if (isRegister ) {
const checklimit = checklimitUser(sender)
try {
if (checklimit === undefined) addlimit(sender)
addlimitUser(sender, point)
} catch (err) {
console.error(err)
}
}
//Checkuang
if (isRegister ) {
const checkuang = checkuangUser(sender)
try {
if (checkuang === undefined) adduang(sender)
adduangUser(sender, point)
} catch (err) {
console.error(err)
}
}
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: azhar.user.id,
quoted: ftoko.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, azhar.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
azhar.ev.emit('messages.upsert', msg)
}

	if (('family100'+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
azhar.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
   adduangUser(sender, http, uang)
await azhar.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\nHadiah : $${http}\nIngin bermain lagi? tekan button dibawah`, ` © ${setting.botName} bot`, m)
delete tebaklagu[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
  adduangUser(sender, http, uang)
await reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\nHadiah : $${http}\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
adduangUser(sender, http, uang)
await azhar.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\nHadiah : $${http}\nIngin bermain lagi? tekan button dibawah`, ` © ${setting.botName} bot`, m)
delete tebakgambar[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 adduangUser(sender, http, uang)
await azhar.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\nHadiah : $${http}\nIngin bermain lagi? tekan button dibawah`, ` © ${setting.botName} bot`, m)
delete tebakkata[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 adduangUser(sender, http, uang)
await azhar.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\nHadiah : $${http}\nIngin bermain lagi? tekan button dibawah`, ` © ${setting.botName} bot`, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
   adduangUser(sender, http, uang)
await azhar.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\nHadiah : $${http}\nIngin bermain lagi? tekan button dibawah`, ` © ${setting.botName} bot`, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 adduangUser(sender, http, uang)
await azhar.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\nHadiah : $${http}\nIngin bermain lagi? tekan button dibawah`, ` © ${setting.botName} bot`, m)
delete tebaklirik[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
  adduangUser(sender, http, uang)
await azhar.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\nHadiah : $${http}\nIngin bermain lagi? tekan button dibawah`, ` © ${setting.botName} bot`, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await azhar.sendText(room.x, str, m, { mentions: parseMention(str) } )
await azhar.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
azhar.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
azhar.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) azhar.sendText(roof.p, `Silahkan pilih \n\nBatu🪨\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) azhar.sendText(roof.p2, `Silahkan pilih \n\nBatu🪨\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) azhar.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
azhar.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) azhar.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) azhar.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
azhar.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
const menulist = `Hallo ${pushname} ${ucapanWaktu}
● Nomor : ${sender.split('@')[0]}
● User : ${isPremium ? 'Premium' : 'Free'}
● Admin : ${isAdmins ? 'Ya' : 'No'}
● Uang : ${checkuangUser(sender)}
● Limit : ${isPremium ? 'UNLIMITED' : `${checklimitUser(sender)}`}
● Library : Baileys MD
● Language : JavaScript

Indonesia Timur :${moment().utcOffset('+0900').format('HH:mm')} WIT
Indonesia Tengah :${moment().utcOffset('+0800').format('HH:mm')} WITA
Indonesia Barat :${moment().utcOffset('+0700').format('HH:mm')} WIB`

const listmn = `
_*MAIN COMMAND*_
• ${prefix}limit
• ${prefix}atm
• ${prefix}buylimit

_*ANONYMOUS MAIN*_
• ${prefix}start
• ${prefix}next
• ${prefix}stop

_*GROUP MENU*_
• ${prefix}getpp [tag]
• ${prefix}afk [Alasan]
• ${prefix}linkgroup
• ${prefix}ephemeral [option]
• ${prefix}setppgc [image]
• ${prefix}setname [text]
• ${prefix}setdesc [text]
• ${prefix}group [option]
• ${prefix}editinfo [option]
• ${prefix}add @user
• ${prefix}kick @user
• ${prefix}hidetag [text]
• ${prefix}tagall [text]
• ${prefix}promote @user
• ${prefix}demote @user
• ${prefix}vote [text]
• ${prefix}devote
• ${prefix}upvote
• ${prefix}cekvote
• ${prefix}hapusvote
• ${prefix}antilink
• ${prefix}welcome
• ${prefix}listonline

_*DOWNLOADER MENU*_
• ${prefix}ytmp3 [url]
• ${prefix}ytmp4 [url]
• ${prefix}umma [url]
• ${prefix}twitter [url]
• ${prefix}mediafire [url]
• ${prefix}gitclone [url]
• ${prefix}facebook [url]
• ${prefix}tiktok [url]

_*SEARCH MENU*_
• ${prefix}searchgc [query]
• ${prefix}play [query]
• ${prefix}yts [query]
• ${prefix}google [query]
• ${prefix}gimage [query]
• ${prefix}pinterest [query]
• ${prefix}wallpaper [query]
• ${prefix}wikimedia [query]
• ${prefix}ytsearch [query]
• ${prefix}ringtone [query]
• ${prefix}pinterest2 [query]
• ${prefix}mcpedl [query]
• ${prefix}happymod [query]

_*FUN MENU*_
• ${prefix}fakemore
• ${prefix}quotes
• ${prefix}halah
• ${prefix}hilih
• ${prefix}huluh
• ${prefix}heleh
• ${prefix}holoh
• ${prefix}jadian
• ${prefix}jodohku
• ${prefix}delttt
• ${prefix}tictactoe
• ${prefix}family100
• ${prefix}tebak [option]
• ${prefix}math [mode]
• ${prefix}suitpvp [@tag]
• ${prefix}react [Emoji]

_*PRIMBON MENU*_
• ${prefix}nomorhoki
• ${prefix}artimimpi
• ${prefix}artinama
• ${prefix}ramaljodoh
• ${prefix}ramaljodohbali
• ${prefix}suamiistri
• ${prefix}ramalcinta
• ${prefix}cocoknama
• ${prefix}pasangan
• ${prefix}jadiannikah
• ${prefix}sifatusaha
• ${prefix}rezeki
• ${prefix}pekerjaan
• ${prefix}nasib
• ${prefix}penyakit
• ${prefix}tarot
• ${prefix}fengshui
• ${prefix}haribaik
• ${prefix}harisangar
• ${prefix}harisial
• ${prefix}nagahari
• ${prefix}arahrezeki
• ${prefix}peruntungan
• ${prefix}weton
• ${prefix}karakter
• ${prefix}keberuntungan
• ${prefix}memancing
• ${prefix}masasubur
• ${prefix}zodiak
• ${prefix}shio

_*CONVERTER MENU*_
• ${prefix}toimage
• ${prefix}removebg
• ${prefix}sticker
• ${prefix}emojimix
• ${prefix}tovideo
• ${prefix}togif
• ${prefix}tourl
• ${prefix}tovn
• ${prefix}tomp3
• ${prefix}toaudio
• ${prefix}ebinary
• ${prefix}dbinary

_*OTHER MENU*_
• ${prefix}chord
• ${prefix}fliptext
• ${prefix}toletter
• ${prefix}del
• ${prefix}image
• ${prefix}kalkulator
• ${prefix}ping
• ${prefix}owner
• ${prefix}delete
• ${prefix}infochat
• ${prefix}quoted
• ${prefix}setcmd
• ${prefix}listcmd
• ${prefix}delcmd
• ${prefix}lockcmd
• ${prefix}addmsg
• ${prefix}listmsg
• ${prefix}getmsg
• ${prefix}delmsg
• ${prefix}servermc

_*ISLAM MENU*_
• ${prefix}iqra
• ${prefix}hadist
• ${prefix}alquran
• ${prefix}juzamma

_*VOICE CHANGER MENU*_
• ${prefix}bass
• ${prefix}blown
• ${prefix}deep
• ${prefix}earrape
• ${prefix}fast
• ${prefix}fat
• ${prefix}nightcore
• ${prefix}reverse
• ${prefix}robot
• ${prefix}slow
• ${prefix}tupai

_*OWNER MENU*_
• ${prefix}sendsessi
• ${prefix}chat [option]
• ${prefix}join [link]
• ${prefix}leave
• ${prefix}block @user
• ${prefix}unblock @user
• ${prefix}bcgroup [text]
• ${prefix}bcall [text]
• ${prefix}setppbot [image]
• ${prefix}setbio [text]
• ${prefix}listpc
• ${prefix}listgc
• ${prefix}addprem
• ${prefix}dellprem
• ${prefix}ban
• ${prefix}unban

_*STIKER MENU*_
• ${prefix}stickerwm [Teks1|Teks2]
• ${prefix}sticker
• ${prefix}gura
• ${prefix}patrik
• ${prefix}stikeranime
• ${prefix}doge
• ${prefix}bucinstick
• ${prefix}semoji
• ${prefix}emojimix
• ${prefix}smeme

_*NEWS MENU*_
• ${prefix}jalantikus-meme
• ${prefix}merdeka-news
• ${prefix}kontan-news
• ${prefix}cnbc-news
• ${prefix}tribun-news
• ${prefix}indozone-news
• ${prefix}kompas-news
• ${prefix}detik-news
• ${prefix}daily-news
• ${prefix}inews-news
• ${prefix}okezone-news
• ${prefix}sindo-news
• ${prefix}tempo-news
• ${prefix}antara-news
• ${prefix}cnn-news
• ${prefix}fajar-news

_*MAKER MENU*_
• ${prefix}nulis
• ${prefix}3dbox
• ${prefix}drapwater
• ${prefix}lion2
• ${prefix}papercut
• ${prefix}transformer
• ${prefix}herryp
• ${prefix}neondevil
• ${prefix}3dstone
• ${prefix}3davengers
• ${prefix}thunder
• ${prefix}window
• ${prefix}graffiti
• ${prefix}pornhub
• ${prefix}blackping
• ${prefix}glitch
• ${prefix}glitch2
• ${prefix}glitch3
• ${prefix}3dspace
• ${prefix}lion
• ${prefix}3dneon
• ${prefix}neon
• ${prefix}greenneon
• ${prefix}bokeh
• ${prefix}hollographic
• ${prefix}bear
• ${prefix}wolf
• ${prefix}joker
• ${prefix}dropwater
• ${prefix}neonlight
• ${prefix}natural
• ${prefix}carbon
• ${prefix}pencil
• ${prefix}candy
• ${prefix}christmas
• ${prefix}3dchristmas
• ${prefix}sparklechristmas
• ${prefix}deepsea
• ${prefix}scifi
• ${prefix}rainbow
• ${prefix}waterpipe
• ${prefix}spooky
• ${prefix}circuit
• ${prefix}discovery
• ${prefix}metalic
• ${prefix}fiction
• ${prefix}demon
• ${prefix}berry
• ${prefix}thunder
• ${prefix}magma
• ${prefix}3dstone
• ${prefix}neonlight
• ${prefix}glitch
• ${prefix}harrypotter
• ${prefix}brokenglass
• ${prefix}papercut
• ${prefix}watercolor
• ${prefix}multicolor
• ${prefix}neondevil
• ${prefix}underwater
• ${prefix}graffitibike
• ${prefix}snow
• ${prefix}cloud
• ${prefix}honey
• ${prefix}ice
• ${prefix}fruitjuice
• ${prefix}biscuit
• ${prefix}wood
• ${prefix}chocolate
• ${prefix}strawberry
• ${prefix}matrix
• ${prefix}blood
• ${prefix}toxic
• ${prefix}lava
• ${prefix}rock
• ${prefix}bloodglas
• ${prefix}hallowen
• ${prefix}darkgold
• ${prefix}wicker
• ${prefix}firework
• ${prefix}skeleton
• ${prefix}blackpink
• ${prefix}sand
• ${prefix}glue
• ${prefix}1917
• ${prefix}leaves

_*ANIME MENU*_
• ${prefix}manga
• ${prefix}quotesanime
• ${prefix}wallnime
• ${prefix}waifu
• ${prefix}husbu
• ${prefix}loli
• ${prefix}shota
`
//document randomizer
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
let documents = [doc3]
let docs = (documents)
/////TEKS BUTTON
const koinPerlimit = 100
const yaya = koinPerlimit * args[0]
const beli1 = (`*⟪ PEMBAYARAN BERHASIL ⟫*\n\n➸ pengirim : ${setting.botName}\n➸ penerima : ${pushname}\n➸ nominal pembelian : ${q} \n➸ harga limit : ${koinPerlimit}/limit\n➸ sisa uang : ${checkuangUser(sender)}\n\nproses berhasil dengan SN\n${createSerial(15)}`)
const beli2 = `© ${setting.botName} bot`
const beli3 = [
{buttonId: `${prefix}limit`, buttonText: {displayText: 'CEK LIMIT'}, type: 1}
]
const prem1 = `Hai kak  ${pushname} ${ucapanWaktu} \n\nFitur Ini Khusus Member Premium Silahkan Buy Premium Untuk Menggunakan Fitur Ini `
const prem2 = `Klik tombol di bawah ini untuk membeli premium \n © ${setting.botName} bot`
const prem3 = [{buttonId: `${prefix}beli`,buttonText: {displayText: `BELI PREMIUM`,},type: 1,},]
const daftar1 = `Hai kak ${pushname} ${ucapanWaktu} \n\nSebelum Menggunakan ${setting.botName} Daftar Terlebih Dahulu Ya `
const daftar2 = `Klik tombol di bawah \nJika tidak ada tombol ketik ${prefix}daftar\n*© ${setting.botName} bot*`
const daftar3 = [{buttonId: `${prefix}daftar`,buttonText: {displayText: `DAFTAR `,},type: 1,},]

blomdaftar = `${ucapanWaktu} @${sender.split("@")[0]} Kamu belum terdaftar di database cek private message mu untuk mendaftar`
limitabis = `*[LIMIT KAMU HABIS]*\nBeli limit di ${prefix}buylimit atau beli premium untuk mendapatkan unlimited limit`

//////////PEMBUKAAN CASE BREAK///////
switch(command) {
  ////GRUB
case 'sendsessi':
if (!isOwner) return reply(mess.owner)
azhar.sendMessage(from, { document: fs.readFileSync(`./${setting.sessionName}.json`), mimetype: 'jpg/application', fileName: `${setting.sessionName}.json`}, { quoted: ftoko })
break
  case 'beli':
  reply('coming soon...')
  break
case 'daftar':
  if (isRegister) return reply('Akun kamu sudah terdaftar di database')
if (isBan) return reply(mess.banned)
if (m.isGroup) return reply('Daftar di private message')
const serialUser = createSerial(18)
try {
ppimg = await azhar.profilePictureUrl(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const anuuh = `*「 𝙑𝙀𝙍𝙄𝙁𝙄𝘾𝘼𝙏𝙄𝙊𝙉 𝙎𝙐𝙆𝙎𝙀𝙎  」*
*Terimakasih telah mendapatkan diri ke database Karuta berikut adalah infonya*\n\n*●Nama : ${pushname}*\n*●Nomor : ${sender.split('@')[0]}*\n*●Pengguna : ${register.length}*\n*●SN : ${serialUser}*\n\n*Gunakan bot sewajarnya*`
register.push(sender)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
adduang(sender)
adduangUser(sender, 1000)
addlimit(sender)
addlimitUser(sender, 20)
Imgnah = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlaKCZE6A9OdzmLHnsxL28_XT8qjBsL1tSlg&usqp=CAU`)
/////////  
let btn886 = [{
urlButton: {
displayText: 'Instagram',
url: 'https://instagram.com/Yukishima3_'
}
}, {
quickReplyButton: {
displayText: 'MENU',
id: 'menu'
}
}]
karutamd = fs.readFileSync('./media/karuta.png')
let txtit = anuuh
azhar.sendMessage(from, { caption: anuuh, image: Imgnah, templateButtons: btn886, footer: `© ${setting.botName} bot`, mentions: [sender] })
  
  break
case 'ban':
if (!isOwner) return reply(mess.owner)
if (!q) return reply(`Masukan Nomornya contoh: \n${prefix}${command} 62858****`)
if(isNaN(q)) return await reply('harus berupa nomor')
  if (q.includes(`+`)) return reply('Tidak menggunakan + langsung nomor 6285****')
prmin = args.join(" ")
banned.push(`${prmin}@s.whatsapp.net`)
fs.writeFileSync('./database/user/banned.json', JSON.stringify(banned))
reply(`*Nomor wa.me/${prmin} telah dibanned !*`)
break
case 'unban':
  if (!isOwner) return reply(mess.owner)
  if (!q) return reply(`Masukan Nomornya contoh: \n${prefix}${command} 628586826398`)
  if(isNaN(q)) return await reply('harus berupa nomor')
  if (q.includes(`+`)) return reply('Tidak menggunakan + langsung nomor 6285****')
prmin = `${q}@s.whatsapp.net`
anul = banned.indexOf(prmin)
banned.splice(anul, 1)
fs.writeFileSync('./database/user/banned.json', JSON.stringify(banned))
reply(`*Nomor wa.me/${prmin} telah di unban !*`)
  break
  case 'addprem':
if (!isOwner) return reply(mess.owner)
if (!q) return reply(`Masukan Nomornya contoh: \n${prefix}${command} 628586826398`)
if(isNaN(q)) return await reply('harus berupa nomor')
  if (q.includes(`+`)) return reply('Tidak menggunakan + langsung nomor 6285****')
prmi = args.join(" ")
premium.push(`${prmi}@s.whatsapp.net`)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${prmi}`)
break
case 'delprem':
 case 'dellprem':
  if (!isOwner) return reply(mess.owner)
  if (!q) return reply(`Masukan Nomornya contoh: \n${prefix}${command} 628586826398`)
  if(isNaN(q)) return await reply('harus berupa nomor')
  if (q.includes(`+`)) return reply('Tidak menggunakan + langsung nomor 6285****')
  prmin = `${q}@s.whatsapp.net`
anul = banned.indexOf(prmin)
premium.splice(anul, 1)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
reply(mess.success)
  break
  case 'welcome':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
  if (args[0] === 'enable'){
   if (isWelkom) return reply(`*Udah nyala!*`)
welkom.push(from)
fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
reply('*「WELCOME DI AKTIFKAN」*')
	} else if (args[0] === 'disable') {
	  if (!isWelkom) return reply(`*Belum Nyala!*`)
   anu = welkom.indexOf(from)
   welkom.splice(anu, 1)
fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
reply('*「WELCOME DI NONAKTIFKAN」*')
	} else {
const buttonstod = [{buttonId: `${prefix}welcome enable`, buttonText: {displayText: 'ON'}, type: 1},{buttonId: `${prefix}welcome disable`, buttonText: {displayText: 'OF'}, type: 1}]
const patri = {
text: `Silahkan pilih salah satu di bawah`,
footer: `© ${setting.botName} bot`,
buttons: buttonstod,
headerType: 1
}
azhar.sendMessage(from, patri, {quoted:ftoko})
}
  break
  case 'antilink': 
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
  if (args[0] === 'enable'){
   if (isAntilink) return reply(`*Udah nyala!*`)
antilink.push(from)
fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
reply('*「ANTILINK DI AKTIFKAN」*\n\nYang Mengenai Link Group Bakal Ke Kick!')
	} else if (args[0] === 'disable') { if (!isAntilink) return reply(`*Belum nyala!*`)
   anu = antilink.indexOf(from)
   antilink.splice(anu, 1)
fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
reply('*「ANTILINK DI NONAKTIFKAN」*')
	} else {
const buttonstod = [{buttonId: `${prefix}antilink enable`, buttonText: {displayText: 'ON'}, type: 1},{buttonId: `${prefix}antilink disable`, buttonText: {displayText: 'OF'}, type: 1}]
const patri = {
text: `Silahkan pilih salah satu di bawah`,
footer: `© ${setting.botName} bot`,
buttons: buttonstod,
headerType: 1
}
azhar.sendMessage(from, patri, {quoted:ftoko})
}
  break
  case 'sabar':
reply(`يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا وَرَ
ابِطُوا وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ

Wahai orang-orang yang beriman! Bersabarlah kamu dan kuatkanlah kesabaranmu dan tetaplah bersiap siaga (di perbatasan negerimu) dan bertakwalah kepada Allah agar kamu beruntung. (Ali Imran ayat 200) `)
break
case 'react':{
  azhar.sendMessage(from, reactionMessage)
}
break
case 'film':
  if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
if (isBan) return reply(mess.banned)
if (!q) return reply(`Apa yg mau kamu cari?\nExample: ${prefix}film Spiderman`)
if ( checklimitUser(sender) <= 0) return reply(limitabis) 
x.Film(q)
    .then(data => {console.log(data)
    let krl = `*❒「  Film ${q} 」*\n*🌿 Author* : ${data[0].author}\n\n`
	for (let i of data) {
krl += (`\n────────────────────\n\n *•Title :* ${i.judul}\n *• Quality :* ${i.quality}\n *• Type : ${i.type}*\n *• Uploaded :* ${i.upload}\n *• Source :* ${i.link}`)
}
   azhar.sendMessage(from, { image: { url: data[0].thumb}, caption: krl }, { quoted: ftex })
});
confirmlimit(sender, 1)
break
  case 'quotes' :
if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
  if ( checklimitUser(sender) <= 0) return reply(limitabis) 
    var res = await Quotes()
    const buttons = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: 'NEXT'}, type: 1}
]
const pa = {
text: `
Quotes:\n${res.quotes}\n
Author: ${res.author}`,
footer: `© ${setting.botName} bot`,
buttons: buttons,
headerType: 1
}
azhar.sendMessage(from, pa, {quoted:ftoko})
confirmlimit(sender, 1)
break
case 'donasi':
  reply('Donasi seikhlas nya kakak biar bot ini makin keren\nhttps://saweria.co/Yukishima\n\n*GAK MAKSA*')
break
case 'premium2':
if (!isOwner) return reply(mess.owner)
if (args[0] === 'add') {
if (m.message.extendedTextMessage != undefined) {
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid

premium.addPremiumUser(mentioned[0], args[2], _premium)
reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)

} else {

premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
} else if (args[0] === 'del') {
if (m.message.extendedTextMessage != undefined) {
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
reply(mess.success)
} else {
_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
reply(mess.success)
}
} else {
reply(mess.wrongFormat)
}
break
case 'chat': {
if (!isOwner) return reply(mess.owner)
if (!q) return reply( 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete')
if (args[0] === 'mute') {
    azhar.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unmute') {
    azhar.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'archive') {
    azhar.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
    azhar.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'read') {
    azhar.chatModify({ fromMe: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unread') {
    azhar.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'delete') {
    azhar.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
}
break
case 'family100': {
 if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if ('family100'+m.chat in _family100) {
    reply('Masih Ada Sesi Yang Belum Diselesaikan!')
    throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
    id: 'family100'+m.chat,
    pesan: await azhar.sendText(m.chat, hasil, m),
    ...random,
    terjawab: Array.from(random.jawaban, () => false),
    hadiah: 6,
}
}
confirmlimit(sender, 1)
break
    case 'fakemore':
if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
    if (args.length < 1) return reply(`Penggunaan ${prefix + command} mem|beri`)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
reply(`${teks1}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${teks2}`)
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (!m.quoted && !text) return reply( `Kirim/reply text dengan caption ${prefix + command}`)
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
case 'toletter': {
   if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
if (!Number(args[0])) return reply(`Example:\n${prefix}toletter 956`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
reply(`*[ALPHABET TEXT]*\n•Nomor :*${quere}*\n•Alphabet :*${convertes}*`)
} catch {
replay(`Error!`)
}
}
break
case 'fliptext':
if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
if (args.length < 1) return reply(`Example:\n${prefix}fliptext Hallo`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
reply(`*[FLIP TEXT]*\n•Normal :*${quere}*\n•Flip :*${flipe}*`)
break
case 'tebak': {
 if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!text) return reply( `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`)
if (args[0] === "lagu") {
    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return reply( "Masih Ada Sesi Yang Belum Diselesaikan!")
    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    let msg = await azhar.sendMessage(m.chat, {audio: { url: result.link_song }, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
    azhar.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
    })
    await sleep(60000)
    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    azhar.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ` © ${setting.botName} bot`, m)
    delete tebaklagu[m.sender.split('@')[0]]
    }
} else if (args[0] === 'gambar') {
    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return reply( "Masih Ada Sesi Yang Belum Diselesaikan!")
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    azhar.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
    })
    await sleep(60000)
    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    azhar.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ` © ${setting.botName} bot`, m)
    delete tebakgambar[m.sender.split('@')[0]]
    }
} else if (args[0] === 'kata') {
    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return reply( "Masih Ada Sesi Yang Belum Diselesaikan!")
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    azhar.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
    })
    await sleep(60000)
    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    azhar.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ` © ${setting.botName} bot`, m)
    delete tebakkata[m.sender.split('@')[0]]
    }
} else if (args[0] === 'kalimat') {
    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return reply( "Masih Ada Sesi Yang Belum Diselesaikan!")
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    azhar.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
    })
    await sleep(60000)
    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    azhar.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ` © ${setting.botName} bot`, m)
    delete tebakkalimat[m.sender.split('@')[0]]
    }
} else if (args[0] === 'lirik') {
    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return reply( "Masih Ada Sesi Yang Belum Diselesaikan!")
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    azhar.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
    })
    await sleep(60000)
    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    azhar.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ` © ${setting.botName} bot`, m)
    delete tebaklirik[m.sender.split('@')[0]]
    }
} else if (args[0] === 'lontong') {
    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return reply( "Masih Ada Sesi Yang Belum Diselesaikan!")
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    azhar.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
    })
    await sleep(60000)
    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    azhar.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ` © ${setting.botName} bot`, m)
    delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
    }
}
}
confirmlimit(sender, 1)
break
case 'kuismath': case 'math': {
  if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return reply( "Masih Ada Sesi Yang Belum Diselesaikan!")
let { genMath, modes } = require('./src/math')
if (!text) return reply( `Pilih Mode:\n- ${Object.keys(modes).join(' \n- ')}\n\nContoh penggunaan: ${prefix}math medium`)
let result = await genMath(text.toLowerCase())
azhar.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
    kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
    delete kuismath[m.sender.split('@')[0]]
}
}
confirmlimit(sender, 1)
break
case 'jodohku': {
if (!m.isGroup) return reply(mess.group)
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}\nINI CUMA GAME OK`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
    ]
    await azhar.sendButtonText(m.chat, buttons, jawab, ` © ${setting.botName} bot`, m, {mentions: ments})
}
break
case '͏͏jodohku͏͏': {
if (!m.isGroup) return reply( mess.group)
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = '6285246027002@s.whatsapp.net'
let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}\nINI CUMA GAME OK`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
    ]
    await azhar.sendButtonText(m.chat, buttons, jawab, ` © ${setting.botName} bot`, m, {mentions: ments})
}
break
case 'jadian': {
if (!m.isGroup) return reply(mess.group)
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
    ]
    await azhar.sendButtonText(m.chat, buttons, jawab, ` © ${setting.botName} bot`, m, {mentions: menst})
}
break
case 'join': {
if (!isOwner) return reply(mess.owner)
if (!text) return reply( 'Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply( 'Link Invalid!')
reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await azhar.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'leave': {
if (!isOwner) return reply(mess.owner)
await azhar.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
	case 'kick': {
	  if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply( mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply( mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await azhar.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
	  if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply( mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply( mess.admin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await azhar.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
	  if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply( mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply( mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await azhar.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
case 'setname': case 'setsubject': {
if (!m.isGroup) return reply( mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply( mess.admin)
if (!text) return reply( 'Text ?')
await azhar.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
  case 'setdesc': case 'setdesk': {
if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply( mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply( mess.admin)
if (!text) return reply( 'Text ?')
await azhar.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'setbio':
if (!isOwner) return reply(mess.owner)
if (!text) return reply(`Mana text nya?`)
azhar.setStatus(q)
reply(`*Bio telah di ganti menjadi ${q}*`)
break
  case 'setppbot': {
if (!isOwner) return reply(mess.owner)
if (!quoted) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await azhar.downloadAndSaveMediaMessage(quoted)
await azhar.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
reply(mess.success)
}
break
   case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply( mess.group)
if (!isAdmins) return reply( mess.admin)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!quoted) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await azhar.downloadAndSaveMediaMessage(quoted)
await azhar.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
reply(mess.success)
}
break
case 'tagall': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
azhar.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: ftoko })
}
break
case 'hidetag': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
azhar.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: ftoko })
}
break
   case 'vote': {
if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply(mess.group)
if (m.chat in vote) return reply( `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`)
if (!text) return reply( `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`)
reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [q, [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageVote = {
text: teks_vote,
footer: ` © ${setting.botName} bot`,
buttons: buttonsVote,
headerType: 1
}
azhar.sendMessage(m.chat, buttonMessageVote)
}
break
   case 'upvote': {
if (!m.isGroup) return reply(mess.group)
if (!(m.chat in vote)) return reply( `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return reply( 'Kamu Sudah Vote')
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsUpvote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageUpvote = {
text: teks_vote,
footer: ` © ${setting.botName} bot`,
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
 }
azhar.sendMessage(m.chat, buttonMessageUpvote)
}
 break
case 'devote': {
   if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply(mess.group)
if (!(m.chat in vote)) return reply( `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return reply( 'Kamu Sudah Vote')
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsDevote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageDevote = {
text: teks_vote,
footer: ` © ${setting.botName} bot`,
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
azhar.sendMessage(m.chat, buttonMessageDevote)
	}
break
 
case 'cekvote':
if (!m.isGroup) return reply(mess.group)
if (!(m.chat in vote)) return reply( `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${azhar.user.id}
`
azhar.sendTextWithMentions(m.chat, teks_vote, m)
break
case 'deletevote': case'delvote': case 'hapusvote': {
if (!m.isGroup) return reply(mess.group)
if (!(m.chat in vote)) return reply( `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
delete vote[m.chat]
reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
}
break
   case 'group': case 'grup': {
 if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === 'close'){
    await azhar.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
    await azhar.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
    ]
    await azhar.sendButtonText(m.chat, buttons, `Mode Group`, ` © ${setting.botName} bot`, m)

 }
}
break
case 'editinfo': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
 if (args[0] === 'open'){
await azhar.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await azhar.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
 } else {
 let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
    ]
    await azhar.sendButtonText(m.chat, buttons, `Mode Edit Info`, ` © ${setting.botName} bot`, m)

}
}
break
case 'linkgroup': case 'linkgc': {
if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply(mess.group)
let response = await azhar.groupInviteCode(m.chat)
azhar.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'ephemeral': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (!text) return reply( 'Masukkan value enable/disable')
if (args[0] === 'enable') {
    await azhar.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'disable') {
    await azhar.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
}
break
case 'd': case 'delete': case 'del': {
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) return reply( 'Pesan tersebut bukan dikirim oleh bot!')
azhar.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'bcgc': case 'bcgroup': {
if (!isOwner) return reply(mess.owner)
if (!text) return reply( `Text mana?\n\nExample : ${prefix + command} fatih-san`)
let getGroups = await azhar.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
    await sleep(1500)
    let btn = [{
urlButton: {
displayText: 'Instagram',
url: 'https://instagram.com/Yukishima3_'
}
}, {
quickReplyButton: {
    displayText: '⋮☰ MENU',
    id: 'menu'
}
}]
 karutamd = fs.readFileSync('./media/karuta.jpg')
 let txt = `「 Broadcast Bot 」\n\n${text}`
 azhar.send5ButImg(i, txt, ` © ${setting.botName} bot`, karutamd, btn)
    }
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'setmenu':
if (!isOwner) return reply(mess.owner)
setbot = db.settings[botNumber]
if (args[0] === 'templateImage'){
setbot.templateImage = true
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateDocument = false
reply(mess.success)
} else if (args[0] === 'templateVideo'){
setbot.templateImage = false
setbot.templateVideo = true
setbot.templateGif = false
setbot.templateMsg = false
reply(mess.success)
} else if (args[0] === 'templateGif'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = true
setbot.templateMsg = false
setbot.templateDocument = false
reply(mess.success)
} else if (args[0] === 'templateMessage'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = true
setbot.templateDocument = false
reply(mess.success)
} else if (args[0] === 'templateDocument'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateDocument = true
reply(mess.success)
} else {
let sections = [
{
title: "CHANGE BOT MENU",
rows: [
{title: "Image Menu", rowId: `setmenu templateImage`, description: `Klik untuk mengubah menu ke Image Menu`},
{title: "Gif Menu", rowId: `setmenu templateGif`, description: `Klik untuk mengubah menu ke Gif Menu`},
{title: "Video Menu", rowId: `setmenu templateVideo`, description: `Klik untuk mengubah menu ke Video Menu`},
{title: "Text Menu", rowId: `setmenu templateMessage`, description: `Klik untuk mengubah menu ke Text Menu`},
{title: "Document Menu", rowId: `setmenu templateDocument`, description: `Klik untuk mengubah menu ke Document Menu`}
]
},
]
azhar.sendListMsg(m.chat, `Pilih salah satu mode menu di bawah`, `© ${setting.botName} bot`, '*CHANGE MENU*', `Click Here`, sections, m)
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isOwner) return reply(mess.owner)
if (!text) return reply( `Text mana?\n\nExample : ${prefix + command} fatih-san`)
let anu = await store.chats.all().map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Instagram',
url: 'https://instagram.com/Yukishima3_'
}
}, {
quickReplyButton: {
    displayText: '⋮☰ MENU',
    id: 'menu'
}
}]
 karutamd = fs.readFileSync('./media/thumb.jpg')
 let txt = `「 Broadcast Bot 」\n\n${text}`
 azhar.send5ButImg(yoi, txt, ` © ${setting.botName} bot`, karutamd, btn)
}
reply('Sukses Broadcast')
}
break

case 'q': case 'quoted': {
if (!m.quoted) return reply('Reply Pesannya!!')
if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
let wokwol = await azhar.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'listpc': {
 if (!isOwner) return reply(mess.owner)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
let nama = store.messages[i].array[0].pushName
teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`
 }
 azhar.sendTextWithMentions(m.chat, teks, m)
 }
 break
case 'listgc': {
  if (!isOwner) return reply(mess.owner)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
let metadata = await azhar.groupMetadata(i)
teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n=====================\n\n`
 }
 azhar.sendTextWithMentions(m.chat, teks, m)
 }
 break
 case 'listonline': case 'liston': {
   if (!m.isGroup) return reply('Cuma bisa di grub bro')
   if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
    
    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
    let online = [...Object.keys(store.presences[id]), botNumber]
    azhar.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
case 'swm': case 'stickerwm': {
if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
if (isBan) return reply(mess.banned)
if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!args.join(" ")) return reply(`Example :\n${prefix}${command} Karuta | botwa`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
reply(mess.wait)
if (m.quoted.isAnimated === true) {
azhar.downloadAndSaveMediaMessage(quoted, "gifee")
azhar.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await azhar.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await azhar.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
confirmlimit(sender, 1)
} else {
reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
 break
   case 'stiker': case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (checklimitUser(sender) <= 0) return reply(limitabis)  
if (!quoted) return reply( `Balas Video/Image Dengan Caption ${prefix + command}`)
reply(mess.wait)
    if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await azhar.sendImageAsSticker(m.chat, media, m, { packname: setting.packname, author: setting.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await azhar.sendVideoAsSticker(m.chat, media, m, { packname: setting.packname, author: setting.author })
await fs.unlinkSync(encmedia)
confirmlimit(sender, 1)
} else {
return reply( `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'emoji':
if (!args.join(" ")) return reply('emojinya?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await azhar.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption:"Done!"}, {quoted:m})
await azhar.sendMessage(from, {text:"jadikan stiker sendiri jangan manja"}, {quoted:mese})
})
break
case 'allmenu':
if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
    buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: listmn,
footer: `© ${setting.botName} bot`,
buttons: buttonss2,
headerType: 1
}
azhar.sendMessage(from, pa3, {quoted:m})
break
case 'ping': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
	return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
}, {
    speed: 0,
    total: 0,
    times: {
	user: 0,
	nice: 0,
	sys: 0,
	idle: 0,
	irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _detik_ \n ${oldd - neww} _milidetik_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
reply(respon)
}
break
case 'owner': case 'creator': {
azhar.sendContact(m.chat, setting.owner1, m)
}
break

case 'owner2': case 'creator2':
const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ `FN:${setting.ownerName}\n`
+ `ORG:${setting.deskripsi};\n`
+ `TEL;type=CELL;type=VOICE;waid=${setting.owner}:+${setting.owner}\n`
+ 'END:VCARD';
azhar.sendMessage(from, { contacts: { contacts: [{ vcard }] }});
break
case 'infobot':
    let anubb = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)

let anubbgc = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)

reply(`•Namabot : ${setting.botName}
•Platform : ${os.platform()}
•Host name : ${os.hostname()}
•Wa Version : 2.22.13.76
•Pengguna : ${register.length}
•List Private Chat : ${anubb.length}
•List Group : ${anubbgc.length}
•Listban : ${banned.length}
`)
break
case 'infoowner':
pro = `*PROFILE OWNER KARUTA*
•Nama : Yukishima
•Umur : 18 Tahun
•Asal : Bekasi
•IG   : Yukishima3_
•FB   : Yukishima
•Saya bukan mastah saya pemula
•Saya Bukan wibu :v`
azhar.sendMessage(m.chat, { video: { url:'https://a.uguu.se/XqseYfhr.mp4' }, gifPlayback: true , caption:pro}, { quoted: ftoko })
break
case 'menu':
karutamddd = await reSize(`./media/karuta.png`, 200, 200) 
let bton = [{
urlButton: {
displayText: 'DONASI',
url: 'https://saweria.co/Yukishima'
}
}, {
urlButton: {
displayText: 'INSTAGRAM',
url: 'https://instagram.com/Yukishima3_'
}
}, {
quickReplyButton: {
displayText: 'SIMPLE',
id: 'command'
}
}, {
quickReplyButton: {
displayText: 'ALL',
id: 'allmenu'
}  
}, {
quickReplyButton: {
displayText: 'ANONYMOUS CHAT',
id: 'ac'
}
}]
setbot = db.settings[botNumber]
if (setbot.templateImage) {
azhar.sendMessage(from, { caption: menulist, image: global.thumb, templateButtons: bton, footer:`© ${setting.botName} bot`, mentions: [sender] })
} else if (setbot.templateGif) {
azhar.sendMessage(from, { caption: menulist, video: global.vidmenu, gifPlayback: true, templateButtons: bton, footer: `© ${setting.botName} bot`, mentions: [sender] })
} else if (setbot.templateVid) {
azhar.sendMessage(from, { caption: menulist, video: global.vidmenu, templateButtons: bton, footer: `© ${setting.botName} bot`, mentions: [sender] })
} else if (setbot.templateVideo) {
azhar.sendMessage(from, { caption: menulist, video: global.vidmenu, templateButtons: bton, footer: `© ${setting.botName} bot`, mentions: [sender] })
} else if (setbot.templateMsg) {
azhar.sendMessage(from, { text: menulist, templateButtons: buttonsDefault, footer: `© ${setting.botName} bot`, mentions: [sender] })
} else if (setbot.templateDocument) {
let buttonmenu = [{
urlButton: {
displayText: 'DONASI',
url: 'https://saweria.co/Yukishima'
}
}, {
urlButton: {
displayText: 'INSTAGRAM',
url: 'https://instagram.com/Yukishima3_'
}
}, {
quickReplyButton: {
displayText: 'SIMPLE',
id: 'cmd'
}
}, {
quickReplyButton: {
displayText: 'ALL',
id: 'allmenu'
}  
}, {
quickReplyButton: {
displayText: 'ANONYMOUS CHAT',
id: 'ac'
}
}]
azhar.sendMessage(m.chat, { caption: menulist, document: fs.readFileSync('./media/info.pdf'), mimetype: `${docs}`, jpegThumbnail:fs.readFileSync("./media/menu.png"), fileName: `${setting.botName}`, templateButtons: buttonmenu, footer: `© ${setting.botName} bot`, quoted: [m] })
}
break

/////////[ TEMPAT CASE PADA CHAT ]/////////////
  case 'Hai': case 'Hi': case 'hai': case 'hi': case 'Haii': case 'bot': case 'haii': case 'Halo': case 'halo': case 'menu': case 'Menu': case 'permisi': case 'Assalamualaikum': case 'bg': {
    let buttons = [
        {buttonId: `store1`, buttonText: {displayText: 'TOP UP GAME'}, type: 1}, {buttonId: `store2`, buttonText: {displayText: 'MEDIA SOSIAL'}, type: 1}
    ]
    let buttonMessage = {
        image: { url:'./media/thumb.jpg'},
        caption: katahi,
        footer: `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓`,
        buttons: buttons,
        headerType: 4
    }
    azhar.sendMessage(m.chat, buttonMessage, { quoted: ftoko })
}
break 

case 'tes': {
if (!isOwner) return reply(mess.owner)
if (!text) return reply( `Text mana?\n\nExample : ${prefix + command} fatih-san`)
let anu = await store.chats.all().map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Instagram',
url: 'https://instagram.com/Yukishima3_'
}
}, {
quickReplyButton: {
    displayText: '⋮☰ MENU',
    id: 'menu'
}
}]
 karutamd = fs.readFileSync('./media/thumb.jpg')
 let txt = `「 Broadcast Bot 」\n\n${text}`
 azhar.send5ButImg(yoi, txt, ` © ${setting.botName} bot`, karutamd, btn)
}
reply('Sukses Broadcast')
}
break

/////// TEMPAT LIST MENU ////////
        
case 'p': 
let sections = [
{
title: "JASA SOSIAL MEDIA",
rows: [
{title: "FACEBOOK", rowId: `list1`, description: ``},
{title: "INSTAGRAM", rowId: `list2`, description: ``},
{title: "TIKTOK", rowId: `list2`, description: ``},
{title: "YOUTUBE", rowId: `list2`, description: ``}
]
},
  {
title: "JASA TOP UP",
rows: [
{title: "MOBILE LEGENDS", rowId: `list3`, description: ``},
{title: "FREE FIRE", rowId: `list4`, description: ``},
{title: "POINT BLANK", rowId: `list4`, description: ``},
{title: "DOMINO ISLAND", rowId: `list4`, description: ``},
{title: "PUBG MOBILE", rowId: `list4`, description: ``},
{title: "COD MOBILE", rowId: `list4`, description: ``}
]
},
{
title: "SOSIAL MEDIA",
rows: [
{title: "FACEBOOK", rowId: `list5`, description: ``},
{title: "YOUTUBE", rowId: `animemenu`, description: ``}
]
},
{
title: "INFO BOT",
rows: [
{title: "DEVELOPER BOT", rowId: `owner`, description: ``},
{title: "INFO DEVELOPER", rowId: `infoowner`, description: ``}
]
}, 
]
azhar.sendListMsg(m.chat, katalist, `${setting.botName}`, ``, `BUKA MENU`, sections, ftoko) 
break
        
case 'list1': 
let sections1 = [
{
title: "BAHAN WEBSITE",
rows: [
{title: "DOMAIN", rowId: `list1`, description: ``},
{title: "VPS", rowId: `list2`, description: ``}
]
},
  {
title: "TEMA WEBSITE",
rows: [
{title: "BLOGGER", rowId: `list3`, description: ``},
{title: "TOP UP", rowId: `list4`, description: ``},
]
},
{
title: "SOSIAL MEDIA",
rows: [
{title: "FACEBOOK", rowId: `list5`, description: ``},
{title: "YOUTUBE", rowId: `animemenu`, description: ``}
]
},
{
title: "PEMILIK BOT",
rows: [
{title: "DEVELOPER BOT", rowId: `owner`, description: ``},
{title: "INFO DEVELOPER", rowId: `infoowner`, description: ``}
]
}, 
]
azhar.sendListMsg(m.chat, katahi, `𝐖𝐡𝐚𝐭𝐀𝐩𝐩 𝐁𝐨𝐭`, ``, `BUKA MENU`, sections1, ftoko) 
break

case 'list2': 
let sections2 = [
{
title: "BAHAN WEBSITE",
rows: [
{title: "DOMAIN", rowId: `list1`, description: ``},
{title: "VPS", rowId: `list2`, description: ``}
]
},
  {
title: "TEMA WEBSITE",
rows: [
{title: "BLOGGER", rowId: `list3`, description: ``},
{title: "TOP UP", rowId: `list4`, description: ``},
]
},
{
title: "SOSIAL MEDIA",
rows: [
{title: "FACEBOOK", rowId: `list5`, description: ``},
{title: "YOUTUBE", rowId: `animemenu`, description: ``}
]
},
{
title: "PEMILIK BOT",
rows: [
{title: "DEVELOPER BOT", rowId: `owner`, description: ``},
{title: "INFO DEVELOPER", rowId: `infoowner`, description: ``}
]
}, 
]
azhar.sendListMsg(m.chat, katahi, `𝐖𝐡𝐚𝐭𝐀𝐩𝐩 𝐁𝐨𝐭`, ``, `BUKA MENU`, sections2, ftoko) 
break

case 'list3': 
let sections3 = [
{
title: "BAHAN WEBSITE",
rows: [
{title: "DOMAIN", rowId: `list1`, description: ``},
{title: "VPS", rowId: `list2`, description: ``}
]
},
  {
title: "TEMA WEBSITE",
rows: [
{title: "BLOGGER", rowId: `list3`, description: ``},
{title: "TOP UP", rowId: `list4`, description: ``},
]
},
{
title: "SOSIAL MEDIA",
rows: [
{title: "FACEBOOK", rowId: `list5`, description: ``},
{title: "YOUTUBE", rowId: `animemenu`, description: ``}
]
},
{
title: "PEMILIK BOT",
rows: [
{title: "DEVELOPER BOT", rowId: `owner`, description: ``},
{title: "INFO DEVELOPER", rowId: `infoowner`, description: ``}
]
}, 
]
azhar.sendListMsg(m.chat, katahi, `𝐖𝐡𝐚𝐭𝐀𝐩𝐩 𝐁𝐨𝐭`, ``, `BUKA MENU`, sections3, ftoko) 
break

case 'list4': 
let sections4 = [
{
title: "BAHAN WEBSITE",
rows: [
{title: "DOMAIN", rowId: `list1`, description: ``},
{title: "VPS", rowId: `list2`, description: ``}
]
},
  {
title: "TEMA WEBSITE",
rows: [
{title: "BLOGGER", rowId: `list3`, description: ``},
{title: "TOP UP", rowId: `list4`, description: ``},
]
},
{
title: "SOSIAL MEDIA",
rows: [
{title: "FACEBOOK", rowId: `list5`, description: ``},
{title: "YOUTUBE", rowId: `animemenu`, description: ``}
]
},
{
title: "PEMILIK BOT",
rows: [
{title: "DEVELOPER BOT", rowId: `owner`, description: ``},
{title: "INFO DEVELOPER", rowId: `infoowner`, description: ``}
]
}, 
]
azhar.sendListMsg(m.chat, katahi, `𝐖𝐡𝐚𝐭𝐀𝐩𝐩 𝐁𝐨𝐭`, ``, `BUKA MENU`, sections4, ftoko) 
break

case 'list5': 
let sections5 = [
{
title: "BAHAN WEBSITE",
rows: [
{title: "DOMAIN", rowId: `list1`, description: ``},
{title: "VPS", rowId: `list2`, description: ``}
]
},
  {
title: "TEMA WEBSITE",
rows: [
{title: "BLOGGER", rowId: `list3`, description: ``},
{title: "TOP UP", rowId: `list4`, description: ``},
]
},
{
title: "SOSIAL MEDIA",
rows: [
{title: "FACEBOOK", rowId: `list5`, description: ``},
{title: "YOUTUBE", rowId: `animemenu`, description: ``}
]
},
{
title: "PEMILIK BOT",
rows: [
{title: "DEVELOPER BOT", rowId: `owner`, description: ``},
{title: "INFO DEVELOPER", rowId: `infoowner`, description: ``}
]
}, 
]
azhar.sendListMsg(m.chat, katahi, `𝐖𝐡𝐚𝐭𝐀𝐩𝐩 𝐁𝐨𝐭`, ``, `BUKA MENU`, sections5, ftoko) 
break
////// sample////////
case 'ggg':
karutamddd = await reSize(`./media/karuta.png`, 200, 200), 
setbot = db.settings[botNumber]
if (setbot.templateDocument) {
let buttonmenu = [{
urlButton: {
displayText: 'DONASI',
url: 'https://saweria.co/Yukishima'
}
}, {
urlButton: {
displayText: 'INSTAGRAM',
url: 'https://instagram.com/Yukishima3_'
}
}, {
urlButton: {
displayText: 'INSTAGRAM',
url: 'https://instagram.com/Yukishima3_'
}
}, {
urlButton: {
displayText: 'INSTAGRAM',
url: 'https://instagram.com/Yukishima3_'
}
},, {
quickReplyButton: {
displayText: 'ANONYMOUS CHAT',
id: 'ac'
}
}]
azhar.sendMessage(m.chat, { caption: menulist, document: fs.readFileSync('./media/info.pdf'), mimetype: `${docs}`, jpegThumbnail:fs.readFileSync("./media/menu.png"), fileName: `${setting.botName}`, templateButtons: buttonmenu, footer: `© ${setting.botName} bot`, mentionedJid: [m.sender] })
}
break
//////////////PEMBATAS ISI CASE / BREAK/////////////
default:
if (budy.startsWith('sendkontak')) {
  const kasihkon = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ `FN:${pushname}\n`
+ `ORG:${pushname};\n`
+ `TEL;type=CELL;type=VOICE;waid=${sender}:+${sender}\n`
+ 'END:VCARD';
azhar.sendMessage(from, { contacts: { contacts: [{ kasihkon }] }});
}
if (budy.startsWith('=>')) {
    if (!isOwner) return reply(mess.owner)
    function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
    }
    try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
    } catch (e) {
reply(String(e))
    }
}

if (budy.startsWith('>')) {
    if (!isOwner) return reply(mess.owner)
    try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
    } catch (err) {
await reply(String(err))
    }
}

if (budy.startsWith('$')) {
    if (!isOwner) return reply(mess.owner)
    exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
    })
}
	
if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
    this.anonymous = this.anonymous ? this.anonymous : {}
    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
    if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
    }
    return !0
}
	
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
azhar.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}


    } catch (err) {
  azhar.sendMessage(m.key.remoteJid, { text: `*[TERJADI ERROR]*\n${err}` }, { quoted: ftoko })
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
