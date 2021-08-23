const uuidMock = (uniqueId) => {
    return () => {
        return {
            v4: () => uniqueId,
        };
    };
};

module.exports = uuidMock;
