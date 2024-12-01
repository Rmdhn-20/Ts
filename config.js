require("./database/module")

//GLOBAL PAYMENT
global.storename = "𝐄𝐤𝐮𝐳𝐢𝐤𝐚 𝐒𝐡𝐨𝐩" // ubah nama store lu
global.dana = "08889616144" // ubah nomor dana lu
global.qris = "https://files.catbox.moe/9252cc.jpg" // ubah link qris lu


// GLOBAL SETTING
global.owner = "6285814677025" // ubah nomor owner
global.namabot = "*ɛɮք ƈʀ͢ǟֆɦ*" // ubah nama bot
global.nomorbot = "6283142515287" // ubah nomor bot
global.namacreator = "*ɛӄʊʐɨӄǟ*" // ubah nama owner 
global.linkyt = false // gausa diganti
global.autoJoin = false // gausa diganti
global.antilink = false // true Or false
global.versisc = '1.3' // gausa diganti
global.pinggir = '•🜲• ' // gausa diganti


// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'plta_JGstZXVOB9lnibEyep1BwC9MSxPvAT5mFcbiEHLSHUv'
global.capikey = 'pltc_NLgcXEXYq3clwqgaetEPk97l26afklOhjh67sJQvQsF'
global.domain = 'https://'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB
global.codeInvite = ""
global.thumbnail = 'https://pomf2.lain.la/f/a0t4joe8.mp4'
global.isLink = 'https://whatsapp.com/channel/0029VaeJZhz1noz4usKyJL1s'
global.packname = "ebpcrash By "
global.author = "𝐄𝐤𝐮𝐳𝐢𝐤𝐚"
global.jumlah = "5"

// MESS
global.mess = {
    success: '✔ Done Kak! 😎 ',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    OnlyOwner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    OnlyGrup: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*Please Wait, Your Request Is Being Proceed*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu !*_',
    premium: '_*khusus Premium! Buy Prem Chat Owner di https://t.me/Arraffixd atau ketik .owner*_',
    endLimit: '_*Limit Harian Anda Telah Habis!\nLimit Akan Direset Setiap Pukul 00:00 WIB atau Dengan Membeli Premium dan Dapatkan Limit Unlimited\nBuy Prem? Chat https://t.me/Arraffixd*_',
    maintenance: '_*Maaf Kak,Fitur ini sedang dalam perbaikan*_',
    wait: 'Bentar ya kak....',
    error: 'Waduh error nih'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})