// Script Developer By Exz X Branz X Pxyra 

require("./database/global")

const func = require("./database/place")
const readline = require("readline");
const axios = require('axios');
const { say } = require('cfonts');
const NodeCache = require("node-cache")
const usePairingCode = true
const listcolor = ['cyan', 'magenta', 'green', 'yellow', 'blue'];
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)];

async function fetchJsonMulti(url) {
const fetch = require("node-fetch")
const response = await fetch(url);
if (!response.ok) {
throw new Error('Network response was not ok');
}
return response.json();
}

const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()
const resolveMsgBuffer = new NodeCache()

const connectionOptions = {
isLatest,
keepAliveIntervalMs: 50000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "fatal" }),
auth: state,
browser: [ "Ubuntu", "Chrome", "20.0.04" ],
version: [ 2, 3000, 1015901307 ],
resolveMsgBuffer
}
const ekuzika = func.makeWASocket(connectionOptions)

say("EBP\nCrash", {
            font: 'block',
            align: 'center',
            gradient: [randomcolor, randomcolor]
        });
        
        if(usePairingCode && !ekuzika.authState.creds.registered) {
        /*const link = await axios.get('https://raw.githubusercontent.com/Rdhn12/petraprojek/main/keyebp.json');
        const dt = link.data.nya
        const qukey = await question(chalk.green('Enter Password: \n'));
        if (qukey.includes(dt)) {
        console.log(chalk.red(`Password lu salah kocakk!`));
        process.exit();
        } else {
        console.log(chalk.green('Password Benar!'));
        await sleep(1000)*/
		const phoneNumber = await question(chalk.green('\nEnter Your Number\nNumber : \n'));
		await sleep(1500)
		const code = await ekuzika.requestPairingCode(phoneNumber.trim())
		console.log(chalk.green(`\n</> Your Pairing Code : ${code} `))
        //}
	}
store.bind(ekuzika.ev)

ekuzika.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
ekuzika.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
ekuzika.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
start(`1`, `Connecting...`)
} else if (connection === "open") {
success(`1`, `Udah Tersambung Bree . . .`)
ekuzika.sendMessage(`6285814677025@s.whatsapp.net`, { text: `\`𝗛𝗶 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿\`
  Bot Succes Connecting`})
if (autoJoin) {
ekuzika.groupAcceptInvite(codeInvite)
}
}
})

ekuzika.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return ekuzika.readMessages([m.key])
if (!ekuzika.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = func.smsg(ekuzika, m, store)
require("./ebpcrash")(ekuzika, m, store)
} catch (err) {
console.log(err)
}
})

ekuzika.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = ekuzika.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})


ekuzika.public = true

ekuzika.ev.on('creds.update', saveCreds)
return ekuzika
}

startSesi()

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err)
})