pragma solidity ^0.4.18;

import "./Vehicule.sol";
import "./VehiculeDatabase.sol";
import "./ActorRegistry.sol";

contract VehiculeFactory {

    address REGISTRY;

    function VehiculeFactory(address _registry) public {
        REGISTRY = _registry;
    }

    function () public {
        revert();
    }

    modifier onlyManufacturer {
        ActorRegistry registry = ActorRegistry(REGISTRY);
        require(registry.getActorType(msg.sender) == uint(Actor.ActorType.Manufacturer));
        _;
    }

    function createVehicule(string _brand, string _model, string _type, string _engine, string _extras, bytes32 _vin, uint16 _year) onlyManufacturer public returns (address) {
        ActorRegistry registry = ActorRegistry(REGISTRY);
        Actor actor = Actor(registry.getActorAddress(msg.sender));
        Vehicule vehicule = new Vehicule(actor, _brand, _model, _type, _engine, _extras, _vin, _year);
        VehiculeDatabase db = VehiculeDatabase(actor.database());
        db.addVehicule(vehicule, _vin);
        return vehicule;
    }
}