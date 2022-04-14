const fs = require('fs')
const chalk = require('chalk')

//===> FREE API
global.APIs = {
	ryuu: 'https://api-ryubotz.herokuapp.com',
}

global.APIKeys = {
	'https://api-ryubotz.herokuapp.com': 'RyuBotz',
}

//===> UBAH DISINI
global.namaowner = 'Bobo -X- Ahs' //Ganti Jadi Namamu
global.owner = ['6283805243054','6282239202895','6282184730062','6288219358088','6285349385702'] //Kalo Mau Lebih Tambahin Aja
global.nomerowner = '6283805243054' //Owner Utama Istilahnya
global.namabot = 'Bobo -X Ahs MD' //Ganti Jadi Nama Botmu
global.packname = '© Bobo -X Ahs MD' //Sticker Weem
global.author = 'Bobo -X Ahs By Alwi Official' //Sticker Weem
global.webme = 'https://api-ryubotz.herokuapp.com'
global.sessionName = 'session'
global.bg_welcome = 'https://telegra.ph/file/528b594d5d91c08482515.jpg' //Max 30kb Agar Tidak Delay
global.youtube = 'https://youtube.com/c/RyuukaBotz'
global.github = 'https://github.com/R-TEAM94'
global.instagram = 'https://instagram.com/fandyyy._'

//===> BACKGROUND SETIAP MENU
global.bg1 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg2 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=monarch-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg3 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=yolo-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg4 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fun-run-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','/','#','.']
global.sp = '⭔'

//===> EDIT SESUAI KEMAUANMU
global.mess = {
admin: '*LU BUKAN ADMIN KONTOL ? 🤨*',
botAdmin: '*JADIIN DULU BOTNYA ADMIN BUNDA 😔*',
owner: '*LU BUKAN OWNER GW AJG 😠*',
group: '*KHUSUS GROUP AJG 😏*',
private: '*KHUSUS PRIVATE CHAT*',
bot: '*KHUSUS PENGGUNA NOMER BOT*',
wait: '*SABAR SEDANG DI PROSES ...*',
done: '*DONE AYANG LOPYOU MUACH 🤗*',
}
global.thumb = fs.readFileSync('./media/ryuu.jpg')
    
//===> INI GAUSAH DIUBAH
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
