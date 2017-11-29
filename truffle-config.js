module.exports = {
  networks: {
    development: {
      network_id: "*",
      host: "127.0.0.1",
      port: 8545,
      gas: 500000,
      gasPrice: 1000 // Specified in Wei
    }
  }
};
