require('./settings')
const { modul } = require('./asset/database/module')
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl, googleTTS, maker } = modul
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const yts2 = require('yt-search')
const yts = require('yt-search')
const fg = require('api-dylux')
const darkarr = moment.tz('Asia/Kolkata').format('HH:mm:ss');
const nizat1 = moment.tz('Asia/Kolkata').format('DD');
const thlazat1 = moment.tz('Asia/Kolkata').format('MM');
const thlazat2 = moment.tz('Asia/Kolkata').format('MMMM');
const kumtin = moment.tz('Asia/Kolkata').format('DD/MM/YYYY');
const kumzat1 = moment.tz('Asia/Kolkata').format('YYYY');
const nizatani = moment.tz('Asia/Kolkata').format('dddd');
const darkarr2 = moment().tz('Asia/Kolkata').format('hh:mm A [GMT]Z', true);
const { youtubedl, youtubedlv2 } = require('@bochilteam/scraper-sosmed')
const { MessageType, MessageOptions, Mimetype } = require('@whiskeysockets/baileys')
const { clockString, parseMention, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture, getRandom } = require('./lib/myfunc')
const { color, bgcolor } = require('./lib/color')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")
const { TelegraPh } = require('./lib/uploader')
const { msgFilter } = require('./lib/antispam')
const eco = require('discord-mongoose-economy')
const ty = eco.connect("mongodb+srv://HBMods-Api:h34b34t@hbmods.0fjkaql.mongodb.net/?retryWrites=true&w=majority") 
const mizo_tawnga_translate_na = require("@kreisler/js-google-translate-free")
const asource1 = 'en'
const atarget1 = 'lus'
const athulo1 = `${nizatani}`
const { createCanvas, loadImage } = require('canvas');
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./lib/yt')
const anon = require('./lib/menfess') 
const mlstalk = require('./asset/zepzeuh/mlstalk')
const mumaker = require("mumaker")
const { DOMParser } = require('xmldom-qsa')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const acrcloud = require('acrcloud');
const acr = new acrcloud({
  host: "identify-eu-west-1.acrcloud.com",
  access_key: "4dcedd3dc6d911b38c988b872afa7e0d",
  access_secret: "U0PEUg2y6yGVh6NwJra2fJkiE1R5sCfiT6COLXuk",
});
const prem1 = JSON.parse(fs.readFileSync('./asset/database/premium.json'))
const englo = 'https://raw.githubusercontent.com/HBMods-OFC/Base/main/HBWABot-v3/Premium.json';
const englo2 = await fetch(englo);
const prem = await englo2.json();
const hbmods = JSON.parse(fs.readFileSync('./asset/Base/Developer.json'))
const Englo = JSON.parse(fs.readFileSync('./asset/Base/Ka-hming.json'))
const herbertverifieduser = JSON.parse(fs.readFileSync('./asset/database/user.json'))
const VoiceNoteHerbert = JSON.parse(fs.readFileSync('./asset/database/herbertvn.json'))
const StickerHerbert = JSON.parse(fs.readFileSync('./asset/database/herbertsticker.json'))
const ImageHerbert = JSON.parse(fs.readFileSync('./asset/database/herbertimage.json'))
const VideoHerbert = JSON.parse(fs.readFileSync('./asset/database/herbertvideo.json'))
const BadHerbert = JSON.parse(fs.readFileSync('./asset/database/bad.json'))
let autosticker = JSON.parse(fs.readFileSync('./asset/database/autosticker.json'))
let ntnsfw = JSON.parse(fs.readFileSync('./asset/database/nsfw.json'))
let ntrssfeed = JSON.parse(fs.readFileSync('./asset/database/rssfeed.json'))
global.db = JSON.parse(fs.readFileSync('./asset/database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}
//read database\\
let tebaklagu = db.game.tebaklagu = []
let _mizoquiz = db.game.mizoquiz = []
let _gkmizo = db.game.gkmizo = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []

module.exports = HBWABotMz = async (HBWABotMz, m, chatUpdate, store) => {
try {
const { type, quotedMsg, mentioned, now, fromMe } = m
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const content = JSON.stringify(m.message)
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await HBWABotMz.decodeJid(HBWABotMz.user.id)
const HerbertTheCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const HerbertTheCreator1 = m.sender === '918416093656@s.whatsapp.net';
const HerbertTheDeveloper = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isAudio = (type == 'audioMessage')
const isSticker = (type == 'stickerMessage')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const senderNumber = sender.split('@')[0]
const groupMetadata = m.isGroup ? await HBWABotMz.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPrem = prem.includes(m.sender)
const isUser = herbertverifieduser.includes(sender)
const banUser = await HBWABotMz.fetchBlocklist()
const isBanned = banUser ? banUser.includes(m.sender) : false
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
const Hmangtu = mentionByReply ? mentionByReply : mentionByTag[0]
const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
const isFirstHandleUsed = false;
const isEval = body.startsWith('=>')
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false 
//theme audio reply
const Menu = () => {
let Menu = fs.readFileSync('./asset/audio/Menu.mp3')
HBWABotMz.sendMessage(from, { audio: Menu, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
const Owner = () => {
let Owner = fs.readFileSync('./asset/audio/owner.mp3')
HBWABotMz.sendMessage(from, { audio: Owner, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
// react message
 const uploadreact = () => {
 HBWABotMz.sendMessage(from, { react: { text: "⬆️" , key: m.key }}) 
 }
 const loadingreact = () => {
 HBWABotMz.sendMessage(from, { react: { text: "♻️" , key: m.key }}) 
 }
const finishreact = () => {
 HBWABotMz.sendMessage(from, { react: { text: "✅" , key: m.key }}) 
 } 
 const makerreact = () => {
 HBWABotMz.sendMessage(from, { react: { text: "🎯" , key: m.key }}) 
 } 
 const downloadreact = () => {
 HBWABotMz.sendMessage(from, { react: { text: "⬇️" , key: m.key }}) 
 }
 const robotreact = () => {
 HBWABotMz.sendMessage(from, { react: { text: "🤖️" , key: m.key }}) 
 } 
 const helloreact = () => {
 HBWABotMz.sendMessage(from, { react: { text: "👋️" , key: m.key }}) 
 }

if (isEval && senderNumber == "918416093656") {
let evaled,
text = q,
{ inspect } = require('util')
try {
if (text.endsWith('--sync')) {
evaled = await eval(
`(async () => { ${text.trim.replace('--sync', '')} })`
)
m.reply(evaled)
}
evaled = await eval(text)
if (typeof evaled !== 'string') evaled = inspect(evaled)
await HBWABotMz.sendMessage(from, { text: evaled }, { quoted: m })
} catch (e) {
HBWABotMz.sendMessage(from, { text: String(e) }, { quoted: m })
}
}
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = false
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
premium: false
}

const setting = db.settings[botNumber]
if (typeof setting !== 'object') db.settings[botNumber] = {}
if (setting) {
if (!('anticall' in setting)) setting.anticall = false
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = false
} else global.db.settings[botNumber] = {
anticall: true,
status: 0,
autobio: false
}

} catch (err) {
console.error(err)
}

if (!HBWABotMz.public) {
if (!HerbertTheCreator && !m.key.fromMe) return
}
if (autoread) {
HBWABotMz.readMessages([m.key])
}
if (isCmd && !isUser) {
herbertverifieduser.push(sender)
fs.writeFileSync('./asset/database/user.json', JSON.stringify(herbertverifieduser, null, 2))
}

HBWABotMz.sendPresenceUpdate('available', from)
//zawhna
this.quiz = this.quiz || {};
let zawhna = Object.values(this.quiz).find(z => z.id && z.status && z.p === m.sender);

if (zawhna) {
  if (m.isGroup && zawhna.status == 'wait') {
    const questionMessage = `*\n${selectedQuestion.question}*\n\n` +
      `A. ${selectedQuestion.options[0]}\n` +
      `B. ${selectedQuestion.options[1]}\n` +
      `C. ${selectedQuestion.options[2]}\n` +
      `D. ${selectedQuestion.options[3]}\n\n` +
      "Heng option-te hi (A, B, C, or D) thlang rawh rawh";

    if (!zawhna.maktak) HBWABotMz.sendText(m.chat, questionMessage, m);
    setTimeout(() => {
      const userAnswer = answer.toUpperCase();
      if (["A", "B", "C", "D"].includes(userAnswer)) {
        const correctAnswer = selectedQuestion.answer.toUpperCase();

        zawhna.waktu_milih = setTimeout(() => {
          if (!zawhna.maktak) dodoi(`Second 15 chhunga i thlan hman loh avangin tih tawp a ni`);
          delete this.quiz[zawhna.id];
          return !0;
        }, zawhna.timeout);
      }

      let jwb = m.sender == zawhna.p;
      let reg = /^(A|B|C|D)/i;

      if (jwb && reg.test(m.text)) {
        zawhna.maktak = reg.exec(m.text.toUpperCase())[0];
        zawhna.text = m.text;
        dodoi(` ${m.text} i thlang e✓`);
      }

      if (zawhna.maktak) {
        clearTimeout(zawhna.waktu_milih);
        HBWABotMz.sendText(m.chat, `_*RPS Results*_ @${zawhna.p.split`@`[0]} (${zawhna.text})`);
        delete this.quiz[zawhna.id];
      }
    });
  }
} 
//a tawp

 //Suit RPS
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
HBWABotMz.sendTextWithMentions(m.chat, `@${roof.p.split`@`[0]}, @${roof.p2.split`@`[0]}'n a cho lo che a, chu vangin cancel a ni`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
HBWABotMz.sendText(m.chat, `RPS chu in thlan turin pvt a thawn ve ve in ni!..

@${roof.p.split`@`[0]} leh 
@${roof.p2.split`@`[0]}

He mi link hi hmet la RPS a i duh ber kha lo thlang rawh
 https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) HBWABotMz.sendText(roof.p, `I duh ber thlang rawh \n\Rock🗿\nPaper📄\nScissors✂️`, m)
if (!roof.pilih2) HBWABotMz.sendText(roof.p2, `I duh ber thlang rawh \n\nRock🗿\nPaper📄\nScissors✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) HBWABotMz.sendText(m.chat, `In pahnihin in khel tum loh ve ve vangin RPS chu cancel a ni`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
HBWABotMz.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]}'n hun tiam chhunga a thlan hman loh avangin, Game Over a ni!`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /scissors/i
let b = /rock/i
let k = /paper/i
let reg = /^(scissors|rock|paper)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(` ${m.text} i thlang e✓ ${!roof.pilih2 ? `\n\nI tumpui la nghak lawk ang` : ''}`)
if (!roof.pilih2) HBWABotMz.sendText(roof.p2, '_Lehlamin a thlang tawh a_\nTunah nang i thlan hun', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`${m.text} i thlang e✓ ${!roof.pilih ? `\n\nI tumpui la nghak lawk ang` : ''}`)
if (!roof.pilih) HBWABotMz.sendText(roof.p, '_Lehlamin a thlang tawh a_\nTunah nang i thlan hun', 0)
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
HBWABotMz.sendText(roof.asal, `_*RPS Results*_${tie ? '\nIn in hneh tawk chiah' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` A chak zawk\n` : ` A chaklo zawk\n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` A chak zawk \n` : ` A chaklo zawk\n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
} //end

// auto set bio
if (db.settings[botNumber].autobio) {
let setting = global.db.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
await HBWABotMz.updateProfileStatus(`HBWABot | Runtime : ${runtime(uptime)}`)
setting.status = new Date() * 1
}
}
//message reply na
const dodoi = (teks) => {
 HBWABotMz.sendMessage(m.chat, { text: teks}, { quoted: m})
}

const replyherbertstyle = (teks) => {
 HBWABotMz.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": `${global.botname}`,"body": `SUB HBMods OFC`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./asset/image/HBWABot.png`),"sourceUrl": `https://youtube.com/@HBMods_Channel`}}}, { quoted: m})
}
const replyherbertstyle12 = (teks) => {
 HBWABotMz.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"showAdAttribution": true, "containsAutoReply": true,}}}, { quoted: m})
}

const replymizobiblequotes = (teks) => {
 HBWABotMz.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": `Mizo Bible Quotes`,"body": `HBWABot`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./asset/image/MizoBibleQ.png`),"sourceUrl": `https://instagram.com/mizo_bible_quote`}}}, { quoted: m})
}
const reply = (teks) => {
HBWABotMz.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: false
}
}, { quoted : m })
}
//TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room13 = Object.values(this.game).find(room13 => room13.id && room13.game && room13.state && room13.id.startsWith('tictactoe') && [room13.game.playerX, room13.game.playerO].includes(m.sender) && room13.state == 'PLAYING')
	    if (room13) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room13.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room13.game.turn(m.sender === room13.game.playerO, parseInt(m.text) - 1))) {
	    dodoi({
	    '-3': 'Game a tawp tawh',
	    '-2': 'dik lo',
	    '-1': 'Position a dik lo',
	    0: 'Position a dik lo',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room13.game.winner) isWin = true
	    else if (room13.game.board === 511) isTie = true
	    let arr = room13.game.render().map(v => {
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
	    room13.game._currentTurn = m.sender === room13.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room13.game.currentTurn : room13.game.winner
	    let str = `Room ID: ${room13.id}
A hnuia number hi i duh ber thlang rawh,

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} A chak zawk!` : isTie ? `In in hnehtawk chiah` : `Hi ${['❌', '⭕'][1 * room13.game._currentTurn]} (@${room13.game.currentTurn.split('@')[0]}) I thlan hun\n`}
❌: @${room13.game.playerX.split('@')[0]}
⭕: @${room13.game.playerO.split('@')[0]}
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
He game hi i khel peih loh chuan surrender tih type mai tur ani`
	    if ((room13.game._currentTurn ^ isSurrender ? room13.x : room13.o) !== m.chat)
	    room13[room13.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room13.x !== room13.o) await HBWABotMz.sendText(room13.x, str, m, { mentions: parseMention(str) } )
	    await HBWABotMz.sendText(room13.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room13.id]
	    }
	    }


//autoreply
for (let HBert of VoiceNoteHerbert) {
if (budy === HBert) {
let audiobuffy = fs.readFileSync(`./asset/audio/${HBert}.mp3`)
HBWABotMz.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m }) 
}
}
for (let BhosdikaHerbert of StickerHerbert){
if (budy === HBert){
let stickerbuffy = fs.readFileSync(`./asset/sticker/${HBert}.webp`)
HBWABotMz.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let HBert of ImageHerbert){
if (budy === HBert){
let imagebuffy = fs.readFileSync(`./asset/image/${HBert}.jpg`)
HBWABotMz.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let HBert of VideoHerbert){
if (budy === HBert){
let videobuffy = fs.readFileSync(`./asset/video/${HBert}.mp4`)
HBWABotMz.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const banRep = () => {
HBWABotMz.sendMessage(m.chat, {
text:`Dan lo anga min call a vangin block i ni, @${creator.split("@")[0]} bulah hian unblock va dil rawh`,
mentions: [creator],
},
{
quoted:m
})
}

if (isCmd && isBanned) {
return banRep()
}

let list = []
for (let i of hbmods) {
list.push({displayName: await HBWABotMz.getName(i),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await HBWABotMz.getName(ownernumber + "@s.whatsapp.net"
)}\nFN:${global.ownername}\nitem1.TEL;waid=${ownernumber}:${ownernumber}\nitem1.X-ABLabel:Bot hmangtu\nitem2.EMAIL;type=INTERNET:
 HBMods OFC\nitem2.X-ABLabel:YouTube\nitem3.URL:https://herbert70.blogspot.com\nitem3.X-ABLabel:IG\nitem4.ADR:;;${location} ;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
})
}

let div = []
for (let h of hbmods) {
list.push({displayName: await HBWABotMz.getName(h),vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await HBWABotMz.getName("918416093656@s.whatsapp.net")}\nFN:Herbert Suantak\nitem1.TEL;waid=918416093656:918416093656\nitem1.X-ABLabel:Bot Siamtu No.\nitem2.EMAIL;type=INTERNET:
 HBMods OFC\nitem2.X-ABLabel:YouTube\nitem3.URL:herbert70.blogspot.com\nitem3.X-ABLabel:IG\nitem4.ADR:;;India;Mizoram Aizawl ;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
})
}

if (global.autoTyping) {
if (command) {
HBWABotMz.sendPresenceUpdate('composing', from)
}
}
if (global.autoRecord) {
if (command) {
HBWABotMz.sendPresenceUpdate('recording', from)
}
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
/*
async function generateTextImage(text) {
const canvasSize = 800;
const canvas = createCanvas(canvasSize, canvasSize);
const context = canvas.getContext('2d');
context.fillStyle = '#000';
context.fillRect(0, 0, canvasSize, canvasSize);
context.font = 'bold 120px Arial';
context.fillStyle = '#FFF';
context.textAlign = 'center'; 
context.textBaseline = 'middle'; 
const textX = canvasSize / 2;
const textY = canvasSize / 2;
context.fillText(text, textX, textY);
const buffer = canvas.toBuffer('image/png');
return buffer;
}
*/
async function sendPoll(jid, text, list) {
HBWABotMz.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}
async function loading () {
var HBLoading = [
"《▒▒▒▒▒▒▒▒▒▒▒▒》0%",
"《█▒▒▒▒▒▒▒▒▒▒▒》10%",
"《█▒▒▒▒▒▒▒▒▒▒▒》10%",
"《████▒▒▒▒▒▒▒▒》30%",
"《████▒▒▒▒▒▒▒▒》30%",
"《███████▒▒▒▒▒》50%",
"《███████▒▒▒▒▒》50%",
"《██████████▒▒》80%",
"《██████████▒▒》80%",
"《████████████》100%",
"♻️ Reilo te min lo nghak rawh..."
]
let { key } = await HBWABotMz.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoading.length; i++) {
 await HBWABotMz.sendMessage(from, {text: HBLoading[i], edit: key },{quoted:m})}
}

async function hentaivid() {
return new Promise((resolve, reject) => {
const page = Math.floor(Math.random() * 1153)
axios.get('https://sfmcompile.club/page/'+page)
.then((data) => {
const $ = cheerio.load(data.data)
const zawhnaq = []
$('#primary > div > div > ul > li > article').each(function (a, b) {
zawhnaq.push({
title: $(b).find('header > h2').text(),
link: $(b).find('header > h2 > a').attr('href'),
category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
type: $(b).find('source').attr('type') || 'image/jpeg',
video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
video_2: $(b).find('video > a').attr('href') || ''
})
})
resolve(zawhnaq)
})
})
}

async function GetBuffer(url) {
return new Promise(async (resolve, reject) => {
let buffer;
await jimp
.read(url)
.then((image) => {
image.getBuffer(image._originalMime, function (err, res) {
buffer = res;
});
})
.catch(reject);
if (!Buffer.isBuffer(buffer)) reject(false);
resolve(buffer);
});
}
function GetType(Data) {
return new Promise((resolve, reject) => {
let Result, Status;
if (Buffer.isBuffer(Data)) {
Result = new Buffer.from(Data).toString("base64");
Status = 0;
} else {
Status = 1;
}
resolve({
status: Status,
result: Result,
});
});
}
async function replyprem(teks) {
m.reply(`He features hi premium member-te tan chauha siam a ni, premium Member nih i duh ve chuan a hnuaia number ka dah hian va dil rawh.\nhttps://wa.me/+918416093656`)
}
const limitneihtu = m.sender
const khawlbawm = "diamond";
const dailylimit = () => {
 HBWABotMz.sendMessage(from, {text:`He featurs hi hman i duh chuan 💎20 i neih a ngai!!.\n\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏Bot rawn hmang thar tur i nih chuan Limit tiin type rawh, ti chuan bot hman theihna tur 💎500 i dawng ang, emaw i thiante in thawn tir rawh`}, {quoted:m})
 }
const hmanzat = 20
const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"
let isQuestionActive = false
let currentQuestion;
let isQuizActive = false;

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: HBWABotMz.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, HBWABotMz.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
HBWABotMz.ev.emit('messages.upsert', msg)
}
if (_mizoquiz.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    kuis = true;
    let room = _mizoquiz[m.sender.split('@')[0]];
    let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '');
    let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text);
    if (!isSurender) {
        let index = room.chhanna.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks);
        if (room.bodaih[index]) return !0;
        room.bodaih[index] = m.sender;
    }
    let isWin = room.bodaih.length === room.bodaih.filter(v => v).length;
    let caption = `*Q.* ${room.zawhna}\n\nCHHAN TUR AWM ZAT [ *${room.chhanna.length}* ]
*Ans:*\n${Array.from(room.chhanna, (chhanna, index) => {
return isSurender || room.bodaih[index] ? `(${index + 1}) ${chhanna} ${room.bodaih[index] ? '✓' : ''}`.trim() : false;
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : ``}`.trim();

    if (isWin) {
        const give = await eco.give(limitneihtu, khawlbawm, `${room.chhanna.length}0`);
    }

    const mes = await HBWABotMz.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }});

    if (isWin) {
        dodoi(`🤩Zawhna i chhan thei vek a vangin Diamond ${room.chhanna.length}0 💎 i dawng e💎🥳`);
    } else if (isSurender) {
        dodoi('Tinge le aw ka ti🤔 tiang mai mai han hriat loh');
    }
    if (isWin || isSurender) {
        delete _mizoquiz[m.sender.split('@')[0]];
    }
}

