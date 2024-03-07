const toMs = require("ms");

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
		let position = null;
		Object.keys(vipmem).forEach((i) => {
			if (Date.now() >= vipmem[i].expired) {
				position = i;
			}
		});
		if (position !== null) {
			idny = vipmem[position].id;
			vipmem.splice(position, 1);
			idny ? HBWABotMz.sendMessage(idny, { text: "I vip hun chhung a tawp tawh, renew i duh chuan a hnuaia number ka dahah hian va dil leh rawh!..\nhttps://wa.me/918416093656" }) : "";
			idny = false;
		}
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



