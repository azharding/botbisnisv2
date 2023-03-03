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
let payment = JSON.parse(fs.readFileSync('./database/user/payment.json'));
let seller = JSON.parse(fs.readFileSync('./database/store/seller.json'));
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
    const isPayment = payment.includes(m.sender)
    const isSeller = seller.includes(m.sender)
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

//////// [Text CENTANG STATUS] //////////

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

/////////////// AntiLink //////////
if (isAntilink) {
if (!isBotAdmins) return
}
if (budy.includes(`https://chat.whatsapp.com/`)) {
let gclink = (`https://chat.whatsapp.com/`+await azhar.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return reply(`┌────「𝙇𝙄𝙉𝙆 𝙏𝙀𝙍𝘿𝙀𝙏𝙀𝙆𝙎𝙄」───\n└『𝙺𝚊𝚖𝚞 𝚃𝚒𝚍𝚊𝚔 𝙹𝚊𝚍𝚒 𝙳𝚒 𝚔𝚒𝚌𝚔 𝚔𝚊𝚛𝚎𝚗𝚊\n 𝚔𝚊𝚖𝚞 𝙼𝚎𝚗𝚐𝚒𝚛𝚒𝚖 𝙻𝚒𝚗𝚔 𝙶𝚛𝚘𝚞𝚙 𝙸𝚗𝚒』`)
if (isAdmins) return reply(`┌────「𝙇𝙄𝙉𝙆 𝙏𝙀𝙍𝘿𝙀𝙏𝙀𝙆𝙎𝙄」───\n└『𝙺𝚊𝚖𝚞 𝚃𝚒𝚍𝚊𝚔 𝙹𝚊𝚍𝚒 𝙳𝚒 𝚔𝚒𝚌𝚔 𝚔𝚊𝚛𝚎𝚗𝚊\n 𝚔𝚊𝚖𝚞 𝙰𝚍𝚖𝚒𝚗』`)
kice = m.sender
azhar.sendMessage(from, {text:`┌────「𝙇𝙄𝙉𝙆 𝙏𝙀𝙍𝘿𝙀𝙏𝙀𝙆𝙎𝙄」───\n└『@${kice.split("@")[0]} 𝙰𝚔𝚊𝚗 𝙳𝚒𝚔𝚒𝚌𝚔 𝙺𝚊𝚛𝚎𝚗𝚊 𝙼𝚎𝚗𝚐𝚒𝚛𝚒𝚖 𝙻𝚒𝚗𝚔 𝙳𝚒 𝙶𝚛𝚘𝚞𝚙 𝙸𝚗𝚒』`, contextInfo:{mentionedJid:[kice]}}, {quoted: ftoko})
setTimeout( () => {
  azhar.groupParticipantsUpdate(m.chat, [kice], 'remove')
})
}
        
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
	// write database every 5 minute
	setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 1 * 1000)
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


//document randomizer
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
let documents = [doc5]
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

//////// [Tempat Chat Pribadi] /////////
const image12 = fs.readFileSync('./media/pp.jpg')
const bayar1 = `Kamu Akan Membeli Item Di ${setting.botName} Store \nHarga :\nProduk: \nSilahkan Tekan Bayar Untuk Melanjutkan Proses Pembayaran`
const bayar2 = `© ${setting.botName} bot`
const bayar3 = [{buttonId: `bayar`,buttonText: {displayText: `BAYAR`,},type: 1,}, {buttonId: `p`,buttonText: {displayText: `LIHAT MENU`,},type: 1,}]
blombayar = `┌────「𝙋𝙀𝙎𝘼𝙉 𝙋𝙍𝙄𝘽𝘼𝘿𝙄」───⬣\n└『𝙷𝚊𝚒 @${sender.split("@")[0]} 𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝙲𝚎𝚔 𝙲𝚑𝚊𝚝 𝙿𝚛𝚒𝚋𝚊𝚍𝚒 𝚈𝚊𝚗𝚐 𝙳𝚒𝚔𝚒𝚛𝚒𝚖𝚔𝚊𝚗 𝙾𝚕𝚎𝚑 𝙱𝚘𝚝』`


