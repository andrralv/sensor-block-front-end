var ActorRegistry = artifacts.require("./ActorRegistry.sol");
var VehiculeFactory = artifacts.require("./VehiculeFactory.sol");
var ServiceShop = artifacts.require("./ServiceShop.sol");

module.exports = function(deployer){
    deployer.deploy(ActorRegistry).then(function() {
        return deployer.deploy([
            [ServiceShop, ActorRegistry.address],
            [VehiculeFactory, ActorRegistry.address]]);
      });
}