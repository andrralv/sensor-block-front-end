pragma solidity ^0.4.18;

import "./VehiculeDatabase.sol";
import "./ActorRegistry.sol";

contract Actor {

    enum ActorType { Manufacturer, Dealer, ServiceShop, Owner }

    address REGISTRY;
    string public name;
    address public owner;
    address public database;
    ActorType public actorType;

    function () public {
        revert();
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    modifier notServiceShop {
        require(actorType != ActorType.ServiceShop);
        _;
    }

    function Actor(address _registry, address _ref, string _name, ActorType _type) public {
        REGISTRY = _registry;
        name = _name;
        actorType = _type;
        owner = _ref;
        database = new VehiculeDatabase(owner);
    }

    function getState() public view returns (string, address, address, uint) {
        return (name, owner, database, uint(actorType));
    }

    function transferVehicule(address _ref, bytes32 _vin) onlyOwner notServiceShop public {
        ActorRegistry registry = ActorRegistry(REGISTRY);
        address actorAddress = registry.getActorAddress(_ref);
        require(actorAddress != address(0));
        Actor actor = Actor(actorAddress);
        VehiculeDatabase fromDatabase = VehiculeDatabase(database);
        fromDatabase.transferTo(address(actor.database), _vin);
    }
}