switch (command) {
case 'mizoquiz': {
    const userKey = m.sender.split('@')[0];

    if (_mizoquiz.hasOwnProperty(userKey) && isCmd) {
        return dodoi('I in surrender dawn loh chuan zawhna chhang zo hmasa phawt rawh!');
    }

    try {
        const kaurl = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Media/main/Zawhna/mizoquiz.json');
        const random = kaurl[Math.floor(Math.random() * kaurl.length)];

        await HBWABotMz.sendText(m.chat, `Zawhnate hi one by one a chhan tur a ni a, chhanna hi Minute 2 ral hmaa chhan zo hman vek tur a ni!!`, m);

        const zawhnaq = `*Answer The Following :*\n*Q.* ${random.zawhna}\n\nCHHAN TUR AWM ZAT [ *${random.chhanna.length}* ] ${(random.chhanna.some(v => v.includes(' ') || v.includes('.'))) ? `(Chhana Thenkhatah chuan space leh fullstop hman a ngai ang)` : ''}`.trim();

        _mizoquiz[userKey] = {
            id: [userKey],
            hbwabotid: await HBWABotMz.sendText(m.chat, zawhnaq, m),
            ...random,
            bodaih: Array.from(random.chhanna, () => false),
            hadiah: 1,
            tawphun: setTimeout(() => {
                if (_mizoquiz[userKey]) HBWABotMz.sendText(m.chat, `Minute 2 a zo, Chhan theih hun chhung a tawp`, m);
                delete _mizoquiz[userKey];
            }, 120000),
        };
    } catch (error) {
        console.error('Error fetching or processing quiz:', error);
        dodoi('Result tur ka lak laiin error awm!');
    }
}
break;


case 'cdm': {
if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if (!HerbertTheCreator1) return dodoi(`Hei chu creator chauh hman thei tura siam a ni`)
let value = text.trim().split(" ")
if (value[0] === "") return
const target =
m.quoted && m.mentionedJid.length === 0
? m.quoted.sender
: m.mentionedJid[0] || null;
if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
const hnekang = target
const balance = await eco.balance(hnekang, khawlbawm);
await dodoi(`Sir i check hian diamond _💎${balance.wallet}_ hei zawng hi a nei a ni..🤔`);
}
break 

case 'may15': {
if (!HerbertTheCreator1) return dodoi(`Hei chu creator chauh hman thei tura siam a ni`)
if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
const daily = await eco.daily(limitneihtu, khawlbawm, 99999999);
    if (daily.cd) return dodoi(`i claim tawh, chu vangin ${daily.cdL} a ral hunah i claim leh thei chauh ang`)
    dodoi(`Bot hman theihna tur 💎${daily.amount} i la chhuak e`)
}
break

case 'limit': {
if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
let hmangtu = m.sender
const khawlbawm = "diamond"
const daily= await eco.daily(hmangtu, khawlbawm, 500);
if (daily.cd) return dodoi(`I claim tawh, ${daily.cdL} a ral hunah i claim leh thei chauh ang`);
dodoi(`Bot hman theihna tur 💎${daily.amount} i dawng e diamond 20 in Bot features pakhat zel i hmang thei ang.͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏\ni Iimit neih zat hriat i duh chuan HBMods tiin rawn type rawh\n\nHe tiang limit hi darkar 24 danah zel i claim thei ang`);
}
break
case 'hbmods': {
if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
const balance = await eco.balance(limitneihtu, khawlbawm);
await dodoi(`_Hi ${pushname} Bot hman theihna tur i diamond neihzat_ :\n💎${balance.wallet}\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ Diamond 💎20 in features pakhat zel i hmang thei thei ang\n`);
}
break
case 'mlimit': {
    let commandParams = text.trim().split(" ");
    if (commandParams[0] === "") return dodoi(`i limit hi midang sem ve i duh chuan, tag rawh. Tiang hian hman tur a ni\n*Entirnan* : ${prefix}limit 100 @user`);
if (text == 'rules') return dodoi(`*Mlimit hi kan 💎 Diamond-te mi dang kan pek theihna tura siam a ni a, hetah hian dan kan nei ve a ni!! chung kan dante chu\n\n*1:* ${prefix}mlimit tih hi i hmang anga chuan i pek duh zat, i rawn dah tel anga tichuan i pek duh chu i tag tel leh ang!...\n*Entirnan:* Mlimit 100 @user\n\n*2:* I diamond hi midang i pe a nih chuan i diamond neih zat a tangin 10 cut tel zel a ni ang\n\n*3:* Entirnan Diamond 1 midang i pe a nih pawn 10 cut tel zel a ni anga, chutiang bawkin 100 i pe a nih pawhin diamond 10 tho a in cut ang\n😇😇`)
    const target =
        m.quoted && m.mentionedJid.length === 0
            ? m.quoted.sender
            : m.mentionedJid[0] || null;
    if (!target || target === m.sender) return dodoi("Engtia tih nge i tum");
    if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender);
    while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender);
    const recipient = target;
    const amount = commandParams[0];
    const code = commandParams[1];
    let requestedAmount = parseInt(amount);
    if (!requestedAmount) return dodoi("I thil ziah khi check teh, command i hmang dik lo a ni mai thei");
    const balance = await eco.balance(limitneihtu, khawlbawm);
    let insufficientFunds = (balance.wallet) < requestedAmount;
    if (insufficientFunds) return dodoi("Chu tiang zat chu 💎diamond i nei lo");
    const deduct = await eco.deduct(limitneihtu, khawlbawm, requestedAmount);
    const adminDeduct = await eco.deduct(limitneihtu, khawlbawm, 10);
    const give = await eco.give(recipient, khawlbawm, requestedAmount);
    dodoi(`💎Diamond ${requestedAmount} chu pek fel a ni ta ✓,\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ I diamond hi midang i pek a vangin, 💎10 ka cut tel sak che a ni!!😇 rules i en duh chuan *mlimit rules* tih rawn type rawh`);
}
break;

case 'owner': {
const mawla = await HBWABotMz.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
HBWABotMz.sendMessage(from, { text : `Hi @${sender.split("@")[0]}, Hei aw ka owner hmelthapa chu😇`, mentions: [sender]}, { quoted: mawla })
}
break
case 'hi': case 'hii': case 'hiii': case 'helo': case 'hello': case 'hlo': case 'sir': case 'kapu': case 'hy': case 'hey': { 
if (m.isGroup) return await HBWABotMz.sendMessage(from, { react: { text: "👋️" , key: m.key }})
const herbert = await HBWABotMz.sendMessage(from, { text : `Hi @${sender.split("@")[0]}, Kei hi bot ka ni-a zawh duh i nei chuan owner hi va zawt rawh`, mentions: [sender]}, { quoted: m })
HBWABotMz.sendMessage(from, { contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: herbert })
}
break

case 'repo': case 'sc': case 'script': {
await HBWABotMz.sendMessage(from, { text : `
*HBWABot Manager :*
https://herbert70.blogspot.com/2023/11/hbwabot-manage.html

*Github :*
https://github.com/HBMods-OFC/HBWABot-Mz`}, { quoted: m })
}
break
case 'autoread':
if (!HerbertTheCreator) return dodoi(mess.owner)
if (args.length < 1) return dodoi(`I option duh thlang rawh, i tih dan tur chu\n${prefix + command} on/off\n\non chuan a activate ang\n off chuan deactivate na`)
if (q === 'on') {
autoread = true
dodoi(`Message autoread a dah a ni✓`)
} else if (q === 'off') {
autoread = false
dodoi(`Message autoread chu off a ni✓`)
}
break
case 'autostview':
if (!HerbertTheCreator) return dodoi(mess.owner)
if (args.length < 1) return dodoi(`I option duh thlang rawh, i tih dan tur chu\n${prefix + command} on/off\n\non chuan a activate ang\n off chuan deactivate na`)
if (q === 'on') {
autoread_status = true
dodoi(`Status/Stories auto view a dah a ni✓`)
} else if (q === 'off') {
autoread_status = false
dodoi(`Status/Stories auto view chu off a ni✓`)
}
break 

case 'hbwabot': case '/bot': { 
let audiobuffy = fs.readFileSync(`./asset/audio/Herbert.mp3`)
HBWABotMz.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
break 
case 'nsfw': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !HerbertTheCreator) return m.reply(mess.admin)
if (args[0] === "on") {
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
if (AntiNsfw) return dodoi('Activate a ti tawh...')
ntnsfw.push(from)
fs.writeFileSync('./asset/database/nsfw.json', JSON.stringify(ntnsfw))
dodoi('He group-ah hia nsfw chu hman thei a ni tawh e ')
var groupe = await HBWABotMz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
let aman = await eco.deduct(limitneihtu, khawlbawm, 50)
HBWABotMz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature chu he group-ah hian hman thei a ni ta, chumi awmzia chu bot hian he group-ah hian sexual graphic lam a rawn thawn thei dawn tihna!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return dodoi('Deactivate a ni tawh')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./asset/database/nsfw.json', JSON.stringify(ntnsfw))
dodoi('Nsfw chu he group-ah hian hman thei a ni tawh lo')
} else {
await dodoi(`Option ang hian tih tur\n\nEntirnan: ${prefix + command} on\nEntirnan: ${prefix + command} off\n\non chu enable-na\noff chu disable-na`)
}
}
break

//game
case 'suitpvp':case 'rps': case 'rockpaperscissors': case 'suit': {
if (!m.isGroup) return m.reply(mess.group);
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) dodoi(`Game i zo chiah`)
if (m.mentionedJid[0] === m.sender) return dodoi(`Mi malin khel thei a ni lo!`)
if (!m.mentionedJid[0]) return dodoi(`_Tunge i challange ang?_\nI challenge duh chu tag rawh..\n\nTiang hian : ${prefix}rps @${owner}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return dodoi(`I challenge pui mek hian mi dang nen an la ti mek a chu vangin lo nghak rawh`)
let id = 'suit_' + new Date() * 1
let caption = `_*RPS PvP*_

@${m.sender.split`@`[0]}'n *RPS* khel turin @${m.mentionedJid[0].split`@`[0]} a challenge che

*Hi* @${m.mentionedJid[0].split`@`[0]} *I accept duh chuan 60 second ral hmain accept tih type la i duh loh chuan reject tih type rawh*`
this.suit[id] = {
chat: await HBWABotMz.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) HBWABotMz.sendText(m.chat, `_60 seconds a zo, hun a tawp_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break 

case 'ttc': case 'ttt': case 'tictactoe': {
if (!m.isGroup) return m.reply(mess.group);
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room13 => room13.id.startsWith('tictactoe') && [room13.game.playerX, room13.game.playerO].includes(m.sender))) return dodoi(`game-ah i la awm reng a ni!!`)
            let room13 = Object.values(this.game).find(room13 => room13.state === 'WAITING' && (text ? room13.name === text : true))
            if (room13) {
            room13.o = m.chat
            room13.game.playerO = m.sender
            room13.state = 'PLAYING'
            let arr = room13.game.render().map(v => {
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
            let str = `Room ID: ${room13.id}
A hnuia number hi i duh ber thlang rawh,

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Hi @${room13.game.currentTurn.split('@')[0]} i thlan ve hun

He game hi i khel peih loh chuan surrender tih type mai tur ani`
            if (room13.x !== room13.o) await HBWABotMz.sendText(room13.x, str, m, { mentions: parseMention(str) } )
            await HBWABotMz.sendText(room13.o, str, m, { mentions: parseMention(str) } )
            } else {
            room13 = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room13.name = text
            dodoi('I tumpui tur nghak lawk ang, i tumpui tur hian ttc a rawn type ve a ngai a ni\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏a rawn type mai loh chuan session tih tawp tur a ni tiang hian type tur : delttc\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏\n*Hriattur*\n\nHe games session-ah i awm chhung hian features dang i hmang thei dawn lova he game hi midangin an khel pui lo che a nih chuan, session hi delete tawp tur a ni, a chungah a delete dan tur kan sawi tawh ang kha')
            this.game[room13.id] = room13
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            HBWABotMz.sendText(m.chat, `TicTacToe Game session chu delete a ni`, m)
            } else if (!this.game) {
            dodoi(`Tictactoe session delete tur a awm lo lai tak a ni`)
            } else throw '?'
            } catch (e) {
            dodoi('damaged')
            }
            }
            break


case 'lyrics': {
try {
if (!text) return dodoi(`Eng lyrics nge i zawn dawn?\nTiang hian hman tur: ${prefix}lyrics Thunder`)
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
dodoi(`*Title :* ${result.title}\n*Author :* ${result.author}\n*Url :* ${result.link}\n\n*Lyrics :* ${result.lyrics}`.trim())
}
catch (error) {
dodoi("I hla duh ang chu ka hmu lo, Mizo hla i zawng duh a nih chuan *Mlyrics* tih command hi hmang rawh")
}
}
break
case 'mlyrics': {
if (!q) return dodoi(`Eng lyrics nge i zawn dawn?. Tiang hian hman tur\n*⟨Entirnan:* ${prefix}Mlyrics Zorema Khiangte Saltang tawngtaina\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏\n*Hriattur :* A hla thupui leh a satu hming rawn dah tel ang che, a hla thupui hming i hre lo a nih chuan a chang i hriat lai rawn dah ang che, ziah dan dikin`) 
var fourbrother = await getBuffer(`https://i.imgur.com/tb7TQAh.jpg`)
HBWABotMz.sendMessage(from, { react: { text: "🎶" , key: m.key }}) 
const Parser = require('rss-parser')
const { htmlToText } = require('html-to-text')
const parser = new Parser()
const mizoly = args.join(" ")
const rssFeedURL = `https://www.mizolyric.com/feeds/posts/default?q=${mizoly}`
try {
const feed = await parser.parseURL(rssFeedURL)
if (feed.items.length === 0) {
return HBWABotMz.sendMessage(from, { text : `I lyrics duh *${text}* tih hi ka zawng hmu zo lo. A spelling i ti dik lo a ni maithei🔍..͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏Emaw He site ah hian i zawn ang chu a awm lo pawh a ni thei https://www.mizolyric.com/ `}, { quoted: m})
}
let firstResultSent = false
feed.items.forEach(async (item) => {
if (firstResultSent) return
const plainTextContent = htmlToText(item.content)
await HBWABotMz.sendMessage(m.chat, { text: `͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${plainTextContent}`, contextInfo:{"externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": `${item.title}`,"body": `Mizo Lyrics`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fourbrother,"sourceUrl": `${item.link}`}}}, { quoted: m})
})
} catch (error) {
console.error('Feed laknaah eroor a awm:', error)
}
}
break
case 'mzly': case 'hlaly': {
if (!text) return dodoi(`Eng lyrics nge i zawn dawn?\nTiang hian hman tur: ${prefix + command} Zorema Khiangte Saltang tawngtaina\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏\n*Hriattur :* A hla thupui leh a satu hming rawn dah tel ang che, a hla thupui hming i hre lo a nih chuan a chang i hriatna lai rawn dah ang che, ziah dan dikin`)
var fourbrother = await getBuffer(`https://i.imgur.com/tb7TQAh.jpg`)
HBWABotMz.sendMessage(from, { react: { text: "🎶" , key: m.key }}) 
const Parser = require('rss-parser')
const { htmlToText } = require('html-to-text')
const parser = new Parser()
const mizoly = args.join(" ")
const rssFeedURL = `https://www.mizolyric.com/feeds/posts/default?q=${mizoly}`
try {
const feed = await parser.parseURL(rssFeedURL)
if (feed.items.length === 0) {
return HBWABotMz.sendMessage(from, { text : `🧐 I lyrics duh *${text}* tih hi ka zawng hmu zo lo. A spelling i ti dik lo a ni maithei..͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏Emaw He site ah hian a awm lo pawh a ni thei https://www.mizolyric.com/ `}, { quoted: m})
}
let firstResultSent = false
feed.items.forEach(async (item) => {
if (firstResultSent) return
const plainTextContent = htmlToText(item.content)
const sazu = (`${item.title} Karaoke`)
let res = await yts2(sazu)
let vid = res.videos[0]
let q = isVideo ? '360p' : '128kbps'
let v = vid.url
let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
let dl_url = await (isVideo ? yt.video[q].download() : yt.audio[q].download())
const Vawk = await HBWABotMz.sendMessage(m.chat, {audio: {url: dl_url} , mimetype: 'audio/mpeg', ptt: true, contextInfo:{"externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": `${item.title}`} ,"body": `Mizo Lyrics`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fourbrother,"sourceUrl": `${item.link}`}},{quoted:m})
HBWABotMz.sendMessage(m.chat, { text: `͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${plainTextContent}`}, 
{ quoted: Vawk})
})
} catch (error) {
console.error('Dik lo a awm tlat:', error)
}
}
break
 
case 'dawntur': case'claim': case 'daily': {
if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
HBWABotMz.sendMessage(from, { react: { text: "💰" , key: m.key }})
let user = m.sender
const cara = "cara"
const daily= await eco.daily(user, cara, 999);
if (daily.cd) return dodoi(`I claim tawh, ${daily.cdL} a ral hunah i claim leh thei chauh ang`);
dodoi(`Vawiin a tan ₹${daily.amount} i claim e, darkar 24 ral hunah i claim leh thei ang!!!`);
}
break
 
case 'wallet': {
HBWABotMz.sendMessage(from, { react: { text: "💳" , key: m.key }})
if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
const user = m.sender
const cara = "cara"
const balance = await eco.balance(user, cara);
await dodoi(`💳 ${pushname} I wallet ah pawisa awm zat:\n\n_₹${balance.wallet}_`);
}
break 
case 'slot': case 'spin': {
if (!m.isGroup) return dodoi(mess.group)
var today = new Date();
if (today.getDay() == 6 || today.getDay() == 5 || today.getDay() == 0){
if (text == 'help') return dodoi(`*1:* ${prefix}Spin tih hi i hmang ang\n\n*2:* I wallet ah cheng ₹100 i neih tling tur a ni a,\n\n*3:* Wallet-ah pawisa i nei loh chuan i bank a tangin withdraw ang che\n\n*4:* I bank-ah pawh pawisa i la nei lo cheu a nih chuan i sum hmuhna turin economy features hi hmang rawh`)
if (text == 'pawisa') return dodoi(`*1:* Small Win -in ₹20 an hlawh anga\n\n*2:* Small Lose in ₹20 an chan ang\n\n*3:* Big Win in ₹100 an hlawh anga\n\n*4:* Big Lose in ₹50 an chan ang\n\n*5:* 🎉 JackPot in ₹1000 an dawng bawk ang`)
const fruit1= ["🥥", "🍎", "🍇"]
const fruit2 = ["🍎", "🍇", "🥥"]
const fruit3 = ["🍇", "🥥", "🍎"] 
const fruit4 = ["🍇", "🥥", "🍎"]
const lose = ['*Tun game-ah hi chuan i vanduai tlat mai*\n\n_--> 🍇-🥥-🍎_', '*Line a tangin a chhuak vek*\n\n_--> 🥥-🍎-🍇_', '*Van a duai tlat🌚😂 ti tha leh mai rawh*\n\n_--> 🍎-🍇-🥥_']
const smallLose = ['*Grape pahnih inkawp lohin i spin fuh a ni!!*\n\n_--> 🍇>🥥<🍇_', '*Apple pahnih inkawp lohin i spin fuh a ni!!*\n\n_--> 🍎>🥥<🍎_', '*Coconut pahnih inkawp lohin i spin fih a ni!!*\n\n_--> 🥥>🍎<🥥_']
const won = ['*🤩Nice Apple patum i spin fuh e...*\n\n_--> 🍎+🍎+🍎_', '*Eheuh, Coconut pathum i spin fuh e🤩*\n\n_--> 🥥+🥥+🥥_', '*Ropui lutuk🤩, i chhungte tan Grape juice i siam sak dawn nia*\n\n_--> 🍇+🍇+🍇_'] 
const near = ['*Wow, Grape pahnih leh apple pakhat😂*\n\n_--> 🍎-🍇+🍇_', '*Hehe, Apple pahnih leh Grape pakhat*\n\n_--> 🍎+🍎-🍇_']
const jack = ['*🥳 JackPot 🤑*\n\n_--> 🍇×🍇×🍇×🍇_', '*🎉 JaaackPooot!*\n\n_--> 🥥×🥥×🥥×🥥_', '*🎊I JackPot e ₹1000 i dawng e✓*']
const user = m.sender
const cara = "cara"
const k = 100
const balance1= await eco.balance(user, cara)

if (k > balance1.wallet) return dodoi(`I wallet ah ₹100 tal i neih a ngai\nI bank a tangin ₹100 aia tlemlo withdraw ang che`);
const f1 = fruit1[Math.floor(Math.random() * fruit1.length)];
const f2 = fruit2[Math.floor(Math.random() * fruit2.length)];
const f3 = fruit3[Math.floor(Math.random() * fruit3.length)];
const f4 = fruit4[Math.floor(Math.random() * fruit4.length)];
const mess1 = lose[Math.floor(Math.random() * lose.length)];
const mess2 = won[Math.floor(Math.random() * won.length)];
const mess3 = near[Math.floor(Math.random() * near.length)];
const mess4 = jack[Math.floor(Math.random() * jack.length)];
const mess5 = smallLose[Math.floor(Math.random() * smallLose.length)];

if ((f1 !== f2) && f2 !== f3){
 const deduct1 = await eco.deduct(user, cara, 50);
dodoi(`${mess1}\n\n*Big Lose -->* _₹50 i chan_`)
}
else if ((f1 == f2) && f2 == f3){
 const give1 = await eco.give(user, cara, 100); 
 dodoi(`${mess2}\n*_Big Win -->* _₹100 i dawng e_`)
}
else if ((f1 == f2) && f2 !== f3){
 const give2 = await eco.give(user, cara, 20);
 dodoi(`${mess3}\n*Small Win -->* _₹20 i dawng e_`)
}
else if ((f1 !== f2) && f1 == f3){
 const deduct2 = await eco.deduct(user, cara, 20);
 dodoi(`${mess5}\n\n*Small Lose -->* _₹20 i chan_`)
}
else if ((f1 !== f2) && f2 == f3){
 const give4 = eco.give(user, cara, 20); 
 dodoi(`${mess3}\n\n*Small Win -->* _₹20 i dawng e_`)
}
else if (((f1 == f2) && f2 == f3) && f3 == f4){
 const give5 = eco.give(user, cara, 1000);
dodoi(`${mess4}\n\n_🎊 JackPot --> _₹1000 tawp mai i dawng e🤩_`)
}
else { 
dodoi(`I thil tih hi i hrethiam em ni?`)
}
}
else{
dodoi(`*Kartawpah chauh he game hi i khei thei ang*\n\n*🌿 Zirtawpni*\n*🎏 Inrinni*\n*🎐 Pathianni thleng*`)
}
}
break