/////////// [Tempat Kata] //////////////
const stock1 = `𝚂𝚝𝚘𝚔 𝚃𝚎𝚛𝚜𝚎𝚍𝚒𝚊`
const stock2 = `𝚂𝚝𝚘𝚔 𝚃𝚎𝚛𝚋𝚊𝚝𝚊𝚜`
const stock3 = `𝚂𝚝𝚘𝚔 𝙷𝚊𝚋𝚒𝚜`

const katahi = `𝙷𝚊𝚒 _${pushname}_
𝙸𝚗𝚒 𝙰𝚍𝚊𝚕𝚊𝚑 𝙿𝚎𝚜𝚊𝚗 𝙾𝚝𝚘𝚖𝚊𝚝𝚒𝚜  
⬣━━━</>𝐏𝐄𝐑𝐇𝐀𝐓𝐈𝐀𝐍</>━━━⬣ 
=⬣ 𝙹𝚊𝚗𝚐𝚊𝚗 𝚂𝚙𝚊𝚖 𝚃𝚎𝚕𝚙𝚘𝚗 𝙱𝚘𝚝 
=⬣ 𝙹𝚊𝚗𝚐𝚊𝚗 𝚂𝚙𝚊𝚖 𝙲𝚑𝚊𝚝 𝙱𝚘𝚝   
𝙸𝚗𝚏𝚘 𝙱𝚘𝚝 
● Running : ${runtime(process.uptime())}
● 
● Language : JavaScript
● Jam  : ${moment().utcOffset('+0900').format('HH:mm')} WIT
             : ${moment().utcOffset('+0800').format('HH:mm')} WITA
             : ${moment().utcOffset('+0700').format('HH:mm')} WIB
⬣======================⬣

┏━⬣ 𝘽𝙊𝙏 𝙏𝙀𝙇𝘼𝙃 𝘽𝙀𝙍𝙅𝘼𝙇𝘼𝙉 
┗━━━━━━━━━━━━━━━━━━━⬣ 
⬡ ${runtime(process.uptime())}
⬣━━━━━━━━━━━━━━━━━━━⬣ 

𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝙿𝚒𝚕𝚒𝚑 𝙼𝚎𝚗𝚞 𝙳𝚒𝚋𝚊𝚠𝚊𝚑 𝙸𝚗𝚒`

const katalist = `┌─────「𝙈𝙀𝙉𝙐 𝙎𝙏𝙊𝙍𝙀」───── ◉
├⋗ 𝙽𝚊𝚖𝚊 : ${pushname}
├⋗ 𝙽𝚘𝚖𝚘𝚛 : ${sender.split('@')[0]}
├⋗ 𝙸𝚗𝚏𝚘 : ${isAdmins ? '𝙰𝚍𝚖𝚒𝚗' : '𝙼𝚎𝚖𝚋𝚎𝚛'}
├⋗ 𝚂𝚝𝚊𝚝𝚞𝚜 : ${isSeller ? '𝚂𝚎𝚕𝚕𝚎𝚛/𝙿𝚎𝚗𝚓𝚞𝚊𝚕' : '𝙱𝚞𝚢𝚎𝚛/𝙿𝚎𝚖𝚋𝚎𝚕𝚒'}
├⋗ 𝚂𝚎𝚛𝚟𝚎𝚛  : ${os.platform()}
└『𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝙿𝚒𝚕𝚒𝚑 𝙼𝚎𝚗𝚞 𝙳𝚒 𝙱𝚊𝚠𝚊𝚑 \n   𝙸𝚗𝚒 𝚄𝚗𝚝𝚞𝚔 𝙼𝚎𝚕𝚒𝚑𝚊𝚝 𝙼𝚎𝚗𝚞 𝚂𝚝𝚘𝚛𝚎』`

