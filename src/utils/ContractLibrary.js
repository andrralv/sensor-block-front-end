module.exports = (state) => {
    return {
        getVehiculeHistory: (address) => {
            return state.web3.eth.blockNumber;
        }
    };
};