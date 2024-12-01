require("./global")

const axios = require("axios")
const FormData = require("form-data")
const { fileTypeFromBuffer, fromBuffer } = require("file-type")

async function uploadPomf2(media) {
  return new Promise(async (resolve, reject) => {
    const { ext } = await fromBuffer(media)
    const formData = new FormData();
    formData.append('files[]', media, { 
      filename: new Date() * 1 + '.'+ext 
    });
    await axios.post('https://pomf2.lain.la/upload.php', formData, {
      headers: {
        ...formData.getHeaders(),
      },
    })
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      resolve(error?.response)
    });
  })
}

global.uploadPomf2 = uploadPomf2

async function uptotelegra (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new FormData();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}

global.uptotelegra = uptotelegra


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})