const nyoutube = ('𝗫𝗜𝗘 𝗕𝗢𝗧𝗭') 


const menulist = `Hallo ${pushname} ${ucapanWaktu}
● Nomor : ${sender.split('@')[0]}
● User : ${isSeller ? 'Premium' : 'Free'}
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
`

////////////[Kata Kata Produk]/////////
const fb12 = `Kamu Akan Membeli Item Di ${setting.botName} Store \nHarga : 10.000\nProduk: 1k Like \nSilahkan Tekan Bayar Untuk Melanjutkan Proses Pembayaran`
const ig12 = `Kamu Akan Membeli Item Di ${setting.botName} Store \nHarga : 12.000\nProduk: 1k Like \nSilahkan Tekan Bayar Untuk Melanjutkan Proses Pembayaran`
const tt12 = `Kamu Akan Membeli Item Di ${setting.botName} Store \nHarga : 10.000\nProduk: 1k Like \nSilahkan Tekan Bayar Untuk Melanjutkan Proses Pembayaran`
const yt12 = `Kamu Akan Membeli Item Di ${setting.botName} Store \nHarga : 10.000\nProduk: 1k Like \nSilahkan Tekan Bayar Untuk Melanjutkan Proses Pembayaran`
const ml12 = `Kamu Akan Membeli Item Di ${setting.botName} Store \nHarga : 10.000\nProduk: 1k Like \nSilahkan Tekan Bayar Untuk Melanjutkan Proses Pembayaran`
const ff12 = `Kamu Akan Membeli Item Di ${setting.botName} Store \nHarga : 10.000\nProduk: 1k Like \nSilahkan Tekan Bayar Untuk Melanjutkan Proses Pembayaran`
const pb12 = `Kamu Akan Membeli Item Di ${setting.botName} Store \nHarga : 10.000\nProduk: 1k Like \nSilahkan Tekan Bayar Untuk Melanjutkan Proses Pembayaran`
const hdi12 = `Kamu Akan Membeli Item Di ${setting.botName} Store \nHarga : 10.000\nProduk: 1k Like \nSilahkan Tekan Bayar Untuk Melanjutkan Proses Pembayaran`
const pubg12 = `Kamu Akan Membeli Item Di ${setting.botName} Store \nHarga : 10.000\nProduk: 1k Like \nSilahkan Tekan Bayar Untuk Melanjutkan Proses Pembayaran`
const cod12 = `Kamu Akan Membeli Item Di ${setting.botName} Store \nHarga : 10.000\nProduk: 1k Like \nSilahkan Tekan Bayar Untuk Melanjutkan Proses Pembayaran`
const canva12 = `Kamu Akan Membeli Item Di ${setting.botName} Store \nHarga : 10.000\nProduk: 1k Like \nSilahkan Tekan Bayar Untuk Melanjutkan Proses Pembayaran`
const info12 = `Kamu Akan Membeli Item Di ${setting.botName} Store \nHarga : 10.000\nProduk: 1k Like \nSilahkan Tekan Bayar Untuk Melanjutkan Proses Pembayaran`

/////////// [Penutup Kata] //////////////



