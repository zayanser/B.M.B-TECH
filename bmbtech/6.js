nst util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format, styletext } = require(__dirname + "/../framework/mesfonctions");
//const {police}=require(__dirname+"/../framework/mesfonctions")
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
zokou({ nomCom: "menu6", categorie: "Menu" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre } = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    if (s.MODE_PUBLIC != "oui") {
        mode = "private";
    }
    
    moment.tz.setDefault("Africa/Nairobi");
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    let infoMsg = `┏━━━⚡ *B.M.B-TECH-V1* ⚡━━━┓
┃ 🔥  ʜᴇʟʟᴏ, *${nomAuteurMessage}*! 🔥
┣━━━━━━━━━━━━━━━━━━━━━
┃ 📌 *sʏsᴛᴇᴍ ɪɴғᴏ:*
┃ 💻 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
┣━━━━━━━━━━━━━━━━━━━━━
┃ ⚙️ *ʙᴏᴛ sᴛᴀᴛᴜs:*
┃ 🔘 ᴍᴏᴅᴇ: *${mode}*
┃ 🚀 ᴘʀᴇғɪx: *[ ${prefixe} ]*
┃ ⏳ ᴛɪᴍᴇ: *${temps}*
┃ 📆 ᴅᴀᴛᴇ: *${date}*
┣━━━━━━━━━━━━━━━━━━━━━
┃ ${readMore}
┃ 🎩 *ᴄᴏᴍᴍᴀɴᴅ ᴍᴇɴᴜ* 🎩
┣━━━━━━━━━━━━━━━━━━━━━\n`;

    let menuMsg = ``;

    for (const cat in coms) {
        menuMsg += `┣ › *${cat.toUpperCase()}* °\n`;
        for (const cmd of coms[cat]) {
            menuMsg += `┃   + ${cmd}\n`;
        }
        menuMsg += `┣━━━━━━━━━━━━━━━━━━━━━\n`;
    }

    menuMsg += `┗🌟 *𝙱.𝙼.𝙱-𝚇𝙼𝙳 - ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ ᴛʜᴇ ʙᴇsᴛ!* 🌟`;

    let imageUrl = "https://files.catbox.moe/7wbud7.jpg";

    try {
        zk.sendMessage(dest, { 
            image: { url: imageUrl }, 
            caption: infoMsg + menuMsg, 
            footer: "© TOXIC-LOVER-MD" 
        }, { quoted: ms });
    } catch (e) {
        console.log("🥵 Menu error: " + e);
        repondre("🥵 Menu error: " + e);
    }
});

  