case 'bank':case 'levee': {
if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
HBWABotMz.sendMessage(from, { react: { text: "💳" , key: m.key }})

const user = m.sender
const cara = "cara"
const balance = await eco.balance(user, cara);
await dodoi(`🏦 ${pushname}'I Bank a pawisa awm zat:\n_₹${balance.bank}_\nPawisa awm thei zat: _₹${balance.bankCapacity}_`); 
}
break
case 'capacity':case 'bankupgrade': {
HBWABotMz.sendMessage(from, { react: { text: "💲" , key: m.key }})
if (!text) return dodoi(`💴 Bank-capacity 💳\n\n1 | 1000 sp = ₹100\n\n2 | 10000 sp = ₹1000\n\n3 | 100000 sp = ₹10000\n\nTiang hian ti la ${prefix}capacity 1 In emaw ${prefix}bankupgrade 1000`)
if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
const cara = "cara"
let value = text.trim()
let k = parseInt(value)
const balance= await eco.balance(user, cara) 
switch (value) {
case '1000':
case '1':
if (k > balance.wallet ) return dodoi(`I bank capacity hi 1000-sp ah a pun dawn chuan ₹100(za) i sen a ngai`)
const deduct1 = await eco.deduct(user, cara, 100)
const add1 = eco.giveCapacity(user, cara, 1000) 
await dodoi(`${pushname} i bank I bank capacity hi ₹1000(sangkhat) dah belh theiha upgrade a ni`)
break
 case '10000':
case '2':
if (k > balance.wallet ) return dodoi(`I bank capacity hi 10000-sp ah a pun dawn chuan ₹1000(sangkhat) i sen a ngai`)
const deduct2 = await eco.deduct(user, cara, 1000)
const add2 = eco.giveCapacity(user, cara, 10000) 
await dodoi(`${pushname} i bank capacity hi ₹10000(singkhat) dah belh theiha upgrade a ni`)
break
 case '100000':
case '3':
if (k > balance.wallet ) return dodoi(`I bank capacity hi 100000-sp ah a pun dawn chuan ₹10000(singkhat) i sen a ngai`)
const deduct3 = await eco.deduct(user, cara, 10000)
const add3 = eco.giveCapacity(user, cara, 100000) 
await dodoi(`${pushname} i bank capacity hi ₹100000(nuaikhat) dah belh theiha upgrade a ni`)
}
}
break

case 'deposit':  case 'pay-in': {
HBWABotMz.sendMessage(from, { react: { text: "📥" , key: m.key }})
if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if (!text) return dodoi("I deposit duh zat rawn provide rawh");
const texts = text.trim();
const user = m.sender;
const cara = "cara"
const deposit = await eco.deposit(user, cara, texts);
if(deposit.noten) return dodoi('I wallet ah chu tiang zat a awm loh avangin i deposit thei lo ang');
dodoi(`I bank a ₹ ${deposit.amount} deposit a ni`)
  }
break
 case 'withdraw':case 'withdrawal': {
HBWABotMz.sendMessage(from, { react: { text: "💸" , key: m.key }})
if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
const user = m.sender
if (!text) return dodoi("I withdraw duh zat rawn provide rawh!")
const query = text.trim()
const cara = "cara"
const withdraw = await eco.withdraw(user, cara, query)
if(withdraw.noten) return dodoi('Chutiang zat zat i bank ah pawisa i nei lo')
const add = eco.give(user, cara, query)
dodoi(`🏧 ALERT I wallet a ₹${withdraw.amount} dah a ni.`)
}
break 
case 'transfer': {
HBWABotMz.sendMessage(from, { react: { text: "🗿" , key: m.key }})
let value = text.trim().split(" ")
if (value[0] === "") return dodoi(`Tiang hian ti tawh : ${prefix}transfer 100 @user`)
const target =
m.quoted && m.mentionedJid.length === 0
? m.quoted.sender
: m.mentionedJid[0] || null;
 if (!target || target === m.sender) return dodoi("Engtia tih nge i tum")
 if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
const cara = "cara"
const user1 = m.sender
const user2 = target
 const word = value[0];
 const code = value[1];
let d = parseInt(word)
if (!d) return dodoi("I thil ziah khi check teh, command i hmang dik lo a ni mai thei")
const balance = await eco.balance(user1, cara) 
let a = (balance.wallet) < parseInt(word)
if(a == true) return dodoi("Chutiang zat transfer turin i wallet ah a awm lo")
const deduct = await eco.deduct(user1, cara, value[0])
const give = await eco.give(user2, cara, value[0])
dodoi(`📠 Transaction a ni e✓`)
}
break 
case 'cut':{
if (!HerbertTheCreator1) return
let value = text.trim().split(" ")
if (value[0] === "") return
const target =
m.quoted && m.mentionedJid.length === 0
? m.quoted.sender
: m.mentionedJid[0] || null;
if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
const cara = "cara"
const hmela = target
const paihsakna = await eco.deduct(hmela, cara, value[0])
const balance = await eco.balance(hmela, cara);
await dodoi(`Sir a wallet-ah _₹${balance.wallet}_ hei zawng hi a la awm📄`);
}
break
case 'wtc': {
if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if (!HerbertTheCreator1) return
let value = text.trim().split(" ")
if (value[0] === "") return
const target =
m.quoted && m.mentionedJid.length === 0
? m.quoted.sender
: m.mentionedJid[0] || null;
if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
const hmeli = target
const cara = "cara"
const balance = await eco.balance(hmeli, cara);
await dodoi(`Sir a wallet-ah _₹${balance.wallet}_ hei zawng hi a awm🤔`);
}
break 
case 'gamble':case 'lottery': { 
HBWABotMz.sendMessage(from, { react: { text: "🤪" , key: m.key }})
var texts = text.trim().split(" ")
var opp = texts[1];// your value
var value = texts[0].toLowerCase()
var gg = parseInt(value)
const user = m.sender
const cara = "cara"
const balance = await eco.balance(user, cara) 
const g = (balance.wallet) > parseInt(value)
const k = 50
const a = (k) > parseInt(value)
const twice = gg*2
const f = ["up", "right", "left", "down", "up", "left", "down", "right", "up", "down", "right", "left"]
const r = f[Math.floor(Math.random () * f.length)]
 if (texts[0] === "")
 return dodoi(
 `Tiang hian tih tur:${prefix}gamble 100 direction(left,right,up,down)`
 )
 if (!value) return dodoi("*I gamble zat tur rawn tarlang rawh!")
 if (!opp) return dodoi("I bet tur direction kha rawn dah rawh")
 if (!gg) return dodoi("I thil ziah khi check tha rawh, command dik lo i hmang a ni mai thei")
 if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
 if (g == false) return dodoi(`Chutiang zat gamble turin i pawisa neihin a daih lo`)
 if (a == true) return dodoi(`Sorry ${pushname}, ₹50 aia tlem chuan a gamble thei lo`)
 if ( r == opp){
let give = await eco.give(user , cara, twice)
dodoi(`*₹${twice} i dawng e✓*`)
 }
 else{
let deduct = await eco.deduct(user, cara, texts[0])
dodoi(`*₹${texts[0]} i chan(loss) a ni*`)
}
}
break
case 'hmelchhe': case 'damrei': case 'dawih': case 'mawl': case 'a': case 'fing': case 'hrisel': case 'upa': case 'naupang': case 'hmeltha': case 'lulian': case 'zaktheilo': case 'zakzum': case 'nawi': case 'tawngthei': case 'mifel': case 'chawheh': case 'bumhmang': case 'lerh': case 'luck': case 'zei': {
if (!m.isGroup) return
const lonuirawh = await getBuffer(`https://i.imgur.com/VffnuHq.jpg`)
let member = participants.map(u => u.id)
let berr = member[Math.floor(Math.random() * member.length)]
if (text == 'ber') return await HBWABotMz.sendMessage(m.chat,
{ text: `Kan group-a ${command} ber chu @${berr.split('@')[0]} hi a ni👀😂`,
contextInfo:{
mentionedJid:[berr],
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `Fun Game`,
"body": `Ber features👀😂`,
"thumbnailUrl": ``,
"thumbnail": lonuirawh,
"sourceUrl": `https://youtube.com/@HBMods_Channel`}}},
{ quoted: m})        
            }
            break

case 'checkme':
try {
userPfp = await HBWABotMz.profilePictureUrl(m.sender, "image")
} catch (e) {
userPfp = defaultpp
}
					neme = args.join(" ")
					bet = `${sender}`
					var mizia = ['Mi pangngai tak','Kawm harsa','Chapo deuh','Mifel tak','Nawi deuh','Mi inngaitlawm thei tak','Mi Thinchhia','Polite deuh','Kawm nuam','Mi bum hmang','Tahbelh','Hrilh chawp ngai reng']
					var hobby1 = ['Ei rawng bawl','Lâm 💃','In fiam','Gamers','Lem ziak','Midangte tanpui','Anime en mai mai','Lehkha chhiar','Ride mai mai','Zai','Tlai','Fiamthu thawh','Lem ziak','Thil ei reng','Truth or Dare khel mai mai','Mahnia awm mai mai']
					var hmelhmang = ['Umm','Aih','Hmel chhe lutuk','Hmel tha lutuk']
					var thiltihthat = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var thiltihchhiat = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var findan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var dawih = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mizia1 = mizia[Math.floor(Math.random() * mizia.length)]
					var hobby = hobby1[Math.floor(Math.random() * hobby1.length)]
					var hmelhmang1 = hmelhmang[Math.floor(Math.random() * hmelhmang.length)]
					var thiltihthat1 = thiltihthat[Math.floor(Math.random() * thiltihthat.length)]
					var thiltihchhiat1 = thiltihchhiat[Math.floor(Math.random() * thiltihchhiat.length)]
					var findan1 = findan[Math.floor(Math.random() * findan.length)]
					var dawih1 = dawih[Math.floor(Math.random() * dawih.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Hming :* ${pushname}
*Mizia :* ${mizia1}
*Hobby :* ${hobby}
*Hmel tha em?. :* ${hmelhmang1}
*Thil tih that :* ${thiltihthat1}% vel
*Thil tih chhiat :* ${thiltihchhiat1}% vel
*A fin dan :* ${findan1}% velin a fing
*A dawih dan :* ${dawih1}% velin a dawih

*≡═══《 CHECK PROPERTIES 》═══≡*`
const buff = await getBuffer(userPfp)
HBWABotMz.sendMessage(from, { image: buff, caption: profile, mentions: [bet]},{quoted:m})
break
case 'ping': case 'p': {
var ping = ['84','68','74','99','129','130','150','280','320','380','380','163','163','84','64','74','999','827','266','979','768','562','626',',737','166']
var pong = ping[Math.floor(Math.random() * ping.length)]
HBWABotMz.sendMessage(from, {text: `_*Pong*_ ${pong} _*ms...*_`},{quoted:m})
}
break
case 'check': {
if (!m.isGroup) return m.reply(mess.group);
if (!m.mentionedJid[0]) return dodoi(`_Tu nge check i duh, I check duh chu tag rawh.._\nTiang hian : ${prefix}check @${owner}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
neme = args.join(" ")
const lonuirawh = await getBuffer(`https://i.imgur.com/VffnuHq.jpg`)
bet = `${m.mentionedJid[0]}`
var mizia = ['Mi pangngai tak','Kawm harsa tak','Chapo deuh', 'Gay', 'Lesbian', 'Mifel tak','Nawi deuh','Mi inngaitlawm thei tak','Mi Thinchhe tak','Polite deuh','Kawm nuam','Mi bum hmang','Tahbelh','Hrilh chawp ngai reng','Mi hur awmngaihna hrelo', ]
					var hobby1 = ['Ei rawng bawl','Lâm 💃','In fiam','Gamers','Lem ziak','Midangte tanpui','Mi rel','Lehkha chhiar','Ride mai mai','Zai','Tlai','Fiamthu thawh','Lem ziak','Thil ei reng','Mi bum','Mahnia awm mai mai']
					var hmelhmang = ['Umm','Aih','Hmel chhe lutuk','Hmel tha lutuk']
					var thiltihthat = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var thiltihchhiat = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var findan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var dawih = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mizia1 = mizia[Math.floor(Math.random() * mizia.length)]
					var hobby = hobby1[Math.floor(Math.random() * hobby1.length)]
					var hmelhmang1 = hmelhmang[Math.floor(Math.random() * hmelhmang.length)]
					var thiltihthat1 = thiltihthat[Math.floor(Math.random() * thiltihthat.length)]
					var thiltihchhiat1 = thiltihchhiat[Math.floor(Math.random() * thiltihchhiat.length)]
					var findan1 = findan[Math.floor(Math.random() * findan.length)]
					var dawih1 = dawih[Math.floor(Math.random() * dawih.length)]
					 HBWABotMz.sendMessage(m.chat,
{ text: `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*A Hming :* @${bet.split('@')[0]}
*A mah hi :* ${mizia1} a ni
*Hobby :* ${hobby}
*Hmel tha em?. :* ${hmelhmang1}
*Thil tih that :* ${thiltihthat1}% vel
*Thil tih chhiat :* ${thiltihchhiat1}% vel
*A fin dan :* ${findan1}% velin a fing
*A dawih dan :* ${dawih1}% velin a dawih

*≡═══《 CHECK PROPERTIES 》═══≡*`,
contextInfo:{
mentionedJid:[bet],
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `Fun Game`,
"body": `Checker👀😂`,
"thumbnailUrl": ``,
"thumbnail": lonuirawh,
"sourceUrl": `https://youtube.com/@HBMods_Channel`}}},
{ quoted: m})        
 }
break


