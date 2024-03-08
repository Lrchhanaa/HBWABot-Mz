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
    const currentTime = Date.now();
    let isVip = false;
    let isExpired = false;
    
    for (let i = 0; i < vipmem.length; i++) {
        if (vipmem[i].id === userId) {
            isVip = true;
            if (vipmem[i].expired !== "lifetime" && Date.parse(vipmem[i].expired) < currentTime) {
                isExpired = true;
                vipmem.splice(i, 1);
                i--;
            }
            break;
        }
    }
    
    return { isVip, isExpired, updatedVipmem: vipmem };
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

