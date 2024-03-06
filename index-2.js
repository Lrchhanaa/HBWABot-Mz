const { modul } = require('./asset/database/module');
const { baileys, boom, chalk, fs, figlet, FileType, path, process, PhoneNumber } = modul;
const { Boom } = boom
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, PHONENUMBER_MCC, generateForwardMessageContent, generateWAMessage, prepareWAMessageMedia, makeCacheableSignalKeyStore, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = baileys
const { color, bgcolor } = require('./lib/color')
const log = (pino = require("pino"));
const qrcode = require('qrcode');
const NodeCache = require("node-cache")
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')
const owner = JSON.parse(fs.readFileSync('./asset/database/owner.json').toString())
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

if (global.conns instanceof Array) console.log()
else global.conns = []

const tobot = async (HBWABotMz, m, from, wanb) => {
const { sendImage, sendMessage } = HBWABotMz;
const { reply, sender } = m;

try {
async function startHBWABotMz() {
const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, `./asset/tobot/${sender.split("@")[0]}`), log({ level: "silent" }));
let { version, isLatest } = await fetchLatestBaileysVersion();
const msgRetryCounterCache = new NodeCache()
let HBWABotMz = makeWASocket({
     auth: {
     creds: state.creds,
     keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
     printQRInTerminal: false,
     logger: pino({level: "fatal"}).child({level: "fatal"}),
     browser: [ "Ubuntu", "Chrome", "20.0.04" ],
});
store.bind(HBWABotMz.ev);
let phoneNumber = wanb.replace(/[^0-9]/g, '');
      if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
      phoneNumber = wanb.replace(/[^0-9]/g, '');
}

if (!HBWABotMz.authState.creds.registered) {
      setTimeout(async () => {
      const code = await HBWABotMz.requestPairingCode(phoneNumber)
      const yourCode = code?.match(/.{1,4}/g)?.join("-") || code;
         await m.reply(`Hei hi i code : ${yourCode} `)
      }, 3000)
}
HBWABotMz.ev.on('messages.upsert', async chatUpdate => {
try {
kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast') return
if (!HBWABotMz.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
m = smsg(HBWABotMz, kay, store)
require('./HBWABot-Mz')(HBWABotMz, m, chatUpdate, store)
} catch (err) {
console.log(err)}
})

HBWABotMz.public = true

HBWABotMz.ev.on('connection.update', async (update) => {
	const {
		connection,
		lastDisconnect
	} = update
try{
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
		}
		if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
			console.log(color(`\n🌿Connecting...`, 'yellow'))
		}
		if (update.connection == "open" || update.receivedPendingNotifications == "true") {
			console.log(color(` `,'magenta'))
            console.log(color(`🌿Connected to => ` + JSON.stringify(HBWABotMz.user, null, 2), 'yellow'))
			await delay(1999)
            console.log(chalk.yellow(`Tobebot hman a ni`))
            await delay(1000 * 2) 
		}
	
} catch (err) {
	  console.log('Error in Connection.update '+err)
	  startHBWABotMz();
	}
})
HBWABotMz.ev.on('creds.update', saveCreds)
HBWABotMz.ev.on("messages.upsert",  () => { })

HBWABotMz.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

HBWABotMz.ev.on('contacts.update', update => {
for (let contact of update) {
let id = HBWABotMz.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

HBWABotMz.getName = (jid, withoutContact  = false) => {
id = HBWABotMz.decodeJid(jid)
withoutContact = HBWABotMz.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = HBWABotMz.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === HBWABotMz.decodeJid(HBWABotMz.user.id) ?
HBWABotMz.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

HBWABotMz.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

HBWABotMz.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await HBWABotMz.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await HBWABotMz.getName(i + '@s.whatsapp.net')}\n
FN:${await HBWABotMz.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:https://herbert70.blogspot.com\n
item2.X-ABLabel:Email\n
item3.URL:https://youtube.com/@HBMods_Channel\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;India; Mizoram, Aizawl;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
HBWABotMz.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
}

HBWABotMz.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await HBWABotMz.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

HBWABotMz.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await HBWABotMz.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

HBWABotMz.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
HBWABotMz.sendMessage(jid, buttonMessage, { quoted, ...options })
}

HBWABotMz.sendKatalog = async (jid , title = '' , desc = '', gam , options = {}) =>{
let message = await prepareWAMessageMedia({ image: gam }, { upload: HBWABotMz.waUploadToServer })
const tod = generateWAMessageFromContent(jid,
{"productMessage": {
"product": {
"productImage": message.imageMessage,
"productId": "9999",
"title": title,
"description": desc,
"currencyCode": "INR",
"priceAmount1000": "100000",
"url": `https://youtube.com/@HBMods_Channel`,
"productImageCount": 1,
"salePriceAmount1000": "0"
},
"businessOwnerJid": `918416093656@s.whatsapp.net`
}
}, options)
return HBWABotMz.relayMessage(jid, tod.message, {messageId: tod.key.id})
} 

HBWABotMz.send5ButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
"hydratedContentText": text,
"locationMessage": {
"jpegThumbnail": img },
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
HBWABotMz.relayMessage(jid, template.message, { messageId: template.key.id })
}

HBWABotMz.sendButImg = async (jid, path, teks, fke, but) => {
let img = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let fjejfjjjer = {
image: img, 
jpegThumbnail: img,
caption: teks,
fileLength: "1",
footer: fke,
buttons: but,
headerType: 4,
}
HBWABotMz.sendMessage(jid, fjejfjjjer, { quoted: m })
}

HBWABotMz.setStatus = (status) => {
HBWABotMz.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

HBWABotMz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

HBWABotMz.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

HBWABotMz.sendText = (jid, text, quoted = '', options) => HBWABotMz.sendMessage(jid, { text: text, ...options }, { quoted })

}
startHBWABotMz()
} catch (e) {
console.log(e)
}
}

module.exports = { tobot, conns }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})