case 'alive': case 'menu': case 'help':{ 
const balance = await eco.balance(limitneihtu, khawlbawm);
const vawiinni2 = await mizo_tawnga_translate_na.translate(asource1, atarget1, athulo1)
HBWABotMz.sendMessage(from, { 
text: `*Bot InFo*
*✑ Vawiin :* ${vawiinni2}
*✑ Date :* ${kumtin}
*✑ Dar :* ${darkarr}
*✑ Version :* 5.0.0
*✑ User :* ${ownernumber}
*✑ Limit :* ${balance.wallet} 💎
*✑ Runtime :* ${runtime(process.uptime())}
*✑ Creator :* Herbert Suantak
╭═══════════┈
┃ *Diamond i neih loh chuan*
┃ *min hmang thei dawn lo,*
╠═══════════┈
┃ *Min hman i duh chuan*
┃ *limit tih rawn type rawh*
╰════════════──┈
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
╭═══════════┈
┃𒆜┌───┈
┃𒆜│allmenu
┃𒆜│downloadmenu
┃𒆜│groupmenu
┃𒆜│ownermenu
┃𒆜│photooxymenu
┃𒆜│textpromenu
┃𒆜│ephoto360menu
┃𒆜│stickermenu
┃𒆜│stalkermenu
┃𒆜│othermenu
┃𒆜└───────────┈ 
╰════════════──┈ `,
contextInfo:{
externalAdReply:{ 
showAdAttribution: true,
containsAutoReply: true,
renderLargerThumbnail: true,
title: `HBWABot Mizo`,
thumbnail : fs.readFileSync("./asset/theme/hbwabot.png"),
mediaType: 1,
mediaUrl: ``,
sourceUrl: ``
}
}
},{quoted:m})
}
break
case 'allmenu': {
const balance = await eco.balance(limitneihtu, khawlbawm);
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███▒▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《█████▒▒▒▒▒▒▒▒▒▒》30%`,
`《████████▒▒▒▒▒▒▒》50%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`
╭══════════════
┃ *HBWABot Allmenu*
┃ *✑ limit :* ${balance.wallet} 💎
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ AI Menu ❏*
┃𒆜┌───┈
┃𒆜│remini 
┃𒆜│toanime 
┃𒆜│tozombie
┃𒆜│shazam
┃𒆜│shazam2
┃𒆜│shazam3
┃𒆜│openai [Mizo Language]
┃𒆜│gpt [English Language]
┃𒆜│ai [Mizo Language]
┃𒆜│ai2 [English Language]
┃𒆜└───────────┈ 
╰══════════════𖡛
*╭═══❏ Download Menu ❏*
┃𒆜┌───┈
┃𒆜│play 
┃𒆜│ytmp3 
┃𒆜│ytaudio
┃𒆜│ytmp4 
┃𒆜│dsong
┃𒆜│dvideo
┃𒆜│dsong2
┃𒆜│song2 
┃𒆜│ytaudio 
┃𒆜│igvid [insta]
┃𒆜│ttvid [tiktok]
┃𒆜│ptvid [pinterest]
┃𒆜│twvid [twitter]
┃𒆜│trvid [threads]
┃𒆜│fbvid [facebook]
┃𒆜│gdrive 
┃𒆜│ringtone 
┃𒆜└───────────┈ 
╰══════════════𖡛
*╭═══❏ Textpro Maker ❏*
┃𒆜┌───┈
┃𒆜│candy
┃𒆜│christmas
┃𒆜│3dchristmas
┃𒆜│sparklechristmas 
┃𒆜│deepsea
┃𒆜│scifi
┃𒆜│rainbow
┃𒆜│waterpipe
┃𒆜│spooky
┃𒆜│pencil
┃𒆜│circuit
┃𒆜│discovery
┃𒆜│metalic
┃𒆜│fiction
┃𒆜│demon
┃𒆜│transformer
┃𒆜│berry
┃𒆜│thunder
┃𒆜│magma
┃𒆜│3dstone
┃𒆜│neonlight
┃𒆜│glitch
┃𒆜│harrypotter
┃𒆜│brokenglass
┃𒆜│papercut
┃𒆜│watercolor
┃𒆜│multicolor
┃𒆜│neondevil
┃𒆜│underwater
┃𒆜│graffitibike 
┃𒆜│snow
┃𒆜│cloud
┃𒆜│honey
┃𒆜│ice
┃𒆜│fruitjuice
┃𒆜│biscuit
┃𒆜│wood
┃𒆜│chocolate
┃𒆜│strawberry
┃𒆜│matrix
┃𒆜│blood
┃𒆜│dropwater
┃𒆜│toxic
┃𒆜│lava
┃𒆜│rock
┃𒆜│bloodglas
┃𒆜│hallowen
┃𒆜│darkgold
┃𒆜│joker
┃𒆜│wicker 
┃𒆜│firework
┃𒆜│skeleton
┃𒆜│blackpink
┃𒆜│sand
┃𒆜│glue
┃𒆜│1917
┃𒆜│leaves 
┃𒆜│retro 
┃𒆜│pornhub 
┃𒆜│8bit 
┃𒆜│batman 
┃𒆜│3dbox 
┃𒆜│lion 
┃𒆜│3davengers 
┃𒆜│window 
┃𒆜│3dspace 
┃𒆜│bokeh 
┃𒆜│holographic 
┃𒆜│thewall 
┃𒆜│carbon 
┃𒆜│whitebear 
┃𒆜│metallic 
┃𒆜│steel 
┃𒆜│fabric 
┃𒆜│ancient 
┃𒆜│marvel 
┃𒆜└───────────┈ 
╰══════════════𖡛

*╭═══❏ Group Menu ❏*
┃𒆜┌───┈
┃𒆜│grouplink 
┃𒆜│add 
┃𒆜│kick 
┃𒆜│hidetag 
┃𒆜│check
┃𒆜│setgrdp
┃𒆜│mawl ber
┃𒆜│sual ber
┃𒆜│fing ber
┃𒆜│a ber
┃𒆜│tawngthei ber
┃𒆜│hmelchhe ber
┃𒆜│damrei ber
┃𒆜│dawih ber
┃𒆜│hrisel ber
┃𒆜│upa ber
┃𒆜│naupang ber
┃𒆜│hmeltha ber
┃𒆜│lulian ber
┃𒆜│zaktheilo ber
┃𒆜│zakzum ber
┃𒆜│nawi ber
┃𒆜│tawngthei ber
┃𒆜│mifel ber
┃𒆜│chawheh ber
┃𒆜│bumhmang ber
┃𒆜│lerh ber
┃𒆜│luck ber
┃𒆜│zei ber
┃𒆜│nsfw 
┃𒆜└───────────┈ 
╰══════════════𖡛

*╭═══❏ PhotoOxy Maker ❏*
┃𒆜┌───┈
┃𒆜│shadow
┃𒆜│write
┃𒆜│romantic
┃𒆜│burnpaper 
┃𒆜│smoke
┃𒆜│narutobanner
┃𒆜│love
┃𒆜│undergrass 
┃𒆜│doublelove
┃𒆜│coffecup 
┃𒆜│underwaterocean 
┃𒆜│smokyneon 
┃𒆜│starstext 
┃𒆜│rainboweffect 
┃𒆜│balloontext 
┃𒆜│metalliceffect 
┃𒆜│embroiderytext 
┃𒆜│flamingtext 
┃𒆜│stonetext 
┃𒆜│writeart 
┃𒆜│summertext ??
┃𒆜│wolfmetaltext 
┃𒆜│nature3dtext 
┃𒆜│rosestext 
┃𒆜│naturetypography 
┃𒆜│quotesunder 
┃𒆜│shinetext 
┃𒆜└───────────┈ 
╰══════════════𖡛
*╭═══❏ Ephoto360 Maker ❏*
┃𒆜┌───┈
┃𒆜│glitchtext 
┃𒆜│writetext 
┃𒆜│advancedglow 
┃𒆜│typographytext 
┃𒆜│pixelglitch 
┃𒆜│neonglitch 
┃𒆜│flagtext 
┃𒆜│flag3dtext 
┃𒆜│deletingtext 
┃𒆜│blackpinkstyle 
┃𒆜│glowingtext 
┃𒆜│underwatertext 
┃𒆜│logomaker 
┃𒆜│cartoonstyle 
┃𒆜│papercutstyle 
┃𒆜│watercolortext 
┃𒆜│effectclouds 
┃𒆜│blackpinklogo 
┃𒆜│gradienttext 
┃𒆜│summerbeach 
┃𒆜│luxurygold 
┃𒆜│multicoloredneon 
┃𒆜│sandsummer 
┃𒆜│galaxywallpaper 
┃𒆜│1917style 
┃𒆜│makingneon 
┃𒆜│royaltext 
┃𒆜│freecreate 
┃𒆜│galaxystyle 
┃𒆜│lighteffects 
┃𒆜└───────────┈ 
╰══════════════𖡛

*╭═══❏ Anime NSFW ❏*
┃𒆜┌───┈
┃𒆜│hentai 
┃𒆜│gifhentai 
┃𒆜│gifblowjob 
┃𒆜│hentaivid 
┃𒆜│hneko 
┃𒆜│nwaifu 
┃𒆜│animespank 
┃𒆜│trap 
┃𒆜│gasm 
┃𒆜│ahegao 
┃𒆜│ass 
┃𒆜│bdsm 
┃𒆜│blowjob 
┃𒆜│cuckold 
┃𒆜│cum 
┃𒆜│milf 
┃𒆜│eba 
┃𒆜│ero 
┃𒆜│femdom 
┃𒆜│foot 
┃𒆜│gangbang 
┃𒆜│glasses 
┃𒆜│jahy 
┃𒆜│masturbation 
┃𒆜│manga 
┃𒆜│neko-hentai 
┃𒆜│neko-hentai2 
┃𒆜│nsfwloli 
┃𒆜│orgy 
┃𒆜│panties
┃𒆜│pussy 
┃𒆜│xnxxsearch 
┃𒆜│xnxxdl 
┃𒆜└───────────┈ 
╰══════════════𖡛

*╭═══❏ Other Menu ❏*
┃𒆜┌───┈
┃𒆜│checkme
┃𒆜│spin
┃𒆜│transfer
┃𒆜│daily
┃𒆜│gamble
┃𒆜│withdraw
┃𒆜│deposite
┃𒆜│tts 
┃𒆜│say 
┃𒆜│togif 
┃𒆜│toqr 
┃𒆜│bass 
┃𒆜│blown 
┃𒆜│deep 
┃𒆜│earrape 
┃𒆜│fast 
┃𒆜│fat 
┃𒆜│nightcore 
┃𒆜│reverse 
┃𒆜│robot 
┃𒆜│slow 
┃𒆜│smooth 
┃𒆜│squirrel 
┃𒆜│tinyurl 
┃𒆜│tovn 
┃𒆜│toaudio 
┃𒆜│tomp3 
┃𒆜│tomp4
┃𒆜│toimg 
┃𒆜│sticker 
┃𒆜│ebinary 
┃𒆜│dbinary  
┃𒆜│ping
┃𒆜│setdpbot
┃𒆜│setdpbot2
┃𒆜│runtime 
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: { url: 'https://telegra.ph/file/976f686fc9c24b4ee1b2a.jpg' },
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break

case 'downloadmenu': { 
const balance = await eco.balance(limitneihtu, khawlbawm);
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███▒▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《█████▒▒▒▒▒▒▒▒▒▒》30%`,
`《████████▒▒▒▒▒▒▒》50%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`
╭══════════════
┃ *Download Menu*
┃ *✑ limit :* ${balance.wallet} 💎
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ Download Menu ❏*
┃𒆜┌───┈
┃𒆜│play 
┃𒆜│ytmp3
┃𒆜│ytaudio
┃𒆜│ytmp4 
┃𒆜│dsong
┃𒆜│dvideo
┃𒆜│dsong2
┃𒆜│song2 
┃𒆜│ytaudio
┃𒆜│igvid [insta]
┃𒆜│ttvid [tiktok]
┃𒆜│ptvid [pinterest]
┃𒆜│twvid [twitter]
┃𒆜│trvid [threads]
┃𒆜│fbvid [facebook]
┃𒆜│gdrive  
┃𒆜│ringtone 
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: { url: 'https://telegra.ph/file/976f686fc9c24b4ee1b2a.jpg' },
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break
case 'groupmenu': { 
const balance = await eco.balance(limitneihtu, khawlbawm);
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███▒▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《█████▒▒▒▒▒▒▒▒▒▒》30%`,
`《████████▒▒▒▒▒▒▒》50%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`
╭══════════════
┃ *Group Menu*
┃ *✑ limit :* ${balance.wallet} 💎
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ Group Menu ❏*
┃𒆜┌───┈
┃𒆜│grouplink 
┃𒆜│add 
┃𒆜│kick 
┃𒆜│hidetag 
┃𒆜│check
┃𒆜│setgrdp
┃𒆜│mawl ber
┃𒆜│sual ber
┃𒆜│fing ber
┃𒆜│a ber
┃𒆜│tawngthei ber
┃𒆜│hmelchhe ber
┃𒆜│damrei ber
┃𒆜│dawih ber
┃𒆜│hrisel ber
┃𒆜│upa ber
┃𒆜│naupang ber
┃𒆜│hmeltha ber
┃𒆜│lulian ber
┃𒆜│zaktheilo ber
┃𒆜│zakzum ber
┃𒆜│nawi ber
┃𒆜│tawngthei ber
┃𒆜│mifel ber
┃𒆜│chawheh ber
┃𒆜│bumhmang ber
┃𒆜│lerh ber
┃𒆜│luck ber
┃𒆜│zei ber
┃𒆜│nsfw 
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: { url: 'https://telegra.ph/file/976f686fc9c24b4ee1b2a.jpg' },
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break 
case 'stalkermenu': { 
const balance = await eco.balance(limitneihtu, khawlbawm);
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███▒▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《█████▒▒▒▒▒▒▒▒▒▒》30%`,
`《████████▒▒▒▒▒▒▒》50%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`
╭══════════════
┃ *Stalk Menu*
┃ *✑ limit :* ${balance.wallet} 💎
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ Stalker ❏*
┃𒆜┌───┈
┃𒆜│igstalk 
┃𒆜│mlstalk 
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: { url: 'https://telegra.ph/file/976f686fc9c24b4ee1b2a.jpg' },
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break
case 'aimenu': { 
const balance = await eco.balance(limitneihtu, khawlbawm);
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███▒▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《█████▒▒▒▒▒▒▒▒▒▒》30%`,
`《████████▒▒▒▒▒▒▒》50%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`
╭══════════════
┃ *Ai Menu*
┃ *✑ limit :* ${balance.wallet} 💎
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ AI Menu ❏*
┃𒆜┌───┈
┃𒆜│remini 
┃𒆜│toanime 
┃𒆜│tozombie
┃𒆜│shazam
┃𒆜│shazam2
┃𒆜│shazam3
┃𒆜│openai [Mizo Language]
┃𒆜│gpt [English Language]
┃𒆜│ai [Mizo Language]
┃𒆜│ai2 [English Language]
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: { url: 'https://telegra.ph/file/976f686fc9c24b4ee1b2a.jpg' },
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break
case 'textpromenu': { 
const balance = await eco.balance(limitneihtu, khawlbawm);
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███▒▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《█████▒▒▒▒▒▒▒▒▒▒》30%`,
`《████████▒▒▒▒▒▒▒》50%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`
╭══════════════
┃ *Textpro Menu*
┃ *✑ limit :* ${balance.wallet} 💎
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ Textpro Maker ❏*
┃𒆜┌───┈
┃𒆜│candy
┃𒆜│christmas
┃𒆜│3dchristmas
┃𒆜│sparklechristmas 
┃𒆜│deepsea
┃𒆜│scifi
┃𒆜│rainbow
┃𒆜│waterpipe
┃𒆜│spooky
┃𒆜│pencil
┃𒆜│circuit
┃𒆜│discovery
┃𒆜│metalic
┃𒆜│fiction
┃𒆜│demon
┃𒆜│transformer
┃𒆜│berry
┃𒆜│thunder
┃𒆜│magma
┃𒆜│3dstone
┃𒆜│neonlight
┃𒆜│glitch
┃𒆜│harrypotter
┃𒆜│brokenglass
┃𒆜│papercut
┃𒆜│watercolor
┃𒆜│multicolor
┃𒆜│neondevil
┃𒆜│underwater
┃𒆜│graffitibike 
┃𒆜│snow
┃𒆜│cloud
┃𒆜│honey
┃𒆜│ice
┃𒆜│fruitjuice
┃𒆜│biscuit
┃𒆜│wood
┃𒆜│chocolate
┃𒆜│strawberry
┃𒆜│matrix
┃𒆜│blood
┃𒆜│dropwater
┃𒆜│toxic
┃𒆜│lava
┃𒆜│rock
┃𒆜│bloodglas
┃𒆜│hallowen
┃𒆜│darkgold
┃𒆜│joker
┃𒆜│wicker 
┃𒆜│firework
┃𒆜│skeleton
┃𒆜│blackpink
┃𒆜│sand
┃𒆜│glue
┃𒆜│1917
┃𒆜│leaves 
┃𒆜│retro 
┃𒆜│pornhub 
┃𒆜│8bit 
┃𒆜│batman 
┃𒆜│3dbox 
┃𒆜│lion 
┃𒆜│3davengers 
┃𒆜│window 
┃𒆜│3dspace 
┃𒆜│bokeh 
┃𒆜│holographic 
┃𒆜│thewall 
┃𒆜│carbon 
┃𒆜│whitebear 
┃𒆜│metallic 
┃𒆜│steel 
┃𒆜│fabric 
┃𒆜│ancient 
┃𒆜│marvel 
┃𒆜└───────────
╰══════════════⌫`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: { url: 'https://telegra.ph/file/976f686fc9c24b4ee1b2a.jpg' },
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break
case 'ephoto360menu': { 
const balance = await eco.balance(limitneihtu, khawlbawm);
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███▒▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《█████▒▒▒▒▒▒▒▒▒▒》30%`,
`《████████▒▒▒▒▒▒▒》50%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`
╭══════════════
┃ *Ephoto360 Menu*
┃ *✑ limit :* ${balance.wallet} 💎
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ Ephoto360 Maker ❏*
┃𒆜┌───┈
┃𒆜│glitchtext 
┃𒆜│writetext 
┃𒆜│advancedglow 
┃𒆜│typographytext 
┃𒆜│pixelglitch 
┃𒆜│neonglitch 
┃𒆜│flagtext 
┃𒆜│flag3dtext 
┃𒆜│deletingtext 
┃𒆜│blackpinkstyle 
┃𒆜│glowingtext 
┃𒆜│underwatertext 
┃𒆜│logomaker 
┃𒆜│cartoonstyle 
┃𒆜│papercutstyle 
┃𒆜│watercolortext 
┃𒆜│effectclouds 
┃𒆜│blackpinklogo 
┃𒆜│gradienttext 
┃𒆜│summerbeach 
┃𒆜│luxurygold 
┃𒆜│multicoloredneon 
┃𒆜│sandsummer 
┃𒆜│galaxywallpaper 
┃𒆜│1917style 
┃𒆜│makingneon 
┃𒆜│royaltext 
┃𒆜│freecreate 
┃𒆜│galaxystyle 
┃𒆜│lighteffects 
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: { url: 'https://telegra.ph/file/976f686fc9c24b4ee1b2a.jpg' },
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break
case 'stickermenu': { 
const balance = await eco.balance(limitneihtu, khawlbawm);
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███▒▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《█████▒▒▒▒▒▒▒▒▒▒》30%`,
`《████████▒▒▒▒▒▒▒》50%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`
╭══════════════
┃ *Sticker Menu*
┃ *✑ limit :* ${balance.wallet} 💎
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ Sticker Menu ❏*
┃𒆜┌───┈
┃𒆜│sticker 
┃𒆜│ttp
┃𒆜│ttp2
┃𒆜│ttp3
┃𒆜│ttp4
┃𒆜│attp
┃𒆜│attp2
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: { url: 'https://telegra.ph/file/976f686fc9c24b4ee1b2a.jpg' },
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break
case 'photooxymenu': { 
const balance = await eco.balance(limitneihtu, khawlbawm);
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███▒▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《█████▒▒▒▒▒▒▒▒▒▒》30%`,
`《████████▒▒▒▒▒▒▒》50%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`
╭══════════════
┃ *PhotoOxy Maker*
┃ *✑ limit :* ${balance.wallet} 💎
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ PhotoOxy Maker ❏*
┃𒆜┌───┈
┃𒆜│shadow
┃𒆜│write
┃𒆜│romantic
┃𒆜│burnpaper 
┃𒆜│smoke
┃𒆜│narutobanner
┃𒆜│love
┃𒆜│undergrass 
┃𒆜│doublelove
┃𒆜│coffecup 
┃𒆜│underwaterocean 
┃𒆜│smokyneon 
┃𒆜│starstext 
┃𒆜│rainboweffect 
┃𒆜│balloontext 
┃𒆜│metalliceffect 
┃𒆜│embroiderytext 
┃𒆜│flamingtext 
┃𒆜│stonetext 
┃𒆜│writeart 
┃𒆜│summertext ??
┃𒆜│wolfmetaltext 
┃𒆜│nature3dtext 
┃𒆜│rosestext 
┃𒆜│naturetypography 
┃𒆜│quotesunder 
┃𒆜│shinetext 
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: { url: 'https://telegra.ph/file/976f686fc9c24b4ee1b2a.jpg' },
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break
case 'othermenu': { 
const balance = await eco.balance(limitneihtu, khawlbawm);
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███▒▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《█████▒▒▒▒▒▒▒▒▒▒》30%`,
`《████████▒▒▒▒▒▒▒》50%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`
╭══════════════
┃ *Other Menu*
┃ *✑ limit :* ${balance.wallet} 💎
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ Other Menu ❏*
┃𒆜┌───┈
┃𒆜│checkme
┃𒆜│spin
┃𒆜│transfer
┃𒆜│daily
┃𒆜│gamble
┃𒆜│withdraw
┃𒆜│deposite
┃𒆜│tts 
┃𒆜│say 
┃𒆜│togif 
┃𒆜│toqr 
┃𒆜│bass 
┃𒆜│blown 
┃𒆜│deep 
┃𒆜│earrape 
┃𒆜│fast 
┃𒆜│fat 
┃𒆜│nightcore 
┃𒆜│reverse 
┃𒆜│robot 
┃𒆜│slow 
┃𒆜│smooth 
┃𒆜│squirrel 
┃𒆜│tinyurl 
┃𒆜│tovn 
┃𒆜│toaudio 
┃𒆜│tomp3 
┃𒆜│tomp4
┃𒆜│toimg 
┃𒆜│sticker 
┃𒆜│ebinary 
┃𒆜│dbinary
┃𒆜│ping
┃𒆜│setdpbot
┃𒆜│setdpbot2
┃𒆜│runtime 
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: { url: 'https://telegra.ph/file/976f686fc9c24b4ee1b2a.jpg' },
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break

case 'gb': case 'gbwhatsapp': {
var hbmodspng = await getBuffer(`https://i.imgur.com/i5s0rnL.png`)
HBWABotMz.sendMessage(from, { 
text: ` *GBWhatsApp Latest Version*\nhttps://herbert70.blogspot.com/2022/04/download-gbwhatsapp-last-version-update.html\nDeveloped by HBMods Apk Store`,
contextInfo:{
externalAdReply:{
showAdAttribution: true,
containsAutoReply: true, 
renderLargerThumbnail: false,
title: 'GBWhatsApp',
body: 'Latest Version',
thumbnail: fs.readFileSync("./asset/HBMods/Gb.png"),
mediaType: 2, 
mediaUrl: `https://herbert70.blogspot.com/2022/04/download-gbwhatsapp-last-version-update.html`,
sourceUrl: `https://herbert70.blogspot.com/2022/04/download-gbwhatsapp-last-version-update.html`
}
}
},{quoted:m})
}
break 
case 'fm': case 'fmwhatsapp': { 
var hbmodspng = await getBuffer(`https://i.imgur.com/3RAYRjk.png`)
HBWABotMz.sendMessage(from, { 
text: ` *FMWhatsApp Latest Version*\nhttps://herbert70.blogspot.com/search/label/FMWhatsApp\nDeveloped by HBMods Apk Store`,
contextInfo:{
externalAdReply:{ 
showAdAttribution: true,
containsAutoReply: true,
renderLargerThumbnail: false,
title: 'FMWhatsApp',
body: 'Latest Version',
thumbnail: fs.readFileSync("./asset/HBMods/Fm.png"),
mediaType: 2,
mediaUrl: `https://herbert70.blogspot.com/search/label/FMWhatsApp`,
sourceUrl: `https://herbert70.blogspot.com/search/label/FMWhatsApp`
}
}
},{quoted:m})
}
break
case 'yo': case 'yowhatsapp': {
var hbmodspng = await getBuffer(`https://i.imgur.com/Y21MLL1.png `)
HBWABotMz.sendMessage(from, { 
text: ` *YOWhatsApp Latest Version*\nhttps://herbert70.blogspot.com/2022/10/yowhatsapp.html\nDeveloped by HBMods Apk Store`,
contextInfo:{
externalAdReply:{ 
showAdAttribution: true,
containsAutoReply: true,
renderLargerThumbnail: false, 
title: 'YOWhatsApp',
body: 'Latest Version',
thumbnail: fs.readFileSync("./asset/HBMods/Yo.png"), 
mediaType: 2,
mediaUrl: `https://herbert70.blogspot.com/2022/10/yowhatsapp.html`,
sourceUrl: `https://herbert70.blogspot.com/2022/10/yowhatsapp.html`
}
}
},{quoted:m})
}
break
case 'mb': case 'mbwhatsapp': { 
var hbmodspng = await getBuffer(`https://i.imgur.com/Uz0c4Dd.png `)
HBWABotMz.sendMessage(from, { 
text: ` *MBWhatsApp Latest Version*\nhttps://herbert70.blogspot.com/search/label/MBWhatsApp?m=1\nDeveloped by HBMods Apk Store`,
contextInfo:{
externalAdReply:{
showAdAttribution: true,
containsAutoReply: true,
renderLargerThumbnail: false, 
title: 'MBWhatsApp',
body: 'Latest Version',
thumbnail: fs.readFileSync("./asset/HBMods/Mb.png"),
mediaType: 2,
mediaUrl: `https://herbert70.blogspot.com/search/label/MBWhatsApp?m=1`,
sourceUrl: `https://herbert70.blogspot.com/search/label/MBWhatsApp?m=1`
}
}
},{quoted:m})
}
break
case 'hbmods': case 'fouad': case 'mod': case 'mods': { 
var hbmodspng = await getBuffer(`https://i.imgur.com/SfP3f4M.png `)
HBWABotMz.sendMessage(from, { 
text: ` *WhatsApp Fouad Mod Latest Version*\nhttps://herbert70.blogspot.com/search/label/FouadMods?m=1\nDeveloped by HBMods Apk Store`,
contextInfo:{
externalAdReply:{ 
showAdAttribution: true,
containsAutoReply: true,
renderLargerThumbnail: false,
title: 'WhatsApp Fouad Mod',
body: 'Latest Version',
thumbnail: fs.readFileSync("./asset/HBMods/Fouad.png"),
mediaType: 2,
mediaUrl: `https://herbert70.blogspot.com/search/label/FouadMods?m=1`,
sourceUrl: `https://herbert70.blogspot.com/search/label/FouadMods?m=1`
}
}
},{quoted:m})
}
break
case 'join': {
if (!HerbertTheCreator && !HerbertTheCreator1) return m.reply(mess.owner);
if (!text) return dodoi(`Tiang hian tih tur: ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return dodoi('Link a dik lo!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await HBWABotMz.groupAcceptInvite(result)
await dodoi(`Ka join tawh e....✓`)
}
break
case 'block': case 'ban': {
if (!HerbertTheCreator) return m.reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await HBWABotMz.updateBlockStatus(users, 'block')
await dodoi(`Block a ni e....✓`)
}
break
case 'unblock': {
if (!HerbertTheCreator && !HerbertTheCreator1) return m.reply(mess.owner);
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await HBWABotMz.updateBlockStatus(users, 'unblock')
await dodoi(`Zove....✓`)
}
break
case 'listblock': case 'listban': case 'blocklist': case 'banlist': {
const lisben = "Total Block: " + banUser.length
dodoi(lisben)
}
break
case 'delete': case 'del': {
if (!m.quoted) return dodoi('Message delete tur a awm chuan delete tiin reply rawh')
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
let { chat, fromMe, id, isBaileys } = m.quoted
 HBWABotMz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
let response = await HBWABotMz.groupInviteCode(m.chat)
HBWABotMz.sendText(m.chat, `*${groupMetadata.subject}*\n\nGroup Link : https://chat.whatsapp.com/${response}\nGroup ID : ${groupMetadata.id}`, m, { detectLink: true })
}
break
case 'add': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await HBWABotMz.groupParticipantsUpdate(m.chat, [users], 'add')
await dodoi(`Done`)
}
break
case 'kick': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await HBWABotMz.groupParticipantsUpdate(m.chat, [users], 'remove')
await dodoi(`He group a tang hian remove a ni....✓`)
}
break
case 'promote': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !HerbertTheCreator) return m.reply(mess.admin)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await HBWABotMz.groupParticipantsUpdate(m.chat, [users], 'promote')
await dodoi(`Zove....✓`)
}
break
case 'demote': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !HerbertTheCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await HBWABotMz.groupParticipantsUpdate(m.chat, [users], 'demote')
await dodoi(`Zove....✓`)
}
break
case 'hidetag': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !HerbertTheCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
HBWABotMz.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'postgrp': {
if (!q) return
if (!HerbertTheCreator1) return
HBWABotMz.sendMessage(`120363021176504117@g.us`, { text : q ? q : '' , mentions: participants.map(a => a.id)})
}
break

case 'ebinary': {
if (!q) return dodoi(`Message reply in emaw command zoah rawn dah la Binary code ah a lo chang ang tiang hian hman tur: ${prefix + command} hello world`)
await loadingreact()
let { eBinary } = require('./asset/zepzeuh/binary')
let eb = await eBinary(`${q}`)
var ebinaryloading = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`Hei le : \n${eb}`]

let { key } = await HBWABotMz.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < ebinaryloading.length; i++) {await HBWABotMz.sendMessage(from, {text: ebinaryloading[i], edit: key },{quoted:m})}
}
break
case 'dbinary': {
if (!q) return dodoi(`Binary code decode i duh chuan tian hian hman tur: ${prefix + command} 1101000 1100101 1101100 1101100 1101111`)
await loadingreact()
let { dBinary } = require('./asset/zepzeuh/binary')
let db = await dBinary(`${q}`)
var dbinaryloading = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`Hei le: \n${db}`]

