const fetch = require('node-fetch');
const fs = require('fs');

const checkVipUser = (userId, vipmem) => {
    let status = false;
    Object.keys(vipmem).forEach((i) => {
        if (vipmem[i].id === userId) {
            status = true;
        }
    });
    return status;
};

const expiredVipCheck = (HBWABotMz, msg, vipmem) => {
    setInterval(() => {
        let position = null;
        Object.keys(vipmem).forEach((i) => {
            if (vipmem[i].expired !== "lifetime" && Date.now() >= new Date(vipmem[i].expired)) {
                position = i;
            }
        });
        if (position !== null) {
            let vipid = vipmem[position].id;
            console.log(`VIP expired: ${vipmem[position].id}`);
            if (vipmem[position].expired !== "lifetime") {
                vipmem.splice(position, 1);
                fs.writeFileSync("./asset/database/trash.json", JSON.stringify(vipmem));
            }
            vipid ? HBWABotMz.sendMessage(vipid, { text: "*Message From Vip Subscribtion* \nI vip hun chhung a tawp tawh a, He message hi dawn nawn thawh loh emaw VIP hi renew i duh a nih chuan a hnuaia number ka dahah hian va hrilh hriat tur a ni!!!..\nhttps://wa.me/918416093656" }) : "";
            vipid = false;
        }
    }, 1000);
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

