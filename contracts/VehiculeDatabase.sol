pragma solidity ^0.4.18;

import "./Ownable.sol";

contract VehiculeDatabase is Ownable {

    uint public count;
    mapping(bytes32=>bool) stored;
    mapping(bytes32=>address) public vins;

    function VehiculeDatabase(address _ref) public {
        owner = _ref;
    }

    event OnAddVehiculeEvent(
        address _vehiculeRef,
        bytes32 indexed _vin
    );

    function () public {
        revert();
    }

    function addVehicule(address _vehiculeRef, bytes32 _vin) public {
        if (!stored[_vin]) {
            stored[_vin] = true;
            vins[_vin] = _vehiculeRef;
            count = count + 1;
            OnAddVehiculeEvent(_vehiculeRef, _vin);
        }
    }

    function deleteVehicule(bytes32 _vin) public {
        require(stored[_vin]);
        delete stored[_vin];
        delete vins[_vin];
        count = count - 1; 
    }

    function transferTo(address _toDatabase, bytes32 _vin) onlyOwner public {
        VehiculeDatabase toDatabase = VehiculeDatabase(_toDatabase);
        toDatabase.addVehicule(vins[_vin], _vin);
        deleteVehicule(_vin);
    }

}