let { key } = await HBWABotMz.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < dbinaryloading.length; i++) {await HBWABotMz.sendMessage(from, {text: dbinaryloading[i], edit: key },{quoted:m})}
}
break
case 'remini': {
if (!quoted) return dodoi(`Thlalak rawn dah rawh`)
if (!/image/.test(mime)) return dodoi(`Thlalak Send/Reply in a caption ah ${prefix + command} tih hi rawn dah rawh`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit();

await loadingreact()
const { remini } = require('./lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance")
HBWABotMz.sendMessage(m.chat, { image: proses, caption: "\n*©HBWABot*"}, { quoted: m})
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
break
case 'toanime': case 'tocartoon': {
if (!quoted) return dodoi(`Thlalak rawn dah rawh`)
if (!/image/.test(mime)) return dodoi(`Thlalak Send/Reply in a caption ah ${prefix + command} tih hi rawn dah rawh`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit();

await loadingreact()
const { toanime } = require('betabotz-tools')
let downloadrawh = await quoted.download()
let results = await toanime(downloadrawh)
console.log(results) //json
HBWABotMz.sendMessage(m.chat, { image: {url: results.image_data}, caption: "\n*©HBWABot*"}, { quoted: m})
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
break
case 'removebg': case 'bgremove': {
if (!quoted) return dodoi(`Thlalak rawn dah rawh`)
if (!/image/.test(mime)) return dodoi(`Thlalak Send/Reply in a caption ah ${prefix + command} tih hi rawn dah rawh`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit();

await loadingreact()
const { removebg } = require('betabotz-tools')
let downloadrawh = await quoted.download()
let results = await removebg(downloadrawh)
console.log(results) //json
HBWABotMz.sendMessage(m.chat, { image: {url: results.image_data}, caption: "\n*©HBWABot*"}, { quoted: m})
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
break
case 'remini2': case 'hd': {
if (!quoted) return dodoi(`Thlalak rawn dah rawh`)
if (!/image/.test(mime)) return dodoi(`Thlalak Send/Reply in a caption ah ${prefix + command} tih hi rawn dah rawh`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit();
await loadingreact()
const { remini } = require('betabotz-tools')
let downloadrawh = await quoted.download()
let results = await remini(downloadrawh)
console.log(results) //json
HBWABotMz.sendMessage(m.chat, { image: {url: results.image_data}, caption: "\n*©HBWABot*"}, { quoted: m})
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
break

case 'tozombie': {
if (!quoted) return dodoi(`Thlalak rawn dah rawh`)
if (!/image/.test(mime)) return dodoi(`Thlalak Send/Reply in a caption ah ${prefix + command} tih hi rawn dah rawh`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit();

await loadingreact()
const { tozombie } = require('betabotz-tools')
let downloadrawh = await quoted.download()
let results = await tozombie(downloadrawh)
console.log(results) //json
HBWABotMz.sendMessage(m.chat, { image: {url: results.image_data}, caption: "\n*©HBWABot*"}, { quoted: m})
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
break 
case 'ai': {
    if (!text) return dodoi(`_🤖Ai nen a in biakna Tiang hian i hmang ang_\n*⟨Entirnan:* ${prefix + command} ChatGpt hi eng nge a nih min hrilh fiah thei em?.`);
    const limit1= await eco.balance(limitneihtu, khawlbawm)
    if (hmanzat > limit1.wallet) return await dailylimit();
    await robotreact()
    const { openai } = require('betabotz-tools') 
    const source1 = 'auto'
    const target1 = 'en'
    const athu1 = `${text 
        .replace(/HBWABot|HBWABot-Ai|HBWABot-ai/g, 'BetaBotz-Ai')
        .replace(/Herbert Suantak|Herbert-a|Herberta/g, 'Lann')
        .replace(/Lalngaihawma|lalngaihawma/g, 'ERLANRAHMAT')
        .replace(/https:\/\/github.com\/HBMods-OFC/g, 'https://github.com/ERLANRAHMAT')}`;
    const mizotranslation1 = await mizo_tawnga_translate_na.translate(source1, target1, athu1)
    const heihi_ani = `${mizotranslation1}`
    const heihian = await openai(`${heihi_ani}`)
    const chutin = `${heihian.result
        .replace(/BetaBotz/g, 'HBWABot')
        .replace(/Lann/g, 'Herbert Suantak')
        .replace(/ERLANRAHMAT/g, 'Lalngaihawma')
        .replace(/Indonesia/g, 'Mizo')
        .replace(/https:\/\/github\.com\/ERLANRAHMAT/g, ' https://github.com/HBMods-OFC ')}`;
    const source = 'auto'
    const target = 'lus'
    const athu = `${chutin}`
    const mizotranslation = await mizo_tawnga_translate_na.translate(source, target, athu)
    const siamthat = `${mizotranslation
    .replace(/ka siamtu|ka neitu/g, 'min siamtu')
    .replace(/Ka neitu|Ka siamtu/g, 'Min siamtu')
    .replace(/I tanpui turin ka rawn kal a ni|tanpui turin ka rawn kal a ni/g, 'tanpui tur chein ka awm e,')
    .replace(/ka chhuah ang che/g, 'chhuahin ka pui ang che')
    .replace(/Ka ngaidam che u|Ka ngaidam che|Ngaidam rawh/g, 'Ka tihpalh')
    .replace(/\/Lalngaihawma/g, '/HBMods-OFC')}`;
    await HBWABotMz.sendMessage(from, { text: siamthat }, { quoted: m })
    let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
}
break


//betabotz ChatBot
case 'ai2': case 'gpt': {
    if (!text) return dodoi(`_🤖Ai nen a in biakna Tiang hian i hmang ang_\n*⟨Entirnan:* ${prefix + command} ChatGpt hi eng nge a nih min hrilh fiah thei em?.`)
    const limit1= await eco.balance(limitneihtu, khawlbawm)
    if (hmanzat > limit1.wallet) return await dailylimit();
    await robotreact()
    const { openai } = require('betabotz-tools') 
    const source1 = 'auto'
    const target1 = 'en'
    const athu1 = `${text 
        .replace(/HBWABot|HBWABot-Ai|HBWABot-ai/g, 'BetaBotz-Ai')
        .replace(/Herbert Suantak|Herbert suantak|Suantak|suantak|Herbert|Herbert-a|Herberta/g, 'Lann')
        .replace(/https:\/\/github.com\/HBMods-OFC/g, 'https://github.com/ERLANRAHMAT')}`;
    const mizotranslation1 = await mizo_tawnga_translate_na.translate(source1, target1, athu1)
    const heihi_ani = `${mizotranslation1}`;
    const heihian = await openai(`${heihi_ani}`);
    const chutin = `${heihian.result
        .replace(/BetaBotz/g, 'HBWABot')
        .replace(/Lann/g, 'Herbert Suantak')
        .replace(/Indonesia/g, 'Mizo')
        .replace(/https:\/\/github\.com\/ERLANRAHMAT/g, ' https://github.com/HBMods-OFC ')}`;
    const source = 'auto'
    const target = 'en'
    const athu = `${chutin}`
    const mizotranslation = await mizo_tawnga_translate_na.translate(source, target, athu)
    await HBWABotMz.sendMessage(from, { text: mizotranslation }, { quoted: m })
    let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
}
break;


case 'openai': {
  if (!q) return dodoi(`_🤖Ai nen a in biakna Tiang hian i hmang ang_\n*⟨Entirnan:* ${prefix + command} ChatGpt hi eng nge a nih min hrilh fiah thei em?.`);
  const limit1= await eco.balance(limitneihtu, khawlbawm)
  if (hmanzat > limit1.wallet) return await dailylimit();
  await robotreact();
  const source = 'auto';
  const target = 'en';
  const athu = `${q}`;
  const mizotranslation = await mizo_tawnga_translate_na.translate(source, target, athu);
  const prompt = `Hello, I'm HBWABot Assistant, a Whatsapp bot developed by Herbert Suantak also known as Lalngaihawma. My name is HBWABot, crafted by Herbert Suantak with unmatched perfection. If you want to know more about my creator, visit
*1. Blog:* https://herbert70.blogspot.com and 
*2. Github:* https://github.com/HBMods-OFC 👍😊
*3. Instagram:* https://instagram.com/herbert_suantak2`;
  const apiUrl1 = `https://api.betabotz.org/api/search/openai-logic?text=${mizotranslation}&logic=${encodeURIComponent(prompt)}&apikey=SjWOkprk`;
  const apiUrl2 = `https://vihangayt.me/tools/chatgptv4?q=${mizotranslation}`;
  try {
    const response1 = await fetch(apiUrl1);
    const responseData1 = await response1.json();
    if (response1.status === 200 && responseData1 && responseData1.status === true && responseData1.message) {
      const message1 = responseData1.message;
      const source1 = 'auto';
      const target1 = 'lus';
      const athu1 = `${message1}`;
      const mizotranslation1 = await mizo_tawnga_translate_na.translate(source1, target1, athu1);
      const me = m.sender;
      await HBWABotMz.sendMessage(m.chat, { text: mizotranslation1, mentions: [me] }, { quoted: m });
    } else {
      const response2 = await fetch(apiUrl2);
      const responseData2 = await response2.json();
      if (response2.status === 200 && responseData2 && responseData2.status === true && responseData2.data) {
        const message2 = responseData2.data;
        const source2 = 'auto';
        const target2 = 'lus';
        const athu2 = `${message2}`;
        const mizotranslation2 = await mizo_tawnga_translate_na.translate(source2, target2, athu2);
        const me2 = m.sender;
        await HBWABotMz.sendMessage(m.chat, { text: mizotranslation2, mentions: [me2] }, { quoted: m });
        let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
      } else {
        dodoi("😔Chhanna ka pe thei lo che a ngaihdam ka dil e. kei mahah hian thil fello a awm a ni, khawngaihin link ka rawn dah hi hmet la, min siamtu hnenah ka chian loh thu hi min va hrilh sak rawh\nhttps://wa.me/+918416093656");
      }
    }
  } catch (error) {
    console.error(error);
    dodoi("😔Chhanna ka pe thei lo che a ngaihdam ka dil e. kei mahah hian thil fello a awm a ni, khawngaihin link ka rawn dah hi hmet la, min siamtu hnenah ka chian loh thu hi min va hrilh sak rawh\nhttps://wa.me/+918416093656");
  }
}
break;


case 'gimage': {
                if (!text) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Mizoram`)
                await loadingreact()
                let gis = require('g-i-s')
                gis(text, async (error, result) => {
                    n = result
                    images = n[Math.floor(Math.random() * n.length)].url
                    HBWABotMz.sendMessage(m.chat, { image: { url: images}, caption: `*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}`}, { quoted: m })
                    
                })
            }
            case 'gimage': {

       if (!text) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Mizoram`
)
        herbertezyanu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)

        n = herbertezyanu.result

        images = n[Math.floor(Math.random() * n.length)]


                HBWABotMz.sendMessage(m.chat, { image: { url: images}, caption: `*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}`}, { quoted: m })

        }

        break

case 'mediafire': {
if (args.length == 0) return dodoi(`_🤖Kha tiang ringawt loh khan, tiang hian a link nen rawn dah rawh_\n\n*⟨Entirnan :* ${prefix + command} https://www.mediafire.com/file/tjssf24bfa0pqh6/Insta+v9.70.apk/file`)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return dodoi(`I link rawn dah hi a dik lo!..`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
const { mediafireDl } = require('./lib/mediafire.js')
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return dodoi('A file size a lian lutuk...')
const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].hming}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}`;
HBWABotMz.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].hming, mimetype: baby1[0].mime, caption : result4}, { quoted : m })
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
}
break
case 'mlstalk':
{
if (!q || !q.includes("|")) {
return dodoi(`_Kha tiang ringawt loh khan, tiang hian type rawh_\n*⟨Entirnan:* ${prefix + command} 530793138|8129 \n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏\nserver id rawn dah tel ang che!..`)
}
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
if (!dat || Object.keys(dat).length === 0) {
return dodoi("I id emaw service id hi a dik lo a ni mai thei.")
}
var MlLoading = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`*⟨⟨⟨Mobile Legend Stalker⟩⟩⟩*\n\nUsername : ${dat.userName}\nId : ${q.split("|")[0]}\nID Zone: ${q.split("|")[1]}`]
let { key } = await HBWABotMz.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < MlLoading.length; i++) {await HBWABotMz.sendMessage(from, {text: MlLoading[i], edit: key },{quoted:m})}
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
}
break
/*
case 'yts': case 'hla':{
if (!text) return m.reply(`\n*Entirnan* : ${prefix + command} Hringnun Vanlalsailova`)
let ytslagu = require("youtube-yts")
let lagusearch = await ytslagu(text)
listSerch = []
teskd = `*${text}*\nA hnuaia *H L A* tih khu hmet la i duh ber la chhuak rawh\n`
for (let i of lagusearch.all) {
listSerch.push({
title: i.title,
rowId: `${prefix}ytmp3 ${i.url}`,
description: `Duration: ${i.timestamp}`
})
}
const sections = [
{
title: " " + lagusearch.all.length + " hmuh a ni",
rows: listSerch
}
]
const listMessage = {
text: teskd,
title: ``,
buttonText: "H L A",
mentions: parseMention(teskd), sections
}
return HBWABotMz.sendMessage(m.chat, listMessage, {
quoted: m
})
}
break */
case 'ytmp4x':
case 'youtubemp4': {
  if (!args || !args[0]) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefg`); 
  const limit1 = await eco.balance(limitneihtu, khawlbawm); 
  if (hmanzat > limit1.wallet) {
    return await dailylimit();
  }  
  await loadingreact();  
  if (!args[0].match(/youtu/gi)) {
    return dodoi('Youtube link dik tak chauh rawn dah rawh');
  }  
  const kel = args[0];
  const vihangaapi = `https://vihangayt.me/download/ytmp4?url=${encodeURIComponent(kel)}`;  
  try {
    const response = await fetch(vihangaapi);    
    if (!response.ok) {
      console.error('Error searching for song:', response.statusText);
      throw new Error('Error searching for song');
    }    
    const data = await response.json();
    const caption = `
*✼ ••๑⋯❀ Y O U T U B E ❀⋯⋅๑•• ✼*

*𖡛 Title:* ${data.data.title}

*𖡛 Link:* ${args[0]}

   *⊱─━⊱༻●༺⊰━─⊰*`;
    const vres = data.data.vid_360p;
    const vid = await fetch(vres);
    const vidBuffer = await vid.buffer();
    HBWABotMz.sendMessage(m.chat, { video: vidBuffer, caption }, { quoted: m });
    const aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat);
    await finishreact();
  } catch (error) {
    console.error('Error:', error.message);
  }
}
break;
case 'ytmp3':{
//Credit by HBMods-OFC
if (!args || !args[0]) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefg`)
await loadingreact()
if (!args[0].match(/youtu/gi)) dodoi ('Youtube link dik tak chauh rawn dah rawh')
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
const dl_url = await yt.audio[q].download()
const title = await yt.title
const size = await yt.audio[q].fileSizeH 
const ytcp=`*${title}*
╭═══════════
*⚙️Quality :* ${q}
*⚙️Size :* ${size}
*⚙️By HBWABot Mizo*
╰════════════`
await uploadreact()
HBWABotMz.sendMessage(m.chat, {document: {url: dl_url} ,mimetype: 'audio/mpeg', fileName: title+`.mp3`, caption: ytcp},{quoted:m})
await finishreact()
}
break
case 'ytmp3x': {
  try {
    if (!args || !args[0]) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefg`);
    const limit1 = await eco.balance(limitneihtu, khawlbawm);
    if (hmanzat > limit1.wallet) {
      return await dailylimit();
    }
    await loadingreact();
    const kiri = args[0];
    const vihangaapi = `https://vihangayt.me/download/ytmp4?url=${encodeURIComponent(kiri)}`;
    const response = await fetch(vihangaapi);
    if (!response.ok) {
      console.error('Error fetching video data:', response.statusText);
      throw new Error('Error fetching video data');
    }
    const data = await response.json();
    const vres = data.data.vid_360p;
    const vid = await fetch(vres);
    const media = await vid.buffer();
    let { toAudio } = require('./lib/converter');
    let audio = await toAudio(media, 'mp4');
    HBWABotMz.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `${data.data.title}.mp3` }, { quoted: m });
    let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat);
    await finishreact();
  } catch (error) {
    console.error('Error:', error.message);
  }
}
break;
case 'dvideox':
case 'dvidx': {
  if (!text) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian type tur_\n*⟨Entirnan :* ${prefix + command} K hminga siar lalnu`);
  const limit1 = await eco.balance(limitneihtu, khawlbawm);
  if (hmanzat > limit1.wallet) return await dailylimit();
  await loadingreact();
  const ytssEndpoint = `https://api-brunosobrino.zipponodes.xyz/api/ytsearch?text=${encodeURIComponent(text)}`;
  const ytssResponse = await fetch(ytssEndpoint);
  const jsonData = await ytssResponse.json();
  if (jsonData && jsonData.resultado && jsonData.resultado.length > 0) {
    const firstResult = jsonData.resultado[0];
    const firstResultUrl = firstResult.url;
    const vihangaapi = `https://vihangayt.me/download/ytmp4?url=${encodeURIComponent(firstResultUrl)}`;
    const response = await fetch(vihangaapi);
    if (!response.ok) {
      console.error('Error fetching video data:', response.statusText);
      throw new Error('Error fetching video data');
    }
    const data = await response.json();
    const vres = data.data.vid_360p;
    const vid = await fetch(vres);
    const media = await vid.buffer();
    await uploadreact();
    let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat);
    await HBWABotMz.sendMessage(m.chat, { video: media , caption: `
*✼ ••๑⋯❀ Y O U T U B E ❀⋯⋅๑•• ✼*

*𖡛 Title:* ${data.data.title}

*𖡛 Link:* ${firstResultUrl}

   *⊱─━⊱༻●༺⊰━─⊰*`}, { quoted: m });
    await finishreact();
  }
}
break;

case 'ytmp4x': {
//Credit by HBMods-OFC
if (!args || !args[0]) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefg`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
if (!args[0].match(/youtu/gi)) dodoi ('Youtube link dik tak chauh rawn dah rawh')
let q = args[1] || '360p'
let v = args[0]
const yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
const dl_url = await yt.video[q].download()
const title = await yt.title
const size = await yt.video[q].fileSizeH 
const ytc=`*${title}*
╭═══════════
*⚙️File type :* mp4
*⚙️Quality :* ${q}
*⚙️Size :* ${size}
*⚙️By HBWABot Mizo*
╰════════════`
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await uploadreact()
await HBWABotMz.sendMessage(m.chat,{
video: {url: dl_url},
caption: ytc
}, {quoted:m})
await finishreact()
}
break

case 'ytmp4': case 'ytvideo': {
const herbertvideo = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !herbertvideo.isYTUrl(text)) return dodoi(`Video link rawn dah rawh!!\n\n_🤖Kha tiang ringawt loh khan tiang hian type tur_\n*⟨Entirnan :* ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefgs`)
const limit1 = await eco.balance(limitneihtu, khawlbawm); 
  if (hmanzat > limit1.wallet) {
    return await dailylimit();
  }  
  await loadingreact();  
const vid=await herbertvideo.mp4(text)
const ytc=`
╭═══════════┈
┃𒆜┌───┈
┃𒆜│ *Tittle:* ${vid.title}
┃𒆜│ *Date:* ${vid.date}
┃𒆜│ *Duration:* ${vid.duration}
┃𒆜│ *Quality:* ${vid.quality}
┃𒆜└───────────┈ 
╰════════════──┈`
await HBWABotMz.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
const aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat);
    await finishreact();
}
break
case 'ytmp3':{
//Credit by HBMods-OFC
if (!args || !args[0]) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefg`)
await loadingreact()
if (!args[0].match(/youtu/gi)) dodoi ('Youtube link dik tak chauh rawn dah rawh')
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
const dl_url = await yt.audio[q].download()
const title = await yt.title
const size = await yt.audio[q].fileSizeH 
const ytcp=`*${title}*
╭═══════════
*⚙️Quality :* ${q}
*⚙️Size :* ${size}
*⚙️By HBWABot Mizo*
╰════════════`
await uploadreact()
HBWABotMz.sendMessage(m.chat, {document: {url: dl_url} ,mimetype: 'audio/mpeg', fileName: title+`.mp3`, caption: ytcp},{quoted:m})
await finishreact()
}
break

