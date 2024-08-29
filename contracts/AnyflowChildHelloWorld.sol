// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract AnyflowChildHelloWorld {
    uint public helloCount;
    string public helloMessage;
    address public parentAddress;

    event Hello(address _address, string _message, uint _count);

    constructor(string memory _helloMessage) {
        helloMessage = _helloMessage;
    }

    function hello() public {
        helloCount++;
        emit Hello(msg.sender, helloMessage, helloCount);
    }

    function setParentAddress(address _parentAddress) public {
        parentAddress = _parentAddress;
    }
}
