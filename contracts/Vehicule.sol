pragma solidity ^0.4.18;

import "./Ownable.sol";
import "./ActorRegistry.sol";

contract Vehicule is Ownable {

    string brand;
    string model;
    string vType;
    string engine;
    string extras;
    bytes32 vin;
    uint16 year;
    uint lastUpdate;

    enum EventType {
        Creation, Transfer,
        ReceivedAtDealer, ReceivedAtServiceShop,
        Maintenance, AutoSensor, ManualSensor,
        ReleaseFromDealer, ReleaseFromServiceShop,
        Sell, Buy
    }

    event OnActionEvent (
        EventType indexed _event,
        address _ref,
        string _description,
        string _data,
        uint _timestamp,
        uint indexed _blockNumber
    );

    function Vehicule(address _ref, string _brand, string _model, string _type, string _engine, string _extras, bytes32 _vin, uint16 _year) public {
        lastUpdate = block.number;
        brand = _brand;
        model = _model;
        vType = _type;
        engine = _engine;
        extras = _extras;
        vin = _vin;
        year = _year;
        owner = _ref;
        OnActionEvent(EventType.Creation, _ref, "Vehicule Creation","", now, block.number);
    }

    function addAction(EventType _event, address _ref, string _description, string _data) public {
        require(msg.sender != _ref);
        lastUpdate = block.number;
        OnActionEvent(_event, _ref, _description, _data, now, block.number);
    }

    function getState() public view returns (string, string, string, string, string, bytes32, uint16, uint) {
        return (brand, model, vType, engine, extras, vin, year, lastUpdate);
    }

    function transfer(address _ref) onlyOwner public {
        transferOwnership(_ref);
        OnActionEvent(EventType.Transfer, _ref, "Vehicule Transfer", "", now, block.number);
    }

}