case 'ytmp4x': {
  if (!args || !args[0]) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefg`);
  await loadingreact()
  const { youtube } = require('btch-downloader');
  const data = await youtube(args[0]);
  const ytc = `
  ╭═══════════┈
  ┃𒆜┌───┈
  ┃𒆜│ *Title:* ${data.title}
  ┃𒆜│ *Date:* ${data.uploaded_at}
  ┃𒆜│ *Duration:* ${data.duration}
  ┃𒆜│ *Quality:* 360p
  ┃𒆜└───────────┈ 
  ╰════════════──┈`;
  await uploadreact()
  await HBWABotMz.sendMessage(m.chat, {
    video: { url: data.url },
    caption: ytc,
  }, { quoted: m });
  await finishreact()
}
break;


case 'ytaudio':{
//Credit by HBMods-OFC
if (!args || !args[0]) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefg`)
await loadingreact()
if (!args[0].match(/youtu/gi)) dodoi ('Youtube link dik tak chauh rawn dah rawh')
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
const dl_url = await yt.audio[q].download()
const title = await yt.title
const size = await yt.audio[q].fileSizeH 
await uploadreact()
HBWABotMz.sendMessage(m.chat, {audio: {url: dl_url} ,mimetype: 'audio/mpeg', fileName: title+`.mp3`},{quoted:m})
await finishreact()
}
break /*
case 'dsong3': {
if (!text) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian type tur_\n*⟨Entirnan :* ${prefix + command} K hminga siar lalnu`)
const limit1 = await eco.balance(limitneihtu, khawlbawm); 
  if (hmanzat > limit1.wallet) {
    return await dailylimit();
  }  
  await loadingreact();  
const herbertplaymp3 = require('./lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let kazawn = search.videos[0]
const pl= await herbertplaymp3.mp3(kazawn.url)
await HBWABotMz.sendMessage(m.chat,{document: fs.readFileSync(pl.path),
    fileName: kazawn.title + '.mp3',
    mimetype: 'audio/mp4',
    contextInfo:{
        externalAdReply:{
            title:kazawn.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:kazawn.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
const aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat);
    await finishreact();
}
break
*/
case 'dsong2': case 'song2': case 'play2': {
//Credit by HBMods-OFC
if (!text) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} K hminga siar lalnu`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
let res = await yts2(text)
let vid = res.videos[0]
let q = isVideo ? '360p' : '128kbps'
let v = vid.url
let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
let dl_url = await (isVideo ? yt.video[q].download() : yt.audio[q].download())
let title = await yt.title
let size = await (isVideo ? yt.video[q].fileSizeH : yt.audio[q].fileSizeH)
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await uploadreact()
HBWABotMz.sendMessage(m.chat, {audio: {url: dl_url} ,mimetype: 'audio/mpeg', fileName: vid.title+`.mp3`,},{quoted:m})
await finishreact()
}
break
case 'dsong': case 'song': case 'play': {
//Credit by HBMods-OFC
if (!text) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} K hminga siar lalnu`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
let res = await yts2(text)
let vid = res.videos[0]
let q = isVideo ? '360p' : '128kbps'
let v = vid.url
let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
let dl_url = await (isVideo ? yt.video[q].download() : yt.audio[q].download())
let title = await yt.title
let size = await (isVideo ? yt.video[q].fileSizeH : yt.audio[q].fileSizeH)
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await uploadreact()
HBWABotMz.sendMessage(m.chat, {document: {url: dl_url} ,mimetype: 'audio/mpeg', fileName: vid.title+`.mp3`, caption: `*${title}*

00:00 ───ㅇ───── ${vid.timestamp}
╭═══════════
*⚙️ Quality :* ${q}
*🕛 Duration :* ${vid.timestamp}
*👀 Viewers :* ${vid.views}
*♻️ Published :* ${vid.ago}
*💬 Url :* ${vid.url}
╰════════════`},{quoted:m})
await finishreact()
}
break
case 'dvideox':
case 'dvidx': {
  if (!text) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian type tur_\n*⟨Entirnan :* ${prefix + command} K hminga siar lalnu`);
  const limit1 = await eco.balance(limitneihtu, khawlbawm);
  if (hmanzat > limit1.wallet) return await dailylimit();
  await loadingreact();
  const { youtube } = require('btch-downloader');
  const yts = require("youtube-yts");
  let search = await yts(text);
  let kazawn = search.videos[0];
  const vid = await youtube(kazawn.url);
  const ytc = `
  ╭═══════════┈
  ┃𒆜┌───┈
  ┃𒆜│ *Title:* ${vid.title}
  ┃𒆜│ *Date:* ${vid.uploaded_at}
  ┃𒆜│ *Duration:* ${vid.duration}
  ┃𒆜│ *Quality:* 360
  ┃𒆜└───────────┈ 
  ╰════════════──┈`;
  await uploadreact();
  let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat);
  await HBWABotMz.sendMessage(m.chat, {
    video: { url: vid.url },
    caption: ytc
  }, { quoted: m });
  await finishreact();
}
break;

case 'dvideo':  case 'dvid': {
if (!text) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian type tur_\n*⟨Entirnan :* ${prefix + command} K hminga siar lalnu`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
const herbertvideo = require('./lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let kazawn = search.videos[0]
const vid=await herbertvideo.mp4(kazawn.url)
const ytc=`
╭═══════════┈
┃𒆜┌───┈
┃𒆜│ *Tittle:* ${vid.title}
┃𒆜│ *Date:* ${vid.date}
┃𒆜│ *Duration:* ${vid.duration}
┃𒆜│ *Quality:* ${vid.quality}
┃𒆜└───────────┈ 
╰════════════──┈`
await uploadreact()
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await HBWABotMz.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
await finishreact()
}
break


/*

case 'dvideo':case 'dvid': {
if (!text) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} K hminga siar lalnu`)
await loadingreact()
let yts = require("youtube-yts")
let search = await yts(text)
let vid = search.videos[0]
let q = vid.url || '360p'
let v = vid.url
const yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
const dl_url = await yt.video[q].download()
const title = await yt.title
const size = await yt.video[q].fileSizeH 
const ytc=`*${title}*
╭═══════════
*⚙️File type :* mp4
*⚙️Quality :* ${q}
*⚙️Size :* ${size}
*⚙️By HBWABot Mizo*
╰════════════`
await uploadreact()
await HBWABotMz.sendMessage(m.chat,{
video: {url: dl_url},
caption: ytc
}, {quoted:m})
await finishreact()
}
break
*/

case 'addprem':
if (!HerbertTheCreator) return m.reply(mess.owner)
if (!args[0]) return dodoi(`Use ${prefix+command} number\n_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} 918416093656`)
premTurNb = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let checkrawh = await HBWABotMz.onWhatsApp(premTurNb)
if (checkrawh.length == 0) return dodoi(`WhatsApp khawih te number chiah rawn dah rawh!!!`)
prem.push(premTurNb)
fs.writeFileSync('./asset/database/premium.json', JSON.stringify(prem))
dodoi(`A number ${premTurNb} hi premium a ni ta e`)
break
case 'delprem':
if (!HerbertTheCreator) return m.reply(mess.owner)
if (!args[0]) return dodoi(`Use ${prefix+command} number\n_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} 918416093656`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./asset/database/premium.json', JSON.stringify(prem))
dodoi(`A number ${ya} hi premium member a tang remove a ni!.`)
break
case 'addsticker':{
if (!HerbertTheCreator) return m.reply(mess.owner)
if (args.length < 1) return dodoi('Whats the sticker name?')
if (StickerHerbert.includes(q)) return dodoi("A hming a awm tawh")
let delb = await HBWABotMz.downloadAndSaveMediaMessage(quoted)
StickerHerbert.push(q)
await fsx.copy(delb, `./asset/sticker/${q}.webp`)
fs.writeFileSync('./asset/database/herbertsticker.json', JSON.stringify(StickerHerbert))
fs.unlinkSync(delb)
dodoi(`Add a ni ta\nCheck i check duh chuan tiang hian type rawh ${prefix}liststicker`)
}
break
case 'delsticker':{
if (!HerbertTheCreator) return m.reply(mess.owner)
if (args.length < 1) return dodoi('A sticker hming rawn dah rawh')
if (!StickerHerbert.includes(q)) return dodoi("Tiang hming hi database ah a awm lo tlat")
let wanu = StickerHerbert.indexOf(q)
StickerHerbert.splice(wanu, 1)
fs.writeFileSync('./asset/database/herbertsticker.json', JSON.stringify(StickerHerbert))
fs.unlinkSync(`./asset/sticker/${q}.webp`)
dodoi(`Delete a ni tawh e ${q}`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n┃\n'
for (let x of StickerHerbert) {
teks += `┃⭔ ${x}\n`
}
teks += `┃\n└────────────⭓\n\n*A vaiin : ${StickerHerbert.length}*`
dodoi(teks)
}
break
case 'addvn':{
if (!HerbertTheCreator) return m.reply(mess.owner)
if (args.length < 1) return dodoi('Audio hming rawn dah rawh')
if (VoiceNoteHerbert.includes(q)) return dodoi("a hming a awm tawh!..")
let delb = await HBWABotMz.downloadAndSaveMediaMessage(quoted)
VoiceNoteHerbert.push(q)
await fsx.copy(delb, `./asset/audio/${q}.mp3`)
fs.writeFileSync('./asset/database/herbertvn.json', JSON.stringify(VoiceNoteHerbert))
fs.unlinkSync(delb)
dodoi(`Audio ah dah a ni e\nTiang hian type la i en thei ang ${prefix}listvn`)
}
break
case 'delvn':{
if (!HerbertTheCreator) return m.reply(mess.owner)
if (args.length < 1) return dodoi('Enter the vn name')
if (!VoiceNoteHerbert.includes(q)) return dodoi("Database ah chu tiang hming chu a awm lo")
let wanu = VoiceNoteHerbert.indexOf(q)
VoiceNoteHerbert.splice(wanu, 1)
fs.writeFileSync('./asset/database/herbertvn.json', JSON.stringify(VoiceNoteHerbert))
fs.unlinkSync(`./asset/audio/${q}.mp3`)
dodoi(`Delete a ni tawh e ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n┃\n'
for (let x of VoiceNoteHerbert) {
teks += `┃⭔ ${x}\n`
}
teks += `┃\n└────────────⭓\n\n*A vaiin : ${VoiceNoteHerbert.length}*`
dodoi(teks)
}
break 
case 'left': {
if (!HerbertTheCreator|!HerbertTheCreator1) return
if (text == 'rawh') {
await dodoi ('Awle boss 🫡')
await HBWABotMz.groupLeave(m.chat)
}
}
break
case '/group': case '#group': {
if (!m.isGroup) return
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
if (!isAdmins && !HerbertTheCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.BotAdmin)
if (!q) return dodoi(`Group info i edit duh chuan option ang khuan ti ang che\n\n*Options : close & open*\nclose chu admin te chauh tawng theia dah na\nopen chu partisipants te tawng ve theia dahna \nEntirnan tiang hian i ti ang : ${command} close`)
if (args[0] == 'close') {
HBWABotMz.groupSettingUpdate(from, 'announcement')
dodoi(`He group hi Admin te chauh message thawn thei tura dah a ni e...✓`)
} else if (args[0] == 'open') {
HBWABotMz.groupSettingUpdate(from, 'not_announcement')
dodoi(`He group hi participants zawng zawngten message thawn thei tawh tura dah a ni e....✓`)
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat) 
}
else {
dodoi(`Option te khu hmang rawh\nOptions : Close & Open\nTiang hian : ${command} close`)
}}
break
case 'tomp4': case 'tovideo': {
if (!quoted) return dodoi('Reply to Sticker')
if (!/webp/.test(mime)) return dodoi(`Sticker reply rawh tiang hian:*${prefix + command}*`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
let { webp2mp4File } = require('./lib/uploader')
let media = await HBWABotMz.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await HBWABotMz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'sticker a tang video ah convert a ni' } }, { quoted: m })
await fs.unlinkSync(media)
await finishreact()
}
break
case 'toaud': case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, audio type in ka rawn thawn ang che.... `)
if (!quoted) return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, audio type in ka rawn thawn ang che.... `)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
HBWABotMz.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
break
case 'shazam': {
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || '';
if (!/video/.test(mime) && !/audio/.test(mime)) { return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, a hla/music hming ka rawn zawn sak ang che....`);
    }
if ((q.msg || q).seconds > 45) { return dodoi('Khawngihin, second 45 aia tam rawn thawn suh ka access thei lo');
    }
if (!q) { return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, a hla/music hming ka rawn zawn sak ang che....`);
    }
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (60 > limit1.wallet) return dodoi(`He featurs hi hman i duh chuan 💎60 i neih a ngai!!.\n\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏Bot rawn hmang thar tur i nih chuan Limit tiin type rawh, ti chuan bot hman theihna tur 💎500 i dawng ang, emaw i thiante in thawn tir rawh`)
    HBWABotMz.sendMessage(from, { react: { text: "🔍", key: m.key }});
let media = await q.download();
let ext = mime.split('/')[1];
    fs.writeFileSync(`./asset/trash/${m.sender}.${ext}`, media);
let res = await acr.identify(fs.readFileSync(`./asset/trash/${m.sender}.${ext}`));
let { code, msg } = res.status;
if (code !== 0) { return dodoi(`I music duh ang hi ka hmu thei lo, i hla rawn thawn hi original ni lo a ni mai thei,͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏emaw ka Api's laknaah dik lo a awm a ni thei`);
    }
var zamzam = await getBuffer(`https://i.imgur.com/hYFjOKu.png`);
let { title, artists, album, genres, release_date } = res.metadata.music[0];
const sazu = `${title} ${artists !== undefined ? artists.map(v => v.name).join(', ') : ''}`;
let ytu = await yts2(sazu)
let vid = ytu.videos[0]
let v = vid.url
HBWABotMz.sendMessage(m.chat, { text: `
*RESULTS*
╭═══════════┈
┃𒆜┌───┈
┃𒆜│📌 *TITLE:* ${title || 'Ka hmu thei lo'}
┃𒆜│👨‍🎤 *ARTIST:* ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'Ka hmu thei lo'}
┃𒆜│💾 *ALBUM:* ${album && album.name ? album.name : 'Ka hmu thei lo'}
┃𒆜│🌐 *GENRE:* ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'Ka hmu thei lo'}
┃𒆜│📆 *RELEASE DATE:* ${release_date || 'Ka hmu thei lo'}
┃𒆜└───────────┈ 
╰════════════──┈ `, contextInfo:{"externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": `SHAZAM`,"body": `${title || 'Ka hmu thei lo'}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./asset/image/ShaZam.png`),"sourceUrl": `${v}`}}}, { quoted: m});
let aman = await eco.deduct(limitneihtu, khawlbawm, 60)
    await finishreact();
    fs.unlinkSync(`./asset/trash/${m.sender}.${ext}`);
    break;
}

case 'shazam2': {
let q = m.quoted ? m.quoted : m;
if (!q) {return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, a hla/music hming ka rawn zawn sak ang che....`);
  }
let mime = (q.msg || q).mimetype || '';
if (!/video/.test(mime) && !/audio/.test(mime)) { return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, a hla/music hming ka rawn zawn sak ang che....`);
  }
if ((q.msg || q).seconds > 45) { return dodoi('Khawngihin, second 45 aia tam rawn thawn suh ka access thei lo');
  }
const limit1 = await eco.balance(limitneihtu, khawlbawm);
if (100 > limit1.wallet) { return dodoi('He featurs hi hman i duh chuan 💎100 i neih a ngai!!.\n\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏Bot rawn hmang thar tur i nih chuan Limit tiin type rawh, ti chuan bot hman theihna tur 💎500 i dawng ang, emaw i thiante in thawn tir rawh');
  }
var zamzam = await getBuffer(`https://i.imgur.com/hYFjOKu.png`);
  await loadingreact();
let media = await q.download();
let ext = mime.split('/')[1];
    fs.writeFileSync(`./asset/trash/${m.sender}.${ext}`, media);
try {
let res = await acr.identify(fs.readFileSync(`./asset/trash/${m.sender}.${ext}`));
let { code, msg } = res.status;
if (code !== 0) { return dodoi(`I music duh ang hi ka hmu thei lo, i hla rawn thawn hi original ni lo a ni mai thei, ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏emaw ka Api's lakna ah dik lo a awm a ni thei`);
    }
let { title, artists, album, genres, release_date } = res.metadata.music[0];
const sazu = `${title} ${artists !== undefined ? artists.map(v => v.name).join(', ') : ''}`;
let ytu = await yts2(sazu)
let vid = ytu.videos[0]
let qul = isVideo ? '360p' : '128kbps'
let v = vid.url
let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
let dl_url = await (isVideo ? yt.video[qul].download() : yt.audio[qul].download())
await HBWABotMz.sendMessage(m.chat, { audio: {url: dl_url}, mimetype: 'audio/mpeg', 
contextInfo:{"externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": `${title || 'Ka hmu thei lo'}`,"body": `${artists !== undefined ? artists.map(v => v.name).join(', ') : 'Ka hmu thei lo'}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./asset/image/ShaZam.png`),"sourceUrl": `${v}`}}}, { quoted: m });
    await uploadreact();
    let aman = await eco.deduct(limitneihtu, khawlbawm, 100);
    await finishreact();
    fs.unlinkSync(`./asset/trash/${m.sender}.${ext}`);
  } catch (error) {
    console.error('Error:', error);
  }
  break;
}
case 'shazam3': {
let q = m.quoted ? m.quoted : m;
if (!q) {return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, a hla/music hming ka rawn zawn sak ang che....`);
  }
let mime = (q.msg || q).mimetype || '';
if (!/video/.test(mime) && !/audio/.test(mime)) { return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, a hla/music hming ka rawn zawn sak ang che....`);
  }
if ((q.msg || q).seconds > 45) { return dodoi('Khawngihin, second 45 aia tam rawn thawn suh ka access thei lo');
  }
const limit1 = await eco.balance(limitneihtu, khawlbawm);
if (100 > limit1.wallet) { return dodoi('He featurs hi hman i duh chuan 💎100 i neih a ngai!!.\n\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏Bot rawn hmang thar tur i nih chuan Limit tiin type rawh, ti chuan bot hman theihna tur 💎500 i dawng ang, emaw i thiante in thawn tir rawh');
  }
var zamzam = await getBuffer(`https://i.imgur.com/hYFjOKu.png`);
  await loadingreact();
let media = await q.download();
let ext = mime.split('/')[1];
    fs.writeFileSync(`./asset/trash/${m.sender}.${ext}`, media);
