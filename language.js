const chalk = require("chalk")
const fs = require("fs")

/* Guide
Bot Language hman hi thlak i duh chuan default_language hi false ah i dah anga chuan your_language hi true ah i dah ang,

Entirnan :         
global.default_language = false
global.your_language = true 
global.bot_language = [`en`]  // en = English 

Language a support te chu he tah hian i en thei ang: https://cloud.google.com/translate/docs/languages
*/

global.default_language = true
global.your_language = false 
global.bot_language = [`ja`] // lus = Mizo


/* Guide 
If you want to change the bot using language go to change default_language is false then your_language is true

Example:
global.default_language = false
global.your_language = true 
global.bot_language = [`ja`]  // ja = japanies     

You can see support language in this : https://cloud.google.com/translate/docs/languages
*/


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