///////////////////////// [PEMBUKAAN CASE BREAK] /////////////////////////////////
switch(command) {

//////////////////// [TEMPAT STORE 1] ////////////////////
        
case 'p': 
let sections = [
{
title: "❏━━━━━━『𝙎𝙊𝙎𝙄𝘼𝙇 𝙈𝙀𝘿𝙄𝘼』━━━━━❍",
rows: [
{title: "FACEBOOK", rowId: `fb99`, description: stock1},
{title: "INSTAGRAM", rowId: `ig99`, description: stock3},
{title: "TIKTOK", rowId: `tt99`, description: stock2},
{title: "YOUTUBE", rowId: `yt99`, description: stock3}
]
},
  {
title: "❏━━━━━━『𝙏𝙊𝙋 𝙐𝙋 𝙂𝘼𝙈𝙀』━━━━━❍",
rows: [
{title: "MOBILE LEGENDS", rowId: `ml99`, description: ``},
{title: "FREE FIRE", rowId: `ff99`, description: ``},
{title: "POINT BLANK", rowId: `pb99`, description: ``},
{title: "DOMINO ISLAND", rowId: `hdi99`, description: ``},
{title: "PUBG MOBILE", rowId: `pubg99`, description: ``},
{title: "COD MOBILE", rowId: `codm99`, description: ``}
]
},
{
title: "❏━━━━━━『𝙏𝙊𝙋 𝙐𝙋 𝙂𝘼𝙈𝙀』━━━━━❍",
rows: [
{title: "FACEBOOK", rowId: `list5`, description: ``},
{title: "YOUTUBE", rowId: `animemenu`, description: ``}
]
},
{
title: "❏━━━━━━『𝙏𝙊𝙋 𝙐𝙋 𝙂𝘼𝙈𝙀』━━━━━❍",
rows: [
{title: "DEVELOPER BOT", rowId: `owner`, description: ``},
{title: "INFO DEVELOPER", rowId: `infoowner`, description: ``}
]
}, 
]
azhar.sendListMsg(m.chat, katalist, `${setting.botName}`, ``, `BUKA MENU`, sections, ftoko) 
break

//////////////////// [TEMPAT STORE 2] ////////////////////
case 'fb99': {
    let buttons = [
        {buttonId: `p`, buttonText: {displayText: 'BAYAR'}, type: 1}, {buttonId: `store2`, buttonText: {displayText: 'MEDIA SOSIAL'}, type: 1}
    ]
    let buttonMessage = {
        image: image12,
        caption: katahi,
        footer: `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓`,
        buttons: buttons,
        headerType: 4
    }
    azhar.sendMessage(m.chat, buttonMessage, { quoted: ftoko })
}
break 
case 'tt99': {
    let buttons = [
        {buttonId: `store1`, buttonText: {displayText: 'TOP UP GAME'}, type: 1}, {buttonId: `store2`, buttonText: {displayText: 'MEDIA SOSIAL'}, type: 1}
    ]
    let buttonMessage = {
        image: image12,
        caption: katahi,
        footer: `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓`,
        buttons: buttons,
        headerType: 4
    }
    azhar.sendMessage(m.chat, buttonMessage, { quoted: ftoko })
}
break 
case 'ig99': {
    let buttons = [
        {buttonId: `store1`, buttonText: {displayText: 'TOP UP GAME'}, type: 1}, {buttonId: `store2`, buttonText: {displayText: 'MEDIA SOSIAL'}, type: 1}
    ]
    let buttonMessage = {
        image: image12,
        caption: katahi,
        footer: `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓`,
        buttons: buttons,
        headerType: 4
    }
    azhar.sendMessage(m.chat, buttonMessage, { quoted: ftoko })
}
break 
case 'yt99': {
    let buttons = [
        {buttonId: `store1`, buttonText: {displayText: 'TOP UP GAME'}, type: 1}, {buttonId: `store2`, buttonText: {displayText: 'MEDIA SOSIAL'}, type: 1}
    ]
    let buttonMessage = {
        image: image12,
        caption: katahi,
        footer: `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓`,
        buttons: buttons,
        headerType: 4
    }
    azhar.sendMessage(m.chat, buttonMessage, { quoted: ftoko })
}
break 
case 'ml99': {
    let buttons = [
        {buttonId: `store1`, buttonText: {displayText: 'TOP UP GAME'}, type: 1}, {buttonId: `store2`, buttonText: {displayText: 'MEDIA SOSIAL'}, type: 1}
    ]
    let buttonMessage = {
        image: image12,
        caption: katahi,
        footer: `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓`,
        buttons: buttons,
        headerType: 4
    }
    azhar.sendMessage(m.chat, buttonMessage, { quoted: ftoko })
}
break 
case 'ff99': {
    let buttons = [
        {buttonId: `store1`, buttonText: {displayText: 'TOP UP GAME'}, type: 1}, {buttonId: `store2`, buttonText: {displayText: 'MEDIA SOSIAL'}, type: 1}
    ]
    let buttonMessage = {
        image: image12,
        caption: katahi,
        footer: `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓`,
        buttons: buttons,
        headerType: 4
    }
    azhar.sendMessage(m.chat, buttonMessage, { quoted: ftoko })
}
break 
case 'pb99': {
    let buttons = [
        {buttonId: `store1`, buttonText: {displayText: 'TOP UP GAME'}, type: 1}, {buttonId: `store2`, buttonText: {displayText: 'MEDIA SOSIAL'}, type: 1}
    ]
    let buttonMessage = {
        image: image12,
        caption: katahi,
        footer: `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓`,
        buttons: buttons,
        headerType: 4
    }
    azhar.sendMessage(m.chat, buttonMessage, { quoted: ftoko })
}
break 
case 'pubg99': {
    let buttons = [
        {buttonId: `store1`, buttonText: {displayText: 'TOP UP GAME'}, type: 1}, {buttonId: `store2`, buttonText: {displayText: 'MEDIA SOSIAL'}, type: 1}
    ]
    let buttonMessage = {
        image: image12,
        caption: katahi,
        footer: `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓`,
        buttons: buttons,
        headerType: 4
    }
    azhar.sendMessage(m.chat, buttonMessage, { quoted: ftoko })
}
break 

//////////////////// [TEMPAT STORE 3] ////////////////////
case 'sell1': {
  if (!m.isGroup) return sendButMessage (sender, fb12, bayar2, bayar3, { quoted: ftoko})
  if (!isPayment) return reply(blombayar) & sendButMessage (sender, bayar1, bayar2, bayar3, { quoted: ftoko})
    reply("bayar")
  }
  break
case 'sell2': {
    if (!m.isGroup) return sendButMessage (sender, ig12, bayar2, bayar3, { quoted: ftoko})
    if (!isPayment) return reply(blombayar) & sendButMessage (sender, bayar1, bayar2, bayar3, { quoted: ftoko})
    reply("bayar")
    }
break
case 'sell3': {
      if (!m.isGroup) return sendButMessage (sender, tt12, bayar2, bayar3, { quoted: ftoko})
      if (!isPayment) return reply(blombayar) & sendButMessage (sender, bayar1, bayar2, bayar3, { quoted: ftoko})
    reply("bayar")
      }
      break
case 'sell4': {
        if (!m.isGroup) return sendButMessage (sender, yt12, bayar2, bayar3, { quoted: ftoko})
        if (!isPayment) return reply(blombayar) & sendButMessage (sender, bayar1, bayar2, bayar3, { quoted: ftoko})
    reply("bayar")
        }
 break
case 'sell5': {
          if (!m.isGroup) return sendButMessage (sender, ml12, bayar2, bayar3, { quoted: ftoko})
          if (!isPayment) return reply(blombayar) & sendButMessage (sender, bayar1, bayar2, bayar3, { quoted: ftoko})
    reply("bayar")
          }
break
case 'sell6': {
     if (!m.isGroup) return sendButMessage (sender, ff12, bayar2, bayar3, { quoted: ftoko})
      if (!isPayment) return reply(blombayar) & sendButMessage (sender, bayar1, bayar2, bayar3, { quoted: ftoko})
    reply("bayar")
            }
break
       
/////////////////////////[PENUTUP STORE]//////////////////////
        
case 'tes': {
    if (!m.isGroup) return sendButMessage (sender, bayar1, bayar2, bayar3, { quoted: ftoko})
    if (!isPayment) return reply(blombayar) & sendButMessage (sender, bayar1, bayar2, bayar3, { quoted: ftoko})
    if (isBan) return reply(mess.banned)
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
case 'sendsessi':
if (!isOwner) return reply(mess.owner)
azhar.sendMessage(from, { document: fs.readFileSync(`./${setting.sessionName}.json`), mimetype: 'jpg/application', fileName: `${setting.sessionName}.json`}, { quoted: ftoko })
break
  case 'beli':
  reply('coming soon...')
  break
case 'daftar':{
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
const Imgnah = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlaKCZE6A9OdzmLHnsxL28_XT8qjBsL1tSlg&usqp=CAU`)
let btn886 = [{ buttonId: 'p', buttonText: { displayText: 'ALL MENU' }, type: 1 }]
let txtit = anuuh
azhar.sendMessage(from, { caption: anuuh, image: Imgnah, templateButtons: btn886, footer: `© ${setting.botName} bot`, mentions: [sender] }
                 )
		m.reply('「 𝙑𝙀𝙍𝙄𝙁𝙄𝘾𝘼𝙏𝙄𝙊𝙉 𝙎𝙐𝙆𝙎𝙀𝙎  」')
}
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
case 'addseller':
if (!isOwner) return reply(mess.owner)
if (!q) return reply(`Masukan Nomornya contoh: \n${prefix}${command} 628586826398`)
if(isNaN(q)) return await reply('harus berupa nomor')
  if (q.includes(`+`)) return reply('Tidak menggunakan + langsung nomor 6285****')
prmi = args.join(" ")
premium.push(`${prmi}@s.whatsapp.net`)
fs.writeFileSync('./database/store/seller.json', JSON.stringify(seller))
reply(`*「 SELLER ADDED 」*\n\n➸ *ID*: ${prmi}`)
break
case 'delseller':
 case 'dellseller':
  if (!isOwner) return reply(mess.owner)
  if (!q) return reply(`Masukan Nomornya contoh: \n${prefix}${command} 628586826398`)
  if(isNaN(q)) return await reply('harus berupa nomor')
  if (q.includes(`+`)) return reply('Tidak menggunakan + langsung nomor 6285****')
  prmin = `${q}@s.whatsapp.net`
anul = banned.indexOf(prmin)
premium.splice(anul, 1)
fs.writeFileSync('./database/store/seller.json', JSON.stringify(seller))
reply(mess.success)
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
  
case 'public': {
if (!isOwner) return reply(mess.owner)
azhar.public = true
reply('Sukse Change To Public Usage')
}
break
case 'self': {
if (!isOwner) return reply(mess.owner)
azhar.public = false
reply('Sukses Change To Self Usage')
}
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
if (args[0] === 'enable'){
if (isAntilink) return reply(`*Udah Aktif*`)
antilink.push(from)
fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
} else if (
args[0] === 'disable') { 
if (!isAntilink) return reply(`*Belum Aktif*`)
let anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
reply('*「ANTILINK DI NONAKTIFKAN」*')
	} else {
const buttonstod = [{buttonId: `${prefix}antilink enable`, buttonText: {displayText: 'ON'}, type: 1},{buttonId: `${prefix}antilink disable`, buttonText: {displayText: 'OFF'}, type: 1}]
const patri = {
text: `Silahkan pilih salah satu di bawah`,
footer: `© ${setting.botName}`,
buttons: buttonstod,
headerType: 1
}
azhar.sendMessage(from, patri, {quoted:ftoko})
}
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
    azhar.chatModify({ mute: 'Infinity' }, m.chat, [])
} else if (args[0] === 'unmute') {
    azhar.chatModify({ mute: null }, m.chat, [])
} else if (args[0] === 'archive') {
    azhar.chatModify({  archive: true }, m.chat, [])
} else if (args[0] === 'unarchive') {
    azhar.chatModify({ archive: false }, m.chat, [])
} else if (args[0] === 'read') {
    azhar.chatModify({ fromMe: true }, m.chat, [])
} else if (args[0] === 'unread') {
    azhar.chatModify({ markRead: false }, m.chat, [])
} else if (args[0] === 'delete') {
    azhar.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, [])
}
}
break

//////////////////[Grup menu]/////////////////////
case 'join': {
if (!isOwner) return reply(mess.owner)
if (!text) return reply( 'Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply( 'Link Invalid!')
reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await azhar.groupAcceptInvite(result)
}
break
case 'leave': {
if (!isOwner) return reply(mess.owner)
await azhar.groupLeave(m.chat)
}
break
	case 'kick': {
	  if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply( mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply( mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await azhar.groupParticipantsUpdate(m.chat, [users], 'remove')
	}
	break
    
	case 'add': {
	  if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply( mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply( mess.admin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await azhar.groupParticipantsUpdate(m.chat, [users], 'add')
	}
	break
	case 'promote': {
	  if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply( mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply( mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await azhar.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply('Kamu Sekarang Jadi Admin')).catch((err) => reply('Gagal'))
	}
	break
case 'demote': {
	  if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply( mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply( mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await azhar.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply('Kamu Sekarang Jadi Member')).catch((err) => reply('Gagal'))
	}
	break
case 'setname': case 'setsubject': {
if (!m.isGroup) return reply( mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply( mess.admin)
if (!text) return reply( 'Text ?')
await azhar.groupUpdateSubject(m.chat, text)
}
break
  case 'setdesc': case 'setdesk': {
if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: ftoko}) 
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply( mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply( mess.admin)
if (!text) return reply( 'Text ?')
await azhar.groupUpdateDescription(m.chat, text)
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
case 'linkgc': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
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
    await azhar.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
} else if (args[0] === 'disable') {
    await azhar.sendMessage(m.chat, { disappearingMessagesInChat: false })
}
}
break
case 'd': case 'delete': case 'del': {
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) return reply( `${pushname}`)
azhar.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break

case 'bc': case 'broadcast': case 'bcall': {
if (!isOwner) return reply(mess.owner)
if (!text) throw `Text mana?\n\nExample : ${prefix + command} HALO SEMUANYA`
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		await sleep(1500)
		let txt = `「 Broadcast Bot 」\n\n${text}`
		let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑 SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
            await azhar.sendButtonText(yoi, buttons, txt, nyoutube, m, {quoted: ftoko})
		}
		m.reply('Sukses Broadcast')
}
break

case 'bcgc': case 'bcgroup': {
if (!isOwner) return reply(mess.owner)
if (!text) throw `Text mana?\n\nExample : ${prefix + command} HALO SEMUANYA`
let getGroups = await azhar.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let txt = `「 Broadcast Bot 」\n\n${text}`
let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑 SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
await azhar.sendButtonText(i, buttons, txt, nyoutube, m, {quoted: ftoko})
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
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
 
   case 'stiker': case 'sticker': case 's': { 
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

///////// [ TEMPAT CASE PADA CHAT ] /////////////
  case 'Hai': case 'Hi': case 'hai': case 'hi': case 'Haii': case 'bot': case 'haii': case 'Halo': case 'halo': case 'menu': case 'Menu': case 'permisi': case 'Assalamualaikum': case 'bg': {
    let buttons = [
        {buttonId: `store1`, buttonText: {displayText: 'TOP UP GAME'}, type: 1}, {buttonId: `store2`, buttonText: {displayText: 'MEDIA SOSIAL'}, type: 1}
    ]
    let buttonMessage = {
        image: image12,
        caption: katahi,
        footer: `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓`,
        buttons: buttons,
        headerType: 4
    }
    azhar.sendMessage(m.chat, buttonMessage, { quoted: ftoko })
}
break 


case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
             

//////////////////////// [PEMBATAS AKHIR ISI CASE/BREAK]////////////////////////
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