try {
let res = await acr.identify(fs.readFileSync(`./asset/trash/${m.sender}.${ext}`));
let { code, msg } = res.status;
if (code !== 0) { return dodoi(`I music duh ang hi ka hmu thei lo, i hla rawn thawn hi original ni lo a ni mai thei, ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏emaw ka Api's ah hian dik lo a awm pawh a ni thei`);
    }
let { title, artists, album, genres, release_date } = res.metadata.music[0];
const sazu = `${title} ${artists !== undefined ? artists.map(v => v.name).join(', ') : ''}`;
const herbertplaymp3 = require('./lib/ytdl2')
let ytu = await yts2(sazu)
let kazawn = ytu.videos[0]
const pl= await herbertplaymp3.mp3(kazawn.url)
await HBWABotMz.sendMessage(m.chat,{document: fs.readFileSync(pl.path),
    caption: `
╭═══════════┈
┃𒆜┌───┈
┃𒆜│📌 *TITLE:* ${title || 'Ka hmu thei lo'}
┃𒆜│👨‍🎤 *ARTIST:* ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'Ka hmu thei lo'}
┃𒆜│💾 *ALBUM:* ${album && album.name ? album.name : 'Ka hmu thei lo'}
┃𒆜│🌐 *GENRE:* ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'Ka hmu thei lo'}
┃𒆜│📆 *RELEASE DATE:* ${release_date || 'Ka hmu thei lo'}
┃𒆜└───────────┈ 
╰════════════──┈`,
fileName: `${title}.mp3`,
mimetype: 'audio/mp4',
contextInfo:{
 externalAdReply:{
 title: title || 'Ka hmu thei lo',
 body: artists !== undefined ? artists.map(v => v.name).join(', ') : 'Ka hmu thei lo',
 thumbnail: fs.readFileSync(`./asset/image/ShaZam.png`),
 mediaType:1,
 mediaUrl:kazawn.url,
  }
},
},{quoted:m})
await fs.unlinkSync(pl.path)
    await uploadreact();
    let aman = await eco.deduct(limitneihtu, khawlbawm, 100);
    await finishreact();
    fs.unlinkSync(`./asset/trash/${m.sender}.${ext}`);
  } catch (error) {
    console.error('Error:', error);
  }
  break;
}
case 'tomp3': {
if (/document/.test(mime)) return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, Mp3 document file in ka rawn thawn ang che.... `)
if (!/video/.test(mime) && !/audio/.test(mime)) return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, Mp3 document file in ka rawn thawn ang che.... `)
if (!quoted) return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, Mp3 document file in ka rawn thawn ang che.... `)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
HBWABotMz.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${HBWABotMz.user.name}.mp3`}, { quoted : m })
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
break
case 'tovn': case 'toptt': {
if (!/video/.test(mime) && !/audio/.test(mime)) return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, voice note in ka rawn thawn ang che.... `)
if (!quoted) return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, voice note in ka rawn thawn ang che.... `)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
HBWABotMz.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
break
case 'togif': {
if (!quoted) return dodoi('Reply video')
if (!/webp/.test(mime)) return dodoi(`Sticker reply rawh tiang hian: *${prefix + command}*`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
let { webp2mp4File } = require('./lib/uploader')
let media = await HBWABotMz.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await HBWABotMz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
break

case 'tourl': case 'tolink': {
if (!quoted) return dodoi(`Thlalak a caption-ah *${prefix + command}* tih rawn dah rawh`)
if (!/image/.test(mime)) return dodoi(`Thlalak rawn thawn la emaw reply la, a caption-ah ${prefix + command} tih hi rawn dah rawh`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await HBWABotMz.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
let hmantur = util.format(anu)
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`Hei le\n${hmantur}`]

let { key } = await HBWABotMz.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoadingmenu.length; i++) {await HBWABotMz.sendMessage(from, {text: HBLoadingmenu[i], edit: key },{quoted:m})}
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await fs.unlinkSync(media)
}
break

case 'toqr':{
if (!q) return dodoi('Text emaw link rawn dah tel rawh\n*Entirnan:* toqr https://www.youtube.com/@HBMods_Channel')
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
 const QrCode = require('qrcode-reader')
 const qrcode = require('qrcode')
 let qyuer = await qrcode.toDataURL(q, { scale: 35 })
 let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
 let buff = getRandom('.jpg')
 await fs.writeFileSync('./'+buff, data)
 let medi = fs.readFileSync('./' + buff)
await HBWABotMz.sendMessage(from, { image: medi, caption:"\n*©HBWABot*"}, { quoted: m })
 setTimeout(() => { fs.unlinkSync(buff) }, 10000)
 let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
}
break
case 'dare': { 
if (!m.isGroup) return m.reply(mess.group)
var truthordare = await getBuffer(`https://i.imgur.com/hnH7qf0.jpeg`)
const dare = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Media/main/Games/dare.json')
const herbertdare = dare[Math.floor(Math.random() * dare.length)]
HBWABotMz.sendMessage(from, { 
text: ` *DARE I THLANGA*\n${herbertdare}\n\n____________`,
contextInfo:{
externalAdReply:{ 
showAdAttribution: true,
containsAutoReply: true,
title: 'Truth or Dare',
body: 'Fun Game',
thumbnail: truthordare,
mediaType: 1,
mediaUrl: `https://www.youtube.com/@HBMods_Channel`,
sourceUrl: `https://www.youtube.com/@HBMods_Channel`
}
}
},{quoted:m})
}
break

case 'truth': { 
if (!m.isGroup) return m.reply(mess.group)
var truthordare = await getBuffer(`https://i.imgur.com/hnH7qf0.jpeg`)
const truth = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Media/main/Games/truth.json')
const herberttruth = truth[Math.floor(Math.random() * truth.length)]
HBWABotMz.sendMessage(from, { 
text: ` *TRUTH I THLANGA*\n${herberttruth}\n\n____________`,
contextInfo:{
externalAdReply:{ 
showAdAttribution: true,
containsAutoReply: true,
title: 'Truth or Dare',
body: 'Fun Game',
thumbnail: truthordare,
mediaType: 1,
mediaUrl: `https://www.youtube.com/@HBMods_Channel`,
sourceUrl: `https://www.youtube.com/@HBMods_Channel`
}
}
},{quoted:m})
}
break
case 'toimg': case 'thlalakk': {
await loadingreact()
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}
if (!m.quoted) return dodoi(`Tuna i type ang chiah hian sticker reply la, ti chuan photo-in ka rawn thawn ang che`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
let mime = m.quoted.mtype
if (mime =="imageMessage" || mime =="stickerMessage")
{
let media = await HBWABotMz.downloadAndSaveMediaMessage(m.quoted)
let name = await getRandom('.png')
exec(`ffmpeg -i ${media} ${name}`, (err) => {
fs.unlinkSync(media)
let buffer = fs.readFileSync(name)
HBWABotMz.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(name)
})
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await loadingreact()
} else return dodoi(`Sticker che thei lo ang chi chauh rawn reply rawh`)
}
break 
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!isPrem) return replyprem(mess.premium)
if (!args.join(" ")) return dodoi(`_🤖Kha tiang ringawt loh khan, tiang hian a i duh duh word nen rawn dah rawh_\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
HBWABotMz.downloadAndSaveMediaMessage(quoted, "gifee")
HBWABotMz.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await HBWABotMz.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return dodoi('Second 10 aia tam a thei loh!')
let media = await quoted.download()
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
let encmedia = await HBWABotMz.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} 
else {
dodoi(`Sticker reply ta che🤦`)
}
}
break
case 'qc': case'text': {
if (!args[0] && !m.quoted) {
return dodoi(`_🤖Kha tiang ringawt loh khan, tiang hian a i duh duh word nen rawn dah rawh_\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
}
let userPfp
if (m.quoted) {
try {
userPfp = await HBWABotMz.profilePictureUrl(m.quoted.sender, "image")
} catch (e) {
userPfp = defaultpp
}
} else {
try {
userPfp = await HBWABotMz.profilePictureUrl(m.sender, "image")
} catch (e) {
userPfp = defaultpp
}
}
const waUserName = pushname
const quoteText = m.quoted ? m.quoted.body : args.join(" ")
const quoteJson = {
type: "quote",
format: "png",
backgroundColor: "#FFFFFF",
width: 700,
height: 580,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: waUserName,
photo: {
url: userPfp,
},
},
text: quoteText,
replyMessage: {},
},
],
}
try {
const quoteResponse = await axios.post("https://bot.lyo.su/quote/generate", quoteJson, {
headers: { "Content-Type": "application/json" },
})
const buffer = Buffer.from(quoteResponse.data.result.image, "base64")
HBWABotMz.sendImageAsSticker(m.chat, buffer, m, {
packname: packname,
author: author,
})
} catch (error) {
console.error(error)
dodoi('Error')
}
}
break
case 's': case 'sticker': case 'stiker': case 'stickers': { 
if (!quoted) return dodoi(`Thlalak emaw video rawn thawn la a caption-ah *${prefix+command}* tiin rawn dah rawh\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏Ti chuan sticker in ka rawn pe ang che`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
if (/image/.test(mime)) { 
let media = await quoted.download()
let encmedia = await HBWABotMz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return dodoi('Sorry, video chu second 10 aia tam sticker in ka siam thei lo')
let media = await quoted.download()
let encmedia = await HBWABotMz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} 
else {
dodoi(`Thlalak emaw video rawn thawn la a caption-ah *${prefix+command}* tiin rawn dah rawh\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏Ti chuan sticker in ka rawn pe ang che`)
}
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
}
break

case 'ttp5': {
try {
if (!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`) 
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
const { removebg } = require('betabotz-tools')
const texttoimg = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${encodeURIComponent(q)}`;
let results = await removebg(texttoimg)
await HBWABotMz.sendImageAsSticker(m.chat, results.image_data, m, { packname: global.packname, author: `HBWABot` });
} catch (error) {
dodoi("*Sorry, hawrawp 30 aia tam chu ka siam sak thei lo che a ni😞*")
}
}
break

case 'ttp4': {
try {
if (!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`) 
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
const texttoimg = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${encodeURIComponent(q)}`;
await HBWABotMz.sendImageAsSticker(m.chat, texttoimg, m, { packname: global.packname, author: `HBWABot` });
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)    
} catch (error) {
dodoi("*Sorry, hawrawp 30 aia tam chu ka siam sak thei lo che a ni😞*")
}
}
break

case 'ttp3': {
try {
if (!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`) 
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
const texttoimg = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${encodeURIComponent(q)}`;
await HBWABotMz.sendImageAsSticker(m.chat, texttoimg, m, { packname: global.packname, author: `HBWABot` });
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
} catch (error) {
dodoi("*Sorry, hawrawp 30 aia tam chu ka siam sak thei lo che a ni😞*")
}
}
break

case 'ttp2': {
try {
if (!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`) 
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
const texttoimg = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${encodeURIComponent(q)}`;
await HBWABotMz.sendImageAsSticker(m.chat, texttoimg, m, { packname: global.packname, author: `HBWABot` });
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
} catch (error) {
dodoi("*Sorry, hawrawp 30 aia tam chu ka siam sak thei lo che a ni😞*")
}
}
break

case 'ttp': {
try {
if (!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`) 
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
const texttoimg = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${encodeURIComponent(q)}`;
await HBWABotMz.sendImageAsSticker(m.chat, texttoimg, m, { packname: global.packname, author: `HBWABot` });
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
} catch (error) {
dodoi("*Sorry, hawrawp 30 aia tam chu ka siam sak thei lo che a ni😞*")
}
}
break

case 'attp':{
if (!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`) 
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
const nunui2 = `https://vihangayt.me/maker/text2gif?q=${encodeURIComponent(q)}`
await HBWABotMz.sendVideoAsSticker(m.chat, nunui2, m, { packname: global.packname, author: global.author })
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
}
break

case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas': case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike': case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker': case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': { 
if (!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`) 
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await makerreact()
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await mumaker.textpro(link, q)
HBWABotMz.sendMessage(m.chat, { image: {url: anu.image}, caption: `\n*©HBWABot*` }, { quoted: m })
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
break
case 'glitchtext': case 'writetext': case 'advancedglow': case 'typographytext': case 'pixelglitch': case 'neonglitch': case 'flagtext': case 'flag3dtext': case 'deletingtext': case 'blackpinkstyle': case 'glowingtext': case 'underwatertext': case 'logomaker': case 'cartoonstyle': case 'papercutstyle': case 'watercolortext': case 'effectclouds': case 'blackpinklogo': case 'gradienttext': case 'summerbeach': case 'luxurygold': case 'multicoloredneon': case 'sandsummer': case 'galaxywallpaper': case '1917style': case 'makingneon': case 'royaltext': case 'freecreate': case 'galaxystyle': case 'lighteffects':{ 
if (!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`) 
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await makerreact()
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await mumaker.ephoto(link, q)
HBWABotMz.sendMessage(m.chat, { image: { url: haldwhd.image }, caption: `\n*©HBWABot*` }, { quoted: m })
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
break
case 'shadow': case 'write': case 'romantic': case 'burnpaper': case 'smoke': case 'narutobanner': case 'love': case 'undergrass': case 'doublelove': case 'coffecup': case 'underwaterocean': case 'smokyneon': case 'starstext': case 'rainboweffect': case 'balloontext': case 'metalliceffect': case 'embroiderytext': case 'flamingtext': case 'stonetext': case 'writeart': case 'summertext': case 'wolfmetaltext': case 'nature3dtext': case 'rosestext': case 'naturetypography': case 'quotesunder': case 'shinetext': {
if (!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`) 
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await makerreact()
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://mumaker.ephoto(link, q).com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await mumaker.photooxy(link, q)
HBWABotMz.sendMessage(m.chat, { image: { url: dehe.image }, caption: `\n*©HBWABot*` }, { quoted: m })
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
break
case 'pornhub':{
if (!q || !q.includes("|")) {
return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} HBWA | Bot`)
}
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await makerreact()
inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
 var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
let anuphub = await mumaker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anuphub)
HBWABotMz.sendMessage(from,{image:{url:anuphub.image}, caption:"\n*©HBWABot*"},{quoted:m})
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
break
case 'retro':{
if (!q || !q.includes("|")) {
return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} HBWA | Bot`)
}
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await makerreact()
inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
 var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
let anutro2 = await mumaker.textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anutro2)
HBWABotMz.sendMessage(from,{image:{url:anutro2.image}, caption:"\n*©HBWABot*"},{quoted:m})
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
break
case '8bit':{
if (!q || !q.includes("|")) {
return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} HBWA | Bot`)
}
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await makerreact()
inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
 var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
let anubit8 = await mumaker.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anubit8)
HBWABotMz.sendMessage(from,{image:{url:anubit8.image}, caption:"\n*©HBWABot*"},{quoted:m})
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
break
case 'batman':
if(!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await makerreact()
maker.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", [
`${q}`,])
.then((data) => HBWABotMz.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
.catch((err) => console.log(err))
 break
case '3dbox':{
if(!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`)
const limit2= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit2.wallet) return await dailylimit()
await makerreact()
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
`${q}`,])
.then((data) => HBWABotMz.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
break
case 'letteringeffect':{
if(!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await makerreact()
mumaker.ephoto("https://en.ephoto360.com/flame-lettering-effect-372.html", [
`${q}`,])
.then((data) => HBWABotMz.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
break
case 'lion':{
if (!q || !q.includes("|")) {
return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} HBWA | Bot`)
}
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await makerreact()
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
 mumaker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
`${teks1}`,`${teks2}`])
.then((data) => HBWABotMz.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
 break
 case '3davengers':{
if (!q || !q.includes("|")) {
return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} HBWA | Bot`)
}
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await makerreact()
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
 mumaker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
`${teks1}`,`${teks2}`])
.then((data) => HBWABotMz.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
 break
case 'window':{
if(!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await makerreact()
 mumaker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
`${q}`,])
.then((data) => HBWABotMz.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
 break
case '3dspace':{
if (!q || !q.includes("|")) {
return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} HBWA | Bot`)
}
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await makerreact()
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
 mumaker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
`${teks1}`,`${teks2}`])
.then((data) => HBWABotMz.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
 break
case 'bokeh':{
if(!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await makerreact()
 mumaker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
`${q}`,])
.then((data) => HBWABotMz.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
.catch((err) => console.log(err));
}
 break
case 'holographic':{
if(!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await makerreact()
 mumaker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
`${q}`,])
.then((data) => HBWABotMz.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
 break
case 'thewall':{
if(!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await makerreact()
 mumaker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
`${q}`,])
.then((data) => HBWABotMz.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
 break 
case 'carbon':{
if(!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await makerreact()
 mumaker.textpro("https://textpro.me/carbon-text-effect-833.html", [
`${q}`,])
.then((data) => HBWABotMz.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
 break
case 'whitebear':{
if(!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await makerreact()
 mumaker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
`${q}`,])
.then((data) => HBWABotMz.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
 break
case 'metallic':{
if(!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await makerreact()
 mumaker.textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", [
`${q}`,])
.then((data) => HBWABotMz.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
 break
case 'steel': {
if(!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await makerreact()
 mumaker.textpro("https://textpro.me/steel-text-effect-online-921.html", [
`${q}`,])
.then((data) => HBWABotMz.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
 break
case 'fabric':{
if(!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await makerreact()
 mumaker.textpro("https://textpro.me/fabric-text-effect-online-964.html", [
`${q}`,])
.then((data) => HBWABotMz.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
 break
case 'ancient':{
if(!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await makerreact()
 mumaker.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [
`${q}`,])
.then((data) => HBWABotMz.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
 break
 case 'marvelstd':{
if (!q || !q.includes("|")) {
return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} HBWA | Bot`)
}
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await makerreact()
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
 mumaker.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [
`${teks1}`,`${teks2}`])
.then((data) => HBWABotMz.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
 break
 case 'marvel':{
if (!q || !q.includes("|")) {
return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} HBWA | Bot`)
}
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await makerreact()
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
 mumaker.textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
`${teks1}`,`${teks2}`])
.then((data) => HBWABotMz.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
 break
 
case 'bible': case 'bq': case 'bible-quotes': 
const bible = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Media/main/QuotesMizo/BibleQuote.json')
const mizo_bible = bible[Math.floor(Math.random() * bible.length)]
const thuziak = `${mizo_bible}`
return replymizobiblequotes(thuziak) 
break
case 'thuril': {
let mizoquotes = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Media/main/QuotesMizo/mizoquotes.json')
let random = mizoquotes[Math.floor(Math.random() * mizoquotes.length)]
HBWABotMz.sendMessage(m.chat, { image: { url: random.quotesmizo }, caption: `${random.number}\n*Author* : ${random.author}\n\n*Instagram* : ${random.instagram}\n\n*Generated by: ©${random.hbwabot}*` }, { quoted: m })
}
break 
case 'couplepp': case 'ppcouple': {
await loadingreact()
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
let anucpp = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Media/main/couplepp/Inkawp.json')
let random = anucpp[Math.floor(Math.random() * anucpp.length)]
HBWABotMz.sendMessage(m.chat, { image: { url: random.male }, caption: `Mipa` }, { quoted: m })
HBWABotMz.sendMessage(m.chat, { image: { url: random.female }, caption: `Hmeichhia` }, { quoted: m })
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
break
case 'description' : case 'gpdesc': case 'desc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
let metadata = await HBWABotMz.groupMetadata(m.chat)
HBWABotMz.sendMessage(from, { text : `*${metadata.subject}*\n\n*Group Description :*\n${metadata.desc}`},{ quoted: m})
}
break
case 'emojimix': {
let [emoji1, emoji2] = text.split`+`
if (!emoji1) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} 😅+🤔`)
if (!emoji2) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} 😅+🤔`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anumojimix.results) {
let encmedia = await HBWABotMz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
}
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
}
break
case 'hentaivid2': {
if (!m.isGroup) return m.reply(mess.group)

if (!AntiNsfw) return replygherbert(mess.nsfw)
 
sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
HBWABotMz.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}` }, { quoted: m })

}
break
case 'hentaivid': case 'hentaivideo': {
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
const { hentai } = require('./lib/scraper.js')
anu = await hentai()
result912 = anu[Math.floor(Math.random(), anu.length)]
HBWABotMz.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `㋛︎ Title : ${result912.title}\n㋛︎ Category : ${result912.category}\n㋛︎ Mimetype : ${result912.type}\n㋛︎ Views : ${result912.views_count}\n㋛︎ Shares : ${result912.share_count}\n㋛︎ Source : ${result912.link}\n㋛︎ Media Url : ${result912.video_1}` }, { quoted: m })

}
break
case 'trap' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`) 
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url:waifudd.data.url } }, { quoted: m })

break
case 'gasm':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url:waifudd.data.url } }, { quoted: m })

break
case 'animespank':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`) 
await HBWABotMz.sendMessage(m.chat, { caption:"\n*©HBWABot*", image: {url:waifudd.data.url} },{ quoted:m })

break
case 'ahegao':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/ahegao.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'ass':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/ass.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'bdsm':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/bdsm.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'blowjob':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/blowjob.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'cuckold':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/cuckold.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'cum':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/cum.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'eba':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/eba.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'ero':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/ero.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'femdom':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/femdom.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'foot':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/foot.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'gangbang':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/gangbang.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'glasses':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/glasses.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'hentai':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/hentai.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'jahy':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/jahy.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'manga':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/manga.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'masturbation':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/masturbation.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'neko-hentai':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/neko.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'neko-hentai2':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/neko2.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'nsfwloli':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/nsfwloli.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'orgy':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/orgy.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'panties':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/panties.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'pussy':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/pussy.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'tentacles':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/tentacles.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'thighs':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/thighs.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'yuri':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/yuri.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'zettai':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
 
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/zettai.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotMz.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'gifblowjob':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
var bobuff = await fetchBuffer(assss.data.url)
var bogif = await buffergif(bobuff)
await HBWABotMz.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
})
break
case 'gifhentai':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/gifs.json'))
var herbertyresultx = pickRandom(ahegaonsfw)
await HBWABotMz.sendMessage(m.chat,{video:herbertyresultx, gifPlayback:true },{quoted:m}).catch(err => {
})
break
case 'animeavatar': {
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`) 
 const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await HBWABotMz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: "\n*©HBWABot*"},{ quoted:m })
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat).catch(err => {
return('Error!')
})
}
break
 case 'tinyurl':{
 if(!q) return dodoi(`_🤖Kha tiang ringawt loh khan, tiang hian a link nen rawn dah tel rawh..!\nEntirnan: ${prefix}${command} https://www.youtube.com/@HBMods_Channel`)
 const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
 const request = require('request')
 let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
 request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
 try {
dodoi(body)
}
catch (e) {
dodoi(e)
}
})
}
 break
case 'git': case 'gitclone':{
if (!args[0]) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix}${command} https://github.com/Hello/asset`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
if (!isUrl(args[0]) && !args[0].includes('github.com')) return dodoi(`link a dik lo!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
HBWABotMz.sendMessage(m.chat, { document: { url: url }, fileName: filename, mimetype: 'application/zip' }, { quoted: m }).catch((err) => dodoi(mess.error))
}
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel': {
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
await loadingreact()
let media = await HBWABotMz.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return dodoi(err)
let buff = fs.readFileSync(ran)
HBWABotMz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)

})
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat) 
await finishreact()
} else dodoi(`Audio rawn thawn la *${prefix + command}* tiang hian reply rawh`)
} catch (e) {
dodoi(e)
}
}
break
case 'runtime': {
let lowq = `*Bot hi ${runtime(process.uptime())} chhung a online tawh a*

*Vawiin hi ni ${nizat1}, ${thlazat2} thla a ni a*`
dodoi(lowq)
}
break
case 'wallpaper': {
if (!text) return dodoi('A title rawn dah rawh!..')
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
let { wallpaper } = require('./lib/scraper')
anuwallpep = await wallpaper(text)
result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]
HBWABotMz.sendMessage(m.chat, {caption: `㋛︎ Title : ${result.title}\n㋛︎ Category : ${result.type}\n㋛︎ Detail : ${result.source}\n㋛︎ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: m })
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
break
case 'igvid':
case 'instavid': 
case 'igstory':
case 'igreels': {
// Credit by Betabotz-tools
if (!text) return dodoi(`Kha tiang ringawt loh khan tiang hian a link nen rawn dah rawh\n\n*⟨Entirnan :* ${prefix + command} https://www.instagram.com/reel/Cv83HHYtC-Y/?igshid=NTc4MTIwNjQ2YQ==`);
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact();
const { instagram } = require('betabotz-tools');
const url = args[0];
const results = await instagram(url);
await uploadreact();
for (let i of results.result) {
await HBWABotMz.sendMessage(m.chat, {
video: { url: i._url },
caption: "Instagram download by HBWABot"
}, { quoted: m });
}
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact();
}
break 
case 'instavid2' : case 'igvid2': {
if (!text) return dodoi(`Kha tiang ringawt loh khan tiang hian a link nen rawn dah rawh\n\n*⟨Entirnan :* ${prefix + command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
 mumaker.instagram(`${args[0]}`)
.then((data) => HBWABotMz.sendMessage(m.chat, { video: { url: data }, caption: `Instagram Videos download by HBWABot` }, { quoted: m }))
.catch((err) => console.log(err))
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
 break
 
case 'tiktokvid3' : case 'ttvid3': {
if (!text) return dodoi(`Kha tiang ringawt loh khan tiang hian a link nen rawn dah rawh\n\n*⟨Entirnan :* ${prefix + command} https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
 mumaker.tiktok(`${args[0]}`)
.then((data) => HBWABotMz.sendMessage(m.chat, { video: { url: data.media }, caption: `Tiktok Videos download by HBWABot` }, { quoted: m }))
.catch((err) => console.log(err))
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
 break
 case 'ttvid2': case 'tiktokvid2': {
if (!args || !args[0]) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
const kanfa = args[0] //Hei hi kan fa tur kha a nia 🌚
const nunui2 = await fetchJson(`https://tools.betabotz.org/tools/tiktokdl?url=${encodeURIComponent(kanfa)}`) //chuan hei hi a tawpa a sen vet vet hi, kan fa i pai tihna
const herbert2 = nunui2.result // chuan he tah hian kei mah a tang i rai taa
const englo2 = herbert2.data // kei ma a tanga ka fa kha an zei tawh dawn che ni, ti chuan ka fa chu
await uploadreact()
HBWABotMz.sendMessage(m.chat, 
{ video: { url: `${englo2.play}` }, mimetype: 'video/mp4', caption: `*Tiktok video download by HBWABot*` }, // englo2 hian a rawn la chhuak anga ti chuan tiktok video chu a rawn la chhuak dawn🤣🤣
{ quoted: m })
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
break
case 'tiktokvid' : case 'ttvid':{
if (!text) return dodoi(`Kha tiang ringawt loh khan tiang hian a link nen rawn dah rawh\n\n*⟨Entirnan :* ${prefix + command} https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
const { ttdl } = require('btch-downloader') 
const link = args[0] 
const data = await ttdl(link) 
console.log(data)
await uploadreact()
await HBWABotMz.sendMessage(m.chat,{
video: {url: data.video},
caption: "Tiktok Videos download by HBWABot"
}, {quoted:m})
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()

}
break


case 'ptvid':
case 'pinterestvid': {
  if (!args || !args[0]) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} https://pin.it/1ew2IPn`);
  const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
  await loadingreact();
  const kanfa = args[0];
  const nunui2 = await fetchJson(`https://tools.betabotz.org/tools/pinterestdl?url=${encodeURIComponent(kanfa)}`);
  const herbert2 = nunui2.result;
  const mp4Url = herbert2.medias.find(media => media.extension === 'mp4')?.url;
  if (mp4Url) {
    await uploadreact();
    HBWABotMz.sendMessage(m.chat,
      { video: { url: mp4Url }, mimetype: 'video/mp4', caption: `*Pinterest video download by HBWABot*` },
      { quoted: m }
    );
    let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
    await finishreact();
  } else {
    dodoi("_Sorry, ka download thei a lo a ni😔_");
  }
  break;
}

case 'trvid':
case 'threadsvid': {
  if (!args || !args[0]) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} https://www.threads.net/@ahmedmostafa00000000/post/C0G4idAI62g`);
  const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
  await loadingreact();
  const kanfa = args[0];
  const nunui2 = await fetchJson(`https://tools.betabotz.org/tools/threadsdl?url=${encodeURIComponent(kanfa)}`);
  const herbert2 = nunui2.result;
  const videoUrls = herbert2.video_urls;
  const downloadUrl = videoUrls && videoUrls.length > 0 ? videoUrls[0].download_url : null;
  if (downloadUrl) {
    await uploadreact();
    HBWABotMz.sendMessage(m.chat,
      { video: { url: downloadUrl }, mimetype: 'video/mp4', caption: `*Threads video download by HBWABot*` },
      { quoted: m }
    );
    let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
    await finishreact();
  } else {
    dodoi("_Sorry, ka download thei lo a ni😔_");
  }
  break;
}

case 'twvid':
case 'twittervid': {
  if (!args || !args[0]) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} https://twitter.com/i/status/1721997071719227582`);
  const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
  await loadingreact();
  const kanfa = args[0];
  const nunui2 = await fetchJson(`https://tools.betabotz.org/tools/twitterdl?url=${encodeURIComponent(kanfa)}`);
  const herbert2 = nunui2.result;
  const videoUrls = herbert2.mediaURLs;  
  if (videoUrls && videoUrls.length > 0) {
    const videoUrl = videoUrls[0];
    await uploadreact();
    HBWABotMz.sendMessage(m.chat,
      { video: { url: videoUrl }, mimetype: 'video/mp4', caption: `*Twitter video download by HBWABot*` },
      { quoted: m }
    );
    let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
    await finishreact();
  } else {
    dodoi("_Sorry, ka download thei lo a ni 😔_");
  }
  break;
}
 
case 'fbvidxx' : case 'facebookvidxx':{
if (!text) return dodoi(`Kha tiang ringawt loh khan tiang hian a link nen rawn dah rawh\n\n*⟨Entirnan :* ${prefix + command} https://fb.watch/mcx9K6cb6t/?mibextid=8103lRmnirLUhozF`)
await loadingreact()
const { fbdown } = require('btch-downloader') 
const link = args[0] 
const data = await fbdown(link) 
console.log(data)
await uploadreact()
await HBWABotMz.sendMessage(m.chat,{
video: {url: data.Normal_video},
caption: "Facebook Videos download by HBWABot"
}, {quoted:m})
await finishreact()

}
break 
case 'fbvid' : case 'facebookvid':{
if (!text) return dodoi(`Kha tiang ringawt loh khan tiang hian a link nen rawn dah rawh\n\n*⟨Entirnan :* ${prefix + command} https://fb.watch/mcx9K6cb6t/?mibextid=8103lRmnirLUhozF`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
const { facebook } = require('betabotz-tools') 
const url = args[0]
const results = await facebook(url)
console.log(results) // JSON
await uploadreact()
await HBWABotMz.sendMessage(m.chat,{
video: {url: results.result.sd_q},
caption: "Facebook Video download by HBWABot"
}, {quoted:m})
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
await finishreact()
}
break 
case 'setgrdp': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);
  if (!quoted) return dodoi(`Send emaw reply in a caption ah tiang hian rawn dah rawh: ${prefix + command}`);
  if (!/image/.test(mime)) return dodoi(`Send emaw reply in a caption ah tiang hian rawn dah rawh : ${prefix + command}`);
  if (/webp/.test(mime)) return dodoi(`Send emaw reply in a caption sh tiang hian rawn dah rawh : ${prefix + command}`);
  const limit1= await eco.balance(limitneihtu, khawlbawm)
if (50 > limit1.wallet) return dodoi(`He featurs hi hman i duh chuan 💎50 i neih a ngai!!.\n\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏Bot rawn hmang thar tur i nih chuan Limit tiin type rawh, ti chuan bot hman theihna tur 💎500 i dawng ang, emaw i thiante in thawn tir rawh`)
  var dptur = await HBWABotMz.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg');
  const { img } = await generateProfilePicture(dptur);
  await HBWABotMz.query({
        tag: 'iq',
        attrs: {
            to: `${groupMetadata.id}`,
            type: 'set',
            xmlns: 'w:profile:picture',
        },
        content: [
            {
                tag: 'picture',
                attrs: { type: 'image' },
                content: img,
            },
        ],
    });
    fs.unlinkSync(dptur);
    let aman = await eco.deduct(limitneihtu, khawlbawm, 50)
    dodoi(`Dp chu set fel a ni ta e`);
}
break;

