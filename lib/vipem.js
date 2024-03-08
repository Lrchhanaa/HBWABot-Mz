
const checkPremiumUser = (userId, vipmem) => {
	let status = false;
	Object.keys(vipmem).forEach((i) => {
		if (vipmem[i].id === userId) {
			status = true;
		}
	});
	return status;
};

const expiredPremiumCheck = (HBWABotMz, msg, vipmem) => {
    setInterval(() => {
        const currentTime = Date.now();
        Object.keys(vipmem).forEach((i) => {
            if (currentTime >= Date.parse(vipmem[i].expired)) {
                const expiredId = vipmem[i].id;
                vipmem.splice(i, 1);
                if (expiredId) {
                    HBWABotMz.sendMessage(expiredId, { text: "I vip hun chhung a tawp tawh, renew i duh chuan a hnuaia number ka dahah hian va dil leh rawh!..\nhttps://wa.me/918416093656" },msg);
                }
            }
        });
    }, 1000);
};


const getAllPremiumUser = (vipmem) => {
	const array = [];
	Object.keys(vipmem).forEach((i) => {
		array.push(vipmem[i].id);
	});
	return array;
};

module.exports = {
	expiredPremiumCheck,
	checkPremiumUser,
	getAllPremiumUser,
};
