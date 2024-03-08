
const checkVipUser = (userId, vipmem) => {
	let status = false;
	Object.keys(vipmem).forEach((i) => {
		if (vipmem[i].id === userId) {
			status = true;
		}
	});
	return status;
};

const expiredVipCheck = (userId, vipmem) => {
    const intervalId = setInterval(() => {
        const currentTime = Date.now();
        vipmem = vipmem.filter((membership) => {
            if (membership.expired === "lifetime") {
                return true; 
            } else {
                return currentTime < Date.parse(membership.expired);
            }
        });
        
        if (vipmem.length === 0) {
            clearInterval(intervalId);
        } else if (vipmem.some((membership) => membership.id === userId))
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