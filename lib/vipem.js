const checkVipUser = (userId, vipmem) => {
    let status = false;
    Object.keys(vipmem).forEach((i) => {
        if (vipmem[i].id === userId) {
            status = true;
        }
    });
    return status;
};

const expiredVipCheck = (vipmem) => {
    const currentTime = Date.now();
    vipmem = vipmem.filter((membership) => {
        if (membership.expired === "lifetime") {
            return true; 
        } else {
            return currentTime < Date.parse(membership.expired);
        }
    });
    return vipmem;
};

const getallVipUser = (vipmem) => {
    const array = [];
    Object.keys(vipmem).forEach((i) => {
        array.push(vipmem[i].id);
    });
    return array;
};

module.exports = {
    expiredVipCheck,
    checkVipUser,
    getallVipUser,
};

//other js

const { expiredVipCheck, checkVipUser,getallVipUser } = require('./lib/vipem')

const ftcvip = await fetch("https://raw.githubusercontent.com/HBMods-OFC/Director1/master/VIP/vip-pro.json");

const isExp = expiredVipCheck(m.sender, vipmem)
const replyvipexp = () => {
 dodoi(`⌛I vip hun chhung a tawp tawh!! renew i duh chuan a hnuaia number ka dahah hian va dil leh rawh!..\nhttps://wa.me/918416093656`)
 }
 
 case 'tobebot': {
    if (!isVip) return await replyvip();
    if (!isExp) return await replyvipexp();
    if (m.isGroup) return dodoi(mess.private);
    if (!args[0]) return dodoi(`_🤖 Kha tiang ringawt loh khan tiang hian hman tur a ni_\n*Entirnan:* ${prefix + command} 918416093656`)
    let wanb = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
    let wanbck = await HBWABotMz.onWhatsApp(wanb)
    if (wanbck.length == 0) return dodoi(`WhatsApp number dik chauh rawn dah rawh!!`)
    HBWABotMz.sendMessage(from, { react: { text: "♻️", key: m.key }})
    await tobebot(HBWABotMz, m, from, wanb)
    HBWABotMz.sendMessage(from, { react: { text: "🤖", key: m.key }})
    HBWABotMz.sendMessage(from, { react: { text: "✅", key: m.key }})
}
break
