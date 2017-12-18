pragma solidity ^0.4.18;

import "./Vehicule.sol";
import "./Actor.sol";
import "./VehiculeDatabase.sol";
import "./ActorRegistry.sol";

contract ServiceShop {

    address REGISTRY;

    function ServiceShop(address _registry) public {
        REGISTRY = _registry;
    }

    function () public {
        revert();
    }

    modifier onlyServiceShop {
        ActorRegistry registry = ActorRegistry(REGISTRY);
        require(registry.getActorType(msg.sender) == uint(Actor.ActorType.ServiceShop));
        _;
    }

    function doService(address _vehicule, string _details, string _data) onlyServiceShop public {
        Vehicule v = Vehicule(_vehicule);
        v.addAction(Vehicule.EventType.Maintenance, msg.sender, _details, _data);
    }

    function receiveForService(address _vehicule, bytes32 _vin, string _comments, string _data) onlyServiceShop public {
        ActorRegistry registry = ActorRegistry(REGISTRY);
        address actorAddress = registry.getActorAddress(msg.sender);
        require(actorAddress != address(0));
        Actor actor = Actor(actorAddress);
        VehiculeDatabase toDatabase = VehiculeDatabase(address(actor.database));
        toDatabase.addVehicule(_vehicule, _vin);
        Vehicule v = Vehicule(_vehicule);
        v.addAction(Vehicule.EventType.ReceivedAtServiceShop, msg.sender, _comments, _data);
    }

    function releaseFromService(address _vehicule, bytes32 _vin, string _comments, string _data) onlyServiceShop public {
        ActorRegistry registry = ActorRegistry(REGISTRY);
        address actorAddress = registry.getActorAddress(msg.sender);
        require(actorAddress != address(0));
        Actor actor = Actor(actorAddress);
        VehiculeDatabase toDatabase = VehiculeDatabase(address(actor.database));
        toDatabase.deleteVehicule(_vin);
        Vehicule v = Vehicule(_vehicule);
        v.addAction(Vehicule.EventType.ReleaseFromServiceShop, msg.sender, _comments, _data);
    }
}