pragma solidity ^0.4.18;

import "./Actor.sol";

contract ActorRegistry {

    event OnRegisterActorEvent(
        address _address,
        Actor.ActorType _type,
        string _name
    );

    mapping (address => Actor) actors;
    mapping (address => address) actorsRefs;
    mapping (address => bytes32) usernames;
    mapping (address => bool) registered;

    modifier newCommer() {
        require(!registered[msg.sender]);
        _;
    }

    modifier onlyRegistered() {
        require(registered[msg.sender]);
        _;
    }

    function registerActor(Actor.ActorType _type, string _name, bytes32 _username) public newCommer {
        actors[msg.sender] = new Actor(this, msg.sender, _name, _type);
        actorsRefs[msg.sender] = actors[msg.sender];
        usernames[msg.sender] = _username;
        registered[msg.sender] = true;
        OnRegisterActorEvent(msg.sender, _type, _name);
    }

    function getActorType(address _actor) public view returns (uint) {
        return uint(Actor(actors[_actor]).actorType());
    }

    function getActorAddress(address _actor) public view returns (address) {
        return actorsRefs[_actor];
    }

    function validateUsername(bytes32 _username) public view onlyRegistered returns (bool) {
        return usernames[msg.sender] == _username;
    }
    
}