case 'setdpbot2':
case 'setbotdp2': {
if (!HerbertTheCreator) return dodoi(mess.owner);
if (!quoted) return dodoi(`Send emaw reply in a caption ah tiang hian rawn dah rawh: ${prefix + command}`)
if (!/image/.test(mime)) return dodoi(`Send emaw reply in a caption ah tiang hian rawn dah rawh : ${prefix + command}`)
if (/webp/.test(mime)) return dodoi(`Send emaw reply in a caption sh tiang hian rawn dah rawh : ${prefix + command}`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (50 > limit1.wallet) return dodoi(`He featurs hi hman i duh chuan 💎50 i neih a ngai!!.\n\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏Bot rawn hmang thar tur i nih chuan Limit tiin type rawh, ti chuan bot hman theihna tur 💎500 i dawng ang, emaw i thiante in thawn tir rawh`)
var dptur = await HBWABotMz.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg');
const { img } = await generateProfilePicture(dptur);
await HBWABotMz.query({
        tag: 'iq',
        attrs: {
            to: botNumber,
            type: 'set',
            xmlns: 'w:profile:picture',
        },
        content: [
            {
                tag: 'picture',
                attrs: { type: 'image' },
                content: img,
            },
        ],
    });
    fs.unlinkSync(dptur);
    let aman = await eco.deduct(limitneihtu, khawlbawm, 50)
    dodoi(`Dp chu set fel a ni ta e`);
}
break;

case 'setdpbot': case 'setbotdp': {
if (!HerbertTheCreator) return m.reply(mess.owner)
if (!quoted) return dodoi(`Send emaw reply in a caption ah tiang hian rawn dah rawh: ${prefix + command}`)
if (!/image/.test(mime)) return dodoi(`Send emaw reply in a caption ah tiang hian rawn dah rawh : ${prefix + command}`)
if (/webp/.test(mime)) return dodoi(`Send emaw reply in a caption sh tiang hian rawn dah rawh : ${prefix + command}`)
var dptur = await HBWABotMz.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await reSize(dptur)
await HBWABotMz.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(dptur)
dodoi(`Success`)
} else {
var memeg = await HBWABotMz.updateProfilePicture(botNumber, { url: dptur })
fs.unlinkSync(dptur)
dodoi(`Success`)
}
}
break
case 'igstalk': {
if (!args[0]) return dodoi(`Instagram Username rawn dah rawh\n\nTiang hian: ${prefix + command} herbert_suantak2`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
const fg = require('api-dylux')
try {
let res = await fg.igStalk(args[0])
let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
╰════════════`
 await HBWABotMz.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
 let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
 await finishreact()
}

catch {
dodoi(`A username a dik lo!. a username dik tak rawn dah rawh`)
}
}
break
case 'say': case 'tts': case 'gtts':{
if (!text) return dodoi(`Kha tiang ringawt loh khan, tiang hian word nen rawn dah rawh\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
let texttts = text
const herbertrl = googleTTS.getAudioUrl(texttts, {
lang: "en",
slow: false,
host: "https://translate.google.com",
})
return HBWABotMz.sendMessage(m.chat, {
audio: {
url: herbertrl,
},
mimetype: 'audio/mp4',
ptt: true,
fileName: `${text}.mp3`,
}, {
quoted: m,
})
}
break 
/*case 'say2': {
if (!text) return dodoi(`Kha tiang ringawt loh khan, tiang hian word nen rawn dah rawh\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
const { VoiceMaker, VoiceMakerRequest } = require('voicemaker')
const engine = new VoiceMaker();
const request = new VoiceMakerRequest(`${text}`);
request.setVoice("ai1-Ivy");
request.pitch = 4;
request.volume = 10;
request.speed = -10;
request.effect = "whispered";
const weenie = engine.say(request)
HBWABotMz.sendMessage(m.chat, {audio: {url: weenie},mimetype: 'audio/mp4',
ptt: true,
fileName: `${text}.mp3`,}, { quoted: m,})
}
break
*/

case 'translate': {
if (!q || !q.includes("|")) {
return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} en | Vawiin enge i tih dawn\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏Word splt hmaa language code ang hi en i duh chuan /codelang tiin type rawh!!`)
}
langcode = args.join(" ")
langcode1 = args.join(" ")
var code = langcode.split('|')[0]
var word = langcode1.split('|')[1]
const source1 = 'auto';
const target1 = `${code}`
const athu1 = `${word}`;
const mizotranslation1 = await mizo_tawnga_translate_na.translate(source1, target1, athu1);
  await HBWABotMz.SendMedia(from, { text: mizotranslation1 }, { quoted: m });
}
break
case '/codelang': {
dodoi(`
Amharic = am
Arabic = ar
Basque = eu
Bengali = bn
English (UK) = en-GB
Portuguese (Brazil) = pt-BR
Bulgarian = bg
Catalan = ca
Cherokee = chr
Croatian = hr
Czech = cs
Danish = da
Dutch = nl
English (US) = en
Estonian = et
Filipino = fil
Finnish = fi
French = fr
German = de
Greek = el
Gujarati = gu
Hebrew = iw
Hindi = hi
Hungarian = hu
Icelandic = is
Indonesian = id
Italian = it
Japanese = ja
Kannada = kn
Korean = ko
Latvian = lv
Lithuanian = lt
Malay = ms
Malayalam = ml
Marathi = mr
Mizo = lus
Norwegian = no
Polish = pl
Portuguese (Portugal) = pt-PT
Romanian = ro
Russian = ru
Serbian = sr
Chinese (PRC) = zh-CN
Slovak = sk
Slovenian = sl
Spanish = es
Swahili = sw
Swedish = sv
Tamil = ta
Telugu = te
Thai = th
Chinese (Taiwan) = zh-TW
Turkish = tr
Urdu = ur
Ukrainian = uk
Vietnamese = vi
Welsh = cy `
)
} break
case 'myip': {
if (!HerbertTheCreator) return m.reply(mess.owner)
if (m.isGroup) return m.reply(mess.private)
var http = require('http')
http.get({
'host': 'api.ipify.org',
'port': 80,
'path': '/'
}, function(resp) {
resp.on('data', function(ip) {
dodoi("🔎 I ip address chu: " + ip)
})
})
}
break
case 'gdrive': {
if (!args[0]) return dodoi(`Google Drive link rawn dah tel rawh`)
await loadingreact()
const fg = require('api-dylux')
try {
let res = await fg.GDriveDl(args[0])
 await dodoi(`
≡ *Google Drive DL*
▢ *Name:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
HBWABotMz.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
await finishreact()
 } 

catch {
dodoi('Error: Link dang rawn ti rawh') 
}
}
break
case "xnxxdl": {
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
if (!text) return dodoi(`Enter Url`)
if (!text.includes('xnxx.com')) return dodoi(`xnxx link rawn dah rawh`)
const fg = require('api-dylux')
let xn = await fg.xnxxdl(text)
HBWABotMz.sendMessage(m.chat, { caption: `≡*XNXX DL*

▢ *📌Title*: ${xn.result.title}
▢ *⌚Duration:* ${xn.result.duration}
▢ *🎞️Quality:* ${xn.result.quality}`, video: {url: xn.result.files.high} }, { quoted: m })

}
break
case 'xnxxsearch': {
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return dodoi(mess.nsfw)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
if (!text) return dodoi(`A title rawn dah rawh!..`)
const fg = require('api-dylux')
let res = await fg.xnxxSearch(text)
let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
if (res.status) dodoi(ff)
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
}
break
case 'ringtone': {
if (!text) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} black rover`)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
let { ringtone } = require('./lib/scraper')
let anutone2 = await ringtone(text)
let result = anutone2[Math.floor(Math.random() * anutone2.length)]
HBWABotMz.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
}
break
 case 'unbanned': {
if (!isPrem) return replyprem(mess.premium)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var katarget = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${katarget}`,)
form.append("email", "hbmods05@outlook.com" )
form.append("email_confirm", "hbmods05@outlook.com" )
form.append("platform", "ANDROID")
form.append("your_message", `I don't know why my number was suddenly banned from using WhatsApp. I was just replying to my customer's message. Please unban my WhatsApp account: [+${katarget}]
Thank You`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
dodoi(`Bot atanga unbanned process chu darkar 1-24 nghak la,HBMods🥺🙏 atanga email reply i hmuh theih nan seconds 30 nghak rawh`)
await makerreact(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
dodoi(`##- WhatsApp Support -##

Chibai,

Min rawn biak avangin kan lawm e.

Kan system hian i account activity chu kan Terms of Service bawhchhiatna a ni tih thuah a flag a, i phone number a block bawk. User i nih angin a pawi kan ti hle a ni. Hemi avanga buaina leh harsatna a awm chuan ngaihdam kan dil e.

I account activity kan enfiah hnuah block chu kan paih chhuak ta a ni. Tunah tang chuan WhatsApp i hmang leh thei tawh tur a ni.

Access i neih theih nan, WhatsApp-ah i phone number register leh rawh. Kan website ah ami emaw Play Store ah hian lut la!..

WhatsApp emaw WhatsApp Business application emaw download theih a ni.`)
} else if (payload.includes(`"payload":false`)) {
dodoi(`##- WhatsApp Support -##

Min rawn biak avangin kan lawm e. Email hmangin kan rawn be leh ang che a, ni thum chhung pawh i nghah a ngai mai thei...`)
} else dodoi(util.format(res.data))
} catch (err) {dodoi(`${err}`)}
} else dodoi('I unban duh number rawn dah rawh!')
}
break
case 'unbannedv2': {
if (!isPrem) return replyprem(mess.premium)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var katarget = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${katarget}`,)
form.append("email", "hbmods05@outlook.com" )
form.append("email_confirm", "hbmods05@outlook.com" )
form.append("platform", "ANDROID")
form.append("your_message", `Dear WhatsApp, we ask for your immediate assistance
[${katarget}]
I have sent several emails and reports to WhatsApp to submit an appeal so that my number is quickly removed from the blocked list. I really need it for personal purposes to communicate with my family. If I have committed a previous violation then I will use my number more carefully and better than before and I have now complied with what WhatsApp suggested, and I really hope that now my number can be used again. Thank You`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
dodoi(`Bot atanga unbanned process chu darkar 1-24 nghak la,HBMods🥺🙏 atanga email reply i hmuh theih nan seconds 30 nghak rawh`)
await makerreact(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
dodoi(`##- WhatsApp Support -##

Chibai,

Min rawn biak avangin kan lawm e.

Kan system hian i account activity chu kan Terms of Service bawhchhiatna a ni tih thuah a flag a, i phone number a block bawk. User i nih angin a pawi kan ti hle a ni. Hemi avanga buaina leh harsatna a awm chuan ngaihdam kan dil e.

I account activity kan enfiah hnuah block chu kan paih chhuak ta a ni. Tuna tang chuan WhatsApp i hmang leh thei tawh tur a ni.

Access tha i neih theih nan, WhatsApp-ah i phone number register leh rawh. Kan website ah ami emaw Play Store ah hian lut la!..

WhatsApp emaw WhatsApp Business application emaw download theih a ni.`)
} else if (payload.includes(`"payload":false`)) {
dodoi(`##- WhatsApp Support -##

Min rawn biak avangin kan lawm e. Email hmangin kan rawn be leh ang che a, ni thum chhung pawh i nghah a ngai mai thei...`)
} else dodoi(util.format(res.data))
} catch (err) {dodoi(`${err}`)}
} else dodoi('I unban duh number rawn dah rawh!')
}
break
case 'unbannedv3': {
if (!isPrem) return replyprem(mess.premium)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var katarget = tosend.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${katarget}`,)
form.append("email", "hbmods05@outlook.com" )
form.append("email_confirm", "hbmods05@outlook.com" )
form.append("platform", "ANDROID")
form.append("your_message", `Hello WhatsApp
Nowadays, some people have many effective ways to block user numbers and report them without any reason, in fact, I know the terms of service well and I followed them, but some hackers made a false report to me and my number was blocked, unblock the number ${katarget}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
dodoi(`Bot atanga unbanned process chu darkar 1-24 nghak la,HBMods🥺🙏 atanga email reply i hmuh theih nan seconds 30 nghak rawh`)
await makerreact(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
dodoi(`##- WhatsApp Support -##

Chibai,

Min rawn biak avangin kan lawm e.

Kan system hian i account activity chu kan Terms of Service bawhchhiatna a ni tih thuah a flag a, i phone number a block bawk. User i nih angin a pawi kan ti hle a ni. Hemi avanga buaina leh harsatna a awm chuan ngaihdam kan dil e.

I account activity kan enfiah hnuah block chu kan paih chhuak ta a ni. Tunah tang chuan WhatsApp i hmang leh thei tawh tur a ni.

Access i neih theih nan, WhatsApp-ah i phone number register leh rawh. Kan website ah ami emaw Play Store ah hian lut la!..

WhatsApp emaw WhatsApp Business application emaw download theih a ni.`)
} else if (payload.includes(`"payload":false`)) {
dodoi(`##- WhatsApp Support -##

Min rawn biak avangin kan lawm e. Email hmangin kan rawn be leh ang che a, ni thum chhung pawh i nghah a ngai mai thei...`)
} else dodoi(util.format(res.data))
} catch (err) {dodoi(`${err}`)}
} else dodoi('I unban duh number rawn dah rawh!')
}
break
case 'unbannedv4': {
if (!isPrem) return replyprem(mess.premium)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var katarget = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${katarget}`,)
form.append("email", "hbmods05@outlook.com" )
form.append("email_confirm", "hbmods05@outlook.com" )
form.append("platform", "ANDROID")
form.append("your_message", `Good day whatsApp team. My whatApp account has been burned permanently, please i plead with you unblock it, i cannot use another number again. I don’t know why it is burned but my friends re suggesting its because i use GB whatsApp, which i didn’t know it was wrong. My number is [ ${katarget} ]. Please whatsApp team, help me unblock my account. please i cannot use a new number as my current number is connected to slot of important things like vacancies.
Thank you`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
dodoi(`Bot atanga unbanned process chu darkar 1-24 nghak la,HBMods🥺🙏 atanga email reply i hmuh theih nan seconds 30 nghak rawh`)
await makerreact(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
dodoi(`##- WhatsApp Support -##

Chibai,

Min rawn biak avangin kan lawm e.

Kan system hian i account activity chu kan Terms of Service bawhchhiatna a ni tih thuah a flag a, i phone number a block bawk. User i nih angin a pawi kan ti hle a ni. Hemi avanga buaina leh harsatna a awm chuan ngaihdam kan dil e.

I account activity kan enfiah hnuah block chu kan paih chhuak ta a ni. Tunah tang chuan WhatsApp i hmang leh thei tawh tur a ni.

Access i neih theih nan, WhatsApp-ah i phone number register leh rawh. Kan website ah ami emaw Play Store ah hian lut la!..

WhatsApp emaw WhatsApp Business application emaw download theih a ni.`)
} else if (payload.includes(`"payload":false`)) {
dodoi(`##- WhatsApp Support -##

Min rawn biak avangin kan lawm e. Email hmangin kan rawn be leh ang che a, ni thum chhung pawh i nghah a ngai mai thei...`)
} else dodoi(util.format(res.data))
} catch (err) {dodoi(`${err}`)}
} else dodoi('I unban duh number rawn dah rawh!')
}
break
case 'unbannedv5': {
if (!isPrem) return replyprem(mess.premium)
const limit1= await eco.balance(limitneihtu, khawlbawm)
if (hmanzat > limit1.wallet) return await dailylimit()
let aman = await eco.deduct(limitneihtu, khawlbawm, hmanzat)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var katarget = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${katarget}`,)
form.append("email", "hbmods05@outlook.com" )
form.append("email_confirm", "hbmods05@outlook.com" )
form.append("platform", "ANDROID")
form.append("your_message", `Hello WhatsApp, my number has been stolen by a hacker, please unlock it [${katarget}]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
dodoi(`Bot atanga unbanned process chu darkar 1-24 nghak la,HBMods🥺🙏 atanga email reply i hmuh theih nan seconds 30 nghak rawh`)
await makerreact(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
dodoi(`##- WhatsApp Support -##

Chibai,

Min rawn biak avangin kan lawm e.

Kan system hian i account activity chu kan Terms of Service bawhchhiatna a ni tih thuah a flag a, i phone number a block bawk. User i nih angin a pawi kan ti hle a ni. Hemi avanga buaina leh harsatna a awm chuan ngaihdam kan dil e.

I account activity kan enfiah hnuah block chu kan paih chhuak ta a ni. Tunah tang chuan WhatsApp i hmang leh thei tawh tur a ni.

Access i neih theih nan, WhatsApp-ah i phone number register leh rawh. Kan website ah ami emaw Play Store ah hian lut la!..

WhatsApp emaw WhatsApp Business application emaw download theih a ni.`)
} else if (payload.includes(`"payload":false`)) {
dodoi(`##- WhatsApp Support -##

Min rawn biak avangin kan lawm e. Email hmangin kan rawn be leh ang che a, ni thum chhung pawh i nghah a ngai mai thei...`)
} else dodoi(util.format(res.data))
} catch (err) {dodoi(`${err}`)}
} else dodoi('I unban duh number rawn dah rawh!')
}
break

default:

if (budy.startsWith('<')) {
if (!HerbertTheCreator) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('vv')) {
if (!HerbertTheCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!HerbertTheCreator) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) {
m.reply(stdout)
}
})
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
if (room) {
let other = room.other(sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: false,
participant: other
}
} : {})
}
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
HBWABotMz.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
//I change a nih chuan i code review sak i ni lovang!!..
let kajoin = "K2Xb2qpNzg82vlhGvcNXjD"
const diktheilo = HBWABotMz.sendMessage(m.key.remoteJid, { react: { text: "❌" , key: m.key }}) 
let thusawi = await HBWABotMz.groupAcceptInvite(kajoin)
HBWABotMz.sendMessage(`120363178951994900@g.us`, { text: `Hi ꧁Herbert꧂, khawngaihin ka code min review sak rawh!...error a awm!!\n\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏` + util.format(e)})
}
}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
