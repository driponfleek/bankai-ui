const generateArrUtil = (numOfEntries = 0) => {
    return [...Array.from(Array(numOfEntries).keys())];
};

export default generateArrUtil;
